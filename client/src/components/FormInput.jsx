export default function FormInput({
  label,
  name,
  placeholder,
  defaultValue,
  required = false,
  type = 'text',
}) {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend'>{label}</legend>
      <input
        type={type}
        name={name}
        className='input focus:outline-accent'
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </fieldset>
  );
}
