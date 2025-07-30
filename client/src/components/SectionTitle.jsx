export default function SectionTitle({ text }) {
  return (
    <div className='border-b border-base-300 pb-5'>
      <h2 className='text-xl sm:text-2xl md:text-3xl tracking-wider font-medium capitalize'>
        {text}
      </h2>
    </div>
  );
}
