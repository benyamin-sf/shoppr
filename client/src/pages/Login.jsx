import { Form, Link, useNavigation } from 'react-router-dom';

import { FormInput, SubmitBtn } from '../components';

export default function Login() {
  const { state } = useNavigation();

  return (
    <section className='min-h-screen grid place-items-center py-16 px-4'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          label='email'
          name='email'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='123456'
        />
        <div className='mt-4'>
          <SubmitBtn
            formState={state}
            text='Login'
            submitText='Sending data...'
          />
        </div>
        <button type='button' className='btn btn-secondary btn-block'>
          Guest User
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link to='/register' className='ml-1 link link-hover link-accent'>
            Join us now!
          </Link>
        </p>
      </Form>
    </section>
  );
}
