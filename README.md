# 🎵 Spotify Clone

A pixel-perfect **Spotify Web Player UI clone** built with React and Vite. This project replicates the core layout and visual design of Spotify's desktop web player — including the sidebar library, main content area, now-playing panel, and the bottom playback bar — using only static data, vanilla CSS Modules, and Lucide icons.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | Component-based UI |
| [Vite 8](https://vite.dev/) | Development server & bundler |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped, component-level styling |
| [Lucide React](https://lucide.dev/) | Icon library |
| Vanilla CSS | Global resets & base styles |

---

## 📁 Project Structure

```
Spotify-Clone/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json
└── src/
    ├── main.jsx                # React root — mounts <App />
    ├── App.jsx                 # Root component — manages state & layout
    ├── App.module.css          # Root layout styles (CSS Grid wrapper)
    ├── index.css               # Global resets & base styles
    └── components/
        ├── TopNav.jsx              # Top navigation bar
        ├── TopNav.module.css
        ├── Sidebar.jsx             # Left library panel
        ├── Sidebar.module.css
        ├── MainContent.jsx         # Centre scrollable content area
        ├── MainContent.module.css
        ├── NowPlaying.jsx          # Right panel — current song & artist info
        ├── NowPlaying.module.css
        ├── Player.jsx              # Bottom playback bar
        └── Player.module.css
```

---

## 🧩 Components

### `App.jsx`
The root component. Holds the `currentSong` state and passes it down to `NowPlaying` and `Player`. Renders the full 3-column + header + footer layout using CSS Grid.

### `TopNav.jsx`
The sticky top navigation bar containing:
- Spotify logo (SVG)
- Home button
- Search bar with browse icon
- Install App button, notifications, friends, and profile avatar

### `Sidebar.jsx`
The left-side **Your Library** panel containing:
- Library header with add (`+`) and expand (`→`) controls
- Filter pills: Playlists, Albums
- Recents sort row
- Scrollable playlist list with cover art, playlist name, and description

### `MainContent.jsx`
The main scrollable content area containing:
- Filter tabs: All · Music · Podcasts
- Quick-access grid (recently played items)
- **Jump back in** horizontal card row
- **Albums featuring songs you like** horizontal card row

### `NowPlaying.jsx`
The right-side panel displaying the currently selected song:
- Playlist name & action icons
- Large album art
- Song title & artist name with share/add actions
- **About the artist** card with a background banner image, follower stats, and bio

### `Player.jsx`
The sticky bottom playback bar containing:
- Song thumbnail, title, and artist
- Playback controls: Shuffle, Previous, Play/Pause, Next, Repeat
- Progress bar with timestamps
- Extra controls: Now Playing View, Lyrics, Queue, Volume slider, Fullscreen

---

## ⚙️ Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash

git clone https://github.com/your-username/Spotify-Clone.git
cd Spotify-Clone


npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🎨 Design Notes

- **Dark theme** using Spotify's exact color palette (`#121212`, `#1a1a1a`, `#242424`, `#1ed760`)
- **3-column CSS Grid** layout: Sidebar | Main Content | Now Playing
- **CSS Modules** used throughout for zero style leakage between components
- All images sourced from [Unsplash](https://unsplash.com/) — no local assets required
- Lucide React icons used in place of Spotify's proprietary icon set

---

## 📌 Known Limitations

- No audio playback — the player bar is purely UI
- All data is static (hardcoded arrays); no Spotify API integration
- No routing — single-page view only

---


