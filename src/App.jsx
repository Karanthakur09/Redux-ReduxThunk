
// import AddTodos from './components/AddTodo.jsx'
// import Todos from './components/Todos.jsx'
import { useSelector, useDispatch } from 'react-redux';
// import { promoteToAdmin } from './features/admin/adminSlice.js';
import { logoutAndFetchJoke } from './features/joke.js';

function App() {
  // const admin = useSelector(state => state.admin)
  // const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const users = useSelector((state) => state.logout.users);
  const { joke, status } = useSelector((state) => state.joke);

  return (
    <>
      {/* <AddTodos/>
      <Todos/> */}
      <h2>Users</h2>
      {/* {user.map(item => (
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
      </ul> */}
      <div style={{ padding: 20 }}>
        <h2>Users: {users.length ? users.join(', ') : 'No users logged in'}</h2>

        <hr />

        <button onClick={() => dispatch(logoutAndFetchJoke())}>
          Get a Joke
        </button>

        {status === 'loading' && <p>Loading joke...</p>}
        {joke && <p><strong>Joke:</strong> {joke}</p>}
      </div>
    </>
  )
}

export default App
