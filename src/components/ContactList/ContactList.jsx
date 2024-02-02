import { Contact } from "../Contact/Contact"

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <div>
            <ul>
                {contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact contact={contact} onDeleteButton={onDelete} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}