const man = document.getElementById("man");
const obstacles = document.querySelectorAll(".obstacle");
const itemOnHead = document.getElementById("itemOnHead");

// Initial setup
let isCrashed = false;
let isJumping = false;
let isPaused = false;



let intervalId = setInterval(() => {

})


const firstObsLeft = obstacles[0].getBoundingClientRect().right;
const secObsLeft = obstacles[1].getBoundingClientRect().left;
const thirdObsLeft = obstacles[2].getBoundingClientRect().left;
const fourthObsLeft = obstacles[3].getBoundingClientRect().left;
const fifthObsLeft = obstacles[4].getBoundingClientRect().left;

let jumpedOverFirst = true;
let jumpedOverSecond = false;
let jumpedOverThird = false;
let jumpedOverFourth = false;
let jumpedOverFifth = false;

// Animation loop
function animate() {
  // run animation
  const position = man.getBoundingClientRect();
  man.style.left = position.left + 200 + "px";

  const manDistance = man.getBoundingClientRect().left;
  // let timer = setTimeout(() => {
  //   if (man.classList.contains("push_back")) {
  //     man.classList.remove("push_back");
  //     obstacles[0].style.display = "none";
  //     itemOnHead.style.display = "block";
  //     right_eye.style.fill = "red";
  //     left_eye.style.fill = "red";
  //   }
  // }, 5000);

  // if (!isCrashed && firstObsLeft - manDistance < 100 && jumpedOverFirst) {
  //   isCrashed = true;
  //   jumpedOverFirst = false;
  //   man.classList.add("push_back");
  // }

  // if (firstObsLeft - manDistance < 100 && !jumpedOverFirst && isCrashed) {
    if(firstObsLeft - manDistance < 100){
    // console.log(isCrashed);
    // clearTimeout(timer);
    // man.classList.add("jump");
    // jumpedOverFirst = true;
    // timer = setTimeout(() => {
    //   man.classList.remove("jump");
    // }, 2000);

    isPaused = true;
    show.style.display = "block";
    // clearTimeout(timer)
  }

  if (
    secObsLeft - manDistance < 50 &&
    secObsLeft - manDistance > 20 &&
    !jumpedOverSecond
  ) {
    // clearTimeout(timer);

    isPaused = true;
    show.style.display = "block";

    // man.classList.add("jump");
    jumpedOverSecond = true;
    // timer = setTimeout(() => {
    //   man.classList.remove("jump");
    // }, 2000);
  }
  if (
    thirdObsLeft - manDistance < 50 &&
    thirdObsLeft - manDistance > 20 &&
    !jumpedOverThird
  ) {
    clearTimeout(timer);
    man.classList.add("jump");
    jumpedOverThird = true;
    // timer = setTimeout(() => {
    //   man.classList.remove("jump");
    // }, 2000);
  }
  if (
    fourthObsLeft - manDistance < 50 &&
    fourthObsLeft - manDistance > 20 &&
    !jumpedOverFourth
  ) {
    man.classList.add("jump");
    jumpedOverFourth = true;
    // setTimeout(() => {
    //   man.classList.remove("jump");
    // }, 2000);
  }
  if (
    fifthObsLeft - manDistance < 50 &&
    fifthObsLeft - manDistance > 20 &&
    !jumpedOverFifth
  ) {
    man.classList.add("jump");
    jumpedOverFifth = true;
    setTimeout(() => {
      man.classList.remove("jump");
    }, 2000);
  }

  // if (fifthObsLeft - man.getBoundingClientRect().left < 100) {
  //   man.classList.add("jump");
  //   setTimeout(() => {
  //     man.classList.remove("jump");
  //   }, 1000);
  // }

  if (!isPaused) {
    requestAnimationFrame(animate);
  }
}

// Function to handle collision
//   function handleCollision() {
//     if (!isCrashed) {
//       isCrashed = true;
//       itemOnHead.style.display = "block"; // Display item on head
//       man.style.bottom = "150px"; // Jump
//       setTimeout(() => {
//         // Reset after a delay
//         isCrashed = false;
//         isJumping = true;
//         man.style.left = "50px";
//         man.style.bottom = "0";
//         itemOnHead.style.display = "none";
//         setTimeout(() => {
//           isJumping = false;
//         }, 2500); // Allow jumping for 0.5 seconds
//       }, 2000); // Reset after 2 seconds
//     }
//   }

//   // Event listener for collision detection
//   setInterval(() => {

//   }, 1000); // Check for collision every 100 milliseconds
