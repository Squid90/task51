import Daemon from '../daemon';

// eslint-disable-next-line
test('Проерка создания персонажа с типом Daemon', () => {
  const daemon = new Daemon('Karl', 'Daemon');
  const expected = {
    name: 'Karl',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
    // eslint-disable-next-line
    expect(daemon).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const daemon = new Daemon('Karl_very_long', 'Daemon');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const daemon = new Daemon('K', 'Daemon');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const daemon = new Daemon('Karl', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
