function sum(){
  let a=  document.getElementById('fv').value
  let b=  document.getElementById('sv').value
  let result=parseInt(a)+parseInt(b)
  document.getElementById('box').innerText=result
  document.body.style.backgroundColor="black"
  document.body.style.color="white"

}