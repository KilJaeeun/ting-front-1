import React from 'react';
import { inject, observer } from 'mobx-react';


const IdealType = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setOneSentence(e.target.value);
    return (
      <div className="survey">
        <div className="anwserWrap">
          <p> IdealTypeIdealTypeIdealType한줄표현입력하세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
      </div>
    );
  }),
);

export default IdealType;