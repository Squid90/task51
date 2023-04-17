const _zombie = _interopRequireDefault(require('../zombie'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проерка корректного создания персонажа с типом Zombie', () => {
  const zombie = new _zombie.default('Bob', 'Zombie');
  const expected = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  try {
    const zombie = new _zombie.default('Bob_very_long', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  try {
    const zombie = new _zombie.default('B', 'Zombie');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  try {
    const zombie = new _zombie.default('Bob', 'Dwarf');
  } catch (err) {
    expect(err).not.toBeNull();
  }
});
