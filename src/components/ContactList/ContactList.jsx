import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from "../../redux/selectors";
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (contacts.length === 0) return <p>No contacts found.</p>;

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => (

          <Contact key={contact.id} contact={contact}/>

        ))}
      </ul>
    </div>
  )
}

export default ContactList