import { Link, useRouteError } from 'react-router-dom';

import { Icons } from '../components';

export default function Error() {
  const error = useRouteError();
  console.error(error.error);

  if (error.status === 404) {
    return (
      <main
        id="main"
        className="relative grid min-h-screen place-items-center p-8"
      >
        <div className="text-center">
          <p className="text-accent text-[11rem] leading-0 font-bold tracking-wider">
            404
          </p>
          <h3 className="mt-24 text-3xl font-semibold tracking-wider uppercase sm:text-4xl">
            page not found!
          </h3>
          <p className="mt-2 text-lg leading-6">
            The page you're looking for doesn't exist.
          </p>
          <div className="absolute top-12 left-12">
            <Link
              to="/"
              className="btn btn-accent btn-md text-accent-content text-shadow-base uppercase"
            >
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      id="main"
      className="relative grid min-h-screen place-items-center p-8"
    >
      <div className="text-center">
        <div className="relative mx-auto h-72 w-72">
          <Icons name="server-down" size={320} />
          <p className="absolute -right-4 bottom-0 text-xs text-slate-400">
            SVG credit to{' '}
            <span className="font-semibold text-slate-500 uppercase">
              undraw.co
            </span>
          </p>
        </div>
        <h3 className="mt-12 text-2xl font-semibold sm:text-4xl">
          Oh no! Something bad happened in the server
        </h3>
        <p className="mt-4 text-lg leading-6">
          I suggest going back to homepage, and never look backwards again 🫣
        </p>
        <div className="absolute top-12 left-12">
          <Link
            to="/"
            className="btn btn-accent btn-md text-accent-content text-shadow-base uppercase"
          >
            get me outta here
          </Link>
        </div>
      </div>
    </main>
  );
}
