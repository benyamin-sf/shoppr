import { useRouteError } from 'react-router-dom';

import { Icons } from '../components';

export default function ErrorElement() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center">
      <div className="relative mx-auto h-96 w-96">
        <Icons name="engineering-team" />
        <p className="absolute right-0 bottom-12 text-[0.65rem] text-slate-400">
          SVG credit to{' '}
          <span className="font-semibold text-slate-500 uppercase">
            undraw.co
          </span>
        </p>
      </div>
      <h3 className="text-2xl font-semibold sm:text-4xl">
        There was an unknown error
      </h3>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-7">
        Our engineering team was notified and crew members are working hard. We
        will ensure the problem will be solved as soon as possible. If for some
        reasons the problem persists please contact website administrators.
      </p>
    </div>
  );
}
