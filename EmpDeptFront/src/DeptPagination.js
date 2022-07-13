import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 5px;
`;
const PaginationLi = styled.li`
  padding: 7px;
  font-size: 32px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    background-color: Black;
    color: white;
  }
`;
const PaginationSpan = styled.span`
  padding: 7px;
  font-size: 25px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    border: 1px solid black;
    background-color: Black;
    color: white;
  }
`;
const DeptPagination = ({ totalPages, setParam }) => {
  const [startPageNum, setStartPageNum] = useState(1);
  const [endPageNum, setEndPageNum] = useState(5);
  const NextPageFunction = () => {
    if (startPageNum != endPageNum) {
      setEndPageNum(totalPages < endPageNum + 5 ? totalPages : endPageNum + 5);
      setStartPageNum(startPageNum + 5);
      setParam(startPageNum + 5);
    }
  };
  const prevPageFunction = () => {
    setStartPageNum(startPageNum - 5);
    let endPageNumber = startPageNum - 5 + 4;
    setEndPageNum(endPageNumber);
    setParam(startPageNum - 5);
  };
  const pageNumbers = [];
  for (let i = startPageNum; i <= endPageNum; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div>
        <PaginationUl>
          {startPageNum != 1 ? (
            <PaginationLi onClick={prevPageFunction}> 이전 </PaginationLi>
          ) : (
            <></>
          )}
          {pageNumbers &&
            pageNumbers.map((num) => (
              <PaginationLi key={num} onClick={() => setParam(num)}>
                {num}
              </PaginationLi>
            ))}
          {(totalPages > 5) & (totalPages != endPageNum) ? (
            <PaginationLi onClick={NextPageFunction}> 다음 </PaginationLi>
          ) : (
            <></>
          )}
        </PaginationUl>
      </div>
    </>
  );
};
export default DeptPagination;
