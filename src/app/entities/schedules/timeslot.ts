import {ScheduleService} from '../../services/schedule.service';

export class Timeslot {
    public startTime: Date;
    public endTime: Date;
    public session: Array<ScheduleService>;
}
