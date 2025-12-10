function makeCounter() {
  let count = 0;                     // ← Lives in makeCounter's Lexical Environment

  return function counter() {
    count++;
    console.log("Current count:", count);
    reset();
    debugger;                       // ← This will pause execution here!
    return count;
  };

  function reset() {
    count = 0;
    console.log("Counter reset.");
    debugger;
  }
}

const c1 = makeCounter();
const c2 = makeCounter();

c1(); // 1
c1(); // 2
c2(); // 1  ← completely separate from c1!
c1(); // 3
c2(); // 2