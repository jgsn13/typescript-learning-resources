// Abstract classes can only be inherited and these abstract properties must be
// assigned when the class is extended by every child class
export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attackStrength: number,
    protected health: number
  ) {}

  public attack(character: Character): void {
    this.catchphrase();
    character.loseHealth(this.attackStrength);
  }

  public loseHealth(attackStrength: number): void {
    this.health -= attackStrength;
    console.log(
      `${this.emoji} - ${this.name} now has ${this.health} health...\n`
    );
  }

  protected abstract catchphrase(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  protected catchphrase(): void {
    console.log(`${this.emoji} Good Warrior is attacking!!!`);
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  protected catchphrase(): void {
    console.log(`${this.emoji} Evil Monster is attacking!!!`);
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 90, 1000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
