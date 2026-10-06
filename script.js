//Principais funções Nativas usadas:
//setInterval()
//clearInterval()

const Timer=document.getElementById("timer")
const timeDC=document.getElementById("timeDC")
const atulizar=document.getElementById("atulizar")
const pomodoroDefalt=1500000
let fun=null
let startTime=0
let OnTime=0
let isOn=false

function Start(){
    fun=setInterval(update,10)
    startTime=Date.now()
    atulizar.innerHTML=`
    <button id="Pause" onclick="Pause()">Pause</button>`
    isOn=true
}

function Pause(){

    if(isOn){
        clearInterval(fun)
        isOn=false
        document.title="Pomofocus"
    }else if(!isOn){
        fun=setInterval(update,10)
        isOn=true
        startTime=Date.now()-OnTime
    }
}
function update(){
    const timepassed=Date.now()-startTime
    OnTime=timepassed
    console.log(OnTime)
    let updatetime=pomodoroDefalt-timepassed
    if(updatetime<=0){
    clearInterval(fun)
    Timer.textContent=`00:00`
    return
    }

    let minutos=Math.floor(updatetime/(1000 * 60))
    let segundos=Math.floor(updatetime/(1000)%60)
    Timer.textContent=`${minutos.toString().padStart(2,0)}:${segundos.toString().padStart(2,0)}` 
    document.title=`${minutos.toString().padStart(2,0)}:${segundos.toString().padStart(2,0)}`
}