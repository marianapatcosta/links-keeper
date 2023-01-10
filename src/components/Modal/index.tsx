import { isTouchDevice } from '@/utils/helper-functions'
import {
  HTMLAttributes,
  RefAttributes,
  ReactNode,
  forwardRef,
  useRef,
  TouchEvent,
} from 'react'
import styles from './styles.module.scss'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  isModalClosing: boolean
  description?: string
  header?: ReactNode
  footer?: ReactNode
  additionalClass?: string
  onCloseModal: () => void
  onCloseModalSuccess: () => void
}

const Modal: React.FC<ModalProps & RefAttributes<HTMLDivElement>> = forwardRef(
  (
    {
      description = '',
      header,
      footer,
      children,
      additionalClass,
      isModalClosing = false,
      onCloseModal,
      onCloseModalSuccess,
    },
    ref
  ) => {
    const touchStart = useRef<number | null>(null)
    const touchEnd = useRef<number | null>(null)
    const touchDevice = isTouchDevice()
    const MIN_SWIPE_DISTANCE = 50

    const handleAnimationEnd = () => {
      if (isModalClosing) {
        onCloseModalSuccess()
      }
    }

    const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
      touchEnd.current = null // to avoid fire swipe with usual touch events
      touchStart.current = event.targetTouches[0].clientY
    }

    const onTouchMove = (event: TouchEvent<HTMLDivElement>) =>
      (touchEnd.current = event.targetTouches[0].clientY)

    const onTouchEnd = () => {
      if (touchStart.current === null || touchEnd.current === null) return
      const distance = touchStart.current - touchEnd.current
      const isTopSwipe = distance > MIN_SWIPE_DISTANCE
      if (isTopSwipe) {
        onCloseModal()
      }
    }

    return (
      <div
        className={`${styles['modal__overlay']} ${
          additionalClass ? additionalClass : ''
        }`}
        role='dialog'
        aria-labelledby={description}
        aria-describedby={description}
        onClick={onCloseModal}
      >
        <div
          ref={ref}
          className={`${styles['modal__content']} ${
            isModalClosing ? styles['modal__content--closing'] : ''
          }`}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={touchDevice ? onTouchStart : () => null}
          onTouchMove={touchDevice ? onTouchMove : () => null}
          onTouchEnd={touchDevice ? onTouchEnd : () => null}
        >
          {!!header && <header>{header}</header>}
          <main className={styles['modal__main']}>{children}</main>

          {(!!footer || touchDevice) && (
            <footer className={styles['modal__footer']}>
              {footer}
              <div className={styles['modal__bottom-bar']}></div>
            </footer>
          )}
        </div>
      </div>
    )
  }
)

export { Modal }
