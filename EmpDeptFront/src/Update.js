import React, { useState } from 'react';
import axios from 'axios';
import styles from './Insert.module.css';
function Update() {
  const [employee, setEmployee] = useState({
    empno: '',
    ename: '',
    job: '',
    mgr: '',
    hiredate: '',
    sal: '',
    comm: '',
    dept: {},
  });
  const [dept, setDept] = useState({
    deptno: '',
    dname: '',
    loc: '',
  });
  //emp테이블 값 입력
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
    setDept({
      ...dept,
      [name]: value,
    });
  };
  //dept 값 입력
  const depthandleChange = (e) => {
    const { name, value } = e.target;
    setDept({
      ...dept,
      [name]: value,
    });
  };
  // hiredate 형식에 맞게 변경하는 함수
  const valueSetting = () => {
    let Value = employee.hiredate + 'T00:00:00';
    employee.hiredate = Value;
  };
  // post 전달 함수
  const save = (e) => {
    e.preventDefault();
    if (employee.hiredate.length === 10) {
      //hiredate 문법 오류로 서버로 보내줄 때 오류뜨지 않도록
      valueSetting();
    }
    employee.dept = dept;
    axios
      .put(`/emp`, employee)
      .then((response) => {
        if ('' === response.data) {
          alert('사원 번호 혹은 부서 번호를 다시 확인해주세요.');
        } else {
          alert('저장 성공');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //입력된 데이터들 초기화 하는 함수
  const resetWindow = (e) => {
    employee.empno = '';
    employee.ename = '';
    employee.job = '';
    employee.mgr = '';
    employee.hiredate = '0000-01-01T00:00:00';
    employee.sal = '';
    employee.comm = '';
    employee.dept = {};
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
              <h1>사원 정보 수정</h1>
            </legend>
            <div className={styles.flexCss}>
              <div>
                <h3>[ EMP 테이블 ]</h3>
                <div>
                  사원 번호 :<br />
                  <input
                    type="number"
                    placeholder="ex) 7369"
                    name="empno"
                    value={employee.empno}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  이름 :<br />
                  <input
                    type="text"
                    placeholder="ex) SCOTT"
                    name="ename"
                    value={employee.ename}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  직업 :<br />
                  <input
                    type="text"
                    placeholder="ex) SALESMAN"
                    name="job"
                    value={employee.job}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  사수의 사원 번호 :<br />
                  <input
                    type="number"
                    placeholder="ex) 7839"
                    name="mgr"
                    value={employee.mgr}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  입사 일자 :<br />
                  <input type="date" name="hiredate" onChange={handleChange} />
                </div>
                <br />
                <div>
                  연봉 :<br />
                  <input
                    type="text"
                    placeholder="ex) 8000"
                    name="sal"
                    value={employee.sal}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div>
                  보너스 :<br />
                  <input
                    type="text"
                    placeholder="ex) 1400"
                    name="comm"
                    value={employee.comm}
                    onChange={handleChange}
                  />
                </div>
              </div>
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
              </div>
            </div>
            <br /> <br />
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

export default Update;
