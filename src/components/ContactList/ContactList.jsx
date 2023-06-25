import PropTypes from "prop-types";

const ContactList = ({contacts, onDeleteContact}) => {

 return (
   <ul>
   {contacts.map(({name, number, id}) => (
          <li key={id}>
            <p>{name}</p>
            <span>{number}</span>
            <button onClick={() => {onDeleteContact(id)}}>
              Delete
            </button>
          </li>
        ))}
   </ul>
 )
}
   
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList