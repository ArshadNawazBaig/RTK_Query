import React from 'react'

interface IProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<IProps> = ({todo, setTodo}) => {
  return (
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
  )
}