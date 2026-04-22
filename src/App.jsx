import React, { useState } from 'react';
import styles from './App.module.css';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';
import Player from './components/Player';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <TopNav />
      <div className={styles.mainLayout}>
        <MainContent  />
        <NowPlaying />
      </div>
      <Player />
    </div>
  )
}

export default App