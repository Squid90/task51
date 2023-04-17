const _bowman = _interopRequireDefault(require('../bowman'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка корректного создания персонажа с типом Bowman', () => {
  const bowman = new _bowman.default('Legolas', 'Bowman');
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

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const bowman = new _bowman.default('Legolas_very_long', 'Bowman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const bowman = new _bowman.default('L', 'Bowman');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const bowman = new _bowman.default('Legolas', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
