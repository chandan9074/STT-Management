import Waveform from './Waveform';

type Props = {
  selectedTrack: any,
  data:any,
  audioMin: string
}


const AudioWave = ({ selectedTrack,data,audioMin }: Props) => {
  // const [selectedTrack, setSelectedTrack] = useState(tracks[1]);

  return (

    <Waveform data={data} selectedTrack={selectedTrack} url={selectedTrack.url} audioMin={audioMin} />

  );
}

export default AudioWave;