function isHappy(n: number): boolean {
  let arr : number[] = [];

  while (n !== 1) {
    if (arr.includes(n)) return false;
    arr.push(n);

    let srtA = n.toString().split("");
    let total = 0;

    for (let i = 0; i < srtA.length; i++) {
      total = total + Math.pow(parseInt(srtA[i]), 2);
    }

    n = total;
  };

  return true;
};

console.log("isHappy", isHappy(2));
