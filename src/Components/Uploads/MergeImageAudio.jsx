import React from 'react'
import axios from 'axios'
import { Download } from '../Download'

export const MergeImageAudio = ({ data, setdata, setProgress, setvideo, videoarray }) => {

    const HandleImageAudio = () => {
        setProgress(30)
        const formdata = new FormData()
        formdata.append('image_file_path', data.image)
        formdata.append('audio_file_path', data.audio)
        setProgress(50)
        axios({
            url: "https://video-editor-api.herokuapp.com/merge_image_and_audio",
            method: "post",
            data: formdata
        }).then(e => { setProgress(100); 
            setvideo([...videoarray, e.data.video_file_path]); 
            setdata({ ...data, imageaudio: e.data.video_file_path }) })

    }

    return (
        <div>
            <button onClick={HandleImageAudio}> MERGE IMAGE + AUDIO </button>
            {
                data.imageaudio === "" ?
                    <></>
                    :
                    <Download src={data.imageaudio} />
            }

        </div>
    )
}
