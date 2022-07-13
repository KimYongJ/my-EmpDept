package com.example.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Dept;
// 함수 검색 키워드 : JPA 레파지토리 메소드 규칙 
@Repository
public interface DeptRepository extends JpaRepository<Dept, Long> {
		public Page<Dept> findAll(Pageable pageable);
		public Dept findDeptByDeptno(Long deptno);
		public int deleteByDeptno(Long deptno);
		public Dept save(Dept dept);
}
