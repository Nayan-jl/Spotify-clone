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
      <img src={song.img} className={styles.mainCover} alt="Current Album Art" />
      <div className={styles.songMetaContainer}>
        <div className={styles.songMeta}>
          <h2 className={styles.songTitle}>{song.title}</h2>
          <p className={styles.artistName}>{song.artist}</p>
        </div>
        <div className={styles.songActions}>
          <Share size={20} className={styles.iconHover} />
          <PlusCircle size={20} className={styles.iconHover} />
        </div>
        <div className={styles.aboutArtist}>
        <div className={styles.artistCard}>
          <div className={styles.banner} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=800')`}}>
            <h3 className={styles.bannerTitle}>About the artist</h3>
          </div>
          <div className={styles.artistDetails}>
            <p className={styles.artistNameSmall}>{song.artist}</p>
            <div className={styles.statsRow}>
              <span>12,458,930 monthly listeners</span>
              <button className={styles.followBtn}>Follow</button>
            </div>
            <p className={styles.bio}>
              Known for high-energy sets and melodic rhythms, {song.artist} continues to 
              define the genre with every new release.
            </p>
          </div>
        </div>
        </div>
      </div>
    </aside>
  )
}

export default NowPlaying;