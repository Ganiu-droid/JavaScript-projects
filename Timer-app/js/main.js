let startButton = document.querySelector('#start')
startButton.addEventListener('click', start)




function start(){
    let seconds = 0
    let hours;
    setInterval(function(){
        seconds ++
        let counter = document.getElementById('counter')
        if(seconds < 10){            
            counter.innerHTML = `00: 0${seconds}`
        }
        if(seconds >=10 && seconds <= 60 ){
            counter.innerHTML = `00: ${seconds}`
        }
        if(seconds > 60 ){
            let minutes = Math.floor(seconds/60)
            if(minutes < 60){
                counter.innerHTML = (seconds%60  < 10) ? `0${minutes}: 0${seconds % 60}` : `0${minutes}: ${seconds % 60}`
            }
            // else{
            //     let hours = Math.floor(minutes/60)
            //     counter.innerHTML = (seconds%60  < 10) ? `0${hours} : 0${minutes % 60}: 0${seconds % 60}` : `0${minutes}: ${seconds % 60}`
            // }

        }
        // if(seconds > 60){
        //     counter.innerHTML = `0${Math.floor(seconds/60)}: 0${seconds % 60}`
        // }
    }, 1)

}

console.log("Hello")
