// Dashboard.tsx
'use client';
import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import TokenImages from './TokenImage'; // Ensure this import matches the name and path of your component
import CreateWalletComponent from './CreateWalletComponent';
import { ethers } from 'ethers';
import { FuseSDK } from '@fuseio/fusebox-web-sdk';


const Dashboard: React.FC = () => {
  const [extraImageSrc, setExtraImageSrc] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [paymentInput, setPaymentInput, handlePaymentSubmit] = useState('');

  useEffect(() => {
    const initializeWallet = async () => {
      try {
        const API_KEY = "pk_gs1V_RJkMWlOVILJn_dHzwlX";
        const wallet = ethers.Wallet.createRandom();
        const fuseSDK = await FuseSDK.init(API_KEY, wallet);
        const address = await fuseSDK.wallet.getSender();
        setWalletAddress(address);
      } catch (error) {
        console.error('Error initializing wallet:', error);
        setWalletAddress('Error initializing wallet');
      }
    };

    initializeWallet();
  }, []);

  // Function to handle click on kasa image
  const handleKasaClick = (imageSrc: string) => {
    console.log(`Kasa image clicked: ${imageSrc}`);
    setExtraImageSrc(imageSrc); // Update the state with the clicked kasa image source
  };

    return (
      <div className={styles.dashboard}>
        <h1>cryptopension</h1>
        {/* Conditionally render the clicked kasa image */}
        {extraImageSrc && (
          <div className={styles.extraContent}>
            <img src={extraImageSrc} alt="Clicked Kasa" />
          </div>
        )}
        <div className={styles.center_image}>
          <img src="/logo.gif" className={styles.spinning_image} alt="Spinning" />
        </div>
        <div className={styles.top_row}>
          <div className={styles.leftBorder}>

            <div className={styles.borderDiv}>
            <div className={styles.wallet}>
              {walletAddress ? (
                <p>Smart Contract Wallet Initialized: {walletAddress}</p>
              ) : (
                <p>Loading wallet...</p>
              )}
              </div>
              <div className={styles.topUpButton}>
            TopUp
              </div>
            </div>
          </div>
          <div className={styles.rightBorder}>
            <div className={styles.borderDiv}>
              <p>1. Enter your payment details:</p>
              {/* 2. Input field */}
              <input
                type="text"
                value={paymentInput}
                onChange={(e) => setPaymentInput(e.target.value)}
                className={styles.paymentInput} // Ensure you define this class in your CSS
              />
              {/* 3. Button */}
              <button onClick={handlePaymentSubmit} className={styles.paymentButton}>
                Submit
              </button>
            </div>
          </div>
        <div className={styles.bottom_row}>
          <TokenImages onKasaClick={handleKasaClick} />
        </div>
      </div>
      </div>
    );
  };


export default Dashboard;

