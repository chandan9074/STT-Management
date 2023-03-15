import { assignAudioTrackDT } from '../../../types/assignTypes';
import Waveform from './Waveform';

type Props = {
  selectedTrack: assignAudioTrackDT,
  data: assignAudioTrackDT,
  audioMin: string
}


const AudioWave = ({ selectedTrack, data, audioMin }: Props) => {
  // const [selectedTrack, setSelectedTrack] = useState(tracks[1]);

  console.log('selected track-------------', selectedTrack);


  return (

    <>
      {/* {
        selectedTrack.url &&
        <Waveform data={data} selectedTrack={selectedTrack} url={selectedTrack.url} audioMin={audioMin} />
      } */}

      <Waveform data={data} audioMin={audioMin} />

    </>
  );
}

export default AudioWave;