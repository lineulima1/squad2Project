import React, { useState, useEffect } from 'react'
import { Heart } from 'react-feather'

import { ButtonFinish } from '../components/Forms/ButtonFinish'
import './style.css'

export const FourthPage = ({
  setShowTab1,
  setChange,
  settopnavigation,
  setShowTab4,
  setShowTab3,
}) => {
  const [data, setData] = useState('')

  //* Função para pegar os dados do formulário inicio *//
  useEffect(() => {
    let data = {
      fullName: localStorage.getItem('fullName'),
      nickName: localStorage.getItem('nickName'),
      email: localStorage.getItem('email'),
      phone: localStorage.getItem('phone'),
      linkedin: localStorage.getItem('linkedin'),
      github: localStorage.getItem('github'),
      teamName: localStorage.getItem('teamName'),
      institution: localStorage.getItem('institution'),
      graduation: localStorage.getItem('graduation'),
      day: localStorage.getItem('day'),
      month: localStorage.getItem('month'),
      year: localStorage.getItem('year'),
      heartless: JSON.parse(localStorage.getItem('heartless')),
      heartfull: JSON.parse(localStorage.getItem('heartfull')),
    }
    setData(data)
  }, [])
  //* Função para pegar os dados do formulário fim *//

  //* Função para zerar o localStorage *//
  const handleClick = () => {
    setShowTab4(false)
    setChange(true)
    localStorage.clear()
  }

  return (
    <div style={{ position: 'relative', height: '700px' }}>
      <h1 className="title">Registered Data</h1>
      <table>
        <thead>
          <tr>
            <th>Fields</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {' '}
            {console.log(data)}
            <td>Full Name</td>
            <td>
              <p className="fourthTap">{data.fullName}</p>
            </td>
          </tr>
          <tr>
            <td>Nickname</td>
            <td>
              <p className="fourthTap">{data.nickName}</p>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <p className="fourthTap">{data.email}</p>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <p className="fourthTap">{data.phone}</p>
            </td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>
              <p className="fourthTap">
                {data.day}/{data.month}/{data.year}
              </p>
            </td>
          </tr>
          <tr>
            <td>Linkedin</td>
            <td>
              <p className="fourthTap">{data.linkedin}</p>
            </td>
          </tr>
          <tr>
            <td>Github</td>
            <td>
              <p className="fourthTap">{data.github}</p>
            </td>
          </tr>

          {data !== '' &&
            data.heartfull.map((certificate) => {
              return (
                <tr>
                  <td>Cerficate:</td>
                  <td className="fourthTap">
                  <Heart color="red" fill="red" /> {certificate} 
                  </td>
                </tr>
              )
            })}
          {data !== '' &&
            data.heartless.map((certificate) => {
              return (
                <tr>
                  <td>Cerficate:</td>
                  <td className="fourthTap">
                  <Heart color="red" fill="white" />{certificate}
                  </td>
                </tr>
              )
            })}
          {}

          <tr>
            <td>Team Name</td>
            <td>
              <p className="fourthTap">{data.teamName}</p>
            </td>
          </tr>
          <tr>
            <td>Institution</td>
            <td>
              <p className="fourthTap">{data.institution}</p>
            </td>
          </tr>
          <tr>
            <td>Graduation</td>
            <td>
              <p className="fourthTap">{data.graduation}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <ButtonFinish
        text="OK"
        className="btn"
        id="btn-fourth"
        onClick={handleClick}
      />
    </div>
  )
}
