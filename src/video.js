import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './videos/v16-webapp.tiktok.com.mp4'


function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, ()=>({
          play(){
            videoRef.current.play()
          },
          pause(){
            videoRef.current.pause()
          }
    }))

    return (

            <video src={video1} height={300} ref={videoRef}/>

    );
}
export default forwardRef(Video)