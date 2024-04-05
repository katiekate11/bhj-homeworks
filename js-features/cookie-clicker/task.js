const clicker = document.getElementById("cookie");

function changeSizes(){

  let output = document.getElementById("clicker__counter"); //всего кликов
  output.textContent++;

  if(output.textContent % 2 === 0){
    clicker.width= 200;
    clicker.height= 200;
  }
 else {
  clicker.width= 100;
  clicker.height= 100;
 }

  console.log (output.textContent);
};

clicker.onclick=changeSizes;
