import { Heart } from 'react-feather'

export const ButtonHeart = ({ type, className, id, onClick, heart }) => {
  return (
    <button
      type={type}
      className={className}
      id={id}
      onClick={() => onClick(!heart)}
    >
      <Heart color={heart ? 'red' : 'grey'} fill={heart ? 'red' : 'white'} />
    </button>
  )
}
