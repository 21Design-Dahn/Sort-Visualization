let index = 0;
let w = 20;
let values;

let current;
let potential;

class block{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  show(col){
    fill(col);
    strokeWeight(2);
    rect(this.x * w, 300 - this.y, w, this.y);

    textSize(10);
    text(this.y, this.x * w, (300 - this.y) - 5);
    fill(col);
  }
}

function setup(){
  createCanvas(500, 300);
  frameRate(5);
  values = new Array(floor(width/ w));
  for(let i = 0; i < values.length; i++){
    let rHeight = floor(random(height));
    values[i] = new block(i, rHeight);
  }
}

function draw(){
  background(0);
  


  if(index != values.length){
    //linear search
    let smallest = index;
    
    for(let i = index + 1; i < values.length; i++){
      if(values[i].y <= values[smallest].y){
        smallest = i;
      }
    }

    for(let i = 0; i < values.length; i++){
      if(i == index){
        values[index].show(color(255, 0, 0));
      } else if(i == smallest){
        values[smallest].show(color(0, 255, 0));
      } else {
        values[i].show(color(255));
      }
    }

    swap(values, index, smallest);
    swapX(values, index, smallest);
  } else {
    for(let i = 0; i < values.length; i++){
      values[i].show(255);
    }
    console.log("Sorted")
    noLoop();
  }

  index = index + 1;
}

function swapX(arr, a, b){

  let temp = arr[a].x;
  arr[a].x = arr[b].x;
  arr[b].x = temp;
}

function swap(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}