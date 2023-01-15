import { HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components'
import { Link } from '@/types'
import { isTouchDevice } from '@/utils/helper-functions'
import styles from './styles.module.scss'

interface LinkManagerProps extends HTMLAttributes<HTMLDivElement> {
  link: Link
  additionalClass?: string
  draggable?: boolean
  onEditLink: () => void
  onDeleteLink: () => void
  dragStart: () => void
  dragEnter: () => void
  drop: () => void
}

const LinkManager: React.FC<LinkManagerProps> = ({
  link,
  additionalClass,
  draggable,
  dragStart,
  dragEnter,
  drop,
  onEditLink,
  onDeleteLink,
  ...rest
}) => {
  const { label, icon } = link
  const touchDevice = isTouchDevice()

  return (
    <div
      className={`${styles['link-manager']}  ${
        draggable ? styles['link-manager--draggable'] : ''
      } ${additionalClass ? additionalClass : ''}`}
      draggable={draggable}
      onDragStart={touchDevice ? () => null : () => dragStart()}
      onDragEnter={touchDevice ? () => null : () => dragEnter()}
      onDragEnd={touchDevice ? () => null : drop}
      /*   onTouchStart={touchDevice ? () => dragStart() : () => null}
      onTouchMove={touchDevice ? () => dragEnter() : () => null}
      onTouchEnd={touchDevice ? drop : () => null} */
      {...rest}
    >
      <div>
        <FontAwesomeIcon
          icon={icon}
          size='lg'
          style={{ marginRight: '0.5rem' }}
        />
        <p>{label}</p>
      </div>

      <div className={`${styles['link-manager__actions']}`}>
        <Button
          icon={faEdit}
          buttonType='action'
          aria-label={`click to edit ${label} link`}
          title={`edit ${label}`}
          onClick={onEditLink}
        />
        <Button
          icon={faTrash}
          buttonType='action'
          aria-label={`click to delete ${label} link`}
          title={`delete ${label}`}
          onClick={onDeleteLink}
        />
      </div>
    </div>
  )
}

export { LinkManager }
