import React, { useState } from 'react'

//* Components *//
import { LabelText } from '../LabelText'
import { InputBirthday } from '../InputBirthday'
import { SelectBirthday } from '../SelectBirthday/SelectBirthday'

//* CSS *//
import './style.css'

//* Calculo Age *//
export const BoxAniver = () => {
  const [birthday, setBirthday] = useState({
    day: 0,
    month: 0,
    year: 0,
  })

  const nascimento = new Date(birthday.year, birthday.month - 1, birthday.day)

  const aniver = Math.floor(
    Math.ceil(
      Math.abs(nascimento.getTime() - new Date().getTime()) /
        (1000 * 3600 * 24),
    ) / 365.25,
  )
//* Calculo Age FIM *//

  return (
    <div className="input-box">
      <h3 className="labelText">Birthday *</h3>
      <div className="birthday-box ">
        <div className="teste">
          <LabelText forHTML="day" labelName="Day" className="labelText" />
          <SelectBirthday
            value={2}
            length={30}
            placeholder="01"
            className="input-style input-birthday"
            id="day"
            required
            onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
          />
        </div>
        <div className="teste">
          <LabelText forHTML="month" labelName="Month" className="labelText" />
          <SelectBirthday
            value={2}
            length={11}
            className="input-style input-birthday"
            id="month"
            required
            placeholder="01"
            onChange={(e) =>
              setBirthday({ ...birthday, month: e.target.value })
            }
          />
        </div>

        <div className="teste">
          <LabelText forHTML="year" labelName="Year" className="labelText" />
          <SelectBirthday
            value={1912}
            length={109}
            className="input-style input-birthday"
            id="year"
            required
            placeholder="1911"
            onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
          />
        </div>
        <div className="teste">
          <LabelText forHTML="age" labelName="Age" className="labelText" />
          <InputBirthday
            id="age"
            type="text"
            className="input-style input-birthday"
            required
            disabled
            placeholder={aniver}
          />
        </div>
      </div>
    </div>
  )
}
