export default function SubmitBtn({ formState, text, submitText }) {
  const isFormSubmitting = formState === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-block btn-accent'
      disabled={isFormSubmitting}
    >
      {isFormSubmitting ? (
        <>
          <span className='loading loading-dots loading-sm'></span>
          {submitText}
        </>
      ) : (
        text
      )}
    </button>
  );
}
