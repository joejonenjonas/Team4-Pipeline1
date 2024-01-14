"use client";
import SongList from "./components/SongList";
import PlaylistList from "./components/PlaylistList";
import { redirect, useRouter } from "next/navigation";
import { UserAuth } from "./context/AuthContext";
import Head from "next/head";

import React, { useState, useEffect, use } from "react";

const AudioPlayer = ({ url }) => {
  return (
    <div className="w-full">
      {url ? (
        <audio className="w-full" id="audioTrack" controls preload="none">
          <source src={url} type="audio/mpeg" />
        </audio>
      ) : (
        <audio className="w-full" id="audioTrack" controls preload="none">
          <source src="" type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default function Home() {
  const [song, setSong] = useState(null);
  const [currentTrackTime, setCurrentTrackTime] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const router = useRouter();
  const { user } = UserAuth();

  if (!user) {
    redirect("/login");
  } else {
    useEffect(() => {
      const fetchLrcFile = async () => {
        try {
          const response = await fetch(song.lrcUrl);
          const lrcData = await response.text();
          const parsedLyrics = parseLyric(lrcData);
          setLyrics(parsedLyrics);
        } catch (error) {
          //console.error("Error loading LRC file:", error);
        }
      };
      fetchLrcFile();

      const audioPlayer = document.querySelector("audio");
      if (audioPlayer) {
        audioPlayer.pause();
      }

      if (song && song.mp3Url) {
        audioPlayer.load();
        audioPlayer.play();
      }
    }, [song]);

    useEffect(() => {
      try {
        document
          .getElementById("audioTrack")
          .addEventListener("timeupdate", () => {
            let curr = document
              .getElementById("audioTrack")
              .currentTime.toFixed(0)
              .toString();
            curr === currentTrackTime ? null : setCurrentTrackTime(curr);
          });
      } catch {}
    });
  }

  const KaraokePlayer = () => {
    useEffect(() => {
      if (currentTrackTime === 0 || currentTrackTime === null) return;
      try {
        setCurrentLineIndex(getCurrentLineIndex(lyrics, currentTrackTime));
        // scroll to current line
        const currentLine = document.querySelector(".scale-150");
        currentLine.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } catch {}
    }, [currentTrackTime]);

    return (
      <div className="text-slate-600 flex flex-col h-full text-center text-4xl gap-4">
        {lyrics.map((line, index) => {
          return (
            <p
              key={index}
              className={`${
                index === currentLineIndex
                  ? "text-slate-900 font-bold scale-150 my-2"
                  : "text-slate-400 blur-[1px]"
              }`}
            >
              {line.filteredText}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <main className="flex gap-8 flex-col">
        <div className="flex flex-col gap-8 h-screen justify-between">
          {showLyrics ? null : (
            <div className="p-8 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-3xl py-2 font-black text-slate-900">
                  Popular songs
                </p>
                <SongList songHandler={(value) => setSong(value)} />
              </div>
              <div className="flex-col flex gap-4">
                <p className="text-3xl py-2 font-black text-slate-900">
                  Popular playlists
                </p>
                <PlaylistList playlistHandler={(value) => setSong(value)} />
              </div>
            </div>
          )}
          {showLyrics ? (
            <div className="flex flex-col p-8 h-screen -mb-24">
              <div className="shrink-0">
                <button
                  alt="Show lyrics"
                  aria-label="Show lyrics"
                  name="Show lyrics"
                  onClick={() => setShowLyrics(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="grow overflow-scroll">
                <KaraokePlayer />
              </div>
            </div>
          ) : null}
          <div className="flex gap-4 bg-[#F1F3F4] px-8 shrink-0">
            <AudioPlayer url={song && song.mp3Url} />
            <button
              alt="Hide lyrics"
              aria-label="Hide lyrics"
              name="Hide lyrics"
              onClick={() => {
                setShowLyrics(true);
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
        </div>
      </main>
    </>
  );
}

function parseLyric(lrc) {
  const regexForLine = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;
  const lines = lrc.split("\n");

  const output = [];

  lines.forEach((line) => {
    const match = line.match(regexForLine);

    if (match) {
      const time = parseTime(match.groups.time);
      const text = match.groups.text;

      const lineContents = text.split(" ");
      let filteredText = "";
      lineContents.forEach((word) => {
        !word.includes("<") && !word.includes("[")
          ? (filteredText += word + " ")
          : null;
      });

      output.push({ time, filteredText });
    }
  });

  function parseTime(time) {
    time = time.replace(/^[^0-9]+|[^0-9]+$/g, "");
    const [minutes, seconds] = time.split(":");
    const [secondsInt, milliseconds] = seconds.split(".");
    const timeInSeconds = Math.floor(
      parseInt(minutes) * 60 +
        parseInt(secondsInt) +
        parseInt(milliseconds) / 1000
    );
    return timeInSeconds;
  }

  return output;
}

function getCurrentLineIndex(lyrics, time) {
  let closestTime = 0;
  let closestTimeIndex = 0;

  // find the entry in the lyrics array whose time is closest but smaller than the current time
  for (let i = 0; i < lyrics.length; i++) {
    if (lyrics[i].time > closestTime && lyrics[i].time < time) {
      closestTime = lyrics[i].time;
      closestTimeIndex = i;
    }
  }

  return closestTimeIndex;
}
