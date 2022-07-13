package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.model.Emp;
import com.example.repository.EmpRepository;
@Service
public class EmpServiceImpl implements EmpService {
	
	@Autowired
	private EmpRepository empRepository;
	
	@Override
	public Page<Emp> getEmpAll(Pageable pageable) {
		return empRepository.findAll(pageable);
	}
	@Override
	public Emp getByEmpno(Long empno) {
		return empRepository.findByEmpno(empno);
	}
	@Override
	public Emp saveEmp(Emp emp) {
		return empRepository.save(emp);
	}
	@Override
	public int deleteEmp(Long empno) {
		return empRepository.deleteByEmpno(empno);
	}
}
