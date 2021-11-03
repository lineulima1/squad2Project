//* Componentes *//
import { LabelText } from '../LabelText'
import { InputText } from '../InputText'

//* CSS *//
import './style.css'

export const BoxCheckbox = () => {
  return (
    <div className="divCheckBox">
      <LabelText
        forHTML="aprove"
        className="labelCheckBox"
        labelName="I accept the terms and privacy"
      />
      <InputText
        type="checkbox"
        id="aprove"
        className="inputCheckBox"
        required
      />
    </div>
  )
}
