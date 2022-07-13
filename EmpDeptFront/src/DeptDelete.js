import React, { useState } from 'react';
import axios from 'axios';
import styles from './DeptDelete.module.css';
function DeptDelete() {
  const [data, setData] = useState(-1);
  const [param, setParam] = useState(0);
  const [text, setText] = useState('');
  // axios 함수
  const ShowData = (e) => {
    e.preventDefault();
    axios
      .delete(`/depts/${param}`)
      .then((response) => {
        setText('');
        setData(response.data);
        if (0 === response.data) {
          setData(0);
          alert('데이터가 없습니다. 부서 번호를 다시 확인하세요.');
        } else {
          alert('삭제 성공');
          setData(1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const change = (e) => {
    setParam(e.target.value);
    setText(e.target.value);
  };

  return (
    <div className={styles.Outter}>
      <div className={styles.gorw1}></div>
      <div className={styles.gorw2}>
        <fieldset>
          <legend>
            <h3>부서 삭제</h3>
          </legend>
          <span className={styles.spantag}>부서 번호 입력 : </span>
          <input
            placeholder="ex) 10"
            name="EMPNO"
            value={text}
            onChange={change}
            className={styles.input1}
          />
          <button onClick={ShowData}>입력</button>
          {data === 0 ? <h1>삭제 실패 부서 번호를 다시 확인하세요.</h1> : <></>}
        </fieldset>
      </div>
      <div className={styles.gorw1}></div>
    </div>
  );
}
export default DeptDelete;
