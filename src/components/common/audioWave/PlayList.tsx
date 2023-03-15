import React from "react";

type Props = {
  tracks: any;
  selectedTrack: any;
  setSelectedTrack: any
}

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }: Props) => {
  return (
    <div className="playlist">
      {tracks.map((track: any) => (
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