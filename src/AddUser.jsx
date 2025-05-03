// import CustomInput from './shared/CustomInput';
// import CustomButton from './shared/CustomButton';
import './AddUser.css';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AddUser(){
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async()=>{
    try{
      const{data} = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    }catch(err){
      setError(err.message);
    }finally{
      setIsLoading(false);
    }
  }
  useEffect(function(){
    getProducts();
  }, []);

  if(isLoading){
    return <div className='alert alert-success'>wait</div>
  }
  if(error){
    return <div className='text text-danger'>{error}</div>
  }
  return(
    <div className='container'>
    { products.map(product=>
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src = {product.thumbnail} />
        </div>
    )}
    </div>
  )
}

// function AddUser() {
//   return (
//     <form className="form">
//       <CustomInput label="Name" placeholder="Enter name" />
//       <CustomInput label="ID" placeholder="Enter ID" />
//       <CustomInput label="Email" placeholder="Enter email" />
//       <CustomInput label="Status" placeholder="Enter status" />
//       <CustomInput label="Age" placeholder="Enter age" />

//       <CustomButton text="Submit" anotherClass="submit-btn" />
//     </form>
//   );
// }

// export default AddUser;
