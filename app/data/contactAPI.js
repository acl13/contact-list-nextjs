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
      name: "Albert Einstein 2",
      email: "aeinstein@example.com",
      phone_number: "12222222222",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    },
    {
      id: 70219573,
      name: "Albert Einstein 3",
      email: "aeinstein@example.com",
      phone_number: "13333333333",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    },
    {
      id: 70219574,
      name: "Albert Einstein 4",
      email: "aeinstein@example.com",
      phone_number: "14444444444",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    },
    {
      id: 70219575,
      name: "Albert Einstein 5",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    },
  ],
  all: function () {
    return this.contacts;
  },
  addContact: function ({ id, name, email, phone_number, image_url }) {
    this.contacts.push({ id, name, email, phone_number, image_url });
  },
  get: function (id) {
    const isContact = (c) => c.id === id;
    return this.contacts.find(isContact);
  },
};
