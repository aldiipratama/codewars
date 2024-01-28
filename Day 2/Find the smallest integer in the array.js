class SmallestIntegerFinder {
  findSmallestInt(args) {
    return +args.sort((a, b) => a - b).splice(0, 1);
  }
}

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a, b) => a - b)[0];
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

const sit = new SmallestIntegerFinder();

console.log(sit.findSmallestInt([12, 342, 11, 90, 5]));
