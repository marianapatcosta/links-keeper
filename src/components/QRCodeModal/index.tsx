import { useCallback, useEffect, useRef, useState } from 'react'
import { faShareNodes, faDownload } from '@fortawesome/free-solid-svg-icons'
import { toPng } from 'html-to-image'
import { Link } from '@/types'
import {
  share,
  convertImageUrlIntoBase64,
  isValidBase64ImageUrl,
} from '@/utils/helper-functions'
import { AvatarHeader } from '../AvatarHeader'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { QRCodeDisplay } from '../QRCodeDisplay'
import styles from './styles.module.scss'

interface QRCodeModalProps {
  avatarUrl?: string
  username?: string
  selectedLink: Link
  isModalClosing: boolean
  onCloseModal: () => void
  onCloseModalSuccess: () => void
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({
  avatarUrl,
  username,
  selectedLink,
  isModalClosing,
  onCloseModal,
  onCloseModalSuccess,
}) => {
  const modalRef = useRef(null)
  const { url, label } = selectedLink || {}

  const [isPrinting, setIsPrinting] = useState(false)

  const [base64AvatarUrl, setBase64AvatarUrl] = useState('')

  const download = useCallback(async () => {
    if (!modalRef.current) return
    try {
      setIsPrinting(true)
      const isMobileScreen = window.matchMedia('(max-width: 480px)').matches

      const dataUrl = await toPng(modalRef.current, {
        quality: 1,
        pixelRatio: 1,
        style: {
          margin: '0',
          marginTop:
            isMobileScreen && base64AvatarUrl
              ? `-${(modalRef.current as HTMLDivElement).offsetTop}px`
              : '0',
          borderRadius: '0',
          padding: '2px',
        },
      })
      const link = document.createElement('a')
      link.download = `${!!username ? `${username}'s` : ''} ${label}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      alert('It was not possible to download the QR Code. Please try again.')
    } finally {
      setIsPrinting(false)
    }
  }, [label, username, base64AvatarUrl])

  const shareLink = useCallback(async () => {
    await share(
      url!,
      `Check the link to ${!!username ? `${username}'s` : ''} ${label}`,
      `Here is the link to ${!!username ? `${username}'s` : ''} ${label}`
    )
  }, [label, url, username])

  useEffect(() => {
    if (!avatarUrl) return

    if (isValidBase64ImageUrl(avatarUrl)) {
      return setBase64AvatarUrl(avatarUrl)
    }
    convertImageUrlIntoBase64(avatarUrl).then((a) => {
      !!a && isValidBase64ImageUrl(a) && setBase64AvatarUrl(a)
    })
  }, [avatarUrl])

  if (!url) return null

  return (
    <Modal
      ref={!!base64AvatarUrl ? modalRef : undefined}
      isModalClosing={isModalClosing}
      additionalClass={`${styles['qrcode-modal']} ${
        isPrinting ? styles['qrcode-modal--printing'] : ''
      }`}
      header={
        <AvatarHeader
          src={base64AvatarUrl || avatarUrl}
          alt={`${username}'s avatar`}
          heading={username}
          subHeading={label}
        >
          <>
            <Button
              aria-label={`Click to download QR Code`}
              title={`Download QR Code`}
              buttonType='action'
              icon={faDownload}
              additionalClass={`${
                isPrinting && !!base64AvatarUrl
                  ? styles['qrcode-modal__header--printing']
                  : ''
              }`}
              onClick={download}
            />

            <Button
              aria-label={`Click to share ${url}`}
              title={`Share URL`}
              buttonType='action'
              icon={faShareNodes}
              additionalClass={`${
                isPrinting ? styles['qrcode-modal__header--printing'] : ''
              }`}
              onClick={shareLink}
            />
          </>
        </AvatarHeader>
      }
      onCloseModal={onCloseModal}
      onCloseModalSuccess={onCloseModalSuccess}
    >
      <>
        <QRCodeDisplay
          url={url}
          ref={!base64AvatarUrl ? modalRef : undefined}
        />
      </>
    </Modal>
  )
}

export { QRCodeModal }
