import React, { useState, useEffect } from 'react'
import { Heart } from 'react-feather'


/* Componentes */
import { InputText } from '../components/Forms/InputText'
import { LabelText } from '../components/Forms/LabelText'
import { ButtonNext } from '../components/Forms/ButtonNext'
import { Titulo } from '../components/Header/Titulo'
import { ButtonHeart } from '../components/FormsThird/ButtonHeart'
import { ButtonFinish } from '../components/Forms/ButtonFinish'
import { ButtonMore } from '../components/FormsThird/ButtonMore'
/* CSS */
import '../components/FormsSecond/style.css'
import './thirdpage.css'


export const ThirdPage = ({ setShowTab3, setChange, settopnavigation }) => {
  const [saveData, setSaveData] = useState({
    certificate: '',
    teamName: '',
    institution: '',
    graduation: '',
  })

  const [heartless,setHeartless] = useState([])
  const [heartfull,setHeartfull] = useState([])
  const [heart, setHeart] = useState(false)
  const [open,setOpen] = useState(false)
  const toggle = () => setOpen(!open)


  const handleClick = () => {
    if (saveData.certificate !== '') {
      let tam = heartfull.length + heartless.length
      if (tam < 5) {
        if(heart){
          setHeartfull([...heartfull, saveData.certificate])
        } else {
          setHeartless([...heartless,saveData.certificate])
        }
        setHeart(false)
        setSaveData({ ...saveData, certificate: '' })
      } else {
        alert('Maximum of 5 certificates')
        setSaveData({...saveData,certificate: ''})
        setHeart(false)
      }
    }
  }
   
  const handleClickTab2 = () => {
    settopnavigation('tab2')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowTab3(false)
    setChange(true)
    localStorage.setItem('teamName', saveData.teamName)
    localStorage.setItem('institution', saveData.institution)
    localStorage.setItem('graduation', saveData.graduation)
    localStorage.setItem('heartfull',JSON.stringify([...heartfull]))
    localStorage.setItem('heartless',JSON.stringify([...heartless]))
  }


  return (
    <div>
      <div>
        <Titulo title="Team Sign Up" className="title" />
        <nav className="navigation">
          <ul>
            <li>Basic</li>
            <li onClick={handleClickTab2}>Social</li>
            <li className={'active'}>Certificates</li>
          </ul>
        </nav>
      </div>
      <form onSubmit={handleSubmit}>
        <LabelText
          name="certificates"
          labelName="Certificates"
          className="labelText"
        />
        <div id="input_btn">
          <InputText
            name="certificates"
            type="text"
            className="input-heart"
            placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            value={saveData.certificate}
            onChange={(e) => {
              setSaveData({ ...saveData, certificate: e.target.value })
            }}
          />
          
          <ButtonHeart id="btn_heart" type="button" heart={heart} onClick={setHeart} />
        </div>
        <div className="button-box">
          <div className="dropDown">
          {(heartfull.length > 0 || heartless.length > 0) && (
            <div>
              <button type="button" className="btn-certificate" onClick={() => toggle(!open)   
              }>Certificates</button>{open && 
              <ul>
                {open && (heartfull.map((certificate) => {
                  return (
                    <li>{certificate}<Heart color="red" fill="red"/></li>
                  )
                }))}
                  {open && heartless.map((certificate) => {
                  return (
                    <li>{certificate}</li>
                  )
                })}
              </ul>
}
            </div>
          )}{' '}
          </div>
        <ButtonMore type="button" text="More" className="more" onClick={handleClick} />
        </div>
    
        <LabelText
          name="teamName"
          labelName="Team Name *"
          className="labelText"
        />
        <InputText
          name="teamName"
          type="text"
          className="inputText"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          required
          value={saveData.teamName}
          onChange={(e) => {
            setSaveData({ ...saveData, teamName: e.target.value })
          }}
        />
        <LabelText
          name="institution"
          labelName="Institution *"
          className="labelText"
        />
        <InputText
          name="institution"
          type="text"
          className="inputText"
          placeholder="Universidade Federal da Paraíba"
          required
          value={saveData.institution}
          onChange={(e) => {
            setSaveData({ ...saveData, institution: e.target.value })
          }}
        />
        <LabelText
          name="graduation"
          labelName="Graduation *"
          className="labelText"
        />
        <InputText
          name="graduation"
          type="text"
          className="inputText"
          placeholder="https://github.com/foobar"
          required
          value={saveData.graduation}
          onChange={(e) => {
            setSaveData({ ...saveData, graduation: e.target.value })
          }}
        />
        <ButtonFinish text="Finish" className="btn-final" />
      </form>
    </div>
  )
}
