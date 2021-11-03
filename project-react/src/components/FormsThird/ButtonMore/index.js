
import { Plus } from 'react-feather'
import { ChevronRight } from 'react-feather'

import './style.css'
export const ButtonMore = ({ type, className, id, onClick, heart,text }) => {
  return (
    <button
      type={type}
      className={className}
      id={id}
      onClick={() => onClick(!heart)}
    >
    <Plus size={18}/>
    {text}
    <ChevronRight size={18}/>
    </button>
  )
}
