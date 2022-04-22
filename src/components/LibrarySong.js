import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying, setSongs, songs}) => {
    
    const songSelectHandler = () =>{
        setCurrentSong(song);
        const selectedSong = songs.map((s) => {
            if(s.id === song.id){
                return {
                    ...s,
                    active: true,
                };
            } else {
                return {
                    ...s,
                    active: false,
                }
            }
        });
        setSongs(selectedSong);
        playAudio(isPlaying, audioRef);
    }
    

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong