import { Contact } from "../Contact/Contact"

export const ContactList = ({ contacts }) => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ul>
                {contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact contact={contact} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}