"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getDoc, updateDoc, arrayUnion, addDoc, doc } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { db } from "../firebase";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { UserAuth } from "../context/AuthContext";
import { useSongContext } from '../context/SongContext';

const SongList = ({ songHandler }) => {
  const [songs, setSongs] = useState([]);
  const { setPlaylist } = useSongContext();
  const { user } = UserAuth();
  const router = useRouter()

  useEffect(() => {
    const fetchSongs = async () => {
      const querySnapshot = await getDocs(collection(db, "songs"));

      const songsData = [];
      querySnapshot.forEach((doc) => {
        songsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setSongs(songsData);
    };
    // const fetchUserPlaylists = async () => {

    // }

    fetchSongs();
  }, []); // De lege afhankelijkheidsarray zorgt ervoor dat deze hook alleen bij het mounten van de component wordt uitgevoerd.

  async function newPlaylist(song) {
    console.log(song)
    try {
      // Create a new playlist
      const playlist = await addDoc(collection(db, "playlists"), {
        imgUrl: "https://sajarutyoga.com/wp-content/uploads/2020/06/Playlist-icon-768x432.png",
        songUid: [song.id], // Add the selected song to the new playlist
        title: "New Playlist",
      });

      const playlistDoc = await getDoc(doc(db, "playlists", playlist.id));
      if (playlistDoc.exists()) {
        setPlaylist(playlistDoc.data());
        router.push(`/playlist`);
      }
      else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    } catch (error) {
      console.error("Error creating playlist:", error);
    }
  }
  async function likeSong(songUid) {
    console.log(user)  
    try {
        const documentRef = doc(db, "songs", songUid);
      
        // Update the document with the new UID added to the 'likes' array
        await updateDoc(documentRef, {
          likes: arrayUnion(user.uid),
        });
    
        console.log(`like successfully added.`);
      } catch (error) {
        console.error("Error adding UID to document:", error);
      }
  }
  const listItems = songs.map((song, i) => (
    <li
      alt={`${song.title} by ${song.artist}`}
      name={`${song.title} by ${song.artist}`}
      aria-label={`${song.title} by ${song.artist}`}
      className="flex flex-col bg-slate-100 rounded-lg overflow-hidden"
      key={i}
      onClick={() => songHandler(song)}
    >
      <div
        className="bg-cover bg-center aspect-square h-48 relative"
        style={{ backgroundImage: `url(${song.imgUrl})` }}
      >
        <Dropdown >
          <DropdownTrigger>
            <Button
              // variant="transparent"
              isIconOnly
              variant="solid"
              radius="full"
              alt="Dropdown menu"
              name="Dropdown menu"
              aria-label="Dropdown menu"
              className="absolute right-1 bottom-1"
            >
              <MoreHorizIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="Like" color="warning" onClick={() => likeSong(song.id)}>
              Like
            </DropdownItem>
            <DropdownItem key="newPlaylist" color="warning" onClick={() => newPlaylist(song)}>
              Nieuwe afspeellijst
            </DropdownItem>
            <DropdownItem
              isReadOnly
              key="oldPlaylist"
              color="warning"
              endContent={
                <select
                  className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                  id="theme"
                  name="theme"
                >
                  <option>System</option>
                </select>
              }
            >
              bestaande afspeellijst
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="text-lg px-2 py-2 flex flex-col justify-center">
        <p className="text-slate-900 font-bold capitalize truncate">
          {song.title}
        </p>
        <p className="text-slate-700 text-base capitalize">{song.artist}</p>
      </div>
    </li>
  ));
  console.log(songs)

  return <ul className="flex gap-8">{listItems}</ul>;
};

export default SongList;
