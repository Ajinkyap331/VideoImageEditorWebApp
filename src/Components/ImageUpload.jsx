import React, { useState } from 'react'
import axios from 'axios'
import './Components.css'
import { Download } from './Download'

export const ImageHandler = ({ data, setdata, setProgress, text }) => {


    const HandleImageUpload = (file) => {
        setProgress(30)
        const formdata = new FormData()
        formdata.append('my_file', file)
        setProgress(50)
        axios({
            url: "https://video-editor-api.herokuapp.com/upload_file",
            method: "post",
            data: formdata
        }).then(e => { setProgress(100); setdata({ ...data, "image": e.data.file_path }) }).catch(
            setProgress(100)
        )

    }

    return (
        < div className='image-handler'>
            <input type="file" onChange={e => HandleImageUpload(e.target.files[0])} />
            {
                data.image === '' ?
                    <>{text}</> :
                    <>
                        {
                            data.image.includes("mp4") ? <>  <video width="320" height="240" controls>
                                <source src={"https://video-editor-api.herokuapp.com/" + data.image} type="video/mp4" />
                            </video> </> : <img src={"https://video-editor-api.herokuapp.com/" + data.image} />
                        }
                        <Download src={data.image} />
                    </>
            }


        </ div>
    )
}
