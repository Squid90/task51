import Undead from '../undead';

// eslint-disable-next-line
test('Проерка создания персонажа с типом Undead', () => {
  const undead = new Undead('Freddy', 'Undead');
  const expected = {
    name: 'Freddy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
    // eslint-disable-next-line
    expect(undead).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const undead = new Undead('Freddy_very_long', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const undead = new Undead('F', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const undead = new Undead('Freddy', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
