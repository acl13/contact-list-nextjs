/**
 * The ContactAPI is a JavaScript object that contains an array to hold the contact objects,
 * and methods for manipulating the contacts array or speciifc objects within the array
 **/

export const ContactAPI = {
  contacts: [],
  all: function () {
    return this.contacts;
  },
  addContact: function ({ id, name, email, phone_number, image_url }) {
    this.contacts.push({ id, name, email, phone_number, image_url });
  },
  remove: function (contact) {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
    if (index !== -1) {
      // creates new array to avoid deleting contact twice in strict mode
      const trimmedContacts = [
        ...this.contacts.slice(0, index),
        ...this.contacts.slice(index + 1),
      ];
      // removes contact from array
      this.contacts.splice(index, 1);
      return trimmedContacts;
    }
  },
  editContact: function ({ id, name, email, phone_number, image_url }) {
    const index = this.contacts.findIndex((c) => c.id === id);
    this.contacts[index].name = name;
    this.contacts[index].email = email;
    this.contacts[index].phone_number = phone_number;
    this.contacts[index].image_url = image_url;
  },
  get: function (id) {
    const isContact = (c) => c.id === id;
    return this.contacts.find(isContact);
  },
};
