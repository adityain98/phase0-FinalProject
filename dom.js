btnPlus.addEventListener('click',function(){
  var ul = document.querySelector('#list')
  var li = document.createElement('li')
  var baru = document.querySelector('#input').value
  if(baru == ''){
      alert('Mohon Masukkan Input')
  }
  else{
      li.appendChild(document.createTextNode(baru))
      ul.appendChild(li)
      document.getElementById('input').value = ''
  }

  li.onclick = removeItem
})

function removeItem(element) {
  element.target.parentElement.removeChild(element.target)
}

btnReset.addEventListener('click', function(){
  var myNode = document.getElementById("list");
  myNode.innerHTML = '';
})

var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    var ul = document.querySelector('#list')
    var li = document.createElement('li')
    var baru = document.querySelector('#input').value
    if(baru == ''){
        alert('Mohon Masukkan Input')
    }
    else{
        li.appendChild(document.createTextNode(baru))
        ul.appendChild(li)
        document.getElementById('input').value = ''
    }

    li.onclick = removeItem
    }
});