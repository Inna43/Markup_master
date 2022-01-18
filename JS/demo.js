let clickCircle = document.querySelector('.circle')
let startBtn = document.querySelector ('.start-game')
let count = 0

clickCircle.addEventListener('click', () =>{
    count++
    console.log(count)
})

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', true)
    setTimeout(() => {
        shoowModal()
    } , 2000);
})

window.addEventListener('click', (event) =>{
    if (event.target.classList.contains('.close')){
        removeModal()
    }


})

function shoowModal(){
    let modal = document.querySelector('div')
    modal.className = 'window-item'
     modal.innerHTML = `
    <div class="window-header">
      <h1>Count click</h1><i class="fa fa-window-close fa-2x" aria-hidden="true"></i>
    </div>
        <div class="window-body">
           <p>  ${count} </p>
        </div>
     <div class="window-footer">
         <span>
             <button class="ok">Ok</button>
             <button class="close">Close</button>
         </span>
            
         
    </div>
</div>`
document.body.append(modal)
}

function removeModal(){
    if (document.querySelector('.window-item')){
        document.querySelector('.window-item').remove()
    }
    makeButoonActive()
}

function makeButoonActive(){
    startBtn.setAttribute('disabled',false)
}