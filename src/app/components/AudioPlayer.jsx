import React, { useEffect } from "react";
import { useSongContext } from '../context/SongContext';

const AudioPlayer = () => {
  const { song } = useSongContext();

    useEffect(() => {
      const audioElement = document.getElementById('audioTrack');
      if (audioElement) {
        audioElement.load(); // Load the new source
      }
    }, [song]);
  
    return (
        <div className="flex gap-4 bg-[#F1F3F4] pl-60 px-8 shrink-0">
          <div className="w-full">
            {song && song.mp3Url ? (
              <audio className="w-full" id="audioTrack" controls preload="none" autoPlay>
                <source src={song.mp3Url} type="audio/mpeg" />
              </audio>
            ) : (
              <audio className="w-full" id="audioTrack" controls preload="none" autoPlay>
                <source src="" type="audio/mpeg" />
              </audio>
            )}
          </div>
            <button
              onClick={() => {

              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </button>
        </div>
    );
  };
  export default AudioPlayer;
