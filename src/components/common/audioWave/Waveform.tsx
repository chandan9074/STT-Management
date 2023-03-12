import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from 'wavesurfer.js';

type Props = {
  url: string
}

const Waveform = ({ url }: Props) => {

  console.log('wave---------');
  

  const waveformRef = useRef(null);
  // const wavesurfer= useRef(null);
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


    return {
      container: ref,
      waveColor: "#B8BFCC",
      progressColor: gradientObj,
      cursorColor: "#B8BFCC",
      barWidth: 2,
      barRadius: 0,
      barGap: 4,
      responsive: true,
      height: 150,
      normalize: true,
      partialRender: true,

    };
  };


  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options: any = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    // return () => wavesurfer.current.destroy();
    return () => wavesurfer.current?.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer?.current?.playPause();
  };

  const onVolumeChange = (e: any) => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer?.current?.setVolume(newVolume || 1);
    }
  };



  return (
    <div style={{
      position: "relative",
      width: "100%",
    }}>
      <div id="waveform" className="drop-shadow" ref={waveformRef} />


      <hr style={{
        position: "absolute",
        top: "74px",
        // borderTop:"1px",
        border: "none",
        width: "100%",
        height: ".5px",
        zIndex: "9",
        backgroundColor: "white"
      }} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
        <input
          type="range"
          id="volume"
          name="volume"
          // waveSurfer recognize value of `0` same as `1`
          //  so we need to set some zero-ish value for silence
          min="0.01"
          max="1"
          step=".025"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
        <label htmlFor="volume">Volume</label>
      </div>
    </div>
  );
}

export default Waveform;
