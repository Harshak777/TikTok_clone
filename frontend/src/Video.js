import React, { useRef, useState } from 'react';
import './video.css';
import './VideoFooter';
import './VideoSidebar';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        onClick={handleVideoPress}
        className='video_player'
        loop
        ref={videoRef}
        src={url}
      ></video>

      {/* Video footer */}
      <VideoFooter
        channel={'unknown'}
        description={'This is a description'}
        song={'Bohemian Raphsody'}
      />

      {/* Video Sidebar */}
      <VideoSidebar likes={100} shares={200} messages={300} />
    </div>
  );
}

export default Video;
