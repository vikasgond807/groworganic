import './App.css'

import { Link, Route, Routes ,useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import UserDetails from './Components/UserDetails'

function App() {


  return (
    <div className="App">

      <Routes>

        <Route exact path='/' element={<UserForm />} />

        <Route exact path='/userdetails' element={<UserDetails />} />

        <Route path='*' element={<h2>Not Found 404</h2>} />

      </Routes>
    </div>
  )
}




const UserForm = () => {


  const navigate=useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();



  const OnSubmit = (data) => {
    
    
    console.log(data);

    navigate('/userdetails');
  }

  return (
    <>
      <div className="container">

        <div className="heading-text">
          <h3> User Form </h3>
          <h4>Enter Your Details </h4>
        </div>

          <form onSubmit={handleSubmit(OnSubmit)}>

         
            <input

              className='input-text'
              {...register('name', { required: "This Field is required" }
              )}
              type='text'
              placeholder='Enter your Name'

            />
            <p>{errors.name?.message}</p>

      


            <input
            className='input-text'
              {...register('email', { required: "This Field is required" }
              )}
              type='email'
              placeholder='Enter your Email'

            />
            <p>{errors.email?.message}</p>

            
            <input
            className='input-text'
              {...register('password', { required:'Required' }
              )}
              type='password'
              placeholder='Enter your Password'

            />
            <p>{errors.password?.message}</p>



            <input type='submit' className='main__app_submit-button'/>


          </form>


        <div className="text-container" >
          Page  1 of 2 &#8594;
        </div>
      </div>
    </>
  );
}

export default App
