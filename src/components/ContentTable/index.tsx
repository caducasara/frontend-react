import React from 'react';
import TableItem from '../TableItem';
import Pagination from '../Pagination'
import './styles.scss';
import { usePosts } from '../../hooks/usePosts';

interface ContentTableProps {
  titleTable: string;
  title: string;
  content: string;
}

export default function ContentTable({ titleTable, title, content }: ContentTableProps) {

  const { posts } = usePosts();

  return (
    <div className="contentTable">
      <header>
        <h2>{titleTable}</h2>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>{title}</th>
            <th>{content}</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <TableItem key={post.id} itemProps={post} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}