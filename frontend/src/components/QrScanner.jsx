import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import {useNavigate} from 'react-router-dom'

const QrScanner = () => {
  const [scanResult, setScanResult] = useState('');
  const videoRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const startScan = () => {
      codeReader
        .decodeFromVideoDevice(null, videoRef.current, (result, error) => {
          if (result) {
            setScanResult(result.getText()); 
            alert(`QR Code Scanned: ${result.getText()}`); 
            codeReader.reset(); 
          }
          if (error) {
            console.error(error); 
          }
          const scannedNumber = parseInt(scanResult, 10);
          if (!isNaN(scannedNumber) && scannedNumber > 0 && scannedNumber < 21) {
            navigate('/user-form'); 
            localStorage.setItem("Table No",scannedNumber)
          }
        })
        .catch((err) => console.error('Error starting QR scanner: ', err));
    };
    startScan(); 
    return () => {
      codeReader.reset();
    };
  }, [scanResult,navigate]);

  return (
    <div>
      <h1>Scan QR Code</h1>
      <video ref={videoRef} width="75%" height="50%" style={{ border: '1px solid black' }}></video>
      {scanResult && (
        <div>
          <h3>Scanned Data:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default QrScanner;
