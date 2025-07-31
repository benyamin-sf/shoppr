import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error.error);

  if (error.status === 404) {
    return (
      <main
        id='main'
        className='relative grid place-items-center min-h-screen p-8'
      >
        <div className='text-center'>
          <p className='text-[11rem] leading-0 font-bold tracking-wider text-accent'>
            404
          </p>
          <h3 className='mt-24 text-3xl font-semibold tracking-wider sm:text-4xl uppercase'>
            page not found!
          </h3>
          <p className='mt-2 text-lg leading-6'>
            The page you're looking for doesn't exist.
          </p>
          <div className='absolute top-12 left-12'>
            <Link
              to='/'
              className='btn btn-accent btn-md text-accent-content text-shadow-base uppercase'
            >
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id='main' className='grid place-items-center min-h-screen p-8'>
      <h3 className='text-center font-bold text-4xl'>There was an error!</h3>
    </main>
  );
}
