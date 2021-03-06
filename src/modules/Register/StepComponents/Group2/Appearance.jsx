import React, { useState, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { getPlaceholderMessageByLengthLimit } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const Appearance = inject('registerStore')(
  observer(forwardRef(({ registerStore, componentMinHeight }, ref) => {
    const [appearanceValidationMessage, setAppearanceValidationMessage] = useState('');
    

    const validateAppearance = (data) => {
      const validationMessage = getLengthValidationMessage(
        selsoFieldsMinLengthLimit.Appearance, selsoFieldsMaxLengthLimit.Appearance, data
      );
      setAppearanceValidationMessage(validationMessage);
      
      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateAppearance(registerStore.registerData.appearance);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const setMinHeight = {
      minHeight: `${componentMinHeight}px`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={setMinHeight}>
          <Textarea
            placeholder={getPlaceholderMessageByLengthLimit(selsoFieldsMinLengthLimit.Appearance)}
            value={registerStore.registerData.appearance}
            onChange={(e) => registerStore.setRegisterData('appearance', e.target.value)}
            onFocus={() => setAppearanceValidationMessage('')}
            onBlur={() => validateAppearance(registerStore.registerData.appearance)}
            maxLength={selsoFieldsMaxLengthLimit.Appearance}
          />
          <TextLengthBox 
            textLength={registerStore.registerData.appearance.length}
            minLength={selsoFieldsMinLengthLimit.Appearance}
            maxLength={selsoFieldsMaxLengthLimit.Appearance}
            validationMessage={appearanceValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} ref={ref}/>
      </>
    );
  })),
);

export default Appearance;
