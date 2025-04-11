import React from 'react';
import "./Home.css"; // Corrigido aqui!

function Home() {
  return (
    <div className="body">
      <header className="header">
        <h1 className="title">Gatinhos Fofos NFT 🐱</h1>
        <button className="walletBtn">Conectar Carteira</button>
      </header>

        <div className='texto'>
        <p>Welcome to CATCUTE, where each cat figurine embodies exquisite design and careful craftsmanship. 
        Our collection features smooth shapes and soft colors, resulting in unique pieces that radiate purity, 
        calmness, and joyful energy.
         We take pride in the impeccable quality and dedication to perfection that goes into every single piece</p>
         <hr className='hr'/>
        </div>
      
      <div className="container">
        <div className="grid">
          {[400, 401, 402].map((img, i) => (
            <div key={i} className="card">
              <img className="image" src="./fotogatos/download (3).jpg" alt={`Gato NFT ${i + 1}`} />
              <div className="info">
                <h3 className="catName">Gatinho #{String(i + 1).padStart(3, '0')}</h3>
                <p className="description">Esse gato é puro charme e fofura.</p>
                <button className="mintBtn">Mintar NFT</button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid">
          {[400, 401, 402].map((img, i) => (
            <div key={i} className="card">
              <img className="image" src="./fotogatos/download (3).jpg" alt={`Gato NFT ${i + 1}`} />
              <div className="info">
                <h3 className="catName">Gatinho #{String(i + 1).padStart(3, '0')}</h3>
                <p className="description">Esse gato é puro charme e fofura.</p>
                <button className="mintBtn">Mintar NFT</button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid">
          {[400, 401, 402].map((img, i) => (
            <div key={i} className="card">
              <img className="image" src="./fotogatos/download (3).jpg" alt={`Gato NFT ${i + 1}`} />
              <div className="info">
                <h3 className="catName">Gatinho #{String(i + 1).padStart(3, '0')}</h3>
                <p className="description">Esse gato é puro charme e fofura.</p>
                <button className="mintBtn">Mintar NFT</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        © 2025 Loja NFT - Gatinhos Fofos
      </footer>
    </div>
  );
}

export default Home;
