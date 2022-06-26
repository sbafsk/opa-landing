import React from 'react'
import { Formik } from 'formik'
import { object, string } from 'yup'

import FormInput from './FormInput'
import Button from './Button'

//import { sendMailApi, confirmSend } from '../../util/send_mail'

const ContactForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('Submitted values:', values)
      //confirmSend(() => sendMailApi(values))
      setSubmitting(false)
    }, 1000)
  }

  const schema = object().shape({
    name: string().required('Nombre requerido'),
    email: string().email('Correo invalido').required('Correo requerido'),
    comments: string().required('El comentario no puede quedar vacio')
  })

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{ name: '', email: '', company: '', comments: '' }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <FormInput
            name="name"
            label="Nombre *"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            required
          />
          <FormInput
            name="email"
            label="Correo *"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            required
          />
          <FormInput
            name="company"
            label="Empresa | Negocio"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.company}
            error={errors.company}
            touched={touched.company}
          />
          <FormInput
            multiline
            name="comments"
            label="Comentarios *"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.comments}
            error={errors.comments}
            touched={touched.comments}
            required
          />
          <Button text="Enviar" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
