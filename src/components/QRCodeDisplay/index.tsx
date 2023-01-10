import {
  forwardRef,
  HTMLAttributes,
  RefAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react'
import QRCode from 'qrcode'
import QRCodePlaceholder from '@/assets/qrcode-placeholder.png'
import styles from './styles.module.scss'
import { isEmail, isPhoneNumber } from '@/utils/helper-functions'

interface QRCodeDisplayProps extends HTMLAttributes<HTMLDivElement> {
  url: string
  showUrl?: boolean
}

const QRCodeDisplay: React.FC<
  QRCodeDisplayProps & RefAttributes<HTMLDivElement>
> = forwardRef(({ url, showUrl = true }, ref) => {
  const [src, setSrc] = useState(QRCodePlaceholder)
  const [isLoaded, setIsLoaded] = useState(false)

  const definedUrl = useCallback((): string => {
    if (isPhoneNumber(url)) {
      return `tel:${url}`
    }
    if (isEmail(url)) {
      return `mailto:${url}`
    }

    return url
  }, [url])

  useEffect(() => {
    const finalUrl = definedUrl()
    QRCode.toDataURL(
      finalUrl,
      {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        margin: 0,
      },
      (error: Error | null | undefined, src: string) => {
        if (error) throw error
        setSrc(src)
      }
    )
  }, [url, definedUrl])

  return (
    <div className={styles['qrcode-display']} ref={ref}>
      <div className={styles['qrcode-display__image-wrapper']}>
        {!isLoaded && <div className={styles['qrcode-display__placeholder']} />}
        <img
          className={`${styles['qrcode-display__image']} ${
            !isLoaded ? styles['qrcode-display__image--hidden'] : ''
          }`}
          src={src}
          alt={`QR code for ${url}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {showUrl && <p>{url}</p>}
    </div>
  )
})

export { QRCodeDisplay }
