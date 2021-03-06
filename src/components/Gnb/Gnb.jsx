import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import { FiMenu } from 'react-icons/fi';
import { Panel } from './Panel';

import styles from './Gnb.module.scss';


export const Gnb = inject('myPointStore', 'userStore')(observer(({ myPointStore, userStore }) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const logOut = () => {
    setIsOpenPanel(false);
    userStore.logOut();
  };

  return (
    <>
      <div className={styles.gnbWrapper}>
        <div className={styles.gnbContents}>
          <Link to="/">
            <img src={require('src/assets/images/Logo/YTing.png')} className={styles.logoImage} alt="영남팅" />
          </Link>
          <div className={styles.pointWrapper}>
            <div className={styles.point}>
              포인트
              <span className={styles.count}>{myPointStore.restPoint}</span>
            </div>
          </div>
          <div className={styles.panelWrapper}>
            <FiMenu onClick={() => setIsOpenPanel(true)} />
            <Panel
              isOpen={isOpenPanel}
              close={() => setIsOpenPanel(false)}
            >
              <Link to="/">
                <img src={require('src/assets/images/Logo/YTing.png')} className={styles.logoImage} alt="영남팅" />
              </Link>

              <hr className={styles.separator} />

              <div className={styles.serviceTitle}>
                셀프 소개팅
              </div>
              <Link to="/selso" className={styles.link}>
                <div className={styles.linkTitle} onClick={() => setIsOpenPanel(false)}>
                  목록 보기
                </div>
              </Link>
              <Link to="/user/register" className={styles.link}>
                <div className={styles.linkTitle} onClick={() => setIsOpenPanel(false)}>
                  프로필 등록하기
                </div>
              </Link>

              <hr className={styles.separator} />

              {
                userStore.isLoggedIn ?
                  <>
                    {
                      userStore?.user?.isConfirmedStudent ?
                        null
                        :
                        <Link to="/user/sign-up/YEUNGNAM" className={styles.link}>
                          <div className={styles.linkTitle} onClick={() => setIsOpenPanel(false)}>
                            회원가입 마무리하기
                          </div>
                        </Link>
                    }
                    <Link to="/my" className={styles.link}>
                      <div className={styles.linkTitle} onClick={() => setIsOpenPanel(false)}>
                        마이페이지
                      </div>
                    </Link>
                    <div className={styles.linkTitle} onClick={logOut}>
                      로그아웃
                    </div>
                  </>
                  :
                  <>
                    <Link to="/user/log-in" className={styles.link}>
                      <div className={styles.linkTitle} onClick={() => setIsOpenPanel(false)}>
                        로그인
                      </div>
                    </Link>
                    <Link to="/user/sign-up/YEUNGNAM" className={styles.link}>
                      <div className={styles.linkTitle} onClick={() => setIsOpenPanel(false)}>
                        회원가입
                      </div>
                    </Link>
                  </>
              }
            </Panel>
          </div>
        </div>
      </div>
      <div className={styles.blankBox} />
    </>
  );
}));
