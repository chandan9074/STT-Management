import React, { useState } from 'react'
import PlayList from './PlayList';
import Waveform from './Waveform';

const tracks = [
  {
    id: 0,
    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
    url:
      "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url:
      "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
  },
  {
    id: 2,
    title: "test",
    url:
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
];

const AudioWave = () => {
  const [selectedTrack, setSelectedTrack] = useState(tracks[1]);

  return (
    <div className="App">
      this is audio
      <Waveform url={selectedTrack.url} />
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <br />
      <p>Wavesurfer.js with React.JS</p>
    </div>
  );
}

export default AudioWave;