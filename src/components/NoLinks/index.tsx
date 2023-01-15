import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components'
import styles from './styles.module.scss'

interface NoLinksProps {
  sentence?: string
  additionalClass?: string
  showAddButton?: boolean
  onAddNewLink: () => void
}

const NoLinks: React.FC<NoLinksProps> = ({
  sentence = 'No links to display',
  additionalClass,
  showAddButton = true,
  onAddNewLink,
}) => {
  return (
    <div
      className={`${styles['no-links']} ${
        additionalClass ? additionalClass : ''
      }`}
    >
      <p>{sentence}</p>
      {showAddButton && (
        <Button
          label='Add new link'
          aria-label='Click to add new link'
          title='Add new link'
          icon={faPlus}
          onClick={onAddNewLink}
        />
      )}
    </div>
  )
}

export { NoLinks }
