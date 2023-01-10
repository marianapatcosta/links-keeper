import { ReactNode, useMemo, useState } from 'react'
import { Search } from '@/components'
import type { Link } from '@/types'

interface UseSearchLinksData {
  filteredLinks: Link[] | undefined
  isSearching: boolean
  SearchLinks: ReactNode | null
}

export const useSearchLinks = (
  links: Link[] | undefined,
  additionalClass = ''
): UseSearchLinksData => {
  const [searchValue, setSearchValue] = useState<string>('')

  const filteredLinks = useMemo(() => {
    if (searchValue === '') {
      return links
    }
    return links?.filter(({ label }) =>
      label.toLowerCase().includes(searchValue)
    )
  }, [links, searchValue])
  const onSearch = (value: string) => setSearchValue(value.toLowerCase())

  const SearchLinks = !!links?.length && (
    <Search
      additionalClass={additionalClass}
      onSearch={onSearch}
      onClear={() => setSearchValue('')}
    />
  )

  return {
    filteredLinks,
    SearchLinks,
    isSearching: !!searchValue,
  }
}
