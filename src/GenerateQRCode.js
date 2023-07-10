import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const GenerateQRCode = () => {
  const [socialLink, setSocialLink] = useState('');

  const handleChange = (event) => {
    setSocialLink(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <QRCode value={socialLink} />
    </div>
  );
};

export default GenerateQRCode;
