window.addEventListener('load', () => {
    load(); // Chama a função imediatamente ao carregar
    setInterval(load, 1000); // Atualiza a cada segundo
});

function load(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    // TESTE -----------------------------------
    //let hour = 0
    
    msg.innerHTML = `Hora do dia: <strong>${hour}:${formattedMinutes}:${formattedSeconds}</strong>`;

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
        img.src = 'dawn.png'
        document.body.style.backgroundColor = '#121D26'
        msg.innerHTML += ' da Madrugada'
    }
}

setInterval(load, 60000);