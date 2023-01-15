import { memo, ReactElement } from 'react'
import type { Link, Modal, Modal as ModalType } from '@/types'
import { AddEditLinkModal, ConfirmationModal } from '@/components'

interface EditUserProfileProps {
  isModalClosing: boolean
  modalType: Modal | null
  selectedLink: Link | null
  addLink: (link: Link) => void
  editLink: (link: Link) => void
  deleteLink: () => void
  onExitEditMode: () => void
  onCloseModal: () => void
  onCloseModalSuccess: () => void
}

const EditUserProfileModal: React.FC<EditUserProfileProps> = memo(
  ({
    isModalClosing,
    modalType,
    selectedLink,
    addLink,
    deleteLink,
    editLink,
    onExitEditMode,
    onCloseModal,
    onCloseModalSuccess,
  }) => {
    const modalMapper: Record<
      Exclude<ModalType, 'qr-code'>,
      ReactElement<any, any>
    > = {
      'add-edit-link': (
        <AddEditLinkModal
          selectedLink={selectedLink}
          onAddLink={addLink}
          onEditLink={editLink}
          isModalClosing={isModalClosing}
          onCloseModal={onCloseModal}
          onCloseModalSuccess={onCloseModalSuccess}
        />
      ),
      'discard-confirmation': (
        <ConfirmationModal
          title='Are you sure?'
          question='Do you want to discard the changes?'
          isModalClosing={isModalClosing}
          onConfirm={onExitEditMode}
          onCloseModal={onCloseModal}
          onCloseModalSuccess={onCloseModalSuccess}
        />
      ),
      'delete-link-confirmation': (
        <ConfirmationModal
          title='Are you sure?'
          question='Do you want to delete this link?'
          isModalClosing={isModalClosing}
          onConfirm={deleteLink}
          onCloseModal={onCloseModal}
          onCloseModalSuccess={onCloseModalSuccess}
        />
      ),
    }

    return modalMapper[modalType as keyof typeof modalMapper]
  }
)

export { EditUserProfileModal }
