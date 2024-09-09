export const ContactAPI = {
  contacts: [
    {
      id: 70219571,
      name: "Albert Einstein",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "11111111111",
    },
    {
      id: 70219572,
      name: "Albert Einstein 2",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "12222222222",
    },
    {
      id: 70219573,
      name: "Albert Einstein 3",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "13333333333",
    },
    {
      id: 70219574,
      name: "Albert Einstein 4",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "14444444444",
    },
    {
      id: 70219575,
      name: "Albert Einstein 5",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555",
    },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    const isContact = (c) => c.id === id;
    return this.contacts.find(isContact);
  },
};
