for (let i = 1; i <= 1000; ++i) {
  if (i % 3 || i % 7) {
    continue
  }
  console.log(i)
}