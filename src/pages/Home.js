import React, { useState } from 'react';
import "./Home.css";
import { connectWallet, mintNFT } from './mint';

function Home() {
  const [account, setAccount] = useState("");

  const dados = [
    {
      id: 1,
      title: "Gato Astronauta",
      description: "Este gato explora as estrelas com sua espaçonave.",
      ipfs: "bafybeiflbk7hqd6mvtgl6mlmlo73lmbt3xfwybp7pxrwpv7d7565wpqx3a",
    },
    {
      id: 2,
      title: "Gato Samurai",
      description: "Um guerreiro felino com habilidades lendárias.",
      ipfs: "bafybeicz2kqzaf5aso6suvfsze5noztyvotgrdxw22ty6zaws7zyafbpoe",
    },
    {
      id: 3,
      title: "Gato Alien",
      description: "Aventureiro dos astros, sempre em busca de estrelas.",
      ipfs: "bafkreie5vuqjt45x56umjhrehoxefqaskw6yenaf3c5ifkynurmyq6jdeq",
    },
  ];

  const handleConnect = async () => {
    const wallet = await connectWallet();
    if (wallet) setAccount(wallet);
  };

  const handleMint = async (uri) => {
    if (!account) return alert("Conecte a carteira primeiro!");
    await mintNFT(uri);
  };

  return (
    <div className="body">
      <header className="header">
        <div className='left-group'>
        <h1 className="title">Gatinhos Fofos NFT 🐱 </h1>
        <img className='monad' alt='Monad' src='./fotogatos/ChatGPT Image 11 de abr. de 2025, 18_50_49.png'/>
        </div> 
        <button className="walletBtn" onClick={handleConnect}>
          {account ? `Conectado: ${account.slice(0, 6)}...` : "Conectar Carteira"}
        </button>
      </header>

          <div className="container">
      <div className="grid">
        {dados.map((gato) => (
          <div key={gato.id} className="card">
            <img className="foto" src={`/fotogatos/download (${gato.id}).png`} alt={gato.title} />
            <div className="info">
              <h3 className="catName">{gato.title}</h3>
              <p className="description">{gato.description}</p>
              <button
                className="mintBtn"
                onClick={() => handleMint(`ipfs://${gato.ipfs}`)}
              >
                Mintar NFT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

      <footer className="footer">© 2025 Loja NFT - Gatinhos Fofos</footer>
    </div>
  );
}

export default Home;
