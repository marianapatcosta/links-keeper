import { useMemo } from 'react'
import type { UserData, Profile, StyleProps, ColorSettings } from '@/types'
import { COLLECTION_USER_DATA } from '@/utils/constants'
import { isHexColor, lighten } from '@/utils/helper-functions'
import { useLocalStorage } from './useLocalStorage'

interface UseUserData {
  profile?: Profile
  colors?: ColorSettings
  cssVars: StyleProps
}

export const useUserData = (userDataProps?: UserData): UseUserData => {
  const { getStoredItem } = useLocalStorage()
  const savedUserData = getStoredItem<UserData>(COLLECTION_USER_DATA) || {}
  const data = !!userDataProps ? userDataProps : savedUserData

  const cssVars = useMemo(() => {
    const vars = {} as StyleProps
    if (!data.colors) {
      return vars
    }
    const { primary, secondary, font } = data.colors

    if (primary && isHexColor(primary)) {
      vars['--primary-color'] = primary
    }
    if (secondary && isHexColor(secondary)) {
      vars['--secondary-color'] = secondary
      vars['--secondary-color90'] = lighten(secondary, 0.9)
      vars['--secondary-color80'] = lighten(secondary, 0.8)
    }
    if (font && isHexColor(font)) {
      vars['--font-color'] = font
    }
    return vars
  }, [data.colors])

  return { profile: data.profile, colors: data.colors, cssVars }
}
