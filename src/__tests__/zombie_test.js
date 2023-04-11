import Zombie from '../zombie';

// eslint-disable-next-line
test('Проерка корректного создания персонажа с типом Zombie', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  const expected = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
    // eslint-disable-next-line
    expect(zombie).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const zombie = new Zombie('Bob_very_long', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const zombie = new Zombie('B', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const zombie = new Zombie('Bob', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
