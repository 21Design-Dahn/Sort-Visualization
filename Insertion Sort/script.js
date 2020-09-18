let w = 20;
let currentIndex;
let currentValue;

let index = 1;
let values;

function setup(){
  createCanvas(500,300);
  frameRate(15);
  values = new Array(floor(width/ w));
  for(let i = 0; i < values.length; i++){
    values[i] = floor(random(height));
  }
}

function draw(){
  background(10);

  if(index != values.length){
    currentValue = values[index];
    currentIndex = index;

    
    while(currentIndex > 0 && values[currentIndex - 1] > currentValue){
      values[currentIndex] = values[currentIndex - 1];
      currentIndex = currentIndex - 1;
    }
    
    values[currentIndex] = currentValue;
    
  } else {
    console.log("Sorted array");
    noLoop();
  }
  
  for(let i = 0; i < values.length; i++){
    fill(255);
    rect(i * w, height - values[i], w, values[i]);

    textSize(11);
    if(values[i] > 20){
      fill(0);
      text(values[i], i * w, height - (4 * i));
    } else {
      fill(255);
      text(values[i], i * w, (height - values[i]) - 10);
    }
  }
  index = index + 1;
}