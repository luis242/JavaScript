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
    },1000);
}

const addJogos = (nome) => {
    const callback = (resolve, reject) => {
        setTimeout(() => {
            jogos.push({nome});
            resolve({nome});
        }, 1000);
    };
    return new Promise(callback);
};


const runAsync = async() => {
    await addJogos('Brawhalla');
    console.log(jogos);
    await addJogos('FIFA');
    console.log(jogos);
    getJogos();
};


runAsync();