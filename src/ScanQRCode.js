import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const ScanQRCode = () => {
  const [socialLink, setSocialLink] = useState('');

  const handleScan = (data) => {
    if (data) {
      setSocialLink(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {socialLink && <p>{socialLink}</p>}
    </div>
  );
};

export default ScanQRCode;
