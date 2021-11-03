import './style.css'

export const LabelText = ({ forHTML, labelName, className }) => {
  return (
    <div>
      <label htmlFor={forHTML} className={className}>
        {labelName}
      </label>
    </div>
  )
}
