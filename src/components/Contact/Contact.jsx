import { FaUser, FaPhone } from "react-icons/fa6";


export const Contact = ({ contact: { name, number, id }, onDeleteButton }) => {
    return (
        <div>
            <div>
                <p><FaUser />{name}</p>
                <p><FaPhone />{number}</p>
            </div>
            <button onClick={() => onDeleteButton(id)}>Delete</button>
        </div>
    )
}
