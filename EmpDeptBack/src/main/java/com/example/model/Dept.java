package com.example.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
public class Dept {
	@Id
	private Long deptno;
	
	private String dname;
	
	private String loc;

	@OneToMany(mappedBy = "dept") //(다)의 관계가 주인이다. 1:다 관계에서 주인이아닌쪽에 mapedBy 키워드를 써준다. 주인이 Emp객체가 됨
	//mappeBy = 연결되는 컬럼값을 지정을 해주고 관계 설정을 해준다. 
	@JsonIgnore
	private List<Emp> emp=new ArrayList<Emp>(); 
}
