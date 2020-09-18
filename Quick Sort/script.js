let values;
let w = 10;

function setup(){
  createCanvas(600, 400);

  values = new Array(floor(width/ w));
  for(let i = 0; i < values.length; i++){
    values[i] = random(height);
  }

  quicksort(values, 0, values.length - 1);
}

function draw(){
  background(244);

  for(let i = 0; i < values.length; i++){
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function quicksort(arr, lo, hi){
  if(lo < hi){
    let p = await lomutoPartition(arr, lo, hi);
    await quicksort(arr, lo, p - 1);
    await quicksort(arr, p + 1, hi);
  }
}

async function lomutoPartition(arr, lo, hi){
  let pivot = arr[hi];
  let i = lo;
  for(let j = lo; j < hi; j++){
    if(arr[j] < pivot){
      await swap(arr, i, j);
      i = i + 1;
    }
  }
  await swap(arr, i, hi);
  return i;
}

async function hoarePartition(arr, lo, hi){
  let pivot = [lo];
  let i = lo - 1;
  let j = hi + 1;

  while(true){
    do{
      i = i + 1;
    }while(arr[i] < pivot);
    do{
      j = j - 1;
    }while(arr[j] > pivot);
    if(i >= j){
      return j;
    }
    await swap(arr, i, j);
  }
}

async function swap(arr, a, b){
  await sleep(25);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}