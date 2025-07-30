export default function LandingFallback() {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <div className='skeleton h-12 w-full rounded-full'></div>
        <div className='skeleton h-12 w-80 rounded-full mt-4'></div>
        <div className='space-y-4 mt-8'>
          <div className='skeleton h-4 w-full rounded-full'></div>
          <div className='skeleton h-4 w-full rounded-full'></div>
          <div className='skeleton h-4 w-full rounded-full'></div>
          <div className='skeleton h-4 w-64 rounded-full'></div>
        </div>
        <div className='mt-10'>
          <div className='skeleton h-10 w-40'></div>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        <div className='carousel-item skeleton rounded-box h-full w-80'></div>
        <div className='carousel-item skeleton rounded-box h-full w-80'></div>
        <div className='carousel-item skeleton rounded-box h-full w-80'></div>
      </div>
    </div>
  );
}
