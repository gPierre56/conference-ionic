import {InfosSession} from './infosSession';

export class Session {
    public id: number;
    public title: string;
    public description: string;
    public type: string;
    public speakers: Array<number>;
    public infosSession: InfosSession;

}
