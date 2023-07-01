var delay = 3000;

setInterval(() => {
  let time = delay/1000;
  console.log(time);
  delay -= 1000;

  if(delay===0)
  {
  console.log(Math.random());
  delay = 3000;
  }
},1000)