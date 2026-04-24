import React from 'react'
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, PlusCircle, MonitorPlay, Mic2, ListMusic, Maximize2 } from 'lucide-react';
import styles from './Player.module.css';

const Player = ({ song, isPlaying, onTogglePlay }) => {
  return (
     <footer className={styles.player}>
         <div className={styles.songInfo}>
        <img src={song.img} className={styles.thumb} alt="" style={song.isBlue ? { background: 'linear-gradient(135deg, #450af5, #c4efd9)' } : {}} />
        <div className={styles.songTextInfo}>
          <p className={styles.songName}>{song.title}</p>
          <p className={styles.artist}>{song.artist}</p>
        </div>
        <PlusCircle size={16} className={styles.songActionBtn} />
      </div>
      
     </footer>
  )
}

export default Player