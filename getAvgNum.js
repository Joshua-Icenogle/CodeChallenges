function getAvg (args) {
  const total = (Array.from(arguments)).reduce((a,b) => a + b, 0);
  return total/arguments.length;
}