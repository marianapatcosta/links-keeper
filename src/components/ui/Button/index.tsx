import { DetailedHTMLProps, ButtonHTMLAttributes, MouseEvent } from 'react'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'

type ButtonType = 'action' | 'primary' | 'secondary'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string
  icon?: IconProp
  iconSize?: SizeProp
  disabled?: boolean
  additionalClass?: string
  buttonType?: ButtonType
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconSize,
  additionalClass,
  buttonType = 'primary',
  onClick,
  ...rest
}) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    !!onClick && onClick(event)
  }

  return (
    <button
      className={`${styles.button} ${styles[`button--${buttonType}`]} ${
        additionalClass ? additionalClass : ''
      } `}
      {...rest}
      onClick={handleOnClick}
    >
      {!!icon && (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          style={{ marginRight: !!label ? '0.25rem' : '0' }}
        />
      )}
      {!!label && label}
    </button>
  )
}

export { Button }
