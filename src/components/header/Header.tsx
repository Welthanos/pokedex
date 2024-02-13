import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

import pokedex from '../../assets/pokedex.svg';
import pokeball from '../../assets/pokeball.svg';
import music from '../../assets/music.mp3';

import './Header.css';

export default function Header() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audioPlaying, setAudioPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            if (audioPlaying) audioRef.current.play();
            else audioRef.current.pause();

            audioRef.current.volume = 0.4;
        }
    }, [audioPlaying]);

    const handleToggleAudio = () => setAudioPlaying(!audioPlaying);

    return (
        <header>
            <Link className='logo' to='/'><img src={pokedex} alt='Logo da PokéDex' /></Link>
            <div className='actions'>
                <Link className='favorites' to='/favorites'> <img src={pokeball} alt='Figura de uma Pokébola' />Favorites</Link>
                <button onClick={handleToggleAudio}>{audioPlaying ? 'Pause Audio' : 'Play Audio'}</button>
            </div>
            <audio ref={audioRef} loop autoPlay><source src={music} type='audio/mpeg' /></audio>
        </header>
    );
}
