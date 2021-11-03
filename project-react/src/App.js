import React, { useState, useEffect } from 'react'
import { FirstPage } from './pages/FirstPage'
import { SecondPage } from './pages/SecondPage'
import { ThirdPage } from './pages/ThirdPage'
import { FourthPage } from './pages/FourthPage'
import './App.css'

const App = () => {
  const [showTab1, setShowTab1] = useState(true)
  const [showTab2, setShowTab2] = useState(false)
  const [showTab3, setShowTab3] = useState(false)
  const [showTab4, setShowTab4] = useState(false)
  const [change, setChange] = useState(false)
  const [topnavigation, settopnavigation] = useState(null)
  const [tabRender, setTabRender] = useState(
    <FirstPage
      setShowTab1={setShowTab1}
      setShowTab2={setShowTab2}
      setShowTab3={setShowTab3}
      setShowTab4={setShowTab4}
      setChange={setChange}
      settopnavigation={settopnavigation}
    />,
  )

  // * NAVEGAÇÃO MENU INICIO *//

  const setShowTab1_true = () => {
    setShowTab1(true)
    setShowTab2(false)
    setShowTab3(false)
    setShowTab4(false)
  }
  const setShowTab2_true = () => {
    setShowTab1(false)
    setShowTab2(true)
    setShowTab3(false)
    setShowTab4(false)
  }
  const setShowTab3_true = () => {
    setShowTab1(false)
    setShowTab2(false)
    setShowTab3(true)
    setShowTab4(false)
  }

  useEffect(() => {
    if (topnavigation === 'tab1') {
      setTabRender(
        <FirstPage
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab3={setShowTab3}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab1_true()
    } else if (topnavigation === 'tab2') {
      setTabRender(
        <SecondPage
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab3={setShowTab3}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab2_true()
    } else if (topnavigation === 'tab3') {
      setTabRender(
        <ThirdPage
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab3={setShowTab3}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab3_true()
    }
  }, [topnavigation])
  // * NAVEGAÇÃO MENU FINAL *//

  // * NAVEGAÇÃO SUBMIT EFFECT INICIO *//

  useEffect(() => {
    if (change) {
      setTabRender(
        <SecondPage
          setShowTab3={setShowTab3}
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab1(false)
      setShowTab2(true)
      setShowTab3(false)
      setShowTab4(false)
      setChange(false)
    }
  }, [showTab1])

  useEffect(() => {
    if (change) {
      setTabRender(
        <ThirdPage
          setShowTab3={setShowTab3}
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab1(false)
      setShowTab2(false)
      setShowTab3(true)
      setShowTab4(false)
      setChange(false)
    }
  }, [showTab2])
  console.log(change)
  console.log(showTab3)
  useEffect(() => {
    if (change) {
      setTabRender(
        <FourthPage
          setShowTab3={setShowTab3}
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab1(false)
      setShowTab2(false)
      setShowTab3(false)
      setShowTab4(true)
      setChange(false)
    }
  }, [showTab3])

  useEffect(() => {
    if (change) {
      setTabRender(
        <FirstPage
          setShowTab3={setShowTab3}
          setShowTab1={setShowTab1}
          setShowTab2={setShowTab2}
          setShowTab4={setShowTab4}
          setChange={setChange}
          settopnavigation={settopnavigation}
        />,
      )
      setShowTab1(true)
      setShowTab2(false)
      setShowTab3(false)
      setShowTab4(false)
      setChange(false)
    }
  }, [showTab4])

  // * NAVEGAÇÃO SUBMIT FINAL *//
  return (
    <>
      <div className="background">
        <div className="background-forms">{tabRender}</div>
      </div>
    </>
  )
}

export default App
