import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';
import './AddUser.css';

function AddUser() {
  return (
    <form className="form">
      <CustomInput label="Name" placeholder="Enter name" />
      <CustomInput label="ID" placeholder="Enter ID" />
      <CustomInput label="Email" placeholder="Enter email" />
      <CustomInput label="Status" placeholder="Enter status" />
      <CustomInput label="Age" placeholder="Enter age" />

      <CustomButton text="Submit" anotherClass="submit-btn" />
    </form>
  );
}

export default AddUser;
