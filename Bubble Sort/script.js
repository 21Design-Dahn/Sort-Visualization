let w = 10;

let i = 0;
let largest;

function setup(){
  createCanvas(600, 400);
  frameRate(15);

  values = new Array(floor(width / w));
  for(let i = 0; i < values.length; i++){
    values[i] = random(height);
  }
}

function draw(){
  background(10);

  if(i < values.length){
    for(let j = 0; j < values.length - i - 1; j++){
      let a = values[j];
      let b = values[j + 1];
      if(a > b){
        largest = a;
        swap(values, j, j + 1);
      }
    }
  }

  i = i + 1;
  for(let i = 0; i < values.length; i++){
    if(largest == values[i]){
      fill(0, 0, 255, 100);
    } else {
      fill(255);
    }

    rect(i * w, height - values[i], w, values[i]);
  }
}

function swap(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}