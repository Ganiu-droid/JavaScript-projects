// let button = document.querySelector('increment')
// button.addEventListener('click', counterAdd)

counter = parseInt(document.getElementById('counter').innerText)
function counterAdd(){
    document.getElementById('counter').innerHTML = counter += 1
}
function counterSubtract(){
    if(counter > 0)
    document.getElementById('counter').innerHTML = counter -= 1
}