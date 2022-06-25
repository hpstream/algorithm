function facttorial(n: number): number {
  if (n <= 1) return n;

  return n * facttorial(n - 1);
}

function facttorial1(n: number, result: number = 1): number {
  if (n <= 1) return result;

  return facttorial1(n - 1, n * result);
}
