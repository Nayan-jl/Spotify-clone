import React from 'react';
import { Library, Plus, ArrowRight, Search, List } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const playlists = [
    { name: "Liked Songs", desc: "Playlist • 507 songs", img: "https://misc.scdn.co/liked-songs/liked-songs-64.png", isBlue: true },
    { name: "Techno", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=50" },
    { name: "GYM", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=50" },
    { name: ".", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=50" },
    { name: "CALMING", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50" },
    { name: "Dale", desc: "Single • Like Mike", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=50" },
    { name: "Kpop", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=50" },
    { name: "Feel good !!", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=50" },
    { name: "Her <3", desc: "Playlist • Nayan Jyoti Lekharu", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=50" },
  ];
   return (
    <aside className={styles.sidebar}>
        <div className={styles.libraryBox}>
        <div className={styles.libraryHeader}>
          <div className={styles.navItem}>
            <Library size={24} /> 
            <span>Your Library</span>
          </div>
          <div className={styles.headerActions}>
            <Plus size={20} className={styles.iconHover} />
            <ArrowRight size={20} className={styles.iconHover} />
          </div>
        </div>
        </div>
    </aside>
  );
};

export default Sidebar;
