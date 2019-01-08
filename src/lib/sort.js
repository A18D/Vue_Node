export function BubbleSort (A) {
  // отсортировать по возрастанию.
  console.log ('BubbleSort');
  console.log (A);

  const n = A.length;

  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - 1 - i; j++) {
      if (A[j + 1] < A[j]) {
        const t = A[j + 1];
        A[j + 1] = A[j];
        A[j] = t;
      }
    }

  console.log (A);

  let B = A.forEach ((item, i, arr) => {
    for (let j = 0; j < n - 1 - i; j++) {
      if (A[j + 1] > A[j]) {
        const t = A[j + 1];
        A[j + 1] = A[j];
        A[j] = t;
      }
    }
  });

  console.log (A);

  let C = [];

  for (let key in A) {
    C.push (A[key]);
  }
  console.log (C);
  console.log ('~BubbleSort');
  return A; // На выходе сортированный по возрастанию массив A.
}
