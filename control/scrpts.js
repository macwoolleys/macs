  let btn1 = document.querySelector('#btn-1');
  let btn2 = document.querySelector('#btn-2');
  let btn3 = document.querySelector('#btn-3');

  btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/background1.png')";
  });
  
  btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/background2.png')";
  });

  btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/background3.png')";
  });