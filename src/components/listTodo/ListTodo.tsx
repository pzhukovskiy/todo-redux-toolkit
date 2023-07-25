import React, { FC } from 'react'
import { ListTodoType } from '../../types/listTodo/ListTodoType'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/slice/TodoSlice';
import { Button } from '../../styled/button/Button';
import { TodoWrapper } from '../../styled/todoWrapper/TodoWrapper';

const ListTodo: FC<ListTodoType> = ({todo}) => {

    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    }

  return (
    <TodoWrapper>
        {todo.length > 0 ? todo.map((name) => (
            <div key={name.id} style={{marginTop: '5px'}}>
                <h4>{name.id + 1}. {name.text}</h4>
                <Button $primary onClick={() => handleDelete(name.id)} style={{marginTop: '5px'}}>Удалить</Button>
            </div>
        )) : <span>Нет заданий</span>}
    </TodoWrapper>
  )
}

export default ListTodo