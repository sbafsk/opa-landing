import React from 'react'

const styles = {
  input: {
    width: '100%',
    borderRadius: '15px',
    height: '36px',
    border: 'none',
    paddingLeft: '10px'
  },
  label: {
    color: '#FFF',
    fontSize: '14px'
  },
  error: {
    color: '#A22',
    fontSize: '12px'
  }
}

const FormInput = ({
  name,
  label,
  value,
  error,
  touched,
  handleChange,
  handleBlur,
  multiline = false
}) => (
  <>
    <label htmlFor={name} style={styles.label}>
      {label}
    </label>
    <br />
    {!multiline ? (
      <input
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={styles.input}
      />
    ) : (
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ ...styles.input, height: '72px' }}
        rows={4}
      ></textarea>
    )}
    <br />
    {Boolean(error && touched) && <span style={styles.error}>{error}</span>}
    <br />
  </>
)

export default FormInput
