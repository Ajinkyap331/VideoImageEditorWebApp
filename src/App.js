import './App.css';
import { useState } from 'react';
import { Container1, Container2 } from './Components/Container';
import axios from 'axios';
import { Download } from './Components/Download';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress] = useState(0)
  const [videoarray, setvideo] = useState([])
  const [NOImages, setNOI] = useState(1)
  const [NOVideos, setNOV] = useState(1)
  const [MergedVideoURL, setMergeVideo] = useState("")


  const HandleMergeAll = () => {
    setProgress(50)
    axios({
      url: "https://video-editor-api.herokuapp.com/merge_all_video",
      method: "post",
      data: { 'video_file_path_list': videoarray }
    }).then(e => { setProgress(100); console.log(e); setMergeVideo(e.data.video_file_path) }).catch(() => {
      setProgress(100)
    })
  }


  return (
    <div className="App">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {
        [...Array(NOImages)].map((e, i) =>
          <Container1 setvideo={setvideo} videoarray={videoarray} setProgress={setProgress} />
        )
      }
      {
        [...Array(NOVideos)].map((e, i) =>
          <Container2 setvideo={setvideo} videoarray={videoarray} setProgress={setProgress} />
        )
      }
      <div className='buttons'>
        <button onClick={() => setNOI(NOImages + 1)}> ADD MORE IMAGES </button>
        <button onClick={() => setNOV(NOVideos + 1)}> ADD MORE VIDEOS </button>
        <button onClick={HandleMergeAll}> MERGE ALL VIDEOS </button>
        {
          MergedVideoURL === "" ? <></> : <Download src={MergedVideoURL} />
        }
      </div>

    </div>
  );
}

export default App;
