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
        className='input'
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </fieldset>
  );
}
