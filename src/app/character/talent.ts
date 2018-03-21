export class ShortTalent {
    name: string;
    attribute: string;
    action: boolean;
    strain: number;
}

export class Talent {
    name: string;
    circle: number;
    attribute: string;
    strain: number;

    rank?: number;
    rankMod?: number;
    stepMod?: number;
    discipline: boolean;
    karma: boolean;
    action: boolean;

    constructor(briefTalent: ShortTalent, circle: number, discipline: boolean, karma: boolean) {
        this.name = briefTalent.name;
        this.attribute = briefTalent.attribute;
        this.action = briefTalent.action;
        this.strain = briefTalent.strain;
        this.circle = circle;
        this.karma = karma;
        this.discipline = discipline;
    }
}
