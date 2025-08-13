
// import AddTodos from './components/AddTodo.jsx'
// import Todos from './components/Todos.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { promoteToAdmin } from './features/admin/adminSlice.js';

function App() {
  const admin = useSelector(state => state.admin)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  return (
    <>
      {/* <AddTodos/>
      <Todos/> */}
      <h2>Users</h2>
      {user.map(item => (
        <li key={item}>
          {item}
          <button onClick={() => dispatch(promoteToAdmin(item))}>
            Make Admin
          </button>
        </li>
      ))}
       <h2>Admins</h2>
      <ul>
        {admin.map( item=> <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
