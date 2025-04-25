import {useState} from "react";
import User from "./User.jsx";
import AddUser from "./AddUser.jsx";
function App(){
  const [users, setUsers] = useState([
    {"id":1, "name":"tariq", "email":"tariq@gmail.com", "isBlocked":true},
    {"id":2, "name":"anas", "email":"anas@gmail.com", "isBlocked":false},
    {"id":3, "name":"hala", "email":"hala@gmail.com", "isBlocked":true},
    {"id":4, "name":"asmaa", "email":"asmaa@gmail.com", "isBlocked":true},
  ]);

  return(
    <div>
      {/* <div className="users">
      {
        users.map((user)=>
          <User name={user.name} email={user.email} key="user.id"/>
        )
      }
      </div> */}
      <AddUser />
    </div>
    
  );
}

export default App;