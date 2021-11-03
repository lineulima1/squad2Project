import './style.css'

export const InputText = ({
  type,
  id,
  className,
  placeholder,
  value,
  ...props
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  )
}
