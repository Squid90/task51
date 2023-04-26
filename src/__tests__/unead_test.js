import Undead from '../undead';

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
  expect(undead).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  const undead = new Undead('Freddy_very_long', 'Undead');
  expect(undead).toThrowError();
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  const undead = new Undead('F', 'Undead');
  expect(undead).toThrowError();
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  const undead = new Undead('Freddy', 'Dwarf');
  expect(undead).toThrowError();
});
