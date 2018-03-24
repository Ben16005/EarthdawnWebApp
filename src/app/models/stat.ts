export class Stat {
  name: string;
  base: number;
  circleMod: number;
  baseMod: number;
  stepMod: number;

  constructor(name: string, base: number) {
    this.name = name;
    this.base = base;
  }
}
