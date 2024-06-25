/*  Si el número que caiga en el dado es 1, se ganan 5 puntos.
    Si el número que caiga en el dado es 3, se ganan 10 puntos.
    Si el número que caiga en el dado es 5, se ganan 15 puntos.
    Cualquier otro número no genera puntos.*/

let calculatePoints = (points) => {
  switch (points) {
    case 1:
      return 5;
    case 3:
      return 10;
    case 5:
      return 15;
    default:
      return 0;
  }
};

console.log(calculatePoints(1));
console.log(calculatePoints(3));
console.log(calculatePoints(5));
console.log(calculatePoints(6));
