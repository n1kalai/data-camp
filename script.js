const man = document.getElementById("man");
const obstacles = document.querySelectorAll(".obstacle");

const firstObsLeft = obstacles[0].getBoundingClientRect().right;
const secObsLeft = obstacles[1].getBoundingClientRect().left;

function scrollFinished(){
  
const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
const clientHeight = document.documentElement.clientHeight;
const scrollHeight = document.documentElement.scrollHeight;

return scrollTop + clientHeight >= scrollHeight;
}

document.addEventListener("scroll", ()=>{
if (window.scrollY> 1500 && window.scrollY < 1900)  {  
  start()
};

// jump man when scrolling
if(scrollFinished()){
  //
  // man_2.style.bottom = -50+ "px";
  man_2.classList.add('jump_up')
  setTimeout(() => {
   
    
      car_final.style.left = 2000 + "px";
   
  },1500)
 

}

})


document.addEventListener("keydown", (event) => {
  event.preventDefault()
  if (event.key === " ") {

    if (!isPaused) {
      stop()
    } else {
      start()
    }
  }
  
  if (event.key === "r") {
      man.style.left = 50 + "px";
      man.classList.remove('push_back')
      start()
  }

  if (event.key === "d") {
    man.style.left = 800 + "px";
  }

  if (event.key === "w") {
    man_2.style.left = 1000 + "px";
    man_2.style.bottom = -250 + "px";
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
        
          man_2.style.left = 1000 + "px";
          man_2.style.bottom = -250 + "px";
         
        }, 1500);
      
  
    }
     else {
      let position = man.getBoundingClientRect().left;
      
      position += 50
      man.style.left = position + "px"
  }
  }, 400)
}

function stop(){
  isPaused = true
  clearInterval(intervalId)
}

