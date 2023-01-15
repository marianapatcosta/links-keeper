import React, { ChangeEvent, memo, HTMLProps, useRef, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from '@/components'
import styles from './styles.module.scss'

interface SearchProps extends HTMLProps<HTMLInputElement> {
  additionalClass?: string
  onSearch: (value: string) => void
  onClear?: () => void
}

const Search: React.FC<SearchProps> = memo(
  ({
    placeholder = 'Search...',
    additionalClass,
    onSearch,
    onClear,
    ...rest
  }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const searchRef = useRef<HTMLInputElement | null>(null)

    const toggleIsExpanded = (newValue?: boolean) => {
      if (isExpanded) {
        searchRef.current!.value! = ''
        !!onClear && onClear()
      }
      setIsExpanded((prevState) => newValue ?? !prevState)
    }

    const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
      onSearch((event.target as HTMLInputElement).value)
    }

    return (
      <div
        className={`${styles['search']} ${
          isExpanded ? styles['search-expanded'] : ''
        } ${additionalClass ? additionalClass : ''}`}
      >
        <Input
          // @ts-ignore
          ref={searchRef}
          type='search'
          placeholder={placeholder}
          additionalClass={`${styles['search__input']} ${
            isExpanded ? styles['search__input--expanded'] : ''
          }`}
          onChange={onChangeSearchValue}
          /* onBlur={() => toggleIsExpanded(false)} */
          {...rest}
        />
        <Button
          aria-label={`Click to ${
            isExpanded ? 'collapse' : 'expand'
          } search box.`}
          title={`${isExpanded ? 'Collapse' : 'Expand'} search box`}
          buttonType='action'
          icon={faMagnifyingGlass}
          onClick={() => toggleIsExpanded()}
        />
      </div>
    )
  }
)

export { Search }
