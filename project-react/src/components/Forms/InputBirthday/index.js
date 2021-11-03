export const InputBirthday = ({
  id,
  min,
  max,
  type,
  pattern,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        id={id}
        min={min}
        max={max}
        type={type}
        className={className}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
