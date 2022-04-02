import axios from 'axios'
import React from 'react'
import { Download } from './Download'

export const CreateAudio = ({ data, setdata, setProgress }) => {

    const HandleAudio = () => {
        setProgress(30)
        const formdata = new FormData()
        formdata.append("file_path", data.text)
        setProgress(50)
        axios({
            url: "https://video-editor-api.herokuapp.com/text_file_to_audio",
            method: "post",
            data: formdata
        }).then(e => {setProgress(100); console.log(e); setdata({ ...data, audio: e.data.audio_file_path }) }).catch(
            setProgress(100)
        )
        
    }

    return (
        <div>
            <button onClick={HandleAudio}>CREATE AUDIO</button>
            {
                data.audio === "" ?
                    <></>
                    :
                    <Download src = {data.audio}/>
            }
        </div>
    )
}
