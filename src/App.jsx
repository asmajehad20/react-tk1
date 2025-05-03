import {useState} from "react";
import {useRef} from "react";
function App(){
  const [user,setUser] =useState({
    name:'',
    email:'',
    password:''
  })
  
  const handleChange =(e)=>{
    const {name,value} = e.target;

    setUser({
      ...user,
      [name]:value
    })
  }
  // const handleChangeUserName = (e)=>{
  //   const {value} = e.target;
  //   setUser({name:value, email:user.email, password:user.password});
  // }
  // const handleChangeEmail = (e)=>{
  //   const {value} = e.target;
  //   setUser({name:value, email:user.email, password:user.password});
  // }
  // const handleChangePassword = (e)=>{
  //   const {value} = e.target;
  //   setUser({name:value, email:user.email, password:user.password});
  // }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(user);
  }

  return(
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">user name</label>
          <input name="name" value={user.name}onChange={handleChange} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">user email</label>
          <input name="email" value={user.email}onChange={handleChange} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">user password</label>
          <input name="password" value={user.password}onChange={handleChange} type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-outline-primary">Register</button>
      </form>
      
    </div>
    
  );
}

export default App;