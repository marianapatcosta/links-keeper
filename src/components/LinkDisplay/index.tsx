import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  useCallback,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@/types'
import { Button } from '../Button'
import styles from './styles.module.scss'

interface LinkDisplayProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  link: Link
  onSelectLink: () => void
  additionalClass?: string
}

const LinkDisplay: React.FC<LinkDisplayProps> = ({
  link,
  additionalClass,
  onSelectLink,
  ...rest
}) => {
  const { url, label, icon } = link

  const handleCheckLink = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      onSelectLink()
    },
    [onSelectLink]
  )

  return (
    <a
      target='_blank'
      rel='nofollow noopener noreferrer'
      href={url}
      className={`${styles['link-display']} ${
        additionalClass ? additionalClass : ''
      }`}
      aria-label={`click to go to ${label}`}
      title={`go to ${label}`}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} size='lg' />
      <p>{label}</p>
      <Button
        icon={faEye}
        onClick={handleCheckLink}
        aria-label={`click to check ${label} link`}
        title={`check ${label}`}
      />
    </a>
  )
}

export { LinkDisplay }
