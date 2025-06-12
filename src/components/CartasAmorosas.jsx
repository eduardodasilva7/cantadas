import { useState } from "react";

const CantadasAmorosas = () => {
    const [nome, setNome] = useState('');
    const [frase, setFrase] = useState('');

    const cantadas = [
        "Você é Wi-Fi? Porque estou sentindo uma conexão!",
        "Se eu fosse um gato, passaria todas as minhas sete vidas ao seu lado.",
        "Você é um empréstimo? Porque você tem meu interesse!",
        "Se você fosse uma lágrima, eu nunca choraria para não te perder.",
        "Você é um mago? Porque sempre que você está por perto, tudo fica mágico!",
        "Se eu pudesse rearranjar o alfabeto, colocaria U e I juntos.",
        "Você é um estacionamento? Porque você tem 'vaga' no meu coração!",
        "Você é a razão pela qual eu sorrio todos os dias.",
        "Você é um dicionário? Porque você dá significado à minha vida!",
        "Se eu fosse um pintor, você seria minha obra-prima."
    ];

    const verificaNome = () => {
        if (nome === '') {
            setFrase('Preencha o nome do seu crush');
        } else {
            const numero = Math.floor(Math.random() * cantadas.length);
            setFrase(`${nome}, ${cantadas[numero]}`);
        }
    };

    return (
        <div className="container">
            <h2 className="title">❤ Cantadas Amorosas Para o Seu Crush</h2>
            <input 
                type="text" 
                placeholder="Nome do seu amor" 
                onChange={(e) => setNome(e.target.value)} 
            />
            <button onClick={verificaNome}>Gerar cantada</button>
            <p>{frase}</p>
        </div>
    );
};

export default CantadasAmorosas;
