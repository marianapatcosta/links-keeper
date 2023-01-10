import {
  HTMLProps,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { KEYBOARD_KEY } from '@/utils/constants'
import styles from './styles.module.scss'

interface SelectProps<OptionType> extends HTMLProps<HTMLDivElement> {
  options: OptionType[]
  selectedOption: OptionType | undefined
  label?: string
  placeholder?: string
  error?: string
  isInvalid?: boolean
  additionalClass?: string
  selectOption: (option: OptionType) => void
  onSelectCollapse?: () => void
}

const Select = <OptionType extends { label: JSX.Element; value: string }>({
  label,
  error,
  additionalClass,
  options,
  selectedOption,
  disabled,
  isInvalid = true,
  placeholder = 'Select an option',
  onSelectCollapse,
  selectOption,
  ...rest
}: SelectProps<OptionType>): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdownExpansion = useCallback(
    (newValue?: boolean) => {
      isExpanded && !!onSelectCollapse && onSelectCollapse()
      !disabled &&
        setIsExpanded((prevIsExpanded) => newValue ?? !prevIsExpanded)
    },
    [disabled, isExpanded, onSelectCollapse]
  )

  const handleKeyEvent = (event: KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation()
    if (disabled) return
    if (event.key === KEYBOARD_KEY.ESCAPE_KEY) {
      return toggleDropdownExpansion(false)
    }
    if (event.key === KEYBOARD_KEY.ENTER_KEY) {
      return toggleDropdownExpansion()
    }
    if (event.key === KEYBOARD_KEY.SPACE_KEY) {
      return toggleDropdownExpansion(true)
    }
  }

  const handleOptionSelection = (option: OptionType) => {
    selectOption(option)
    toggleDropdownExpansion(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const element = event.target

      if (
        dropdownRef.current &&
        !dropdownRef?.current.contains(element as Node)
      ) {
        event.preventDefault()
        toggleDropdownExpansion(false)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)

    return () => document.removeEventListener('mouseup', handleClickOutside)
  }, [dropdownRef, toggleDropdownExpansion])

  return (
    <div
      ref={dropdownRef}
      className={`${styles.select}  ${additionalClass ? additionalClass : ''}`}
      onTouchStart={
        isExpanded ? (event) => event.stopPropagation() : () => null
      }
      onTouchMove={isExpanded ? (event) => event.stopPropagation() : () => null}
      onTouchEnd={isExpanded ? (event) => event.stopPropagation() : () => null}
    >
      <label htmlFor={label}>
        {!!label && <p>{label}</p>}
        <div
          className={`${styles['select__header']} ${
            !!isExpanded ? styles['select__header--expanded'] : ''
          } ${isInvalid ? styles['select__header--error'] : ''}`}
          role='button'
          tabIndex={disabled ? -1 : 0}
          aria-label={`Select an option`}
          aria-expanded={isExpanded}
          onClick={() => toggleDropdownExpansion()}
          onKeyDown={handleKeyEvent}
          {...rest}
        >
          {selectedOption?.label || <p>{placeholder}</p>}
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <ul
          className={`${styles['select__options']} ${
            !!isExpanded ? styles['select__options--expanded'] : ''
          }`}
        >
          {options.map((option) => (
            <li
              key={`${label}-${option.value}`}
              value={option.value}
              aria-label={`Select an option ${option.value}`}
              onClick={() => handleOptionSelection(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </label>
      {isInvalid && <p className={styles['select__error']}>{error}</p>}
    </div>
  )
}

export { Select }
