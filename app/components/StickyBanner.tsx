import React from 'react';
import styles from './StickyBanner.module.css'; // Adjust the import path as necessary

const StickyBanner: React.FC = () => {
  return (
<div className={styles.container}>
    <div className={styles.banner}>
      Your Message Here
    </div>
</div>
  );
};

export default StickyBanner;
