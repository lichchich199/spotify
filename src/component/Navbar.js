import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

function Navbar() {

    return (
        <div className='h-24 bg-slate-900 text-white text-center leading--[6rem] text-3xl'> 
            <FontAwesomeIcon icon={faSpotify} className={'mr-5'}/>
            <span>Spotify</span>
        </div>
    );
}

export default Navbar;