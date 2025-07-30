import { useRouteError } from 'react-router-dom';

export default function ErrorElement() {
  const error = useRouteError();
  console.error(error);

  return <h4 className='font-bold text-4xl'>There was an error...</h4>;
}
