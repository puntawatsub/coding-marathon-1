import React, { useState } from 'react'
import './ContactListManager.css'
import Contact from './Contact'

function ContactListManager() {
  // State for the list of contacts
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [birthday, setBirthday] = useState('')
  const [notes, setNotes] = useState('')
  const [website, setWebsite] = useState('')
  const [favorite, setFavorite] = useState(false)

  // Handle input change for new  name
  function handleNameChange(event) {
    setName(event.target.value)
  }
  // Handle input change for new email
  function handleEmailChange(event) {
    setEmail(event.target.value)
  }
  // Handle input change a new jobtitle
  function handleJobTitleChange(event) {
    setJobTitle(event.target.value)
  }
  //Handle input change a new birthday
  function handleBirthdayChange(event) {
    setBirthday(event.target.value)
  }
  // Handle input change a new note
  function handleNotesChange(event) {
    setNotes(event.target.value)
  }
  // Handle input change a new website
  function handleWebsiteChange(event) {
    setWebsite(event.target.value)
  }
  //Handle input change a new favorite
  function handleFavoriteChange(event) {
    setFavorite(event.target.checked)
  }

  function addContact() {
    if (
      name.trim() !== '' &&
      email.trim() !== '' &&
      jobTitle.trim() !== '' &&
      birthday.trim() !== '' &&
      notes.trim() !== '' &&
      website.trim() !== ''
    ) {
      setContacts((c) => [
        ...c,
        { name, email, jobTitle, birthday, notes, website, favorite },
      ])
      setName('')
      setEmail('')
      setJobTitle('')
      setBirthday('')
      setNotes('')
      setWebsite('')
      setFavorite(false) // Clear the input fields
    }
  }

  // Delete a contact from the list
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index)
    setContacts(updatedContacts)
  }

  return (
    <div className='contact-list'>
      <h1>Contact List Manager</h1>
      <div>
        <input
          type='text'
          placeholder='Enter name...'
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type='email'
          placeholder='Enter email...'
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type='text'
          placeholder='Enter job title...'
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
        <br />
        <input
          type='date'
          placeholder='Enter birthday...'
          value={birthday}
          onChange={handleBirthdayChange}
        />
        <br />
        <textarea
          type='text'
          placeholder='Enter notes...'
          value={notes}
          onChange={handleNotesChange}
        />
        <br />
        <input
          type='website'
          placeholder='Enter website...'
          value={website}
          onChange={handleWebsiteChange}
        />
        <br />
        <label>
          Favorite ❤️
          <input
            type='checkbox'
            checked={favorite}
            onChange={handleFavoriteChange}
          />
        </label>

        <button onClick={addContact}>Add Contact</button>
      </div>
      <ol>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            contact={contact}
            index={index}
            deleteContact={deleteContact}
          />
        ))}
      </ol>
    </div>
  )
}

export default ContactListManager
