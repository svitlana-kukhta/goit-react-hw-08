import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


const Contact = ({contact}) => {
  const dispatch = useDispatch();

const onDelete = async () => {
    try {
      const result = await dispatch(deleteContact(contact.id)).unwrap(); 
      console.log(result);
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  return (
    <li className={css.contactItem}>
     <span className={css.contactText}>
           {contact.name}: {contact.number}
     </span>
     
      <button className={css.contactItemDelete} onClick={onDelete}>Delete</button>
    </li>
  )
}

export default Contact