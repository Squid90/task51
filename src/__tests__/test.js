import sortPersons from '../game';

const standartList = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

// eslint-disable-next-line
test('sort persons by health', () => {
  const persons = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const currentList = sortPersons(persons);
  // eslint-disable-next-line
  expect(currentList).toEqual(standartList);
});
