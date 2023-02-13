import { audioStatusDT, overTheTimeDataDT } from './userManagementTypes';
export type assignStatisticsDT = {
    target: number;
    received : number;
    audios: number;
    audioStatus: audioStatusDT[]
    overTheTimeData: overTheTimeDataDT;
}
