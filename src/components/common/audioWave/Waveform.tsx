import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from 'wavesurfer.js';
import Icons from "../../../assets/Icons";
import Buttons from "../../Buttons";

type Props = {
  url: string,
  selectedTrack: any,
  data: any,
  audioMin: string
}

const Waveform = ({ url, selectedTrack, data, audioMin }: Props) => {

  const waveformRef = useRef(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const formWaveSurferOptions = (ref: any) => {
    const gradient = [
      { stop: 0, color: "#FF00FF" },
      { stop: 0.06, color: "#F405FE" },
      { stop: 0.16, color: "#D713FB" },
      { stop: 0.30, color: "#A729F5" },
      { stop: 0.47, color: "#6548EE" },
      { stop: 0.65, color: "#136EE5" },
      { stop: 0.76, color: "#5B7CC0" },
      { stop: 1, color: "#FC9D6B" },
    ];

    const canvas = document.createElement("canvas");
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    const containerWidth = ref.clientWidth;
    console.log(containerWidth, "width");
    const gradientObj: CanvasGradient | null = ctx && ctx.createLinearGradient(0, 0, containerWidth, 0);

    gradient.forEach((stop) => gradientObj && gradientObj.addColorStop(stop.stop, stop.color));

    canvas.classList.add("waveform-canvas");

    return {
      container: ref,
      waveColor: "#B8BFCC",
      progressColor: gradientObj,
      cursorColor: "#B8BFCC",
      barWidth: 2,
      barRadius: 0,
      barGap: 4,
      responsive: true,
      height: 80,
      normalize: true,
      partialRender: true,
      cursor: {
        showTime: true,
        opacity: 1,
        color: "#000000",
      },

      className: "waveform-canvas"
    };
  };


  useEffect(() => {
    setPlay(false);

    const options: any = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);


    if (data) {
      // convert data to blob
      const blob = new Blob([data], { type: 'audio/mpeg' });

      wavesurfer.current.loadBlob(blob);
    } else {
      wavesurfer.current.load(url);

    }

    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    return () => wavesurfer.current?.destroy();
  }, [data, url, volume]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer?.current?.playPause();
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="controls ">
        <Buttons.IconButton.Circle
          size='medium'
          variant="CT-Blue"
          icon={<img src={!playing ? Icons.Play : Icons.Pause} alt="" />}
          border='border'
          background="white"
          onClick={() => handlePlayPause()}
        />

      </div>
      <div style={{
        position: "relative",
        width: "836px",
      }}>

        <div id="waveform" ref={waveformRef} />

        <hr style={{
          position: "absolute",
          top: "40px",
          border: "none",
          width: "100%",
          height: ".5px",
          zIndex: "9",
          backgroundColor: "white"
        }} />

      </div>
      <div>{data ? audioMin : selectedTrack?.duration}</div>
    </div>
  );
}

export default Waveform;
