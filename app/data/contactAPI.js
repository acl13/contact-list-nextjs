export const ContactAPI = {
  contacts: [
    {
      id: 70219571,
      name: "Albert Einstein 1",
      email: "aeinstein@example.com",
      phone_number: "11111111111",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1280px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    },
    {
      id: 70219572,
      name: "Bob Regular",
      email: "bregular@example.com",
      phone_number: "11234567890",
      image_url: "url",
    },
    {
      id: 70219573,
      name: "Cats Mcgee",
      email: "cats@example.com",
      phone_number: "13333333333",
      image_url: "url",
    },
    {
      id: 70219574,
      name: "Fred Flinstone",
      email: "fflinstone@example.com",
      phone_number: "14444444444",
      image_url: "url",
    },
    {
      id: 70219575,
      name: "Poppy Seed",
      email: "poppys@example.com",
      phone_number: "15555555555",
      image_url: "url",
    },
  ],
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
