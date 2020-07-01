
        
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', handlerfunct)


function handlerfunct(){
  console.log("cliccked");
  let numberz = document.getElementById('inputNumber').value;
  console.log(numberz);


  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://numbersapi.com/${numberz}/math`, true);


  xhr.onload = function(){
    if(this.status === 200){
      
      var  replyyy = this.responseText;
      console.log(this.responseText);

      var result = document.createElement('div');

      result.innerHTML = `<h4>${replyyy}</h4>`;
      let str = "<br>";
      document.getElementById('ending').innerHTML = str;

      document.getElementById('ending').appendChild(result);

    }
    else{
      console.log("error");
    }
  }

  xhr.send();

}
