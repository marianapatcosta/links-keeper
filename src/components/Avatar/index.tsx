import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  additionalClass?: string
}

const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  additionalClass,
  ...rest
}) => {
  return (
    <img
      className={`${styles.avatar} ${additionalClass ? additionalClass : ''}`}
      alt={alt}
      src={src}
      {...rest}
    />
  )
}

export { Avatar }
