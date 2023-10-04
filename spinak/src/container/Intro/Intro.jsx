import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () =>{
  const [playVideo,setPlayVideo]=React.useState(false)
  const VidRef=React.useRef();
  const handleVideo=()=>{
    setPlayVideo(prev=>!prev)
    playVideo?VidRef.current.pause():VidRef.current.play();

  }
  return (
    <div className='app__video'>
      <video src={meal} type='video/mp4'
      ref={VidRef}
      Loop
      controls={false}
      muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle' onClick={handleVideo}>
          {playVideo ? 
          <BsPauseFill color='#fff' fontSize={30}/>:<BsFillPlayFill color='#fff' fontSize={30}/>
          }
        </div>
      </div>
        
    </div>
  )
}



export default Intro;
