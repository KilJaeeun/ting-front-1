import React, { useState } from 'react';
import { useStores } from 'src/utils/useStores';


export default () => {
  const { userStore } = useStores();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const setEmail = (e) => {
    setForm({
      email: e.target.value,
      password: form.password,
    });
  };

  const setPassword = (e) => {
    setForm({
      email: form.email,
      password: e.target.value,
    });
  };

  const logIn = () => {
    userStore.logIn(form.email, form.password)
      .then(res => {
        setMessage(res.message);
      })
  };

  const logOut = () => {
    userStore.logOut();
  };

  const fetchLikes = async () => {
    // Todo(maitracle): 확인용으로 작성한 함수이므로, likes view page 작성 후 위치 변경
    await userStore.fetchLikes();
  };

  return (
    <div>
      email: <input type='text' value={form.email} onChange={setEmail} /> <br />
      password: <input type='password' value={form.password} onChange={setPassword} />
      <button onClick={logIn}>login</button>
      <button onClick={logOut}>logout</button>
      <button onClick={fetchLikes}>fetchLikes</button>
      <div>{ message }</div>
    </div>
  );
};