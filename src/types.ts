import { linkIcons } from '@/utils/constants'
import { CSSProperties } from 'react'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_EMAIL_PHONE_NUMBER_OR_URL,
  VALIDATOR_ICON,
  VALIDATOR_PHONE_NUMBER,
  VALIDATOR_REQUIRE,
  VALIDATOR_URL,
} from './utils/validators'

export type Link = {
  id: string
  label: string
  url: string
  icon: typeof linkIcons[number]
}

export type Profile = {
  links: Link[]
  username?: string
  avatarUrl?: string
}

export type Modal =
  | 'qr-code'
  | 'discard-confirmation'
  | 'delete-link-confirmation'
  | 'add-edit-link'

export type StyleProps = CSSProperties & {
  '--primary-color'?: string
  '--secondary-color'?: string
  '--secondary-color90'?: string
  '--secondary-color80'?: string
  '--font-color'?: string
}

export type ColorSettings = {
  primary?: string
  secondary?: string
  font?: string
}

export type UserData = {
  profile?: Profile | undefined
  colors?: ColorSettings | undefined
}

export type LinkIconMetadata = {
  label: string
  keyword: string
  value: typeof linkIcons[number]
}

export type FormValidator =
  | typeof VALIDATOR_REQUIRE
  | typeof VALIDATOR_EMAIL
  | typeof VALIDATOR_PHONE_NUMBER
  | typeof VALIDATOR_URL
  | typeof VALIDATOR_EMAIL_PHONE_NUMBER_OR_URL
  | typeof VALIDATOR_ICON
