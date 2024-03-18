import './info.css'

export default function InfoExperience({ onCompanyChange, onPositionChange, onWorkStartChange, onWorkEndChange }) {
  return (
    <section className="info infoExperience">
      <h1 className="sectionTitle">Working experience</h1>
      <label htmlFor="companyName">Company Name</label>
      <input type="text" id="companyName" onChange={onCompanyChange} />
      <label htmlFor="positionTitle">Position</label>
      <input type="text" id="positionTitle" onChange={onPositionChange} />
      <label htmlFor="dateStart">Start Date</label>
      <input type="date" id="dateStart" onChange={onWorkStartChange} />
      <label htmlFor="dateEnd">End Date</label>
      <input type="date" id="dateEnd" onChange={onWorkEndChange} />
    </section>
  )
}