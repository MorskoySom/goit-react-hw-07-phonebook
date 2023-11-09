import { ContactList } from "ContactsList/ContactsList";
import { ContactForm } from "ContactForm/ContactForm";
import { Filter } from "Filter/Filter";
import { Container } from 'App.styled'

export const App = () => {

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  )
}





