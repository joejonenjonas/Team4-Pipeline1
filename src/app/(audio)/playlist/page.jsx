"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import { useSongContext } from '../../context/SongContext';

const page = () => {
  const { playlist, setSong } = useSongContext();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "songs"));

        const songsData = [];
        querySnapshot.forEach((doc) => {
          songsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        // Filter songs based on allowed UIDs
        const filteredSongs = songsData.filter((song) =>
          playlist.songUid.includes(song.id)
        );
        setSongs(filteredSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);
  const listItems = songs.map((song, i) => (
    <tr
      className="bg-white border-b hover:bg-gray-100 "
      onClick={() => setSong(song)}
    >
      <td>{i}</td>
      <td>{song.title}</td>
    </tr>
  ));

  return ( 
    <div className="m-2.5">
      <div className="flex ">
      {playlist ? (
        <div>
          <div
            className="bg-cover bg-center aspect-square h-48"
            style={{ backgroundImage: `url(${playlist.imgUrl})` }}
          />
          <h1>{playlist.title}</h1> 
        </div>
      ) : (
        <div/>
      )}
      </div>
      <table className="w-full text-base text-left rtl:text-right text-gray-500">{listItems}</table>
    </div>
  );
};

export default page;
