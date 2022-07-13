import { useState } from 'react';
import './App.css';
import DetailSong from './component/DetailSong';
import ListSongs from './component/ListSongs';
import Navbar from './component/Navbar';
import Playing from './component/Playing';
import { Songs } from './Context';
import DataSongs from './data/song.json'

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) {
      setSong(DataSongs[0]) 
    }
    else  {
      setSong(song);
    }
  }
  return (
    <div className="">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          <DetailSong/>
          <ListSongs/>
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
