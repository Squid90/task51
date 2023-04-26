import Daemon from '../daemon';

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
  expect(daemon).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  // try {
  //   const daemon = new Daemon('Karl_very_long', 'Daemon');
  // } catch (err) {
  //   expect(err).not.toBeNull();
  // }
  const daemon = new Daemon('Karl_very_long', 'Daemon');
  expect(daemon).toThrowError();
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  // try {
  //   const daemon = new Daemon('K', 'Daemon');
  // } catch (err) {
  //   expect(err).not.toBeNull();
  // }
  const daemon = new Daemon('K', 'Daemon');
  expect(daemon).toThrowError();
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  // try {
  //   const daemon = new Daemon('Karl', 'Dwarf');
  // } catch (err) {
  //   expect(err).not.toBeNull();
  // }
  const daemon = new Daemon('Karl', 'Dwarf');
  expect(daemon).toThrowError();
});