"use client"
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const PlaylistList = ({ playlistHandler }) => {
  const [playlists, setPlaylists] = useState([]);


  useEffect(() => {
    const fetchPlaylists = async () => {
      const querySnapshot = await getDocs(collection(db, "playlists"));

      const playlistsData = [];
      querySnapshot.forEach((doc) => {
        playlistsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPlaylists(playlistsData);
    };

    fetchPlaylists();
  }, []); // De lege afhankelijkheidsarray zorgt ervoor dat deze hook alleen bij het mounten van de component wordt uitgevoerd.

  const listItems = playlists.map((playlist, i) => (
    <li
      alt={`${playlist.title}`}
      name={`${playlist.title}`}
      aria-label={`${playlist.title}`}
      className="flex flex-col bg-slate-100 rounded-lg overflow-hidden"
      key={i}
      onClick={() => playlistHandler(playlist)}
    >
      <div
        className="bg-cover bg-center aspect-square h-48"
        style={{ backgroundImage: `url(${playlist.imgUrl})` }}
      >
      </div>
      <div className="text-lg px-2 py-2 flex flex-col justify-center">
        <p className="text-slate-900 font-bold capitalize truncate">
          {playlist.title}
        </p>
      </div>
    </li>
  ));
    console.log(playlists)
  return <ul className="flex gap-8">{listItems}</ul>;
};

export default PlaylistList;
