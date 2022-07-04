const SERVICE_ID = 'service_4983pty'
const TEMPLATE_ID = 'template_5gmd5ti'
const PUBLIC_KEY = 'user_J8Y8K7JwWwLqVlg9daXaH'
const PRIVATE_KEY = 'e69c427cf33d529fabe65272cbb79330'

const SEND_URL = 'https://api.emailjs.com/api/v1.0/email/send'

export const sendEmail = async (data) => {
  const payload = { error: false }
  try {
    const params = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: JSON.parse(data),
      accessToken: PRIVATE_KEY
    }

    const response = await fetch(SEND_URL, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.status === 200) {
      alert('Mensaje enviado, gracias!')
    }
  } catch (error) {
    console.error('Failed to send email. Error: ', error)
    payload.error = true
    alert('Ocurrió un error al enviar el mensaje.')
  }

  return payload
}
