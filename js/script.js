// function mostrarDataHora() {
//     const date = new Date();
//     document.getElementById('date').innerText = date.toLocaleString();
// }

// mostrarDataHora();

function atualizarHora() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    const data = agora.toLocaleDateString();
    
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    
    // Atualiza o elemento HTML com a hora formatada
    document.getElementById('date').textContent = `${data} - ${horaFormatada}`;
    document.body.style.background="red"
    document.body.style.color="white"
    // document.body.style.fontSize="2rem"
}

// Chama a função inicialmente para evitar atrasos no primeiro segundo
atualizarHora();

// Atualiza a cada segundo
setInterval(atualizarHora, 1000);



function alteraNome(){
    let alteracao = document.getElementById('alteracao')
    alteracao.innerText=alteracao.innerText.toUpperCase()
}
alteraNome()