import React from "react";

const LibrarySong = ({song, setCurrentSong, id, audioRef, isPlaying}) => {
    
    const songSelectHandler = () =>{
        setCurrentSong(song);
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            playPromise.then(() => {
                audioRef.current.play();
            })
        }
    }

    return (
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong