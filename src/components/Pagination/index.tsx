import React from 'react';
import './styles.scss'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

import { usePosts } from '../../hooks/usePosts';

export default function Pagination() {

  const MAX_ITENS = 9;
  const MAX_LEFT = (MAX_ITENS - 1) / 2;

  const { totalPages, page, getPage } = usePosts();

  const firstPage = Math.max(page - MAX_LEFT, 1);

  return (
    <ul>
      <li>
        <button
          onClick={() => getPage(page - 1)}
          disabled={page === 1}
        >
          <BsFillArrowLeftSquareFill className="previous" />
          <span>Anterior</span>
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITENS, totalPages) })
        .map((_, index) => index + firstPage)
        .map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => getPage(pageNumber)}
              className={pageNumber === page ? 'paginationActive' : ''}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      <li>
        <button
          onClick={() => getPage(page + 1)}
          disabled={page === totalPages}
        >
          <span>Proximo</span>
          <BsFillArrowRightSquareFill className="next" />
        </button>
      </li>
    </ul>
  )
}