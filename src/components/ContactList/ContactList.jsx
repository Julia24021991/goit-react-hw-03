import { Contact } from "../Contact/Contact"

export const ContactList = ({ contacts }) => {
    return (
        <div>
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