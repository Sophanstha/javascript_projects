function sum(...num) {
    // Sum the numbers using the reduce method
    const total = num.reduce((acc, current) => acc + current, 0);
    console.log(total);
  }
  
  sum(10, 23, 1); // Output: 34
  