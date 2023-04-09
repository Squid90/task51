import Character from '../game';

const player1 = {
  name: 'Legolas', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
};

// eslint-disable-next-line
test('check Caracter', () => {
  const player = new Character('Legolas', 'Bowman');
  // eslint-disable-next-line
  expect(player).toEqual(player1);
});
