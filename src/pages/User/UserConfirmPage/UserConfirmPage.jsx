import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

import styles from './UserConfirmPage.module.scss';


const UserConfirmPage = inject('signUpStore')(observer(({ signUpStore }) => {

  const { userCode } = useParams();

  useEffect(() => {
    signUpStore.authUniv(userCode);
  }, []);

  const title = (nickname) => (
    <div className={styles.titleWrapper}>
      <p className={styles.title}>
        홍익대학교 학생<br />
        {nickname}님 인증 완료
      </p>
    </div>
  );

  return (
    <div className={styles.pageWrapper}>
      { title(signUpStore.root.userStore.profile.nickname) }
      <div>
        <p className={styles.description}>
          4단계를 통해<br/>
          캠쿠와 함께 마이프로필을 완성해봐요!
        </p>
      </div>
      <img src={require('src/assets/images/UserConfirm/cuteCat@3x.png')} className={styles.image} alt='설명' />
      <div className={styles.skipButtonWrapper}>
        <Link to='/selso' className={styles.skipButton}>Skip</Link>
      </div>
      <div className={styles.nextButtonWrapper}>
        <Link to='/user/register'>
          <button className={styles.nextButton}>만들러 가기</button>
        </Link>
      </div>
    </div>
  );
}));

export default UserConfirmPage;
