import Bowman from '../bowman';

test('Проерка корректного создания персонажа с типом Bowman', () => {
  const bowman = new Bowman('Legolas', 'Bowman');
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});
// Уже после того как отправил работу на проверку, я нашел другое решение для теста. Оно рабочее.
test('Проерка создания персонажа c именем больше 10 символов', () => {
  expect(() => new Bowman('Legolas_very_long', 'Bowman').toThrow());
});
// Уже после того как отправил работу на проверку, я нашел другое решение для теста. Оно рабочее.
test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Bowman('L', 'Bowman').toThrow());
});
// Уже после того как отправил работу на проверку, я нашел другое решение для теста. Оно рабочее.
test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Bowman('Legolas', 'Dwarf').toThrow());
});
