import React, { useState } from 'react'
import { ImageHandler } from './Uploads/ImageUpload'
import { TextFile } from './Uploads/TextUpload'
import './Container.css'
import { CreateAudio } from './Uploads/CreateAudio'
import { MergeImageAudio } from './Uploads/MergeImageAudio'
import { MergeVideoAudio } from './Uploads/MergeVideoAudio'

export const Container1 = ({ setvideo, videoarray, setProgress }) => {

    const [data, setdata] = useState({ image: "", text: "", audio: "", imageaudio: "", videoaudio: "" })
    return (

        <section className='container'>
            <ImageHandler data={data} setdata={setdata} setProgress={setProgress} text="UPLOAD A IMAGE" />
            <TextFile data={data} setdata={setdata} setProgress={setProgress} />
            <CreateAudio data={data} setdata={setdata} setProgress={setProgress} />
            <MergeImageAudio data={data} setdata={setdata} setProgress={setProgress} setvideo={setvideo} videoarray={videoarray} />
        </section>
    )
}

export const Container2 = ({ setvideo, videoarray, setProgress }) => {

    const [data, setdata] = useState({ image: "", text: "", audio: "", imageaudio: "", videoaudio: "" })
    return (

        <section className='container'>
            <ImageHandler data={data} setdata={setdata} setProgress={setProgress} text="UPLOAD A VIDEO" />
            <TextFile data={data} setdata={setdata} setProgress={setProgress} />
            <CreateAudio data={data} setdata={setdata} setProgress={setProgress} />
            <MergeVideoAudio data={data} setdata={setdata} setvideo={setvideo} videoarray={videoarray} setProgress={setProgress} />
        </section>
    )
}
