import React, { useCallback, useState } from 'react'
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
  const handleConfirm = useCallback(() => {
    onConfirm && onConfirm(email)
  }, [email])
  const handleChange = useCallback((event) => {
    setEmail(event.target.value)
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
        <button onClick={handleConfirm} type='submit'>
          Log in
        </button>
      </div>
    </div>
  )
}
