import { useState } from 'react'
import './App.css'
import InfoGeneral from './components/InfoGeneral'
import InfoEducation from './components/InfoEducation'
import InfoExperience from './components/InfoExperience'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [active, setActive] = useState(0)
  const [schoolName, setSchoolName] = useState('')
  const [titleOfStudy, setTitleOfStudy] = useState('')
  const [dateStartStudy, setDateStartStudy] = useState(null)
  const [dateEndStudy, setDateEndStudy] = useState(null)
  const [companyName, setCompanyName] = useState('')
  const [workingPosition, setWorkingPosition] = useState('')
  const [workingStartDate, setWorkingStartDate] = useState(null)
  const [workingEndDate, setWorkingEndDate] = useState(null)

  function handleButtonSent(e) {
    e.preventDefault();
    setActive(1)
  }

  function handleEdit(e) {
    e.preventDefault()
    setActive(0)
  }

  function onNameChange(e) {
    setName(e.target.value)
  }
  function onEmailChange(e) {
    setEmail(e.target.value)
  }
  function onPhoneChange(e) {
    setPhoneNumber(e.target.value)
  }
  function onSchoolChange(e) {
    setSchoolName(e.target.value)
  }
  function onTitleChange(e) {
    setTitleOfStudy(e.target.value)
  }
  function onStudyStartChange(e) {
    setDateStartStudy(e.target.value)
  }
  function onStudyEndChange(e) {
    setDateEndStudy(e.target.value)
  }
  function onCompanyChange(e) {
    setCompanyName(e.target.value)
  }
  function onPositionChange(e) {
    setWorkingPosition(e.target.value)
  }
  function onWorkStartChange(e) {
    setWorkingStartDate(e.target.value)
  }
  function onWorkEndChange(e) {
    setWorkingEndDate(e.target.value)
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleButtonSent(e)} className="cvForm" style={{ display: active === 0 ? 'block' : 'none' }}>
        <InfoGeneral onNameChange={onNameChange} onEmailChange={onEmailChange} onPhoneChange={onPhoneChange}></InfoGeneral>
        <InfoEducation onSchoolChange={onSchoolChange} onTitleChange={onTitleChange} onStudyStartChange={onStudyStartChange} onStudyEndChange={onStudyEndChange}></InfoEducation>
        <InfoExperience onCompanyChange={onCompanyChange} onPositionChange={onPositionChange} onWorkStartChange={onWorkStartChange} onWorkEndChange={onWorkEndChange}></InfoExperience>
        <button type="submit">Send</button>
      </form>
      <div className="resultCV" style={{ display: active === 1 ? 'block' : 'none' }}>
        <div className="generalInfo">
          <h1>General Information</h1>
          <p className="infoEntry">Name</p>
          <p className="infoData">{name}</p>
          <p className="infoEntry">Email</p>
          <p className="infoData">{email}</p>
          <p className="infoEntry">Phone number</p>
          <p className="infoData">{phoneNumber}</p>
        </div>
        <div className="educationInfo">
          <h1>Educational Information</h1>
          <p className="infoEntry">School Name</p>
          <p className="infoData">{schoolName}</p>
          <p className="infoEntry">Title of Study</p>
          <p className="infoData">{titleOfStudy}</p>
          <p className="infoEntry">Starting Date</p>
          <p className="infoData">{dateStartStudy}</p>
          <p className="infoEntry">Ending Date</p>
          <p className="infoData">{dateEndStudy}</p>
        </div>
        <div className="experienceInfo">
          <h1>Working experience information</h1>
          <p className="infoEntry">Company Name</p>
          <p className="infoData">{companyName}</p>
          <p className="infoEntry">Position Title</p>
          <p className="infoData">{workingPosition}</p>
          <p className="infoEntry">Starting Date</p>
          <p className="infoData">{workingStartDate}</p>
          <p className="infoEntry">Ending Date</p>
          <p className="infoData">{workingEndDate}</p>
        </div>
        <button type="button" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default App
