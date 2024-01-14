"use client";
import { createContext, useContext, useState } from 'react';

const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
    const [song, setNewSong] = useState(null);
    const [playlist, setNewPlaylist] = useState(null);

    const setSong = (newSong) => {
        setNewSong(newSong);
    };
    const setPlaylist = (newPlaylist) => {
        setNewPlaylist(newPlaylist);
    };
    return (
        <SongContext.Provider value={{ song, setSong, playlist, setPlaylist }}>
            {children}
        </SongContext.Provider>
    );
};

export const useSongContext = () => {
    return useContext(SongContext);
};