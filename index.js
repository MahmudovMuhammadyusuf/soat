//  1-usul uchun
// let btn = document.getElementById("counter-minus");
// let btn2 = document.getElementById("counter-pilus");
// let countext = document.getElementById("counter");

// function counter() {
//   let count = 0;
//   btn2.addEventListener("click", () => {
//     let appealToPTag = document.getElementById("counter");
//     count++;
//     appealToPTag.textContent = count;
//   });
//   btn.addEventListener("click", () => {
//     let appealToPTag = document.getElementById("counter");
//     count--;
//     appealToPTag.textContent = count;
//   });
//   return { appealToPTag };
// }
// let result = counter();
// console.log(result);
// console.log(result.appealToPTag);




// 2-usul uchun 
let btn = document.getElementById("counter-minus");
let btn2 = document.getElementById("counter-pilus");
let countext = document.getElementById("counter");

function counter() {
  let count = 0;
  function max() {
    count++;
    countext.textContent = count;
    console.log("max", count);
    return count;
  }
  function mini() {
    count--;
    countext.textContent = count;
    console.log("mini", count);
    return count;
  }
  return { max, mini };
}
let result = counter();
console.lo(result);
console.log(result.count);
console.log(result.mini);
