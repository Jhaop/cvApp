import './info.css'

export default function InfoGeneral({ onNameChange, onEmailChange, onPhoneChange }) {
  return (
    <section className="info infoGeneral">
      <h1 className="sectionTitle">General Information</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={onNameChange} />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" onChange={onEmailChange} />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="number" id="phoneNumber" onChange={onPhoneChange} />
    </section>
  )
}