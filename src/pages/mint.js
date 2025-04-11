import { BrowserProvider, Contract } from "ethers";
import CatNFT from "../contracts/CatNFT.json";

const contractAddress = "0x6670289485c122BD8E5fc7aA07f013d20a8e9827"; // Endereço do contrato
const abi = CatNFT.abi;

export const connectWallet = async () => {
  try {
    if (!window.ethereum) throw new Error("MetaMask não está instalado!");

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0]; // Retorna o primeiro endereço da carteira conectada
  } catch (error) {
    console.error("Erro ao conectar a carteira:", error);
    throw error;
  }
};

export const mintNFT = async (uri) => {
  try {
    if (!window.ethereum) throw new Error("MetaMask não está instalado!");

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(contractAddress, abi, signer);

    const transaction = await contract.mintCat(uri); // Certifique-se de que a função no contrato é `mintCat`
    await transaction.wait();

    alert("NFT mintado com sucesso!");
  } catch (error) {
    console.error("Erro ao mintar NFT:", error);
    throw error;
  }
};