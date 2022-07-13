package com.example.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.model.Dept;

public interface DeptService {
	public Page<Dept> getDeptAll(Pageable pageable);
	public Dept getDeptByDeptno(Long deptno);
	public int deleteDeptByDeptno(Long deptno);
	public Dept saveDept(Dept Dept);
	public Dept updateDept(Dept Dept);
}
