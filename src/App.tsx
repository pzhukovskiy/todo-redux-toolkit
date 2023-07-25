import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { addTodo } from './store/slice/TodoSlice';
import ListTodo from './components/listTodo/ListTodo';
import { Wrapper } from './styled/wrapper/Wrapper';
import { Button } from './styled/button/Button';
import { TodoInputWrapper, TodoWrapper } from './styled/todoWrapper/TodoWrapper';
import { Title } from './styled/title/Title';
import { Input } from './styled/input/Input';

const App = () => {

  const [id, setId] = useState(0);
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo);

  const handleAddTodo = () => {
    const data = {id, text};
    if (!text) {

    }
    else {
      dispatch(addTodo([data]));
      setId((prev) => prev += 1);
      setText('');
    }
  }

  return (
    <Wrapper>
      <Title>Todo</Title>
        <TodoInputWrapper>
          <Input type="text" value={text} placeholder='Введите текст' onChange={(e: any) => setText(e.target.value)}/>
          <Button onClick={() => handleAddTodo()} style={{marginLeft: '5px'}}>Добавить</Button>
        </TodoInputWrapper>
      <ListTodo todo={todoList.todo}/>
    </Wrapper>
  )
}

export default App