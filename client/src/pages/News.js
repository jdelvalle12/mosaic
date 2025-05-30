import React from 'react';

const News = () => {
  return (
    <div style={styles.container}>
      <h1>Coming Soon</h1>
      <p>Stay tuned for the latest updates and news from Mosaic Digital Creations.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  }
};

export default News;