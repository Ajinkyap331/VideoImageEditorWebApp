import React, { useState } from 'react'
import axios from 'axios'
import { Download } from './Download'
export const TextFile = ({ data, setdata, setProgress }) => {


    const HandleTextUpload = (file) => {
        setProgress(30)
        const formdata = new FormData()
        formdata.append('my_file', file)
        setProgress(50)
        axios({
            url: "https://video-editor-api.herokuapp.com/upload_file",
            method: "post",
            data: formdata
        }).then(e => {setdata({ ...data, text: e.data.file_path }); setProgress(100)}).catch(
            setProgress(100)
        )
        
    }

    return (
        < div className='text-handler'>
            <input type="file" onChange={e => HandleTextUpload(e.target.files[0])} />
            {
                data.text === '' ?
                    <>UPLOAD TRANSCRIPT</> :
                    <>
                        <iframe style={{background: "#FFFFFF"}} src={"https://video-editor-api.herokuapp.com/" + data.text} />
                        <Download src={data.text} />
                    </>
            }
        </ div>
    )
}
