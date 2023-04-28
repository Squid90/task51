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
  expect(() => new Daemon('Karl_very_long', 'Daemon').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Daemon('K', 'Daemon').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Daemon('Karl', 'Dwarf').toThrow());
});
