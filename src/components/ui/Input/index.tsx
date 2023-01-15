import { forwardRef, HTMLProps, RefAttributes, memo } from 'react'
import styles from './styles.module.scss'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string
  error?: string
  isInvalid?: boolean
  additionalClass?: string
}

const Input: React.FC<InputProps & RefAttributes<HTMLInputElement>> = memo(
  forwardRef(
    ({ label, error, isInvalid = false, additionalClass, ...rest }, ref) => {
      return (
        <div
          className={`${styles.input} ${
            isInvalid ? styles['input--error'] : ''
          } ${additionalClass ? additionalClass : ''}`}
        >
          <label htmlFor={label}>
            {!!label && <p>{label}</p>}
            <input
              className={`${styles.input} ${
                isInvalid ? styles['input--error'] : ''
              }`}
              id={label}
              ref={ref}
              {...rest}
            />
          </label>
          {isInvalid && <p className={styles['input__error']}>{error}</p>}
        </div>
      )
    }
  )
)

export { Input }
