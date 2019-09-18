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
            resolve();
        }, 1000);
    };
    return new Promise(callback);
};












addJogos('Minecraft').then(getJogos).finally(() => {
    console.log('Adicionei toda essa bagaça')
});

const callback1 = (resolve, reject) => {
    const error = false;
    const result = true;
    
    if(error) {
        reject(error);
    } else {
        resolve(result);
    }
};

const a = new Promise(callback1);

a.then(console.log).catch(console.error).finally(() => {
    console.log('Foi mesmo assim');
});