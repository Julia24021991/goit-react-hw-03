import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

export const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
        <Formik
            initialValues={
                {
                    name: "",
                    number: ""
                }
            }
            onSubmit={(values, actions) => {
                console.log(values)
                onAdd({ id: Date.now(), ...values })
                actions.resetForm();
            }}>

            <Form >
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" />

                </div>
                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" />

                </div>
                <button type="submit">Add contacts</button>
            </Form>
        </Formik >

    )
}