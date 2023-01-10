import { useCallback } from 'react'
import { Modal } from '../Modal'
import styles from './styles.module.scss'
import { Button } from '../Button'

interface ConfirmationModalProps {
  title?: string
  question?: string
  isModalClosing: boolean
  onConfirm: () => void
  onCloseModal: () => void
  onCloseModalSuccess: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  question = 'Are you sure?',
  isModalClosing,
  onConfirm,
  onCloseModal,
  onCloseModalSuccess,
}) => {
  const confirm = useCallback(() => {
    onConfirm()
    onCloseModal()
  }, [onCloseModal, onConfirm])

  return (
    <Modal
      additionalClass={styles['confirmation-modal']}
      header={!!title && <h1>{title}</h1>}
      isModalClosing={isModalClosing}
      footer={
        <div className={styles['confirmation-modal__footer']}>
          <Button
            aria-label='Click to cancel'
            label='Cancel'
            title='Cancel'
            buttonType='secondary'
            onClick={onCloseModal}
          />
          <Button
            aria-label='Click to confirm'
            label='Confirm'
            title='Confirm'
            onClick={confirm}
          />
        </div>
      }
      onCloseModal={onCloseModal}
      onCloseModalSuccess={onCloseModalSuccess}
    >
      <div className={styles['confirmation-modal__main']}>
        <p>{question}</p>
      </div>
    </Modal>
  )
}

export { ConfirmationModal }
