const page = () => {
  
};

export default page;
// <div className="flex flex-col p-8 h-screen -mb-24">
// <div className="shrink-0">
//   <button onClick={(back())}>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="w-10 h-10"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M15.75 19.5L8.25 12l7.5-7.5"
//       />
//     </svg>
//   </button>
// </div>
// <div className="grow overflow-scroll">
//   <KaraokePlayer />
// </div>
// </div>

// function back() {
    
// }

// function parseLyric(lrc) {
//     const regexForLine = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;
//     const lines = lrc.split("\n");
  
//     const output = [];
  
//     lines.forEach((line) => {
//       const match = line.match(regexForLine);
  
//       if (match) {
//         const time = parseTime(match.groups.time);
//         const text = match.groups.text;
  
//         const lineContents = text.split(" ");
//         let filteredText = "";
//         lineContents.forEach((word) => {
//           !word.includes("<") && !word.includes("[")
//             ? (filteredText += word + " ")
//             : null;
//         });
  
//         output.push({ time, filteredText });
//       }
//     });
  
//     function parseTime(time) {
//       time = time.replace(/^[^0-9]+|[^0-9]+$/g, "");
//       const [minutes, seconds] = time.split(":");
//       const [secondsInt, milliseconds] = seconds.split(".");
//       const timeInSeconds = Math.floor(
//         parseInt(minutes) * 60 +
//           parseInt(secondsInt) +
//           parseInt(milliseconds) / 1000
//       );
//       return timeInSeconds;
//     }
  
//     return output;
//   }
  
//   function getCurrentLineIndex(lyrics, time) {
//     let closestTime = 0;
//     let closestTimeIndex = 0;
  
//     // find the entry in the lyrics array whose time is closest but smaller than the current time
//     for (let i = 0; i < lyrics.length; i++) {
//       if (lyrics[i].time > closestTime && lyrics[i].time < time) {
//         closestTime = lyrics[i].time;
//         closestTimeIndex = i;
//       }
//     }
  
//     return closestTimeIndex;
// }

// const KaraokePlayer = () => {
//     useEffect(() => {
//       if (currentTrackTime === 0 || currentTrackTime === null) return;
//       try {
//         setCurrentLineIndex(getCurrentLineIndex(lyrics, currentTrackTime));
//         // scroll to current line
//         const currentLine = document.querySelector(".scale-150");
//         currentLine.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//           inline: "center",
//         });
//       } catch {}
//     }, [currentTrackTime]);

//     return (
//       <div className="text-slate-600 flex flex-col h-full text-center text-4xl gap-4">
//         {lyrics.map((line, index) => {
//           return (
//             <p
//               key={index}
//               className={`${
//                 index === currentLineIndex
//                   ? "text-slate-900 font-bold scale-150 my-2"
//                   : "text-slate-400 blur-[1px]"
//               }`}
//             >
//               {line.filteredText}
//             </p>
//           );
//         })}
//       </div>
//     );
//   };