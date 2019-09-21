// Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independent of the others and assigned to any student. He needs to assign two chores to each student in a way which minimizes the total duration of the day's work. There will always be an even number of chores and enough students to complete them.

// You will be given an array containing the estimated duration of each chore such as:
// 10 ≤ chores length ≤ 30

// chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]
// Return an array with each students work duration in ascending order such that the last element represents the total duration of the day's work. Each integer in the return array is the sum of each students two assigned chores.
// chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

// Chore 1 = 2hrs
// Chore 2 = 9hrs

// 2 + 9 = 11 hours duration

// return [7, 8, 8, 10, 10, 11]

// Test.describe("Basic tests", _ => {
//     chores = [5, 2, 1, 6, 4, 4];
//     Test.assertDeepEquals(choreAssignment(chores), [7, 7, 8]);
//     chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9];
//     Test.assertDeepEquals(choreAssignment(chores), [7, 8, 8, 10, 10, 11]);
//     chores = [5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6];
//     Test.assertDeepEquals(choreAssignment(chores), [10, 11, 11, 11, 11, 12, 12, 13]);
//     chores = [9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2];
//     Test.assertDeepEquals(choreAssignment(chores), [11, 11, 11, 12, 12, 12, 12, 12, 12]);
//     chores = [1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8];
//     Test.assertDeepEquals(choreAssignment(chores), [10, 10, 11, 11, 11, 11, 11, 11, 12, 12]);
// })
const kata = require('./kata');

// it('Canary Test', () => {
//   expect(kata(3, 5)).toBe(8);
// });
describe('Tests para Algoritmo Suzuki', () => {
//   it('Canary Test', () => {
//     expect(kata(3, 5)).toBe(8);
//   });
  it('Primera Prueba', () => {
    expect(kata([5, 2, 1, 6, 4, 4])).toEqual([7, 7, 8]);
  });
  it('Segunda Prueba', () => {
    expect(kata([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])).toEqual([7, 8, 8, 10, 10, 11]);
  });
});
