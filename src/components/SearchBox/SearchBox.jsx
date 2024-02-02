import { useId } from "react";

export const SearchBox = ({ value, onChange }) => {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>Find contact by name</label>
            <input type="text"
                id={id}
                value={value}
                onChange={event => onChange(event.target.value)} />
        </div>
    )

}