## Contact List

Project Description:

This contact list allows user to:

- View their contacts
- Add new contacts
- Delete contacts
- Edit existing contacts

---

Routes:
This project uses NextJS routes to create a multi-page application

The routes are as follows (this also mirrors the file structure):

/ (top level of site)

/contacts (displays a list of contacts)

    /new (displays form that allows user to add a new contact)

    /[id] (a dynamic route that changes based on the id of the contact clicked on by the user)

        /edit (displays a form that allows the user to edit the information of the information of the contact with an id that matches the dynamic route)

---

Components (located in components folder):

Contact - displays a contact's information

ContactForm - displays a form that will allow
the user to either create a new contact or edit an existing one

EditAndDeleteButtons - displays two buttons that allow the user to edit and/or delete existing contacts

---

This project has been created by a student at Parsity, an online software engineering course. The work in this repository is wholly of the student based on a sample starter project that can be accessed by looking at the repository that this project forks.

If you have any questions about this project or the program in general, visit [parsity.io](https://parsity.io/) or email hello@parsity.io.
