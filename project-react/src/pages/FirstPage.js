import { InputText } from '../components/Forms/InputText'
import { LabelText } from '../components/Forms/LabelText'
import { ButtonNext } from '../components/Forms/ButtonNext'
import { SelectBirthday } from '../components/Forms/SelectBirthday'
import { BoxCheckbox } from '../components/Forms/BoxCheckbox'
import { Titulo } from '../components/Header/Titulo'
import { InputBirthday } from '../components/Forms/InputBirthday'
import { mask } from 'remask'
import React, { useEffect, useState } from 'react'

import './style.css'
import '../components/Forms/BoxEmail/style.css'
import '../components/Forms/BoxAniver/style.css'

export const FirstPage = ({ setShowTab1, setChange }) => {
  // * Função Submit Inicio * //

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowTab1(false)
    setChange(true)
    localStorage.setItem('fullName', saveData.fullName)
    localStorage.setItem('nickName', saveData.nickName)
    localStorage.setItem('email', saveData.email)
    localStorage.setItem('phone', saveData.phone)
    localStorage.setItem('day', saveData.birthday.day)
    localStorage.setItem('month', saveData.birthday.month)
    localStorage.setItem('year', saveData.birthday.year)
    localStorage.setItem('checked', saveData.checked)
  }

  // * Função Submit fim * //

  const [saveData, setSaveData] = useState({
    fullName: '',
    nickName: '',
    email: '',
    phone: '',
    birthday: {
      year: 0,
      month: 0,
      day: 0,
    },
    checked: false,
  })
  // * Função aniversario Inicio * //

  const nascimento = new Date(
    saveData.birthday.year,
    saveData.birthday.month - 1,
    saveData.birthday.day,
  )

  const aniver = Math.floor(
    Math.ceil(
      Math.abs(nascimento.getTime() - new Date().getTime()) /
        (1000 * 3600 * 24),
    ) / 365.25,
  )
  // * Função aniversario Fim * //

  // * Função para pegar os dados do formulário * //
  useEffect(() => {
    if (localStorage.getItem('fullName') !== null) {
      let birthday = {
        day: localStorage.getItem('day'),
        month: localStorage.getItem('month'),
        year: localStorage.getItem('year'),
      }

      setSaveData({
        ...saveData,
        fullName: localStorage.getItem('fullName'),
        nickName: localStorage.getItem('nickName'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        birthday,
        checked: localStorage.getItem('checked'),
      })
    }
  }, [])
  // * Função para pegar os dados do formulário fim * //

  return (
    <div>
      <div>
        <Titulo title="Team Sign Up" className="title" />
        <nav className="navigation">
          <ul>
            <li className={'active'}>Basic</li>
            <li>Social</li>
            <li>Certificates</li>
          </ul>
        </nav>
      </div>

      <form onSubmit={handleSubmit}>
        <LabelText
          id="fullName"
          labelName="Full Name *"
          className="labelText"
        />
        <InputText
          id="fullName"
          type="text"
          className="inputText"
          placeholder="Foo Bar"
          required
          value={saveData.fullName}
          onChange={(e) => {
            setSaveData({ ...saveData, fullName: e.target.value })
          }}
        />
        <LabelText name="nickName" labelName="Nickname" className="labelText" />
        <InputText
          id="nickName"
          type="text"
          className="inputText"
          placeholder="Juanito"
          value={saveData.nickName}
          onChange={(e) => {
            setSaveData({ ...saveData, nickName: e.target.value })
          }}
        />
        <div className="box-email-phone">
          <div>
            <LabelText
              forHTML="input-email"
              labelName="Email *"
              className="labelText"
            />
            <InputText
              id="input-email"
              type="email"
              className="input-style"
              placeholder="foo@bar.com"
              required
              value={saveData.email}
              onChange={(e) => {
                setSaveData({ ...saveData, email: e.target.value })
              }}
            />
          </div>
          <div>
            <LabelText
              forHTML="input-phone"
              labelName="Phone"
              className="labelText"
            />
            <InputText
              id="input-phone"
              type="phone"
              className="input-style"
              placeholder="(83) 00000-0000"
              value={saveData.phone}
              onChange={(e) => {
                setSaveData({
                  ...saveData,
                  phone: mask(e.target.value, ['(99) 9 9999-9999']),
                })
              }}
            />
          </div>
        </div>
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
                selected={saveData.birthday.day}
                onChange={(e) => {
                  let birthday = saveData.birthday
                  birthday.day = e.target.value
                  setSaveData({ ...saveData, birthday })
                }}
              />
            </div>
            <div className="teste">
              <LabelText
                forHTML="month"
                labelName="Month"
                className="labelText"
              />
              <SelectBirthday
                value={2}
                length={11}
                className="input-style input-birthday"
                id="month"
                required
                placeholder="01"
                selected={saveData.birthday.month}
                onChange={(e) => {
                  let birthday = saveData.birthday
                  birthday.month = e.target.value
                  setSaveData({ ...saveData, birthday })
                }}
              />
            </div>

            <div className="teste">
              <LabelText
                forHTML="year"
                labelName="Year"
                className="labelText"
              />
              <SelectBirthday
                value={1912}
                selected={saveData.birthday.year}
                length={109}
                className="input-style input-birthday"
                id="year"
                required
                placeholder="1911"
                onChange={(e) => {
                  let birthday = saveData.birthday
                  birthday.year = e.target.value
                  setSaveData({ ...saveData, birthday })
                }}
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
            onChange={(e) => {
              setSaveData({ ...saveData, checked: e.target.checked })
            }}
            checked={saveData.checked}
            required
          />
        </div>
        <ButtonNext type="submit" text="Next" className="btn" />
      </form>
    </div>
  )
}
