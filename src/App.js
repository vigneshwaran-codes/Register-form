import './App.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { Button, TextareaAutosize } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'yup-phone'

// Validation
const validations = Yup.object().shape({
  name: Yup.string().required('Provide your fullname').min(3).max(20),
  email: Yup.string().email().required('provide your email'),
  mobileno: Yup.string().phone().typeError('Please provide valid number here'),
  country: Yup.string().min(4),
  state: Yup.string().min(4),
  city: Yup.string().min(4),
  textMessage: Yup.string().max(250)
})
// const errors = formState.errors;

function App () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    setOpen(true)
    window.alert(JSON.stringify(data))
    // console.log('Registered Successfully', data)
  }

  return (
    <div className='container'>
      <TextField
        label='Enter your name'
        variant='outlined'
        name='name'
        type='text'
        {...register('name')}
        error={errors?.name?.message}
        helperText={errors?.name?.message}
        autoComplete='off'
      />
      <br />
      <TextField
        name='email'
        label='Enter your Email'
        variant='outlined'
        autoComplete='off'
        type='email'
        {...register('email')}
        error={errors?.email?.message}
        helperText={errors.email && errors.email.message}
      />
      <br />
      <TextField
        label='Enter mobile number'
        variant='outlined'
        name=' mobileno'
        type='number'
        {...register('mobileno')}
        error={errors?.mobileno?.message}
        helperText={errors.mobileno && errors.mobileno.message}
      />
      <br />
      <TextField
        name='country'
        label='Enter Country'
        variant='outlined'
        autoComplete='off'
        type='text'
        {...register('country')}
        error={errors?.country?.message}
        helperText={errors.country && errors.country.message}
      />
      <br />
      <TextField
        label='Enter State'
        name='state'
        variant='outlined'
        autoComplete='off'
        type='text'
        {...register('state')}
        error={errors?.state?.message}
        helperText={errors.state && errors.state.message}
      />
      <br />
      <TextField
        label='Enter City'
        name='city'
        variant='outlined'
        autoComplete='off'
        type='text'
        {...register('city')}
        error={errors?.city?.message}
        helperText={errors.city && errors.city.message}
      />
      <br />
      <TextareaAutosize
        type='text'
        name='textMessage'
        autoComplete='off'
        minRows={6}
        {...register('textMessage')}
        error={errors?.textMessage?.message}
        helperText={errors.textMessage && errors.textMessage.message}
        style={{ width: 350, background: '#57D9A3', border: '#000 0.2px solid', opacity: 0.5 }}
        placeholder='Type Here'
      />
      <br />
      <Button
        variant='contained'
        onClick={handleSubmit(onSubmit)}
        color='success'
      >
        Submit
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          Registered Successfully !
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
