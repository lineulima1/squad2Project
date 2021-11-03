import React, { useState, useEffect } from 'react'

//* Componentes *//
import { InputText } from '../components/Forms/InputText'
import { LabelText } from '../components/Forms/LabelText'
import { ButtonNext } from '../components/Forms/ButtonNext'
import { Titulo } from '../components/Header/Titulo'

//* CSS *//
import '../components/FormsSecond/style.css'

export const SecondPage = ({ setShowTab2, setChange, settopnavigation }) => {

  const [saveData, setSaveData] = useState({
    linkedin: '',
    github: '',
  })

  //* Salvar os dados do localStorage *//

  useEffect(() => {
    if (localStorage.getItem('github') !== null) {
      setSaveData({
        ...saveData,
        linkedin: localStorage.getItem('linkedin'),
        github: localStorage.getItem('github'),
      })
    }
  }, [])

  //* Função Submit *//

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowTab2(false)
    setChange(true)
    localStorage.setItem('linkedin', saveData.linkedin)
    localStorage.setItem('github', saveData.github)
  }

//* Função para Navegação pelo Menu *//

  const handleClickTab1 = () => {
    settopnavigation('tab1')
  }

  return (
    <div>
      <div>
        <Titulo title="Team Sign Up" className="title" />
        <nav className="navigation">
          <ul>
            <li onClick={handleClickTab1}>Basic</li>
            <li className={'active'}>Social</li>
            <li>Certificates</li>
          </ul>
        </nav>
      </div>
      <form onSubmit={handleSubmit}>
        <LabelText id="linkedin" labelName="Linkedin" className="labelText" />
        <InputText
          id="linkedin"
          type="text"
          className="inputText"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          value={saveData.linkedin}
          onChange={(e) => {
            setSaveData({ ...saveData, linkedin: e.target.value })
          }}
        />
        <LabelText id="github" labelName="Github *" className="labelText" />
        <InputText
          id="github"
          type="text"
          className="inputText"
          placeholder="https://github.com/foobar"
          required
          value={saveData.github}
          onChange={(e) => {
            setSaveData({ ...saveData, github: e.target.value })
          }}
        />
        <ButtonNext type="submit" text="Next" className="btn" id="btn-tela2" />
      </form>
    </div>
  )
}
