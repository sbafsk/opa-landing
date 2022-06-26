export const sendMailApi = async (formData) => {
  console.log('sending mail...', formData)
  const reqOpts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  const url = process.env.REACT_APP_MAIL_API_URL

  try {
    const res = await fetch(url, reqOpts)
    console.log(res)
  } catch (error) {
    console.log(error)
    console.log('Error sending info.')
  }
}
