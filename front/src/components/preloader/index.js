import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export function Preloader() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} className={'fw'}>
            <CircularProgress />
        </Box>
    );
}