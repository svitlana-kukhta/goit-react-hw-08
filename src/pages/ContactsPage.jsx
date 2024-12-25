import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { selectVisibleContacts, selectIsLoading, selectError } from "../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
        <h1>Phonebook</h1>
          <ContactForm />
          {isLoading && !error && <b>Request in progress...</b>}
        <h2>Contacts</h2>
      <SearchBox />
      <ContactList contacts={visibleContacts} /></div>
  )
}

export default ContactsPage
