import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SelectAll.module.css';
import EmpPagination from './EmpPagination';
function SelectAll() {
  const [data, setData] = useState(0);
  const [param, setParam] = useState(1);

  const [totalPages, setTotalPages] = useState(0);
  const ShowData = () => {
    axios
      .get(`/emps/All/${param}`)
      .then((response) => {
        setData(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ShowData();
  }, [param]);
  return (
    <div>
      <fieldset>
        <legend>
          <h1>사원 전체 조회</h1>
        </legend>
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
              {data.map((m) => (
                <tr className={styles.trth} key={m.empno}>
                  <th className={styles.borderBottom}>{m.empno}</th>
                  <th className={styles.borderBottom}>{m.ename}</th>
                  <th className={styles.borderBottom}>{m.job}</th>
                  <th className={styles.borderBottom}>{m.mgr}</th>
                  <th className={styles.borderBottom}>{m.hiredate}</th>
                  <th className={styles.borderBottom}>{m.sal}</th>
                  <th className={styles.borderBottom}>{m.comm}</th>
                  {m.dept != null ? (
                    <>
                      <th className={styles.borderBottom}>{m.dept.deptno}</th>
                      <th className={styles.borderBottom}>{m.dept.dname}</th>
                      <th className={styles.borderBottom}>{m.dept.loc}</th>
                    </>
                  ) : (
                    <>
                      <th className={styles.borderBottom}></th>
                      <th className={styles.borderBottom}></th>
                      <th className={styles.borderBottom}></th>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <> 데 이 터 로 딩 중 </>
        )}
        {/* 페이징 부분  */}
        <EmpPagination totalPages={totalPages} setParam={setParam} />
      </fieldset>
    </div>
  );
}

export default SelectAll;
