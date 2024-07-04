function isPrime(num) {
    // Check if the number is less than 2, as 0 and 1 are not prime numbers
    if (num <= 1) return false;
  
    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If a factor is found, the number is not prime
      }
    }
    return true; // No factors found, the number is prime
  }
  
  // Example usage:
  const number = 17;
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }
  