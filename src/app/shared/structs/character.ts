import { Race } from './race';
import { Discipline } from './discipline';
import { Talent } from './talent';
import { Stat } from './stat';

export class Character {
    public name: string;
    public player: string;
    public age: number;
    public height: string;
    public weight: number;
    public gender: string;
    public stats: Stat[];
    public race: Race;
    public disciplines: Discipline[];
    public skills: Talent[];

    constructor(name: string) {
        this.name = name;
    }
}
