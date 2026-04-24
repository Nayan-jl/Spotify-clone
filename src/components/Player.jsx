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

      <div className={styles.controls}>
        <div className={styles.buttons}>
          <Shuffle size={18} className={styles.subIcon} />
          <SkipBack size={24} fill="currentColor" />
          <div className={styles.playBtn} onClick={onTogglePlay}>
            {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
          </div>
          <SkipForward size={24} fill="currentColor" />
          <Repeat size={18} className={styles.subIcon} />
        </div>
        <div className={styles.progressRow}>
          <span className={styles.time}>0:00</span>
          <div className={styles.bar}><div className={styles.fill}></div></div>
          <span className={styles.time}>4:05</span>
        </div>
      </div>
      <div className={styles.extraControls}>
        <MonitorPlay size={16} className={styles.subIconExtra} />
        <Mic2 size={16} className={styles.subIconExtra} />
        <ListMusic size={16} className={styles.subIconExtra} />
        <div className={styles.volumeGroup}>
          <Volume2 size={16} className={styles.subIconExtra} />
          <div className={styles.volBar}>
             <div className={styles.volFill}></div>
          </div>
        </div>
        <Maximize2 size={16} className={styles.subIconExtra} />
      </div>

     </footer>
  )
}

export default Player