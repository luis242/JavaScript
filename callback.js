const jogos = [
    {nome: 'LoL'},
    {nome: 'CS'},
    {nome: 'GTA'},
]

const getJogos = () => {
    setTimeout(() => {
        jogos.forEach((item) => {
            console.log(item.nome);
        });
    }, 2000);
}

const addJogos = (nome, callback) => {
    setTimeout(() => {
        jogos.push({nome});
        callback();
    }, 2000);
}

addJogos('Minecraft', getJogos);