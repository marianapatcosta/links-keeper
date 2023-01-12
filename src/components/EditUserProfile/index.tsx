import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDragAndDrop } from '@/hooks/useDragAndDrop'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useSearchLinks } from '@/hooks/useSearchLinks'
import type {
  ColorSettings,
  Link,
  Modal as ModalType,
  Profile,
  UserData,
} from '@/types'
import { COLLECTION_USER_DATA, imageTypes } from '@/utils/constants'
import { isValidBase64ImageUrl } from '@/utils/helper-functions'
import { Button } from '../Button'
import { ColorsPicker } from '../ColorsPicker'
import { EditUserProfileHeader } from '../EditUserProfileHeader'
import { EditUserProfileModal } from '../EditUserProfileModal'
import { LinkManager } from '../LinkManager'
import { NoLinks } from '../NoLinks'
import styles from './styles.module.scss'

interface EditUserProfileProps {
  profile?: Profile
  colors?: ColorSettings
  onExitEditMode: () => void
}

const EditUserProfile: React.FC<EditUserProfileProps> = ({
  profile,
  colors: baseColors,
  onExitEditMode,
}) => {
  const { saveItemInStorage } = useLocalStorage()

  const [modalType, setModalType] = useState<ModalType | null>(null)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [selectedLink, setSelectedLink] = useState<Link | null>(null)

  const [links, setLinks] = useState(
    !!profile?.links ? [...profile.links] : ([] as Link[])
  )
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatarUrl || '')
  const [username, setUsername] = useState(profile?.username || '')
  const [colors, setColors] = useState(
    !!baseColors ? { ...baseColors } : { primary: '', secondary: '', font: '' }
  )
  const { filteredLinks, isSearching, SearchLinks } = useSearchLinks(
    links,
    styles['edit-user-profile__search']
  )

  const onCloseModal = useCallback(() => setIsModalClosing(true), [])

  const onCloseModalSuccess = useCallback(() => {
    setIsModalClosing(false)
    setSelectedLink(null)
    setModalType(null)
  }, [])

  const addLink = useCallback(
    (newLink: Link) => setLinks([newLink, ...links]),
    [links]
  )

  const editLink = useCallback(
    (editedLink: Link) => {
      const updatedLinks = links.map((link) =>
        link.id === editedLink.id ? editedLink : link
      )
      setLinks(updatedLinks)
      setSelectedLink(null)
    },
    [links]
  )

  const deleteLink = useCallback(() => {
    if (!selectedLink) return
    const updatedLinks = links.filter(({ id }) => id !== selectedLink.id)
    setLinks(updatedLinks)
    setSelectedLink(null)
  }, [links, selectedLink])

  const saveChanges = useCallback(() => {
    const updatedData = {
      profile: { links, avatarUrl, username },
      colors,
    }
    saveItemInStorage<UserData>(COLLECTION_USER_DATA, updatedData)
    onExitEditMode()
  }, [avatarUrl, username, colors, links, saveItemInStorage, onExitEditMode])

  const discardChanges = useCallback(
    () => setModalType('discard-confirmation'),
    []
  )

  const onAddLink = () => {
    setModalType('add-edit-link')
  }

  const onEditLink = (link: Link) => {
    setSelectedLink(link)
    setModalType('add-edit-link')
  }

  const onDeleteLink = (link: Link) => {
    setSelectedLink(link)
    setModalType('delete-link-confirmation')
  }

  const updateUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setUsername((event.target as HTMLInputElement).value),
    []
  )

  const removeAvatar = useCallback(() => setAvatarUrl(''), [])

  const onAvatarUpload = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }

    const file = event.target.files[0]
    const fileType = `.${file.type.split('/').pop()}`.toLowerCase()
    if (!imageTypes.includes(fileType)) {
      return alert('The file type is invalid! Please upload an image!')
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      const result = reader.result as string
      if (!isValidBase64ImageUrl(result)) {
        event.target.value = ''
        return alert('The file is corrupted. Please upload a valid image!')
      }
      setAvatarUrl(result)
      event.target.value = ''
    }

    reader.readAsDataURL(file)
  }, [])

  const colorUpdate = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { value, name } = event.target as HTMLInputElement
    setColors((prevColors) => ({ ...prevColors, [name]: value }))
  }, [])

  const { dragStart, dragEnter, drop } = useDragAndDrop<Link>(links, setLinks)
  return (
    <div className={`${styles['edit-user-profile']}`}>
      <EditUserProfileHeader
        avatarUrl={avatarUrl}
        username={username}
        onAvatarUpload={onAvatarUpload}
        onChangeUsername={updateUsername}
        onSaveChanges={saveChanges}
        onDiscardChanges={discardChanges}
        onRemoveAvatar={removeAvatar}
      />
      <main className={`${styles['edit-user-profile__main']}`}>
        <ColorsPicker colors={colors} onColorUpdate={colorUpdate} />
        {SearchLinks}
        {!!filteredLinks?.length ? (
          <div className={styles['edit-user-profile__links']}>
            {filteredLinks.map((link, index) => (
              <LinkManager
                key={link.id}
                link={link}
                draggable
                dragStart={() => dragStart(index)}
                dragEnter={() => dragEnter(index)}
                drop={drop}
                onEditLink={() => onEditLink(link)}
                onDeleteLink={() => onDeleteLink(link)}
              />
            ))}
          </div>
        ) : (
          <NoLinks
            sentence={`No links to display. ${
              !!isSearching ? '. Please change search keywords.' : ''
            }`}
            showAddButton={!isSearching}
            onAddNewLink={onAddLink}
            additionalClass={
              !isSearching ? styles['user-profile__no-links'] : ''
            }
          />
        )}
      </main>
      {!!modalType && (
        <EditUserProfileModal
          isModalClosing={isModalClosing}
          modalType={modalType}
          selectedLink={selectedLink}
          addLink={addLink}
          deleteLink={deleteLink}
          editLink={editLink}
          onExitEditMode={onExitEditMode}
          onCloseModal={onCloseModal}
          onCloseModalSuccess={onCloseModalSuccess}
        />
      )}
      {!!links?.length && (
        <Button
          aria-label='Click to add new link'
          title='Add new link'
          icon={faPlus}
          additionalClass={styles['edit-user-profile__float-button']}
          onClick={onAddLink}
        />
      )}
    </div>
  )
}

export { EditUserProfile }
