import axios from 'axios'
import React from 'react'

export const Download = ({ src }) => {

    const HandleDownload = () => {
        window.open('https://video-editor-api.herokuapp.com/download_file?file_path=' + src, "_blank")
    }

    return (
        <div>
            <button onClick={HandleDownload}>Download</button>
        </div>
    )
}
