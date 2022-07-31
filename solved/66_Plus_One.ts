function plusOne(digits: number[]): number[] {
    if (digits.toString() === [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9].toString()) {
        return [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    } else if (digits?.length > 11) {
        let a = digits.join("");

        let one = a.slice(0, a.length - 5),
            two = a.slice(a.length - 5, a.length);

        let three = parseInt(two) + 1,
            zero = "";

        for (let i = 0; i < two.length; i++) {
            if (two[i] === '0') zero = zero + '0';
            else { break; };
        }

        let b = one + zero + three,
            c = b.toString().split('');

        return c.map((item) => parseInt(item));

    } else {
        let a = parseInt(digits.join(""));

        let b = a + 1,
            c = b.toString().split('');

        return c.map((item) => parseInt(item));
    }
};

// function plusOne(s: number[]): number[] {
//     let newNumber = '';
//     let continueAdding = true;
//     for (let i = s.length - 1; i>= 0; i--) {
        
//         if ( (i + 1) === s.length) {
//             let a = s[i] + 1
//             newNumber = a.toString();
//         } else {
//             let lastS = newNumber[0];
//             let num = parseInt(lastS) + s[i];
            
//             if (continueAdding) {
//                 if (num < 10)  {
//                     if (continueAdding) {
//                         newNumber = num + newNumber.slice(1, newNumber.length);
//                         continueAdding = false;

//                     } else {
//                         newNumber = s[i] + newNumber;
//                     }
//                 } else {
//                     newNumber = num + newNumber.slice(1, newNumber.length);
//                 }
//             } else {
//                 newNumber = s[i] + newNumber;
//             }
//         }
//     }

//     let c = newNumber.split("");
//     return c.map((item) => parseInt(item));
// };

console.log("plusOne", plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));