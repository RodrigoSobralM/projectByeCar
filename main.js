let liEls = document.querySelectorAll("ul li");
let modal = document.querySelector("#modal");
let index = 0;
  
function show(indexSum) {
    index = index + indexSum;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth"});
}
  
setInterval(() => {
    if(index === liEls.length - 1){
      show(index - 2);
    }else{
      show(index + 1);
    }
}, 5000);
  
function showModal(index) {
    document.addEventListener('click', (event) => {
        if([index] == 0){
            modal.innerHTML = ` 
            <div class="modal-card">
                <button onclick="close()">
                    <img src="img/close.svg" alt="close-button" />
                </button>
                <h1>Scooter Elétrica Voltz EV1</h1>
                <p>
                    O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!
                </p>
                <img src="img/evo.svg" alt="" />
                <button>Quero Assinar!</button>
            </div>
            `;
            modal.style.visibility = "visible";
        }

        if([index] == 1){
            modal.innerHTML = ` 
            <div class="modal-card">
                <button onclick="close()">
                    <img src="img/close.svg" alt="close-button" />
                </button>
                <h1>Honda CB 500X</h1>
                <p>
                    O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!
                </p>
                <img src="img/moto.svg" alt="" />
                <button>Quero Assinar!</button>
            </div>
            `;
            modal.style.visibility = "visible";
        }
    });   
}

function close() {
    document.addEventListener('click', (event) =>{
        modal.style.visibility = "hidden";
    });
}
close()
