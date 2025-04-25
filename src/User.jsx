import CustomButton from "./shared/CustomButton";

function User(user){
    console.log(user);
    return (
        <div className="users" key={user.id}>
            <h2>user name is {user.name}</h2>
            <p>email: {user.email}</p>
            <CustomButton text="Details" type="secondary"/>
            <CustomButton text="Delete" type="danger" />
          </div>
    )
}
export default User;