package com.example.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.model.Emp;

public interface EmpService {
	public Page<Emp> getEmpAll(Pageable pageable);
	public Emp getByEmpno(Long empno);
	public Emp saveEmp(Emp emp);
	public int deleteEmp(Long empno);
}
