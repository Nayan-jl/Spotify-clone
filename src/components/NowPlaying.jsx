import React from 'react';
import { PanelRightClose, MoreHorizontal, Share, PlusCircle, MonitorPlay } from 'lucide-react';
import styles from './NowPlaying.module.css';

const NowPlaying = ({ song }) => {
  return (
    <aside className={styles.container}>
      <div className={styles.topRow}>
        <h3 className={styles.playlistTitle}>{song.playlistName || "Queue"}</h3>
        <div className={styles.actions}>
          <MoreHorizontal size={20} className={styles.icon} />
          <PanelRightClose size={20} className={styles.icon} />
        </div>
      </div>
    </aside>
  )
}

export default NowPlaying;