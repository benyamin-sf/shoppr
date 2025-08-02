import sprite from '../assets/svg-sprite.svg';

function Icons({ name, size, color }) {
  return (
    <svg
      className={`icon icon-${name} fill-accent`}
      style={{ width: size || '100%', height: size || '100%' }}
      fill={color}
    >
      <use
        xlink:href={`${sprite}#icon-${name}`}
        href={`${sprite}#icon-${name}`}
      />
    </svg>
  );
}

export default Icons;
