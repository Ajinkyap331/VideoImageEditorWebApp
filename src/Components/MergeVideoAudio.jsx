import React from 'react'
import axios from 'axios'
import { Download } from './Download'

export const MergeVideoAudio = ({ data, setdata, setvideo, videoarray, setProgress }) => {

    const HandleVideoAudio = () => {
        setProgress(30)
        const formdata = new FormData()
        formdata.append('video_file_path', data.image)
        formdata.append('audio_file_path', data.audio)
        setProgress(50)
        axios({
            url: "https://video-editor-api.herokuapp.com/merge_video_and_audio",
            method: "post",
            data: formdata
        }).then(e => { setProgress(100); setvideo([...videoarray, e.data.video_file_path]); setdata({ ...data, videoaudio: e.data.video_file_path }) }).catch(
            setProgress(100)
        )
        
    }

    return (
        <div>
            <button onClick={HandleVideoAudio}> MERGE VIDEO + AUDIO </button>
            {
                data.videoaudio === "" ?
                    <></>
                    :
                    <Download src={data.videoaudio} />
            }

        </div>
    )
}
