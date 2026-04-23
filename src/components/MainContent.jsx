import React from 'react'
import styles from './MainContent.module.css';

const MainContent = ({ onSelect }) => {
  const topItems = [
    { name: "Liked Songs", img: "https://misc.scdn.co/liked-songs/liked-songs-64.png", isBlue: true },
    { name: "Techno", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=100" },
    { name: "Arz Kiya Hai | Coke Studio...", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100" },
    { name: "GYM", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100" },
    { name: "After Hours", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=100" },
    { name: ".", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100" },
    { name: "Intentions", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100" },
    { name: "Justin Bieber", img: "https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=100" }
  ];
    const jumpBackIn = [
    { title: "Khat", desc: "Navjot Ahuja", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200" },
    { title: "New World", desc: "Argy", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200" },
    { title: "Atomic Habits Audiobook", desc: "By JAGODA GASZYNSKA⭐", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200" },
    { title: "Badlapur (Original Motion Picture...", desc: "Sachin-Jigar", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=200" },
    { title: "Nav", desc: "Nav", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200" }  
  ];
  const albums = [
    { title: "Kismat Konnection", desc: "Pritam, Atif Aslam", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=200" },
    { title: "Calvin Harris", desc: "Various Artists", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200" }
  ];
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.filterHeader}>
        <button className={styles.activePill}>All</button>
        <button className={styles.pill}>Music</button>
        <button className={styles.pill}>Podcasts</button>
      </div>
      </main>
    </div>
  )
}

export default MainContent