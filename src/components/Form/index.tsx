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
      <text className='title'>{title}</text>

      <text className='subTitle'>To continue using this app</text>

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
