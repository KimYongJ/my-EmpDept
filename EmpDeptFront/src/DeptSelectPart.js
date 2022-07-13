import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DeptSelectAll.module.css';
function DeptSelectPart() {
  const [data, setData] = useState(0);
  const [param, setParam] = useState(0);
  const [text, setText] = useState('');
  // axios 함수
  const ShowData = (e) => {
    e.preventDefault();
    axios
      .get(`/depts/${param}`)
      .then((response) => {
        setText('');
        setData(response.data);
        if ('' == response.data) {
          setData(0);
          alert('데이터가 없습니다. 부서 번호를 다시 확인하세요.');
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
        <span className={styles.spantag}>부서 번호 입력 : </span>

        <input
          placeholder="ex) 10"
          name="EMPNO"
          value={text}
          onChange={change}
          className={styles.input1}
        />
        <button onClick={ShowData}>입력</button>
        {data !== 0 ? (
          <fieldset>
            <legend>
              <h3>조회 결과</h3>
            </legend>
            <table className={styles.table}>
              <thead className={styles.color}>
                <tr>
                  <th>부서 번호</th>
                  <th>부서 이름</th>
                  <th>부서 지역</th>
                </tr>
              </thead>

              <tbody>
                <tr className={styles.trth}>
                  <th className={styles.borderBottom}>{data.deptno}</th>
                  <th className={styles.borderBottom}>{data.dname}</th>
                  <th className={styles.borderBottom}>{data.loc}</th>
                </tr>
              </tbody>
            </table>
          </fieldset>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.gorw1}></div>
    </div>
  );
}
export default DeptSelectPart;
