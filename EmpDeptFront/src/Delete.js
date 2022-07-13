import axios from 'axios';
import React, { useState } from 'react';
import styles from './SelectAll.module.css';
function Delete() {
  const [param, setParam] = useState(0);
  const [data, setData] = useState('');
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);
  // 데이터 입력 함수
  const change = (e) => {
    setParam(e.target.value);
    setData(e.target.value);
  };
  // axios 함수
  const Delete = (e) => {
    e.preventDefault(); // form함수의 페이지 전환 방지 코드
    setData('');
    axios
      .delete(`/emp/${param}`)
      .then((response) => {
        if (response.data === 0) {
          setSuccess(0);
          setFail(1);
        } else {
          setSuccess(1);
          setFail(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>삭제할 사원 번호 입력</h1>
      <form onSubmit={Delete}>
        <input
          placeholder="ex) 7369"
          name="EMPNO"
          value={data}
          onChange={change}
          className={styles.input1}
        />
        <input type="submit" className={styles.input2} value="입력" />
      </form>
      <br />
      <br />
      {success !== 0 ? <h3>삭제 성공</h3> : <></>}
      {fail !== 0 ? <h3>삭제 실패, 사원 번호를 다시 확인 바랍니다.</h3> : <></>}
    </div>
  );
}

export default Delete;
