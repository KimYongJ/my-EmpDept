import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DeptSelectAll.module.css';
import DeptPagination from './DeptPagination';
function DeptSelectAll() {
  const [data, setData] = useState(0);
  const [param, setParam] = useState(1); //파라미터 전달시 몇 번째를 끊어서 줄건지 확인해 줌 , 1을 초기값을 해야 첫화면을 띄워 준다.
  const [totalPages, setTotalPages] = useState(0); // 10개씩 끊었을 때 나올 수 있는 페이지를 의미한다.
  const ShowData = () => {
    axios
      .get(`/depts/All/${param}`)
      .then((response) => {
        setTotalPages(response.data.totalPages);
        setData(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ShowData();
  }, [param]);

  return (
    <div className={styles.Outter}>
      <div className={styles.gorw1}></div>
      <div className={styles.gorw2}>
        <fieldset>
          <legend>
            <h1>부서 전체 조회</h1>
          </legend>
          {data !== 0 ? (
            <table className={styles.table}>
              <thead className={styles.color}>
                <tr>
                  <th>부서 번호</th>
                  <th>부서 이름</th>
                  <th>부서 지역</th>
                </tr>
              </thead>
              {data &&
                data.map((m) => (
                  <tbody key={m.deptno}>
                    <tr className={styles.trth}>
                      <th className={styles.borderBottom}>{m.deptno}</th>
                      <th className={styles.borderBottom}>{m.dname}</th>
                      <th className={styles.borderBottom}>{m.loc}</th>
                    </tr>
                  </tbody>
                ))}
            </table>
          ) : (
            <>로 딩 중</>
          )}
          {/* 페이징 부분  */}
          <DeptPagination totalPages={totalPages} setParam={setParam} />
        </fieldset>
      </div>
      <div className={styles.gorw1}></div>
    </div>
  );
}

export default DeptSelectAll;
