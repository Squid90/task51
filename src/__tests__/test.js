import Character from '../game';
import Bowman from '../game';
import Swordsman from '../game';
import Magician from '../game';
import Daemon from '../game';
import Undead from '../game';
import Zombie from '../game';

const player1 = {
  name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
};
const player2 = {
  name: 'Aragorn', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
};
const player3 = {
  name: 'Gandalf', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
};
const player4 = {
  name: 'Karl', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
};
const player5 = {
  name: 'Freddy', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
};
const player6 = {
  name: 'Bob', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
};

// eslint-disable-next-line
test('check player1', () => {
  const player = new Character('Legolas', 'Bowman');
  // eslint-disable-next-line
  expect(player).toEqual(player1);
});

// eslint-disable-next-line
test('check player2', () => {
  const player = new Character('Aragorn', 'Swordsman');
  // eslint-disable-next-line
  expect(player).toEqual(player2);
});

// eslint-disable-next-line
test('check player3', () => {
  const player = new Character('Gandalf', 'Magician');
  // eslint-disable-next-line
  expect(player).toEqual(player3);
});

// eslint-disable-next-line
test('check player4', () => {
  const player = new Character('Karl', 'Daemon');
  // eslint-disable-next-line
  expect(player).toEqual(player4);
});

// eslint-disable-next-line
test('check player5', () => {
  const player = new Character('Freddy', 'Undead');
  // eslint-disable-next-line
  expect(player).toEqual(player5);
});

// eslint-disable-next-line
test('check player6', () => {
  const player = new Character('Bob', 'Zombie');
  // eslint-disable-next-line
  expect(player).toEqual(player6);
});