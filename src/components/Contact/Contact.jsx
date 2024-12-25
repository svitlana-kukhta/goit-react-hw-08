import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { toast } from 'react-hot-toast';


const Contact = ({contact}) => {
  const dispatch = useDispatch();

const onDelete = async () => {
    try {
      const result = await dispatch(deleteContact(contact.id)).unwrap(); 
      console.log(result);
      toast.success('Контакт успішно видалено!'); 
    } catch (error) {
      console.error("Failed to delete contact:", error);
      toast.error('Помилка при видаленні контакту');
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