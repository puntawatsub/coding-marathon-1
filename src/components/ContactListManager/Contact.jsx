import React from 'react'

function Contact({ contact, index, deleteContact }) {
  return (
    <li className='contact-item'>
      <div>
        <strong>Name:</strong> {contact.name}
      </div>
      <div>
        <strong>Mail Id:</strong> {contact.email}
      </div>
      <div>
        <strong>Job Title:</strong> {contact.jobTitle}
      </div>
      <div>
        {' '}
        <strong>Birthday:</strong> {contact.birthday}
      </div>
      <div>
        <strong> Website:</strong>{' '}
        <a href={contact.website}>{contact.website}</a>
      </div>
      <div>
        <strong>Notes:</strong> {contact.notes}
      </div>
      <div>
        <strong>Favorite: </strong>
        {contact.favorite ? ' Yes' : 'No'}
      </div>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </li>
  )
}

export default Contact
