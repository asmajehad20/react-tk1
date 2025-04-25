import './CustomInput.css';
function CustomInput(props){
    return (
        <div className='row' >
            <label>{props.label}</label>
            <input
               type="text"
               className="input"
               placeholder={props.placeholder}
               value={props.value}
            />
        </div>
        
      );
}
export default CustomInput;