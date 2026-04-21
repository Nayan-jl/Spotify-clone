import React from 'react'
import styles from './App.module.css';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainLayout}>
        <MainContent  />
        <NowPlaying />
      </div>
    </div>
  )
}

export default App