import React from 'react';

import styles from './SelsoItemCard.module.scss';


export default function SelsoItemCard({ selsoItem }) {
  return (
    <div className={styles.card}>
      <div className={styles.leftBox}>
        <div className={styles.titleBox}>
          <div className={styles.nickname}>
            {selsoItem.nickname}
          </div>
          <div className={styles.age}>
            {`${selsoItem.profile.age}살`}
            <img src={require('src/assets/images/SelsoList/New@3x.png')} className={styles.new} alt="new" />
          </div>
        </div>
        <div className={styles.tags}>{selsoItem.tags}</div>
        <div className={styles.oneSentenceBox}>
          { selsoItem.oneSentence }
        </div>
      </div>
      <div className={styles.rightBox}>
        <img src={selsoItem.image || require('src/assets/images/defaultProfileImage.png')} className={styles.image} alt="프로필 이미지" />
      </div>
    </div>
  );
}
