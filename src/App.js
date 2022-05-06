import './App.css'
import { useForm } from 'react-hook-form'

function App () {
  const onSubmit = (data) => {
    console.log('Registered Successfully', data)
  }
  const { register, handleSubmit } = useForm()

  return (
    <div className='App'>
      <form className='container'>
        <label>
          Name
          <input
            type='text'
            {...register('name')}
            placeholder='Enter your name'
            required
          />
        </label>
        <br />
        <label>
          Email
          <input
            type='email'
            {...register('email')}
            placeholder='Enter your Email'
            required
          />
        </label>
        <br />
        <label>
          Mobile Number
          <input
            type='number'
            {...register('mobilenumber')}
            placeholder='Enter mobile number'
          />
        </label>
        <br />
        <label>
          Country
          <input type='text' placeholder='Enter Country' />
        </label>
        <br />
        <label>
          State
          <input type='text' placeholder='Enter State' />
        </label>
        <br />
        <label>
          City
          <input type='text' placeholder='Enter City' />
        </label>
        <br />
        <label>
          message
          <textArea
            type='text'
            {...register('message')}
            style={{ width: 200 }}
            placeholder='Type Here'
          />
        </label>
        <br />
        <button onSubmit={handleSubmit(onSubmit)} type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
