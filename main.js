document.write("6. Using reduce method");
  document.write("<br>");
  document.write("<br>");

  const numbers = [1, 2, 3, 4, 5];
  const result = numbers.reduce((value1,value2) => value1 * value2);
  total = result / 3;
  document.write(total);