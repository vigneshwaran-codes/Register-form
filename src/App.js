import './App.css';
import { useForm } from 'react-hook-form';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, TextareaAutosize } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation
const RegisterSchema = yup.object.shape({
  name: yup.string().required(),
  email: yup.string().email().required().pattern(),
  mobilenumber: yup.number().integer().positive().max(10),
  country: yup.string(),
  state: yup.string(),
  city: yup.string(),
  Message: yup.string()
});

function App () {
  const onSubmit = (data) => {
    // console.log('Registered Successfully', data);
    window.alert(JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(RegisterSchema)
  });
  // const errors = formState.errors; 

  return (
    <div className='App'>
      <form className="container">
        <label>
          Name:
          <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            type="text"
            {...register('name')}
            required
          />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label>
          Email:
          <TextField
            id="outlined-basic"
            label="Enter your Email"
            variant="outlined"
            type="email"
            {...register('email')}
            required
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <label>
          Mobile Number:
          <TextField
            id="outlined-basic"
            label="Enter mobile number"
            variant="outlined"
            type="number"
            {...register('mobilenumber')}
          />
        </label>
        {errors.mobilenumber && <p>{errors.mobilenumber.message}</p>}
        <br />
        <label>
          Country:
          <TextField
            id="outlined-basic"
            label="Enter Country"
            variant="outlined"
            type="text"
          />
        </label>
        {errors.country && <p>{errors.mobilenumber.message}</p>}
        <br />
        <label>
          State:
          <TextField
            id="outlined-basic"
            label="Enter State"
            variant="outlined"
            type="text"
          />
        </label>
        {errors.state && <p>{errors.mobilenumber.message}</p>}
        <br />
        <label>
          City:
          <TextField
            id="outlined-basic"
            label="Enter City"
            variant="outlined"
            type="text"
          />
        </label>
        {errors.city && <p>{errors.mobilenumber.message}</p>}
        <br />
        <label>
          Message:
          <TextareaAutosize
            type="text"
            minRows={6}
            {...register('Message')}
            style={{ width: 350 }}
            placeholder="Type Here"
          />
        </label>
        {errors.Message && <p>{errors.Message.message}</p>}
        <br />
        <Button
          onSubmit={handleSubmit(onSubmit)}
          type="submit"
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
