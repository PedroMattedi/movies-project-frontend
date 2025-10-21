import * as Styled from "./styles";
import { useState, useEffect, useMemo } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= 3) {
      for (let i = 1; i <= maxVisible; i++) pages.push(i);
    } else if (page >= totalPages - 2) {
      for (let i = totalPages - maxVisible + 1; i <= totalPages; i++)
        pages.push(i);
    } else {
      for (
        let i = Math.max(1, page - 2);
        i <= Math.min(totalPages, page + 2);
        i++
      ) {
        pages.push(i);
      }
    }

    return pages;
  }, [page, totalPages]);

  return (
    <Styled.PaginationContainer>
      <Styled.PaginationButton
        isArrow
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        {"<"}
      </Styled.PaginationButton>

      {pageNumbers.map((pageNum) => (
        <Styled.PaginationButton
          key={pageNum}
          isActive={pageNum === page}
          onClick={() => handlePageChange(pageNum)}
        >
          {pageNum}
        </Styled.PaginationButton>
      ))}

      <Styled.PaginationButton
        isArrow
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        {">"}
      </Styled.PaginationButton>
    </Styled.PaginationContainer>
  );
};

export default Pagination;
