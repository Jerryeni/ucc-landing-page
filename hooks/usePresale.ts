import { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import { ADDRESSES } from '@/lib/contracts/addresses';
import { PRESALE_ABI, ERC20_ABI } from '@/lib/contracts/abis';
import { getWeb3Provider } from '@/lib/web3/provider';
import { toast } from '@/components/ui/use-toast';

export enum PurchaseStatus {
  IDLE = 'IDLE',
  APPROVING = 'APPROVING',
  APPROVED = 'APPROVED',
  PURCHASING = 'PURCHASING',
  CONFIRMED = 'CONFIRMED',
  ERROR = 'ERROR'
}

export function usePresale() {
  const [status, setStatus] = useState<PurchaseStatus>(PurchaseStatus.IDLE);

  const buyWithUSDT = useCallback(async (amount: string) => {
    try {
      const provider = await getWeb3Provider();
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      
      // USDT Contract
      const usdtContract = new ethers.Contract(
        ADDRESSES.USDT,
        ERC20_ABI,
        signer
      );

      // Presale Contract
      const presaleContract = new ethers.Contract(
        ADDRESSES.PRESALE,
        PRESALE_ABI,
        signer
      );

      // Approve USDT
      setStatus(PurchaseStatus.APPROVING);
      const parsedAmount = ethers.parseUnits(amount, 6); // USDT uses 6 decimals
      const approveTx = await usdtContract.approve(
        ADDRESSES.PRESALE,
        parsedAmount
      );
      await approveTx.wait();
      setStatus(PurchaseStatus.APPROVED);

      // Buy tokens
      setStatus(PurchaseStatus.PURCHASING);
      const buyTx = await presaleContract.buy(
        parsedAmount,
        userAddress,
        0, // ref
        parsedAmount
      );
      await buyTx.wait();
      setStatus(PurchaseStatus.CONFIRMED);

      toast.success(
        "Purchase completed successfully!",
        {
          duration: 3000, 
          position: "top-right", 
        }
      );
    } catch (error: any) {
      console.error(error);
      setStatus(PurchaseStatus.ERROR);
      toast.error(
        "Purchase failed!",
        {
          duration: 3000, 
          position: "top-right", 
        }
      );
    }
  }, [toast]);

  const buyWithBNB = useCallback(async (amount: string) => {
    try {
      const provider = await getWeb3Provider();
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      
      const presaleContract = new ethers.Contract(
        ADDRESSES.PRESALE,
        PRESALE_ABI,
        signer
      );

      setStatus(PurchaseStatus.PURCHASING);
      const parsedAmount = ethers.parseEther(amount);
      const buyTx = await presaleContract.buy(
        parsedAmount,
        userAddress,
        0, // ref
        parsedAmount,
        { value: parsedAmount }
      );
      await buyTx.wait();
      setStatus(PurchaseStatus.CONFIRMED);

      toast.success(
        "Purchase completed successfully!",
        {
          duration: 3000, 
          position: "top-right", 
        }
      );
      
    } catch (error: any) {
      console.error(error);
      setStatus(PurchaseStatus.ERROR);
      toast.error(
        "Purchase failed!",
        {
          duration: 3000, 
          position: "top-right", 
        }
      );
    }
  }, [toast]);

  const resetStatus = () => setStatus(PurchaseStatus.IDLE);

  return {
    status,
    buyWithUSDT,
    buyWithBNB,
    resetStatus
  };
}