import "./info.css"

export default function InfoEducation({ onSchoolChange, onTitleChange, onStudyStartChange, onStudyEndChange }) {
  return (
    <section className="info infoEducation">
      <h1 className="sectionTitle">Education</h1>
      <label htmlFor="schoolName">School Name</label>
      <input type="text" id="schoolName" onChange={onSchoolChange} />
      <label htmlFor="titleOfStudy">Title of Study</label>
      <input type="text" id="titleOfStudy" onChange={onTitleChange} />
      <label htmlFor="start">Start</label>
      <input type="date" id="start" onChange={onStudyStartChange} />
      <label htmlFor="end">End</label>
      <input type="date" id="end" onChange={onStudyEndChange} />
    </section>
  )
}