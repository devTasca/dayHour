window.addEventListener('load', load);

function load(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    // TESTE -----------------------------------
    //let hour = 0

    msg.innerHTML = `Hora do dia: <strong>${hour}:${minutes}</strong>`

    if (hour >= 6 && hour < 12) {
        img.src = 'morning.png'
        document.body.style.backgroundColor = '#F6EFE7'
        msg.innerHTML += ' da Manhã'
    } else if (hour >= 12 && hour < 18) {
        img.src = 'afternoon.png'
        document.body.style.backgroundColor = '#B8766E'
        msg.innerHTML += ' da Tarde'
    } else if (hour >= 18 && hour < 24){
        img.src = 'night.png'
        document.body.style.backgroundColor = '#102128'
        msg.innerHTML += ' da Noite'
    } else {
        img.src = 'Dawn.png'
        document.body.style.backgroundColor = '#121D26'
        msg.innerHTML += ' da Madrugada'
    }
}