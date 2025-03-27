'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './resources.module.css';

// Imported image assets
import background from '../../../public/resources/background.svg';
import folder_icon from '../../../public/resources/folder-icon.svg';
import CHEM_Flowchart from '../../../public/resources/CHEM_Flowchart.png';
import CHEM_Flowchart_Applied from '../../../public/resources/CHEM_Flowchart_Applied.png';

const TABS = ['FlowChart', 'Courses', 'Extra Material'];

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState('FlowChart');
  const [fadeKey, setFadeKey] = useState(0);

const handleTabChange = (tab: string) => {
  setSelectedTab(tab);
  setFadeKey(prev => prev + 1); // forces re-render to trigger animation
};

  const handleViewMaterial = (index: number) => {
    console.log(`View materials clicked for card ${index + 1}`);
    // Add 
  };
  
  const renderContent = () => {
    switch (selectedTab) {
      case 'FlowChart':
        return (
          <div className={styles.flowchartImageContainer}>
            <div className={styles.flowchartSection}>
              <h3 className={styles.flowchartTitle}>General Chemical Engineering Flowchart</h3>
              <Image
                src={CHEM_Flowchart}
                alt="General CHEM Flowchart"
                className={styles.flowchartImage}
                placeholder="blur"
              />
            </div>
            <div className={styles.flowchartSection}>
              <h3 className={styles.flowchartTitle}>Applied Chemical Engineering Flowchart</h3>
              <Image
                src={CHEM_Flowchart_Applied}
                alt="Applied CHEM Flowchart"
                className={styles.flowchartImage}
                placeholder="blur"
              />
            </div>
          </div>
        );
      case 'Courses':
        return (
          <div className={styles.cardsWrapper}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src={folder_icon} alt="Icon" width={50} height={50} />
                </div>
                <h3 className={styles.cardTitle}>CHEM 101</h3>
                <button
  className={styles.cardButton}
  onClick={() => handleViewMaterial(i)} // ← add this handler
>
  View Materials →
</button>
              </div>
            ))}
          </div>
        );
      case 'Extra Material':
        return <div className={styles.comingSoon}>Coming Soon...</div>;
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 15rem left',
        backgroundSize: 'contain',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div className={styles.tabLinks}>
      {TABS.map(tab => (
  <button
    key={tab}
    className={`${styles.tabLink} ${selectedTab === tab ? styles.selected : ''}`}
    onClick={() => handleTabChange(tab)}
  >
    {tab}
  </button>
))}

      </div>
      <div key={fadeKey} className={styles.tabContentFade}>
  {renderContent()}
</div>

    </div>
  );
};

export default Resources;
