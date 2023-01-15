import { useCallback, useState } from 'react'
import { faEdit, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import {
  AvatarHeader,
  Button,
  LinkDisplay,
  NoLinks,
  QRCodeModal,
} from '@/components'
import { useSearchLinks } from '@/hooks/useSearchLinks'
import type { Link, Profile } from '@/types'
import { share } from '@/utils/helper-functions'
import styles from './styles.module.scss'

interface UserProfileProps {
  isStaticMode: boolean
  profile?: Profile
  onOpenEditMode: () => void
}

const UserProfile: React.FC<UserProfileProps> = ({
  profile,
  isStaticMode,
  onOpenEditMode,
}) => {
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [selectedLink, setSelectedLink] = useState<Link | null>(null)
  const { avatarUrl, username, links } = profile || {}

  const { filteredLinks, isSearching, SearchLinks } = useSearchLinks(
    links,
    styles['user-profile__search']
  )

  const shareLink = useCallback(async () => {
    await share(
      window.location.href,
      `Check ${!!username ? `${username}'s` : 'this'} LinksKeeper!`,
      `Here is the link to ${
        !!username ? `${username}'s` : 'this'
      } LinksKeeper!`
    )
  }, [username])

  const onCloseModalSuccess = () => {
    setIsModalClosing(false)
    setSelectedLink(null)
  }

  return (
    <div className={`${styles['user-profile']}`}>
      <header className={`${styles['user-profile__header']}`}>
        <AvatarHeader
          src={avatarUrl}
          alt={`${username}'s avatar`}
          heading={username}
        >
          <Button
            aria-label={`Click to ${isStaticMode ? 'share' : 'edit'}`}
            title={isStaticMode ? `Share URL` : 'Edit'}
            buttonType='action'
            icon={isStaticMode ? faShareNodes : faEdit}
            onClick={isStaticMode ? shareLink : onOpenEditMode}
          />
        </AvatarHeader>
      </header>

      <main className={`${styles['user-profile__main']}`}>
        {SearchLinks}
        {!!filteredLinks?.length ? (
          <div className={styles['user-profile__links']}>
            {filteredLinks.map((link) => (
              <LinkDisplay
                key={link.id}
                link={link}
                onSelectLink={() => setSelectedLink(link)}
              />
            ))}
          </div>
        ) : (
          <NoLinks
            sentence={`No links to display ${
              !!isSearching ? '. Please change search keywords.' : ''
            }`}
            showAddButton={!isSearching}
            onAddNewLink={onOpenEditMode}
            additionalClass={
              !isSearching ? styles['user-profile__no-links'] : ''
            }
          />
        )}
      </main>
      {!!selectedLink && (
        <QRCodeModal
          selectedLink={selectedLink}
          isModalClosing={isModalClosing}
          avatarUrl={avatarUrl}
          username={username}
          onCloseModal={() => setIsModalClosing(true)}
          onCloseModalSuccess={onCloseModalSuccess}
        />
      )}
    </div>
  )
}

export { UserProfile }
