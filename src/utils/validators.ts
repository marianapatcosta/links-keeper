import { FormValidator } from '@/types'
import { linkIcons } from './constants'
import { isEmail, isPhoneNumber, isUrl } from './helper-functions'

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE'
const VALIDATOR_TYPE_EMAIL = 'EMAIL'
const VALIDATOR_TYPE_PHONE_NUMBER = 'PHONE_NUMBER'
const VALIDATOR_TYPE_URL = 'URL'
const VALIDATOR_TYPE_EMAIL_PHONE_NUMBER_OR_URL = 'EMAIL_PHONE_NUMBER_URL'
const VALIDATOR_TYPE_ICON = 'ICON'

export const VALIDATOR_REQUIRE = { type: VALIDATOR_TYPE_REQUIRE }
export const VALIDATOR_EMAIL = { type: VALIDATOR_TYPE_EMAIL }
export const VALIDATOR_PHONE_NUMBER = {
  type: VALIDATOR_TYPE_PHONE_NUMBER,
}
export const VALIDATOR_URL = {
  type: VALIDATOR_TYPE_URL,
}
export const VALIDATOR_EMAIL_PHONE_NUMBER_OR_URL = {
  type: VALIDATOR_TYPE_EMAIL_PHONE_NUMBER_OR_URL,
}
export const VALIDATOR_ICON = {
  type: VALIDATOR_TYPE_ICON,
}

export const validate = <T>(value: T, validators: FormValidator[]) => {
  let isValid = true
  if (validators.length === 0) return isValid

  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid =
        isValid && typeof value === 'string'
          ? (value as string).trim().length > 0
          : !!value
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && isEmail(value as string)
    }
    if (validator.type === VALIDATOR_TYPE_PHONE_NUMBER) {
      isValid = isValid && isPhoneNumber(value as string)
    }
    if (validator.type === VALIDATOR_TYPE_URL) {
      isValid = isValid && isUrl(value as string)
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL_PHONE_NUMBER_OR_URL) {
      isValid =
        isValid &&
        (isUrl(value as string) ||
          isPhoneNumber(value as string) ||
          isEmail(value as string))
    }
    if (validator.type === VALIDATOR_TYPE_ICON) {
      isValid =
        isValid &&
        linkIcons.some(
          (icon) =>
            icon.iconName === (value as typeof linkIcons[number]).iconName
        )
    }
  }
  return isValid
}
