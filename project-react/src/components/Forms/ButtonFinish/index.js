import { Check } from 'react-feather'

//* CSS *//
import './btn-final.css'

export const ButtonFinish = ({ text, type, className, id, onClick }) => {
  return (
    <button type={type} className={className} id={id} onClick={onClick}>
      <Check /> {text}
    </button>
  )
}
