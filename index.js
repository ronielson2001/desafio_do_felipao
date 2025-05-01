const readline = require('readline');

// Cria interface para leitura do teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o nome do herói
rl.question('Digite o nome do herói: ', (nome) => {
    // Pergunta a quantidade de XP
    rl.question('Digite a quantidade de XP do herói: ', (xpStr) => {
        const xp = parseInt(xpStr); // Converte string para número
        let nivel;

        // Classificação do nível
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata";
        } else if (xp <= 7000) {
            nivel = "Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Exibe o resultado
        console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);

        rl.close(); // Fecha a interface de leitura
    });
});
