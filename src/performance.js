function measureExecutionTime(func, input) {
  const startTime = performance.now();
  func(input);
  const endTime = performance.now();
  return endTime - startTime;
}

module.exports = measureExecutionTime