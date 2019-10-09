import {Presentateur} from '../presentateurs/presentateur';

export class Session {
    public id: number;
    public title: string;
    public description: string;
    public type: string;
    public speakers: Array<Presentateur>;
}
