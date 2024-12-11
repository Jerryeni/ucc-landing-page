import { ethers } from 'ethers';
import { ADDRESSES } from '../contracts/addresses';

export async function switchToBSCTestnet() {
  if (!window.ethereum) throw new Error("No Web3 Provider found");
  try {
    console.log("requesting")
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${ADDRESSES.CHAIN_ID.toString(16)}` }],
    });
    console.log("finished")
  } catch (error: any) {
    if (error.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${ADDRESSES.CHAIN_ID.toString(16)}`,
          chainName: 'BSC Testnet',
          nativeCurrency: {
            name: 'tBNB',
            symbol: 'tBNB',
            decimals: 18
          },
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          blockExplorerUrls: ['https://testnet.bscscan.com/']
        }]
      });
    }
  }
}

export async function getWeb3Provider() {
  if (!window.ethereum) throw new Error("No Web3 Provider found");
  
  await switchToBSCTestnet();
  return new ethers.BrowserProvider(window.ethereum);
}