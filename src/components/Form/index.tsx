import React, { useCallback, useRef, useState } from 'react'
import { isEmail } from '../../utils'
import styles from './styles.module.css'
export default function Form({
  onConfirm,
  title = 'Connect via Magic'
}: {
  buttinTitle: string
  onConfirm: any
  title?: string
}) {
  const [email, setEmail] = useState('')
  const dic = useRef({
    formIsValid: false
  })
  const handleConfirm = useCallback(() => {
    onConfirm && onConfirm(email)
  }, [email])
  const handleChange = useCallback((event) => {
    setEmail(event.target.value)
    dic.current.formIsValid = isEmail(event.target.value)
  }, [])
  return (
    <div className={styles.formContainer}>
      <span className={styles.title}>{title}</span>

      <span className={styles.subTitle}>To continue using this app</span>

      <div className={styles.form}>
        <input
          onChange={handleChange}
          type='email'
          placeholder='hello@example.com'
        />
        <button
          disabled={!dic.current.formIsValid}
          style={dic.current.formIsValid ? {} : { backgroundColor: '#bbb' }}
          onClick={handleConfirm}
          type='submit'
        >
          Log in
        </button>
      </div>
    </div>
  )
}
