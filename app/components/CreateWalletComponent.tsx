// CreateWalletComponent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { FuseSDK } from '@fuseio/fusebox-web-sdk';

const CreateWalletComponent: React.FC = () => {
  const [senderAddress, setSenderAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeWallet = async () => {
      try {
        // Use this API key for initialization, replace it with your actual API key
        const API_KEY = "pk_gs1V_RJkMWlOVILJn_dHzwlX";
        // Creating a new random wallet
        const wallet = ethers.Wallet.createRandom();
        // Initializing Fuse SDK with the new wallet
        const fuseSDK = await FuseSDK.init(API_KEY, wallet);

        // Getting the sender's address
        const address = await fuseSDK.wallet.getSender();
        setSenderAddress(address);
      } catch (error) {
        console.error('Error initializing wallet:', error);
        setSenderAddress('Error initializing wallet');
      } finally {
        setLoading(false);
      }
    };

    initializeWallet();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading wallet...</p>
      ) : (
        <div>
          <h2>Smart Contract Wallet Initialized</h2>
          <p>Sender Address: {senderAddress}</p>
        </div>
      )}
    </div>
  );
};

export default CreateWalletComponent;