import React from "react";

const LibrarySong = ({song, setCurrentSong, id, audioRef, isPlaying, setSongs, songs}) => {
    
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
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            playPromise.then(() => {
                audioRef.current.play();
            })
        }
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