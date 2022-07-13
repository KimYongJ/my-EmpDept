import React, { useState } from 'react';
import styles from './DeptInsert.module.css';
import axios from 'axios';
function DeptInsert() {
  const [dept, setDept] = useState({
    deptno: '',
    dname: '',
    loc: '',
  });
  //dept 값 입력
  const depthandleChange = (e) => {
    const { name, value } = e.target;
    setDept({
      ...dept,
      [name]: value,
    });
  };
  // post 전달 함수
  const save = (e) => {
    e.preventDefault();
    axios
      .post(`/depts`, dept)
      .then((response) => {
        if ('' === response.data) {
          alert('부서 번호가 이미 있습니다. 다시 확인해주세요.');
        } else {
          alert('저장 성공');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 입력된 데이터를 초기화 하는 함수
  const resetWindow = (e) => {
    dept.deptno = '';
    dept.dname = '';
    dept.loc = '';
  };

  return (
    <div className={styles.Outter}>
      <div className={styles.gorw1}></div>
      <div className={styles.gorw2}>
        <form>
          <fieldset>
            <legend>
              <h1>부서 정보 등록</h1>
            </legend>
            <div className={styles.flexCss}>
              <div>
                <h3>[ DEPT 테이블 ]</h3>

                <div>
                  부서 번호 :<br />
                  <input
                    type="number"
                    placeholder="ex) 10"
                    name="deptno"
                    value={dept.deptno}
                    onChange={depthandleChange}
                  />
                </div>
                <br />
                <div>
                  부서 이름 :<br />
                  <input
                    type="text"
                    placeholder="ex) SALES"
                    name="dname"
                    value={dept.dname}
                    onChange={depthandleChange}
                  />
                </div>
                <br />
                <div>
                  근무 지역 :<br />
                  <input
                    type="text"
                    placeholder="ex) BUSAN"
                    name="loc"
                    value={dept.loc}
                    onChange={depthandleChange}
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </fieldset>
          <div className={styles.btn}>
            <button onClick={save} className={styles.input1}>
              입력
            </button>
            <button onClick={resetWindow} className={styles.input1}>
              취소
            </button>
          </div>
        </form>
      </div>
      <div className={styles.gorw1}></div>
    </div>
  );
}
export default DeptInsert;
