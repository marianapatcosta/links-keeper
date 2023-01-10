import { FormEvent, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import type { ColorSettings } from '@/types'
import { Input } from '../Input'
import styles from './styles.module.scss'

interface ColorsPickerProps {
  title?: string
  colors: ColorSettings
  onColorUpdate: (event: FormEvent<HTMLInputElement>) => void
}

const ColorsPicker: React.FC<ColorsPickerProps> = memo(
  ({ title = 'Colors Settings', colors, onColorUpdate }) => {
    return (
      <details className={`${styles['colors-picker']}`}>
        <summary>
          <FontAwesomeIcon icon={faEyeDropper} />
          {title}
        </summary>
        <div>
          {Object.entries(colors).map(([key, value]) => (
            <Input
              key={`color-${key}-input`}
              label={key}
              type='color'
              value={value}
              name={key}
              onChange={onColorUpdate}
            />
          ))}
        </div>
      </details>
    )
  }
)

export { ColorsPicker }
