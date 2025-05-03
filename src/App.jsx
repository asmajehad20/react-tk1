import {useState} from "react";
import {useRef} from "react";
import User from "./User.jsx";
import AddUser from "./AddUser.jsx";
function App(){
  // const [users, setUsers] = useState([
  //   {"id":1, "name":"tariq", "email":"tariq@gmail.com", "isBlocked":true},
  //   {"id":2, "name":"anas", "email":"anas@gmail.com", "isBlocked":false},
  //   {"id":3, "name":"hala", "email":"hala@gmail.com", "isBlocked":true},
  //   {"id":4, "name":"asmaa", "email":"asmaa@gmail.com", "isBlocked":true},
  // ]);

  const nameInput = useRef();
  const registerUser = (e)=>{
    e.preventDefault();
    console.log(nameInput.current.value);
  }
  const handleChange = ()=>{
    console.log(nameInput.current.value);
  }

  return(
    <div>
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <div className="mb-3">
          <label className="form-label">user name</label>
          <input ref={nameInput}onChange={handleChange} type="text" className="form-control" />

        </div>
        <button type="submit" className="btn btn-outline-primary">Register</button>
      </form>
      {/* <div className="users">
      {
        users.map((user)=>
          <User name={user.name} email={user.email} key="user.id"/>
        )
      }
      </div>
      <AddUser /> */}
    </div>
    
  );
}

export default App;