import { Link } from 'react-router-dom';
import styles from './App.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.nav1}>
        <div>
          <div>사원 정보</div>
          <div className={styles.colorSize}>
            <Link to="/SelectAll" className={styles.linkCSS}>
              사원 목록
            </Link>
            <Link to="/SelectPart" className={styles.linkCSS}>
              사원 조회
            </Link>
            <Link to="/Insert" className={styles.linkCSS}>
              사원 등록
            </Link>
            <Link to="/Update" className={styles.linkCSS}>
              사원 수정
            </Link>
            <Link to="/Delete" className={styles.linkCSS}>
              정보 삭제
            </Link>
          </div>
        </div>
        <div>
          <div>부서 정보</div>
          <div className={styles.colorSize}>
            <Link to="/DeptSelectAll" className={styles.linkCSS}>
              부서 목록
            </Link>
            <Link to="/DeptSelectPart" className={styles.linkCSS}>
              부서 조회
            </Link>
            <Link to="/DeptInsert" className={styles.linkCSS}>
              부서 등록
            </Link>
            <Link to="/DeptUpdate" className={styles.linkCSS}>
              부서 수정
            </Link>
            <Link to="/DeptDelete" className={styles.linkCSS}>
              부서 삭제
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
