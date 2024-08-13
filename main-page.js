// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (product.name === item.name) {
//         return (item.quantity += 1);
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     return this.items.push(newProduct);
//   },
//   remove(product) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const { name } = this.items[i];
//       if (name === product) {
//         return this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let res = 0;
//     const { items } = this;
//     for (const { price, quantity } of items) {
//       res += price * quantity;
//     }
//     return res;
//   },
//   increseQuantity(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === product) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === product) {
//         item.quantity -= 1;
//         if (item.quantity === 0) {
//           this.remove(product);
//         }
//       }
//     }
//   },
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "pear", price: 70 });
// // cart.remove("apple");
// cart.increseQuantity("apple");
// // cart.decreaseQuantity("pear");

// console.log(cart);

// const hz = (arr) => {
//   const res = [0];
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     res.push(arr[i] + arr[i + 1]);
//   }
//   res.push(0);
//   return res;
// };

// function binomials(a) {
//   const res = [];
//   const arr = [[0, 1, 0]];
//   for (let i = 0; i < a; i += 1) {
//     arr.push(hz(arr[i]));
//   }
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       if (arr[i][j] == a) {
//         res.push([i, j - 1]);
//       }
//     }
//   }
//   return res;
// }

// const hz = (arr, a) => {
//   const res = [[0], []];
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     res[0].push(arr[i] + arr[i + 1]);
//     if (a === arr[i] + arr[i + 1]) {
//       res[1].push([arr.length - 2, i]);
//     }
//   }
//   res[0].push(0);
//   return res;
// };

// function binomials(a) {
//   const res = [];
//   const arr = [[0, 1, 0]];
//   for (let i = 0; i < a; i += 1) {
//     let m = hz(arr[i], a);
//     arr.push(m[0]);
//     if (m[1].length > 0) {
//       res.push(...m[1]);
//     }
//   }
//   return res;
// }

// function isInteresting(number, awesomePhrases) {
//   if (number < 10) {
//     return 0;
//   }
//   let res = 0;

//   for (const el of awesomePhrases) {
//     if (el - number === 0) {
//       return 2;
//     } else if (el - number < 3 && el - number > 0) {
//       res = 1;
//     }
//   }

//   let r1 = number + 1;
//   let r2 = number + 2;

//   if (
//     [...number.toString()].reverse().join() === [...number.toString()].join()
//   ) {
//     return 2;
//   } else if (
//     [...r1.toString()].reverse().join() === [...r1.toString()].join() ||
//     [...r2.toString()].reverse().join() === [...r2.toString()].join()
//   ) {
//     res = 1;
//   }

//   const arr = [...number.toString()];
//   let b = true;
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     if (arr[i] == arr[i + 1] - 1 || (arr[i] == 9 && arr[i + 1] == 0)) {
//       continue;
//     } else {
//       b = false;
//     }
//   }
//   if (b) {
//     return 2;
//   }

//   const ar1 = [...(number + 1).toString()];
//   const ar2 = [...(number + 2).toString()];
//   b = true;

//   for (let i = 0; i < ar1.length - 1; i += 1) {
//     if (ar1[i] == ar1[i + 1] - 1 || (ar1[i] == 9 && ar1[i + 1] == 0)) {
//       continue;
//     } else {
//       b = false;
//     }
//   }
//   if (b) {
//     res = 1;
//   }

//   b = true;

//   for (let i = 0; i < ar2.length - 1; i += 1) {
//     if (ar2[i] == ar2[i + 1] - 1 || (ar2[i] == 9 && ar2[i + 1] == 0)) {
//       continue;
//     } else {
//       b = false;
//     }
//   }
//   if (b) {
//     res = 1;
//   }

//   const arrr = [...number.toString()].reverse();
//   b = true;
//   for (let i = 0; i < arrr.length - 1; i += 1) {
//     if (arrr[i] == arrr[i + 1] - 1 || (arrr[i] == 9 && arrr[i + 1] == 0)) {
//       continue;
//     } else {
//       b = false;
//     }
//   }
//   if (b) {
//     return 2;
//   }

//   const arr1 = [...(number - 1).toString()].reverse();
//   const arr2 = [...(number - 2).toString()].reverse();
//   b = true;

//   for (let i = 0; i < arr1.length - 1; i += 1) {
//     if (arr1[i] == arr1[i + 1] - 1 || (arr1[i] == 9 && arr1[i + 1] == 0)) {
//       continue;
//     } else {
//       b = false;
//     }
//   }
//   if (b) {
//     res = 1;
//   }

//   b = true;

//   for (let i = 0; i < arr2.length - 1; i += 1) {
//     if (arr2[i] == arr2[i + 1] - 1 || (arr2[i] == 9 && arr2[i + 1] == 0)) {
//       continue;
//     } else {
//       b = false;
//     }
//   }
//   if (b) {
//     res = 1;
//   }

//   let n = number;
//   let n1 = number + 1;
//   let n2 = number + 2;

//   let check = 0;
//   while (n > 0) {
//     if (n % 10 !== 0) {
//       check += 1;
//     }
//     n = Math.floor(n / 10);
//   }

//   if (check === 1) {
//     return 2;
//   }

//   check = 0;
//   while (n1 > 0) {
//     if (n1 % 10 !== 0) {
//       check += 1;
//     }
//     n1 = Math.floor(n1 / 10);
//   }

//   if (check === 1) {
//     res = 1;
//   }

//   check = 0;
//   while (n2 > 0) {
//     if (n2 % 10 !== 0) {
//       check += 1;
//     }
//     n2 = Math.floor(n2 / 10);
//   }

//   if (check === 1) {
//     res = 1;
//   }

//   return res;
// }

// console.log(isInteresting(3, [1337, 256])); // 0
// console.log(isInteresting(3236, [1337, 256])); // 0

// // progress as we near an "interesting" number
// console.log(isInteresting(11207, [])); // 0
// console.log(isInteresting(11208, [])); // 0
// console.log(isInteresting(11209, [])); // 1
// console.log(isInteresting(11210, [])); // 1
// console.log(isInteresting(11211, [])); // 2

// // nearing a provided "awesome phrase"
// console.log(isInteresting(1335, [1337, 256])); // 1
// console.log(isInteresting(1336, [1337, 256])); // 1
// console.log(isInteresting(1337, [1337, 256]));

// function nextBigger(n) {
//   let m = n.toString();
//   const arr = [];
//   let num1 = 9;
//   let num2 = 9;
//   let index2 = -1;
//   let index1 = -1;
//   let b = false;
//   for (let i = m.length - 1; i >= 0; i -= 1) {
//     for (const el of arr) {
//       if (m[i] < el) {
//         index2 = i;
//         num2 = m[i];
//         b = true;
//         break;
//       }
//     }
//     if (b) {
//       break;
//     }
//     arr.push(m[i]);
//   }

//   if (!b) {
//     return -1;
//   }
//   let bb = false;
//   for (let i = m.length - 1; i >= index2 + 1; i -= 1) {
//     if (m[i] > num2 && m[i] <= num1) {
//       num1 = m[i];
//       index1 = i;
//       bb = true;
//     }
//   }
//   const ar = (m.slice(index2 + 1, index1) + num2 + m.slice(index1 + 1)).split(
//     ""
//   );
//   ar.sort();
//   console.log(ar);
//   m = m.slice(0, index2) + num1 + ar.join("");
//   return Number(m);
// }

// console.log(nextBigger(543878032287));

// function spiralize(n) {
//   res = [];
//   let rBar = n - 1;
//   let lBar = 0;
//   let uBar = 0;
//   let dBar = n - 1;
//   for (let i = 0; i < n; i += 1) {
//     const huy = [];
//     for (let j = 0; j < n; j += 1) {
//       huy.push(0);
//     }
//     res.push(huy);
//   }
//   let currentx = 0;
//   let currenty = 0;

//   let b = false;

//   while (rBar > lBar && uBar < dBar) {
//     if (currentx === lBar && currenty === uBar) {
//       for (let i = lBar; i <= rBar; i += 1) {
//         res[uBar][i] = 1;
//         currentx = rBar;
//       }
//       if (b) {
//         lBar += 2;
//         dBar -= 2;
//       }
//     } else if (currentx === rBar && currenty === uBar) {
//       for (let i = uBar; i <= dBar; i += 1) {
//         res[i][rBar] = 1;
//         currenty = dBar;
//       }
//     } else if (currentx === rBar && currenty === dBar) {
//       for (let i = rBar; i >= lBar; i -= 1) {
//         res[dBar][i] = 1;
//       }
//       uBar += 2;
//       rBar -= 2;
//       currentx = lBar;
//     } else {
//       for (let i = dBar; i >= uBar; i -= 1) {
//         res[i][lBar] = 1;
//         currenty = uBar;
//         b = true;
//       }
//     }
//   }
//   if (n % 2 === 0) {
//     res[n / 2][n / 2 - 1] = 0;
//   }
//   return res;
// }

// function validateBattlefield(arr) {
//   const field = [];
//   const shipCounter = [0, 0, 0, 0];
//   for (let i = 0; i < 12; i += 1) {
//     if (i === 0 || i === 11) {
//       field.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//     } else {
//       field.push([0, ...arr[i - 1], 0]);
//     }
//   }

//   for (let i = 1; i < field.length - 1; i += 1) {
//     for (let j = 1; j < field.length - 1; j += 1) {
//       if (
//         field[i][j] &&
//         (field[i + 1][j + 1] ||
//           field[i + 1][j - 1] ||
//           field[i - 1][j + 1] ||
//           field[i - 1][j - 1])
//       ) {
//         return false;
//       }
//       if (field[i][j]) {
//         if (
//           (field[i][j + 1] || field[i][j - 1]) &&
//           (field[i + 1][j] || field[i - 1][j])
//         ) {
//           return false;
//         }
//       }

//       if (
//         field[i][j] &&
//         field[i][j + 1] +
//           field[i][j - 1] +
//           (field[i + 1][j] + field[i - 1][j]) ===
//           0
//       ) {
//         shipCounter[0] += 1;
//       }
//       if (field[i][j] && field[i][j + 1] + field[i][j - 1] === 1) {
//         if (field[i][j + 1]) {
//           let m = j;
//           let shipSize = 0;
//           while (field[i][m]) {
//             shipSize += 1;
//             m += 1;
//           }
//           shipCounter[shipSize - 1] += 1;
//         }
//       }

//       if (field[i][j] && field[i + 1][j] + field[i - 1][j] === 1) {
//         if (field[i + 1][j]) {
//           let m = i;
//           let shipSize = 0;
//           while (field[m][j]) {
//             shipSize += 1;
//             m += 1;
//           }
//           shipCounter[shipSize - 1] += 1;
//         }
//       }
//     }
//   }
//   if (
//     shipCounter[0] !== 4 ||
//     shipCounter[1] !== 3 ||
//     shipCounter[2] !== 2 ||
//     shipCounter[3] !== 1
//   ) {
//     return false;
//   }
//   return true;
// }

// console.log(
//   validateBattlefield([
//     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ])
// );

// const players = [
//   {
//     name: "lucker",
//     id: "player-1",
//     timePlayed: 410,
//     points: 99,
//     online: false,
//   },
//   { name: "shoopy", id: "player-2", timePlayed: 340, points: 43, online: true },
//   {
//     name: "shnayder",
//     id: "player-3",
//     timePlayed: 220,
//     points: 2,
//     online: true,
//   },
//   { name: "bulka", id: "player-4", timePlayed: 112, points: 52, online: false },
//   { name: "hennes", id: "player-5", timePlayed: 210, points: 76, online: true },
// ];

// const pointSum = players.reduce(
//   (accummulator, number) => accummulator + number.points,
//   0
// );
// const totalTimePlayed = players.reduce(
//   (accummulator, player) => accummulator + player.timePlayed,
//   0
// );

// console.log(pointSum);
// console.log(totalTimePlayed);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce(
//   (accumulator, { tags }) => [...accumulator, ...tags],
//   []
// );

// const tagCounter = allTags.reduce(
//   (acc, tag) =>
//     Object.keys(acc).find((key) => key === tag)
//       ? { ...acc, [tag]: acc[tag] + 1 }
//       : { ...acc, [tag]: 1 },
//   {}
// );

// console.log(allTags);
// console.log(tagCounter);

// const numbers = [1, 6, 5, 3, 9];
// const numbersCopy = [...numbers];

// numbersCopy.sort((curEl, nextEl) => -curEl + nextEl);

// console.log(numbersCopy);

// const players = [
//   {
//     name: "lucker",
//     id: "player-1",
//     timePlayed: 410,
//     points: 99,
//     online: false,
//   },
//   { name: "shoopy", id: "player-2", timePlayed: 340, points: 43, online: true },
//   {
//     name: "shnayder",
//     id: "player-3",
//     timePlayed: 220,
//     points: 2,
//     online: true,
//   },
//   { name: "bulka", id: "player-4", timePlayed: 112, points: 52, online: false },
//   { name: "hennes", id: "player-5", timePlayed: 210, points: 76, online: true },
// ];

// const sortedByTime = [...players].sort(
//   (prePlayer, afterPlayer) => -prePlayer.timePlayed + afterPlayer.timePlayed
// );
// const sortByScore = [...players].sort(
//   (prePlayer, afterPlayer) => -prePlayer.points + afterPlayer.points
// );

// console.log(sortedByTime);
// console.log(sortByScore);

// const sortByOnline = [
//   ...players.filter((player) => (player.online ? player : "")),
//   ...players.filter((player) => (!player.online ? player : "")),
// ];

// console.log(sortByOnline);

// const players = [
//   {
//     name: "lucker",
//     id: "player-1",
//     timePlayed: 410,
//     points: 99,
//     online: false,
//   },
//   { name: "shoopy", id: "player-2", timePlayed: 340, points: 43, online: true },
//   {
//     name: "shnayder",
//     id: "player-3",
//     timePlayed: 220,
//     points: 2,
//     online: true,
//   },
//   { name: "bulka", id: "player-4", timePlayed: 112, points: 52, online: false },
//   { name: "hennes", id: "player-5", timePlayed: 210, points: 76, online: true },
// ];

// const sortPlayers = players
//   .filter((player) => player.online)
//   .sort((player, nPlayer) => nPlayer.points - player.points);

// const huy = document.Object.addEventListener('click',(Object)=>{background-color: red;})

let z = 0;

const sum = (a, b = z) => {
  console.log(a + b);
};
