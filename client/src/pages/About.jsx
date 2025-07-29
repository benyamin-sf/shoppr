export default function About() {
  return (
    <>
      <h1 className='text-4xl font-bold leading-16 tracking-tight text-center mt-16 sm:text-6xl'>
        What our shoppers asks,
        <br />
        <span className='stats bg-primary shadow'>
          <span className='stat'>
            <span className='stat-title text-primary-content text-4xl font-bold tracking-widest uppercase'>
              Shoppr
            </span>
          </span>
        </span>{' '}
        provides.
      </h1>
      <p className='mt-10 text-lg leading-8 max-w-2xl mx-auto text-center'>
        Shoppr is a full-featured, modern e-commerce platform built with the
        MERN stack. It supports multi-vendor functionality, allowing users to
        register as sellers and manage their own storefronts. With secure
        authentication, dynamic product management, and scalable backend
        architecture, Shoppr delivers a smooth, flexible shopping experience for
        both buyers and sellers in a clean, responsive UI.
      </p>
    </>
  );
}
