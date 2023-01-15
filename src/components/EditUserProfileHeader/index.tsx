import { ChangeEvent, memo, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faTrash,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { imageTypes } from '@/utils/constants'
import { Avatar, Button, Input } from '@/components'
import styles from './styles.module.scss'

interface EditUserProfileHeaderProps {
  avatarUrl: string
  avatarUrlError?: string
  username: string
  onRemoveAvatar: () => void
  onAvatarUpload: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void
  onSaveChanges: () => void
  onDiscardChanges: () => void
}

const EditUserProfileHeader: React.FC<EditUserProfileHeaderProps> = memo(
  ({
    avatarUrl,
    avatarUrlError,
    username,
    onRemoveAvatar,
    onAvatarUpload,
    onChangeUsername,
    onSaveChanges,
    onDiscardChanges,
  }) => {
    const inputFileRef = useRef<HTMLInputElement | null>(null)

    return (
      <header className={`${styles['edit-user-profile-header']}`}>
        <div className={styles['edit-user-profile-header__top']}>
          <button
            onClick={() => inputFileRef.current?.click()}
            aria-label='Click to upload an avatar'
          >
            {!!avatarUrl ? (
              <Avatar src={avatarUrl} alt='user avatar' />
            ) : (
              <div className={styles['edit-user-profile-header__no-avatar']}>
                <FontAwesomeIcon
                  icon={faUser}
                  className={styles['edit-user-profile-header__user']}
                />
                <p>Add avatar</p>
              </div>
            )}
            <input
              type='file'
              accept={imageTypes.join(',')}
              ref={inputFileRef}
              onChange={onAvatarUpload}
            />
          </button>
          <div className={`${styles['edit-user-profile-header__actions']}`}>
            {!!avatarUrl && (
              <Button
                icon={faTrash}
                buttonType='action'
                aria-label='Click to remove avatar'
                title='Remove avatar'
                additionalClass={styles['edit-user-profile-header__remove']}
                onClick={onRemoveAvatar}
              />
            )}
            <div>
              <Button
                aria-label={`Click to discard the user profile changes'}`}
                title='Discard user profile changes'
                buttonType='action'
                icon={faXmark}
                iconSize='lg'
                additionalClass={styles['edit-user-profile-header__error']}
                onClick={onDiscardChanges}
              />
              <Button
                aria-label={`Click to save the user profile changes'}`}
                title='Save user profile changes'
                buttonType='action'
                icon={faCheck}
                iconSize='lg'
                additionalClass={styles['edit-user-profile-header__success']}
                onClick={onSaveChanges}
              />
            </div>
          </div>
          {!!avatarUrlError && (
            <p className={styles['edit-user-profile-header__error']}>
              {avatarUrlError}
            </p>
          )}
        </div>
        <Input
          autoComplete='off'
          placeholder="User's name"
          value={username}
          additionalClass={styles['edit-user-profile-header__input']}
          onChange={onChangeUsername}
        />
      </header>
    )
  }
)

export { EditUserProfileHeader }
