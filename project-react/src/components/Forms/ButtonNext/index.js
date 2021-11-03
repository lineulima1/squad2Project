import { ChevronRight } from 'react-feather'

//* CSS *//
import './style.css'

export const ButtonNext = ({ text, type, className, id }) => {
  return (
    <button type={type} className={className} id={id}>
      {text} <ChevronRight />
    </button>
  )
}
