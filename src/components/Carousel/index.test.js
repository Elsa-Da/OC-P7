import { next } from './index';

test('Si on clique sur next, currentindex +1', () => {
  const result = next(2, 4);
  expect(result).toBe(3);
});
