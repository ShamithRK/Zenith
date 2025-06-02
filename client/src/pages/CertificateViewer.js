import React from 'react';

function CertificateViewer() {
  return (
    <div className="card">
      <h2>Your Certificate</h2>
      <p>Congratulations on completing the course!</p>
      <img
        src="/assets/sample-certificate.png"
        alt="Certificate"
        style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
      />
      <a href="/assets/sample-certificate.png" download>
        <button style={{ marginTop: '20px' }}>Download Certificate</button>
      </a>
    </div>
  );
}

export default CertificateViewer;
