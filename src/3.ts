interface ICharacter {
name: string,
level: number,
introduce(phrase: string): void,
}

interface ISpellCaster {
  castSpell(): void,
}
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string) {
    console.log(phrase + ', ' + this.name);
  }

  castSpell() {
    console.log('Casting a spell, behold my power!');
  }

  levelUp() {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16
console.log(wizard.levelUp())
export {};