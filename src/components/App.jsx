import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Message from './Message';
import css from './App.module.css';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <Message />}
    </div>
  );
}

export default App;
