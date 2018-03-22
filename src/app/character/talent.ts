export class ShortTalent {
    name: string;
    attribute: string;
    reqKarma: boolean;
    action: boolean;
    strain: number;
    rankMod: boolean;
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

    constructor(briefTalent: ShortTalent, circle: number, discipline: boolean) {
        this.name = briefTalent.name;
        this.attribute = briefTalent.attribute;
        this.action = briefTalent.action;
        this.strain = briefTalent.strain;
        this.circle = circle;
        this.discipline = discipline;
    }
}
