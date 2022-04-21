import {Cropper} from "react-cropper";
import * as React from "react";
import Button from "@mui/material/Button";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "cropperjs/dist/cropper.css";
import Container from "@mui/material/Container";
import AxiosService from "../../services/AxiosService";
import {getUserFromStorage} from "../../utils";

export default function CropperWrapper() {
    const user = getUserFromStorage();
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState(false);
    const [pseudoUrl, setPseudoUrl] = React.useState(false);
    const handleCroppieModal = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
    const cropperRef = React.createRef();

    const save = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        const result = cropper.getCroppedCanvas().toDataURL();

        let formData = new FormData();
        formData.append('avatar', result);

        AxiosService.post(`/user/${user.data.id}/avatar`, formData).then((response) => {
            handleModalClose();
        });

        handleModalClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        backgroundColor: 'rgba(0,0,0,0.8)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function handleFileUpload(e) {
        setFile(e.target.files[0]);
        const reader = new FileReader();

        reader.onload = function (e) {
            setPseudoUrl(e.target.result);
            handleCroppieModal();
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <>
            <input
                accept="image/*"
                style={{display: 'none'}}
                onChange={handleFileUpload}
                id="button-file"
                type="file"
            />
            <label htmlFor="button-file">
                <Button variant="raised" component="span">
                    Upload Avatar
                </Button>
            </label>
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container component={'main'}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Avatar Upload
                        </Typography>
                        <div>
                            <Cropper
                                src={pseudoUrl}
                                style={{height: 'auto', width: "100%"}}
                                // Cropper.js options
                                initialAspectRatio={16 / 9}
                                minCropBoxHeight={180}
                                minCropBoxWidth={180}
                                guides={true}
                                ref={cropperRef}
                                showZoomer={true}
                            />
                        </div>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <Button onClick={save}>Save</Button>
                        </Box>
                    </Box>
                </Container>
            </Modal>
        </>
    );
}