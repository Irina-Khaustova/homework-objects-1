import orderByProps from '../orderByProps';

test('correct sorting of the array', () => {
  const obj1 = {
    health: 10,
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
  };
  const resultSort = orderByProps(obj1, ['name', 'level']);
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(resultSort).toEqual(result);
});
