const _magician = _interopRequireDefault(require('../magician'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка создания персонажа с типом Magician', () => {
  const magician = new _magician.default('Gandalf', 'Magician');
  const expected = {
    name: 'Gandalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const magician = new _magician.default('Gandalf_very_long', 'Magician');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const magician = new _magician.default('G', 'Magician');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const magician = new _magician.default('Gandalf', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
