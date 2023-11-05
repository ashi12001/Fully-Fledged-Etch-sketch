const container = document.querySelector(".containers");

const grids = 10;
function createContainers() {
  for (let i = 1; i <= grids * grids; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    const dimensions = 600 / grids-1;
    div.style.cssText = `width:${dimensions}px;height:${dimensions}px;`;
  }
}
createContainers();
const divv = document.querySelectorAll(".containers div");

function hover() {
  divv.forEach((Button) => {
    Button.addEventListener("mouseenter", () => {
      Button.style.backgroundColor = "black";
    });
  });
}
hover();


const controls = document.querySelector(".controls");

function color_mode() {

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
  const reset = document.querySelector("#Reset");
  reset.addEventListener("click", () => {
    divv.forEach((individual) => {
      individual.style.backgroundColor = "white";
    });
  });
}
clear();

function rainbowMode() {
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




