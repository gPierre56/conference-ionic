import {Track} from './track';
import {Timeslot} from './timeslot';

export class Schedule {
    public date: Date;
    public dateReadable: string;
    public tracks: Array<Track>;
    public timeslots: Array<Timeslot>;
}
