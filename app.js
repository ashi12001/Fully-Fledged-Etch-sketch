const container = document.querySelector(".containers");


function createContainers(grids) {
  for (let i = 1; i <= grids * grids; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    const dimensions = 600 / grids-1;
    div.style.cssText = `width:${dimensions}px;height:${dimensions}px;`;
  }
}
createContainers(10);



function hover() {
  const divv = document.querySelectorAll(".containers div");
  divv.forEach((Button) => {
    Button.addEventListener("mouseenter", () => {
      Button.style.backgroundColor = "black";
    });
  });
}
hover();


const controls = document.querySelector(".controls");

function color_mode() {
  const divv = document.querySelectorAll(".containers div");
  const colorSelect = document.querySelector("#color");
  const colorPicker= document.querySelector("#colour")
  colorSelect.addEventListener("click", () => {
    divv.forEach((Button) => {
      Button.addEventListener("mouseenter", () => {
        Button.style.backgroundColor = `${colorPicker.value}`;
      });
    });
  });
}

color_mode();

function clear() {
  
  const divv = document.querySelectorAll(".containers div");
  const reset = document.querySelector("#Reset");
  reset.addEventListener("click", () => {
    divv.forEach((individual) => {
      individual.style.backgroundColor = "white";
    });
  });
}
clear();

function rainbowMode() {
  const divv = document.querySelectorAll(".containers div");
  const rainbow = document.querySelector("#rainbow");
  rainbow.addEventListener("click", () => {
    divv.forEach((b) => {
      b.addEventListener("mouseenter", () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        b.style.backgroundColor = `#${randomColor}`;
      });
    });
  });
}
rainbowMode();

function eraser() {
  const divv = document.querySelectorAll(".containers div");
  const eraser = document.querySelector("#Eraser");
  eraser.addEventListener("click", () => {
    divv.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "white";
      });
    });
  });
}
eraser();


function output(){
    const output = document.querySelector(".output");
    const slider = document.querySelector("#range");
    
   
    slider.addEventListener('input',()=>{
        
        output.textContent= `${slider.value} * ${slider.value}`;

    });
    
}
output();



//deleting grids by removing child 
function deleteAllGrids(){
  const alldiv = document.querySelectorAll(".containers>div");
    alldiv.forEach(element => {
      container.removeChild(element);
    });
  
  
  
}

//creating containers
function slider(){
  const slider = document.querySelector("#range");
  let grids = slider.value;
  console.log(grids);
  deleteAllGrids();
  createContainers(grids);
  hover();
  rainbowMode();
  eraser();
  color_mode();
  
  
  
  

}
const slide = document.querySelector("#range");
slide.addEventListener("input",slider);

