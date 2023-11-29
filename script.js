const man = document.getElementById("man");
const obstacles = document.querySelectorAll(".obstacle");
const itemOnHead = document.getElementById("itemOnHead");

const firstObsLeft = obstacles[0].getBoundingClientRect().right;
const secObsLeft = obstacles[1].getBoundingClientRect().left;
const thirdObsLeft = obstacles[2].getBoundingClientRect().left;
const fourthObsLeft = obstacles[3].getBoundingClientRect().left;
const fifthObsLeft = obstacles[4].getBoundingClientRect().left;


document.addEventListener("keydown", (event) => {
  event.preventDefault()
  if (event.key === " ") {

    if (!isPaused) {
      stop()
    } else {
      start()
    }
  }

});




let lightRed = '#FFC0CB'
let darkRed = '#8B0000'

// Initial setup
let isCrashed = false;
let isJumping = false;



let isPaused = true;
let isSecondObstacle = true
let intervalId;
let timeoutId

function start(){
  isPaused = false
  clearTimeout(timeoutId)
   intervalId = setInterval(() => {
    const manDistance = man.getBoundingClientRect().left;
    if((firstObsLeft - manDistance < 100) && !isCrashed){
    
      isCrashed = true
      man.classList.add("push_forward");
      man.classList.add("drop_down");

    timeoutId = setTimeout(() => {
      itemOnHead.style.display = "block";
      man.classList.remove("push_forward");
      man.classList.remove("drop_down");
    
      head.style.fill = lightRed
    }, 2000);

    } else if (isCrashed && isSecondObstacle &&  (secObsLeft - manDistance < 50) ){
      isSecondObstacle = false
      man.classList.add("push_back");
     
        head.style.fill = darkRed
        clearInterval(intervalId)
        stop()
         right_leg.innerHTML = ''
         left_leg.innerHTML = ''
         right_hand.innerHTML =''
         left_hand.innerHTML =''

        setTimeout(() => {
          
          window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
        }, 1500);
      
  
    }
     else {
      let position = man.getBoundingClientRect().left;
      
      position += 50
      man.style.left = position + "px"
  }
  }, 150)
}

function stop(){
  isPaused = true
  clearInterval(intervalId)
}


start()


