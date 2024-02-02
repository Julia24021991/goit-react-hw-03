import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short! Min 3 symbols")
        .max(50, "Too long! Max 50 symbols")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too short! Min 3 symbols")
        .max(50, "Too long! Max 50 symbols")
        .required("Required"),
})


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
            validationSchema={contactSchema}

            onSubmit={(values, actions) => {
                console.log(values)
                onAdd({ id: Date.now(), ...values })
                actions.resetForm();
            }}>

            <Form >
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span" />

                </div>
                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />

                </div>
                <button type="submit">Add contacts</button>
            </Form>
        </Formik >

    )
}