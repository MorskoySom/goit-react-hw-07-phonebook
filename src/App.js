import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./Redux/operations";
import { getContacts, getIsLoading, getError } from "./Redux/selectors";

import { ContactList } from "ContactsList/ContactsList";
import { ContactForm } from "ContactForm/ContactForm";
import { Filter } from "Filter/Filter";
import { Container } from 'App.styled'

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(getContacts);
  // const { items, isLoading, error } = contacts;
  console.log(contacts.map(contact => contact.name));
  console.log(contacts.map(contact => contact.phone));
  // Вызываем операцию

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  )

  // // Рендерим разметку в зависимости от значений в состоянии
  // return (
  //   <div>
  //     {/* {isLoading && <p>Loading tasks...</p>} */}
  //     {/* {error && <p>{error}</p>} */}
  //     <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p>
  //   </div>
  // );



};




