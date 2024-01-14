"use client";
import AudioPlayer from "../../../components/AudioPlayer";
import SongList from "../../../components/SongList";
import PlaylistList from "../../../components/PlaylistList";
import Skeleton from "../../../components/Skeleton";

import { redirect, useRouter } from 'next/navigation';

import { UserAuth } from "../../../context/AuthContext";
import { useSongContext } from '../../../context/SongContext';

import React, { useState, useEffect, use, Suspense } from "react";

const page = () => {
    const { user } = UserAuth();
    const { song, setSong } = useSongContext();
    const { setPlaylist } = useSongContext();
    const router = useRouter()


   // if (!user) {
    //  redirect('/login');
   // }

    const handlePlaylistClick = (playlist) => {
      // console.log('playlist click')
      setPlaylist(playlist);
      // console.log(playlist)
      router.push(`/playlist`);
    };
  return (
    <main className="flex gap-8 flex-col">
      <div className="flex flex-col gap-8 h-[calc(100vh-54px)] justify-between">
          <div className="p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-3xl py-2 font-black text-slate-900">
                Popular songs
              </p>
              <Suspense fallback={<Skeleton />}>
                <SongList songHandler={(value) => setSong(value)} />
              </Suspense>
            </div>
            <div className="flex-col flex gap-4">
              <p className="text-3xl py-2 font-black text-slate-900">
                Popular playlists
              </p>
              <PlaylistList playlistHandler={(value) => handlePlaylistClick(value)} />
            </div>
          </div>
          {/* <AudioPlayer url={song && song.mp3Url} /> */}
      </div>
    </main>
  );
};

export default page;


