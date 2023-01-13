import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react'
import { Avatar } from '../Avatar'
import styles from './styles.module.scss'

interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src?: string
  alt?: string
  heading?: string
  subHeading?: string
  additionalClass?: string
  children?: ReactNode
}

const AvatarHeader: React.FC<AvatarProps> = ({
  src,
  alt,
  heading,
  subHeading,
  additionalClass,
  children,
  ...rest
}) => {
  return (
    <div
      className={`${styles['avatar-header']} ${
        additionalClass ? additionalClass : ''
      }`}
    >
      {!!src && <Avatar src={src} alt={alt} {...rest} />}
      <div className={`${styles['avatar-header__text']}`}>
        {!!heading && <h1>{heading}</h1>}
        {!!subHeading && <p>{subHeading}</p>}
      </div>
      {!!children && (
        <div className={`${styles['avatar-header__actions']}`}>{children}</div>
      )}
    </div>
  )
}

export { AvatarHeader }
