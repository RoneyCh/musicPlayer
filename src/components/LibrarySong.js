import React from "react";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying, setSongs, songs}) => {
    
    const songSelectHandler = async () =>{
        await setCurrentSong(song);
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
        if(isPlaying) audioRef.current.play();
    }
    

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.alt} src={song.cover}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong