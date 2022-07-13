//import lombok.AllArgsConstructor;
//import lombok.NoArgsConstructor;
//import lombok.ToString;

//package com.xample.dto;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//
//import com.example.model.Dept;
//
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//@Builder
//@Entity
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
//public class DeptDTO {
//
//	@Id
//	@Column
//	private Long deptno;
//	private String dname;
//	private String loc;
//	public DeptDTO(Long deptno) {
//		if(deptno!=null) {
//			this.deptno=deptno;
//		}
//	}
//	public Dept dtoToEntity(DeptDTO deptDTO) {
//		Dept deptEntity = Dept.builder()
//						.dname(deptDTO.getDname())
//						.loc(deptDTO.getLoc())
//						.build();
//		return deptEntity;
//	}
//}
