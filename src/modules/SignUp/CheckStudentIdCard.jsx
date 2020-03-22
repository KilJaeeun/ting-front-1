import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Btn from 'src/components/Button/Btn';
import Loading from 'src/components/Loading';

import styles from './CheckStudentIdCard.module.scss';


const CheckStudentIdCard = inject('signUpStore')(observer(({ signUpStore, history }) => {
  const [idCardImage, setIdCardImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const uploadIdCardImage = (e) => {
    setErrorMessage('');
    setIdCardImage(e.target.files[0]);
  };

  useEffect(() => {
    if (idCardImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(idCardImage);
    }
  }, [idCardImage]);


  const submit = () => {
    if (!idCardImage) {
      setErrorMessage('파일을 업로드해주세요.');
      return;
    }

    setIsLoading(true);

    signUpStore.uploadStudentIdCard(idCardImage)
      .then((res) => {
        if (res.status === 200) {
          history.push('/user/register');
        } else {
          setErrorMessage(res.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <input className={styles.imageInput} id="id-card" type="file" onChange={uploadIdCardImage} accept=".jpg,.png" />
          <label htmlFor="id-card">
            <div className={styles.imageLabel}>
              { imageSrc ?
                <img className={styles.imagePreview} src={imageSrc} alt="학생증 이미지 미리보기" />
                :
                <div className={styles.labelDescription}>이미지를 업로드해주세요.</div>
              }
            </div>
          </label>
          <div className={styles.errorMessage}>{errorMessage}</div>
        </div>

        <div className={styles.buttonWrapper}>
          <Btn value={'인증하기'} onClick={submit} />
        </div>
      </div>
      <Loading isLoading={isLoading} phrase={'이미지를 업로드중입니다.'} />
    </>
  );
}));

export default withRouter(CheckStudentIdCard);
