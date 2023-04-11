export default class Character {
  constructor(name, type) {
    const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя указано неверно');
    } else {
      this.name = name;
    }

    if (!arrType.includes(type)) {
      throw new Error('Тип указан неверно');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
