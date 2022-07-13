package com.example.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


import com.example.model.Emp;
import com.example.service.DeptServiceImpl;
import com.example.service.EmpServiceImpl;



@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
//@RequestMapping("/emp")// url 주소에  /emp가 자동으로 앞에 붙는다.
public class EmpRestController {
	@Autowired
	EmpServiceImpl empService;
	
	@Autowired
	DeptServiceImpl deptService;
	
	// 모든 Emp조회
	@GetMapping(value="/emps/All/{number}")
	public Page<Emp> getEmp(@PathVariable int number){
		Sort sort1 = Sort.by("empno").ascending();
		Pageable pageable = PageRequest.of(number-1, 10,sort1);
		Page<Emp> result = empService.getEmpAll(pageable);
		return result;
	}
	// Empno로 조회
	@GetMapping(value="/emps/{empno}")//@PathVariable은 url의 데이터를 가져올 때 사용한다.
	public Emp getByEmpno(@PathVariable Long empno){
		return empService.getByEmpno(empno);
	}
	
	// empno로 delete 하기
	@Transactional // 스프링에서 delete를 하기 위해서는 어노테이션을 써주어야 한다. 
	@DeleteMapping(value="/emp/{empno}")
	public int deleteByEmpno(@PathVariable Long empno){
		 return empService.deleteEmp(empno);
	}
	
	// emp객체를 전달 받아 create 하는 방식
	@PostMapping(value = "emp", consumes = MediaType.APPLICATION_JSON_VALUE) // Post는 값을 생성을 해주는 것
	public Emp createEmpJSON(@RequestBody Emp emp) {
		Long ServeEmpno = emp.getEmpno();
		try {
			Long MainEmpno = empService.getByEmpno(ServeEmpno).getEmpno();
			// 값이 없으면 nullException뜨고, 값이 있으면 업데이트 실패 text출력
			System.out.println("업데이트 실패, empno 값이 이미 있습니다. 다시 확인하세요");
			return null;
		}catch(Exception e) {
			if(deptService.getDeptByDeptno(emp.getDept().getDeptno())!=null){
				System.out.println("저장 성공");

				return empService.saveEmp(emp);
			}else {
				System.out.println("업데이트 실패, DEPTNO 값을 확인하세요");
				return null;			
			}
		}
	}	
//{ create Json 예시 
//    "empno": 8014,
//    "ename": "K",
//    "job": "P",
//    "mgr": 5555,
//    "hiredate": "1991-03-26T00:00:00",
//    "sal": 1000.0,
//    "comm": null,
//    "dept": {
//        "deptno" : 70,
//        "dname" : "RESEARCH",
//        "loc" : "DALLAS"
//    }
//}

//	// update 코드 
	@PutMapping(value = "emp", consumes = MediaType.APPLICATION_JSON_VALUE) // Post는 값을 생성을 해주는 것
	public Emp updateEmpJSON(@RequestBody Emp emp) {
		Long ServeEmpno = emp.getEmpno();
		try {
			String MainEmpno = String.valueOf(empService.getByEmpno(ServeEmpno).getEmpno());
			if(deptService.getDeptByDeptno(emp.getDept().getDeptno())!=null){
				System.out.println("저장 성공");
				return empService.saveEmp(emp);
			}else {
				System.out.println("업데이트 실패, DEPTNO 값을 확인하세요");
				return null;			
			}
		}catch(Exception e) {
			System.out.println("업데이트 실패, empno 값이 없습니다. 다시 확인하세요");
			return null;
		}		
	}	
}
