import React, { useState } from 'react';
import { ethers } from 'ethers';
import Home from './pages/Home';



const contractAddress = '0x719E046A4d6E6960Dca5656B04851a129506C03d';
const abi = [
  "function mint(string memory _tokenURI) public",
];

const MintCatNFT = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [tokenURI, setTokenURI] = useState('');
  const [txHash, setTxHash] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Instale MetaMask!');
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);

    setSigner(signer);
    setContract(contractInstance);
    setWalletConnected(true);
  };

  const mintNFT = async () => {
    if (!tokenURI) return alert('Insira o link do seu NFT (ex: IPFS)');

    try {
      const tx = await contract.mint(tokenURI);
      await tx.wait();
      setTxHash(tx.hash);
    } catch (err) {
      console.error("Erro ao mintar:", err);
      alert("Erro ao mintar o NFT. Verifique a carteira e a rede.");
    }
  };

  return (
    <Home/>
    // <div style={{ padding: 20 }}>
      
    //   <h2>🐱 Mintar NFT Fofinho</h2>
    //   {!walletConnected ? (
    //     <button onClick={connectWallet}>Conectar Carteira</button>
    //   ) : (
    //     <>
    //       <input
    //         type="text"
    //         placeholder="Insira o link da imagem (ex: IPFS)"
    //         value={tokenURI}
    //         onChange={(e) => setTokenURI(e.target.value)}
    //         style={{ width: '100%', marginBottom: 10 }}
    //       />
    //       <button onClick={mintNFT}>Mintar NFT</button>
    //     </>
    //   )}
    //   {txHash && (
    //     <p>
    //       ✅ NFT Mintado! <br />
    //       <a href={`https://explorer.monad.xyz/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
    //         Ver no Explorer
    //       </a>
    //     </p>
    //   )}
    // </div>
  );
};

export default MintCatNFT;
