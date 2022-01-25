import {Editor} from "@tinymce/tinymce-react";
import React from "react";

export function TinyMCE({editorRef}) {
    return (<Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        init={{
            height: 360,
            menubar: false,
            plugins: [
                'advlist autolink lists link charmap print preview anchor paste',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount emoticons image imagetools'
            ],
            toolbar: 'undo redo | paste | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | image | emoticons | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            skin: (window.matchMedia("(prefers-color-scheme: dark)").matches ? "oxide-dark" : ""),
            content_css: (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : ""),
            paste_data_images: true
        }} />);
}