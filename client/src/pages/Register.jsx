import { Form, Link, useNavigation } from 'react-router-dom';

import { FormInput, SubmitBtn } from '../components';

export default function Register() {
  const { state } = useNavigation();

  return (
    <section className='min-h-screen grid place-items-center py-16 px-4'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput
          type='text'
          label='firstName'
          name='firstName'
          defaultValue='Stephen'
          required
        />
        <FormInput
          type='text'
          label='lastName'
          name='lastName'
          defaultValue='Hawkins'
          required
        />
        <FormInput
          type='email'
          label='email'
          name='email'
          defaultValue='test@test.com'
          required
        />
        <FormInput
          type='tel'
          label='phoneNumber'
          name='phoneNumber'
          defaultValue='+989154104812'
          required
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='123456'
          required
        />
        <div className='mt-4'>
          <SubmitBtn
            formState={state}
            text='Register'
            submitText='Sending data...'
          />
        </div>
        <button type='button' className='btn btn-secondary btn-block'>
          Guest User
        </button>
        <p className='text-center'>
          Already a member?
          <Link to='/login' className='ml-1 link link-hover link-accent'>
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}
