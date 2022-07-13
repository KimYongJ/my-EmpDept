package com.example.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

//@Data 데이타 어노테이션을 만들면 setter까지 들어가게 되므로 엔티티의 설계 이유에 어긋난다. setter를 제거하기 위해 아래와 같이 선언한다.
@Getter
@Entity
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class Emp {
	@Id
	private Long empno;
	
	private String ename;
	
	private String job;
	
	private Integer mgr;
	
	private LocalDateTime hiredate;
	
	private Double sal;
	
	private Double comm;
	
	@ManyToOne //(fetch = FetchType.LAZY)// 이게 있으면 selet가 안된다.
	@JoinColumn(name = "deptno"
	,foreignKey = @ForeignKey(foreignKeyDefinition = "FOREIGN KEY (deptno) references member (deptno) ON DELETE SET NULL"))
	private Dept dept;
}