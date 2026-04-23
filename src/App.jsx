import React, { useState } from 'react';
import styles from './App.module.css';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';
import Player from './components/Player';

const App = () => {
  const [currentSong, setCurrentSong] = useState({
    title: "I Want You (Forever) - Josh Butler Remix - Radio Edit",
    artist: "Carl Cox, Josh Butler",
    img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800",
    playlistName: "Techno"
  });
  return (
   <div className={styles.wrapper}>
      <TopNav />
      <div className={styles.mainLayout}>
        <Sidebar />
        <MainContent onSelect={setCurrentSong} />
        <NowPlaying song={currentSong} />
      </div>
      <Player song={currentSong} />
    </div>
  )
}

export default App