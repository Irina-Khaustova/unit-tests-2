import sorty from '../app';

test('toEqual with arrays', () => {
  const arr = [
    { name: 'Миша', health: 40 },
    { name: 'Дима', health: 90 },
    { name: 'Оля', health: 50 },
  ];
  const arrSorty = [
    { name: 'Дима', health: 90 },
    { name: 'Оля', health: 50 },
    { name: 'Миша', health: 40 },
  ];

  const result = sorty(arr);

  expect(arrSorty).toEqual(result);
});
