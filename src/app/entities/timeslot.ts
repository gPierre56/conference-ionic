import {SessionService} from '../services/session.service';

export class Timeslot {
    public startTime: Date;
    public endTime: Date;
    public session: Array<SessionService>;
}
