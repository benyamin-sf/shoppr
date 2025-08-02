export default function ProductFallback() {
  return (
    <section>
      {/* BREADCRUMB SKELETON */}
      <ul className='flex items-center gap-x-2'>
        <li className='skeleton w-14 h-6 rounded-box'></li>
        <li className='skeleton w-14 h-6 rounded-box'></li>
      </ul>

      {/* PRODUCT */}
      <div className='relative mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE SKELETON */}
        <div className='skeleton w-full h-96 rounded-lg overflow-hidden mt-16 ml-6 before:content-[""] before:absolute before:top-10 before:left-0 before:w-[512px] before:h-96 before:rounded-lg before:border-4 before:border-accent before:z-[-1]'></div>

        {/* INFO SKELETON */}
        <div className='px-4 sm:px-6 md:px-8 lg:px-10'>
          {/* TITLE SKELETON */}
          <h1 className='skeleton mt-4 h-10 w-36 rounded-box'></h1>
          {/* COMPANY SKELETON */}
          <h4 className='mt-6'>
            <span className='inline-block skeleton h-4 w-8'></span>
            <br />
            <span className='inline-block skeleton h-5 w-24 ml-2'></span>
          </h4>
          {/* PRICE SKELETON */}
          <div className='skeleton h-10 w-32 absolute top-[5rem] right-0 rounded-box'></div>
          {/* DESCRIPTIONS SKELETON */}
          <div className='mt-4 space-y-4'>
            <div className='skeleton h-4 w-full rounded-full'></div>
            <div className='skeleton h-4 w-full rounded-full'></div>
            <div className='skeleton h-4 w-full rounded-full'></div>
            <div className='skeleton h-4 w-full rounded-full'></div>
            <div className='skeleton h-4 w-full rounded-full'></div>
            <div className='skeleton h-4 w-full rounded-full'></div>
          </div>
          <div className='mt-8 space-y-4'>
            {/* COLORS SKELETON */}
            <div className='skeleton h-10 w-full rounded-box'></div>

            {/* AMOUNT SKELETON */}
            <div className='skeleton h-10 w-full rounded-box'></div>
          </div>

          {/* CART ADD BUTTON SKELETON */}
          <div className='skeleton h-11 w-36 mt-10'></div>
        </div>
      </div>
    </section>
  );
}
