package com.example.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Emp;

@Repository
public interface EmpRepository extends JpaRepository<Emp, Long>{
	public Page<Emp> findAll(Pageable pageable);
	public Emp findByEmpno(Long empno);
	public Emp save(Emp emp);
	public int deleteByEmpno(Long empno);
}
