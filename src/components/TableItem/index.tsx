import React from 'react'

interface TableItemProps {
  itemProps: {
    id: number;
    user_id: number;
    title: string;
    body: string;
  }
}

export default function TableFunction(props: TableItemProps) {
  return (
    <tr>
      <td>{props.itemProps.title}</td>
      <td>{props.itemProps.body}</td>
    </tr>
  )
}