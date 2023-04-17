const _undead = _interopRequireDefault(require('../undead'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-next-line
test('Проерка создания персонажа с типом Undead', () => {
  const undead = new _undead.default('Freddy', 'Undead');
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
    const undead = new _undead.default('Freddy_very_long', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const undead = new _undead.default('F', 'Undead');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const undead = new _undead.default('Freddy', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
