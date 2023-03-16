import React from "react";
import { assignAudioTrackDT } from "../../../types/assignTypes";

type Props = {
  tracks: assignAudioTrackDT[];
  selectedTrack: assignAudioTrackDT;
  setSelectedTrack: React.Dispatch<React.SetStateAction<assignAudioTrackDT>>
}

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }: Props) => {
  return (
    <div className="playlist">
      {tracks.map((track: assignAudioTrackDT) => (
        <div
          key={track.id}
          className={
            track.id === selectedTrack.id
              ? "playlist-item selected"
              : "playlist-item"
          }
          onClick={() => setSelectedTrack(track)}
        >
          {track.title}
        </div>
      ))}
    </div>
  );
};

export default PlayList;