import axios from 'axios';
import React, { useState } from 'react';
import styles from './SelectAll.module.css';
function SelectPart() {
  const [param, setParam] = useState(0);
  const [text, setText] = useState('');
  const [data, setData] = useState(0);
  const [showError, setShowError] = useState(0);
  // 데이터 입력 함수
  const change = (e) => {
    setText(e.target.value);
    setParam(e.target.value);
  };
  // axios 함수
  const SelectPart = (e) => {
    if (param === 0) {
      return;
    }
    e.preventDefault(); // form함수의 페이지 전환 방지 코드
    setText('');
    axios
      .get(`/emps/${param}`)
      .then((response) => {
        if (response.data !== '') {
          setData(response.data);
          setShowError(0);
        } else {
          setShowError(1);
          setData(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>사원 번호 입력</h1>
      <form onSubmit={SelectPart}>
        <input
          placeholder="ex) 7369"
          name="EMPNO"
          value={text}
          onChange={change}
          className={styles.input1}
        />
        <input type="submit" className={styles.input2} value="입력" />
      </form>
      <br />
      <br />
      {data !== 0 ? (
        <table className={styles.table}>
          <thead className={styles.color}>
            <tr>
              <th>사번</th>
              <th>이름</th>
              <th>직업</th>
              <th>사수 사번</th>
              <th>입사일</th>
              <th>연봉</th>
              <th>보너스</th>
              <th>부서 번호</th>
              <th>부서 이름</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.trth}>
              <th className={styles.borderBottom}>{data.empno}</th>
              <th className={styles.borderBottom}>{data.ename}</th>
              <th className={styles.borderBottom}>{data.job}</th>
              <th className={styles.borderBottom}>{data.mgr}</th>
              <th className={styles.borderBottom}>{data.hiredate}</th>
              <th className={styles.borderBottom}>{data.sal}</th>
              <th className={styles.borderBottom}>{data.comm}</th>
              {data.dept != null ? (
                <>
                  <th className={styles.borderBottom}>{data.dept.deptno}</th>
                  <th className={styles.borderBottom}>{data.dept.dname}</th>
                  <th className={styles.borderBottom}>{data.dept.loc}</th>
                </>
              ) : (
                <>
                  <th className={styles.borderBottom}></th>
                  <th className={styles.borderBottom}></th>
                  <th className={styles.borderBottom}></th>
                </>
              )}
            </tr>
          </tbody>
        </table>
      ) : (
        <></>
      )}
      {showError !== 0 ? (
        <h3>데이터를 찾을 수 없습니다. 사원 번호를 다시 확인 바랍니다.</h3>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectPart;
