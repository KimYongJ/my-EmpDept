package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.model.Dept;
import com.example.repository.DeptRepository;


@Service
public class DeptServiceImpl implements DeptService {

	@Autowired //의존성주입
	private DeptRepository deptRepository;
	
	// 전체 불러오기
	@Override
	public Page<Dept> getDeptAll(Pageable pageable) {
		return deptRepository.findAll(pageable);
	}
	// 특정 값 불러오기
	@Override
	public Dept getDeptByDeptno(Long deptno) {
		return deptRepository.findDeptByDeptno(deptno);
	}
	// 값 삭제하기
	@Override
	public int deleteDeptByDeptno(Long deptno) {
		return deptRepository.deleteByDeptno(deptno);
	}
	// 값 저장하기
	@Override
	public Dept saveDept(Dept Dept) {
		return deptRepository.save(Dept);
	}
	// 값 수정하기
	@Override
	public Dept updateDept(Dept Dept) {
		return deptRepository.save(Dept);
	}
	
	
}
