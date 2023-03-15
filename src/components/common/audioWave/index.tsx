import { assignAudioTrackDT } from '../../../types/assignTypes';
import Waveform from './Waveform';

type Props = {
  selectedTrack: assignAudioTrackDT,
  data: assignAudioTrackDT,
  audioMin: string
}


const AudioWave = ({ selectedTrack, data, audioMin }: Props) => {

  return (
    <>
      <Waveform data={data} audioMin={audioMin} />
    </>
  );
}

export default AudioWave;