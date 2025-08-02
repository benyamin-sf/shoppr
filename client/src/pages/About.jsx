export default function About() {
  return (
    <>
      <h1 className='font-bold leading-20 text-center mt-4 2xl:mt-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider'>
        Whatever <span className='text-accent'>Shoppers</span> asks,
        <br />
        <span className='bg-accent shadow leading-0 rounded-box text-accent-content uppercase text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest py-2 px-4 mr-4'>
          Shoppr
        </span>
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
