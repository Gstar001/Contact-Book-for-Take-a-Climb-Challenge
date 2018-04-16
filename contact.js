const contacts = [
  {name: 'James', phone: '080849444', email: 'test@example.com'},
  {name: 'Steve', phone: '080849444', email: 'test@example.com'},
  {name: 'Harmony', phone: '0808494445', email: 'test@example.com'},
  {name: 'Yeye', phone: '080849444', email: 'test@example.com'},
]


class Contact {
  constructor() {
    this.list()
  }

  list() {
    let l = document.getElementById('allContacts')
    l.innerHTML = ''
    for(let contact of contacts) {
      this.addToList(contact)
    }

    document.getElementById('save').addEventListener('click', () => {
      this.save()
    })
  }

  addToList(contact) {
    let l = document.getElementById('allContacts')
    let newContact = document.createElement('li')
    newContact.innerHTML = contact.name
    newContact.addEventListener('click', () => {
      this.displayContact(contact)
    })
    l.appendChild(newContact)
  }
  
  displayContact(contact) {
    document.getElementById('contactDetails').style.visibility = 'visible'
    document.getElementById('name').innerHTML = contact.name
    document.getElementById('phoneNumber').innerHTML = contact.phone
    document.getElementById('email').innerHTML = contact.email
    this.addEditAction(contact)
    this.addDeleteAction(contact)
  }

  
  addDeleteAction(contact) {
    document.getElementById('delete').addEventListener('click', () => {
      this.delete(contact);
      document.getElementById('contactDetails').style.visibility = 'hidden'
    })
  }

  addEditAction(contact) {
    document.getElementById('edit').addEventListener('click', () => {
      this.edit(contact);
    }, {once: true})
  }

  edit(contact) {
    document.getElementById('nameField').value = contact.name
    document.getElementById('phoneField').value = contact.phone
    document.getElementById('emailField').value = contact.email
    document.getElementById('save').addEventListener('click', () => {
      this.save(contact)
    })
  }

  delete(contact) {
    let contactIndex = this.findIndex(contact);
    contacts.splice(contactIndex, 1);
    this.list()
  }

  save(contact) {
    if(contact) {
      let contactIndex = this.findIndex(contact)
      contacts[contactIndex] = this.contactFromForm()
    } else {
      contacts.push(this.contactFromForm())
    }
    this.list()
  }

  findIndex(contact) {
    return contacts.indexOf(contact)
  }

  contactFromForm() {
    let contact = {}
    contact['name'] = document.getElementById('nameField').value
    contact['phone'] = document.getElementById('phoneField').value
    contact['email'] = document.getElementById('emailField').value

    return contact;
  }
}

new Contact()