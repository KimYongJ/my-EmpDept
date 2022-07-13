package com.example.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Dept;
import com.example.service.DeptServiceImpl;


//@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class DeptRetController {
	@Autowired //의존성주입
	DeptServiceImpl deptService;

	// 모든 dept조회
	@GetMapping(value="/depts/All/{number}")
	public Page<Dept> getDepts(@PathVariable int number){
		Sort sort1 = Sort.by("deptno").ascending(); // Diary객체의 no 맴버변수를 기준으로 내림차순(descending()) 정렬 ascending()은 오름차순
		Pageable pageable = PageRequest.of(number-1, 10,sort1); // 인자 값의 의미는 순서대로 page번호 , 보여줄 페이지 갯수 , 정렬에 대한 부분,
		Page<Dept> result = deptService.getDeptAll(pageable);
		return result;
	}
	// 특정 dept 조회
	@GetMapping(value = "/depts/{deptno}")
	public Dept getDeptByDeptno(@PathVariable Long deptno) {
		return deptService.getDeptByDeptno(deptno);
	}
	
	// 삭제 
	@Transactional // 스프링에서 delete를 하기 위해서는 어노테이션을 써주어야 한다. 
	@DeleteMapping(value = "/depts/{deptno}")
	public int deleteDeptByDeptno(@PathVariable Long deptno) {
		System.out.println("deptno : "+deptno+"))");
				return deptService.deleteDeptByDeptno(deptno);
	}
	
	// 생성
	@PostMapping(value = "/depts", consumes = MediaType.APPLICATION_JSON_VALUE) // Post는 값을 생성을 해주는 것
	public Dept insertDeptForm(@RequestBody Dept dept) {
		if(deptService.getDeptByDeptno(dept.getDeptno())==null) {
			return deptService.saveDept(dept);
		}
		System.out.println("입력 실패");
		return null;
	}
	// 수정
	@PutMapping(value = "/depts", consumes = MediaType.APPLICATION_JSON_VALUE) // Post는 값을 생성을 해주는 것
	public Dept updateDeptForm(@RequestBody Dept dept) {
		if(deptService.getDeptByDeptno(dept.getDeptno())!=null) {
			return deptService.saveDept(dept);
		}
		else {
			System.out.println("업데이트 실패, DEPTNO 값을 확인하세요");
			return null;
		}
	}
}
