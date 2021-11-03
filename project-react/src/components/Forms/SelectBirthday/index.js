export const SelectBirthday = ({
  value,
  length,
  className,
  id,
  placeholder,
  selected,
  ...props
}) => {
  const aniver = Array.from({ length: length }, (a, b) => {
    let sum = b + value
    if (sum < 10) {
      return '0' + sum
    } else {
      return sum
    }
  })
  return (
    <>
      <select className={className} id={id} {...props}>
        <option value="01">{placeholder}</option>
        {aniver.map((arr) => {
          return (
            <option selected={selected == parseInt(arr)} key={arr} value={arr}>
              {arr}
            </option>
          )
        })}
      </select>
    </>
  )
}
