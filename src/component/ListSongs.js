import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Songs } from '../Context';

function ListSongs() {
    const {DataSongs, handleSetSong, song} = useContext(Songs);
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    },[song])

    return ( <div className="col-span-2 overflow-y-scroll">
        <table className="table-auto w-full">
            <thead className='text-white h-12'>
                <tr>
                    <th className='w-[10%]'>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><FontAwesomeIcon icon={faDownload} className={'mr-5'}/></th>
                </tr>
            </thead>
            <tbody>
                {
                    DataSongs.map((song, index) => (
                        <tr 
                            key={index} 
                            className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 hover:text-teal-300 ${idSong===song.id && 'text-teal-300 bg-slate-600' }`} 
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className='text-center'>{index + 1}</td>
                            <td>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <td className='text-center'>
                                <a href={song.url}>
                                    <FontAwesomeIcon icon={faDownload} className={'mr-5'}/>
                                </a>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div> );
}

export default ListSongs;