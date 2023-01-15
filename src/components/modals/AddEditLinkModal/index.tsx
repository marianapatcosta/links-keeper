import { FormEvent, useCallback, useMemo, useState } from 'react'
import { faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  validate,
  VALIDATOR_EMAIL_PHONE_NUMBER_OR_URL,
  VALIDATOR_ICON,
  VALIDATOR_REQUIRE,
} from '@/utils/validators'
import type { FormValidator, Link } from '@/types'
import { Button, Input, Modal, Select } from '@/components'
import { LINK_ICONS_METADATA, linkIcons } from '@/utils/constants'
import { generateRandomId } from '@/utils/helper-functions'
import styles from './styles.module.scss'

interface AddEditLinkModalProps {
  selectedLink: Link | null
  onAddLink: (link: Link) => void
  onEditLink: (link: Link) => void
  isModalClosing: boolean
  onCloseModal: () => void
  onCloseModalSuccess: () => void
}

interface FormField<T> {
  value: T
  isValid: boolean
  isTouched: boolean
}

const iconOptions = LINK_ICONS_METADATA.map((data) => ({
  value: data.value,
  icon: data.icon,
  label: (
    <div className={styles['add-edit-link-modal__select-option']}>
      <FontAwesomeIcon icon={data.icon} />
      <p>{data.label}</p>
    </div>
  ),
}))

const AddEditLinkModal: React.FC<AddEditLinkModalProps> = ({
  selectedLink,
  onAddLink,
  onEditLink,
  isModalClosing,
  onCloseModal,
  onCloseModalSuccess,
}) => {
  const [linkLabel, setLinkLabel] = useState<FormField<string>>({
    value: selectedLink?.label || '',
    isValid: !!selectedLink?.label,
    isTouched: false,
  })
  const [linkUrl, setLinkUrl] = useState<FormField<string>>({
    value: selectedLink?.url || 'https://',
    isValid: !!selectedLink?.url,
    isTouched: false,
  })

  const [linkIcon, setLinkIcon] = useState<
    FormField<typeof linkIcons[number] | null>
  >({
    value: selectedLink?.icon || null,
    isValid: !!selectedLink?.icon,
    isTouched: false,
  })

  const isFormValid = useMemo(
    () => linkLabel.isValid && linkUrl.isValid && linkIcon.isValid,
    [linkLabel, linkUrl, linkIcon]
  )

  const selectedOption = useMemo(
    () =>
      iconOptions.find(
        (option) => option.icon.iconName === linkIcon?.value?.iconName
      ),
    [linkIcon]
  )

  const closeModal = useCallback(() => {
    onCloseModal()
  }, [onCloseModal])

  const findMatchedIcon = (value: string) => {
    const icon = LINK_ICONS_METADATA.find((data) =>
      value.toLowerCase().includes(data.value)
    )

    !!icon &&
      setLinkIcon({
        value: icon.icon,
        isValid: true,
        isTouched: true,
      })
  }

  const updateFormField = useCallback(
    (
      value: string | typeof linkIcons[number],
      validators: FormValidator[],
      setter: React.Dispatch<React.SetStateAction<FormField<any>>>
    ) => {
      setter((prevState) => ({
        ...prevState,
        value,
        isValid: validate(value, validators),
      }))
      typeof value === 'string' && findMatchedIcon(value)
    },
    []
  )

  const handleFormFieldTouch = useCallback(
    (setter: React.Dispatch<React.SetStateAction<FormField<any>>>) =>
      setter((prevState) => ({ ...prevState, isTouched: true })),
    []
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFormValid) {
      return
    }
    const link = {
      id: selectedLink?.id || generateRandomId(),
      label: linkLabel.value,
      url: linkUrl.value,
      icon: linkIcon.value as IconDefinition,
    }
    const actionMethod = !!selectedLink ? onEditLink : onAddLink
    actionMethod(link)
    closeModal()
  }

  return (
    <Modal
      header={<h1>{`${!!selectedLink ? 'Edit' : 'Add'} link`}</h1>}
      additionalClass={styles['add-edit-link-modal']}
      isModalClosing={isModalClosing}
      onCloseModal={closeModal}
      onCloseModalSuccess={onCloseModalSuccess}
    >
      <form onSubmit={handleSubmit}>
        <Input
          required
          autoComplete='off'
          label='Title'
          placeholder='e.g. My LinkedIn'
          value={linkLabel.value as string}
          isInvalid={linkLabel.isTouched && !linkLabel.isValid}
          error='Please enter a title for the link!'
          onBlur={() => handleFormFieldTouch(setLinkLabel)}
          onChange={(event) =>
            updateFormField(
              (event.target as HTMLInputElement).value,
              [VALIDATOR_REQUIRE],
              setLinkLabel
            )
          }
        />
        <Input
          required
          autoComplete='off'
          label='Link, e-mail or phone number'
          placeholder='e.g. https://linkedin.com'
          value={linkUrl.value.toLowerCase() as string}
          isInvalid={linkUrl.isTouched && !linkUrl.isValid}
          error='Please enter a valid URL, e-mail or phone number!'
          onBlur={() => handleFormFieldTouch(setLinkUrl)}
          onChange={(event) =>
            updateFormField(
              (event.target as HTMLInputElement).value,
              [VALIDATOR_REQUIRE, VALIDATOR_EMAIL_PHONE_NUMBER_OR_URL],
              setLinkUrl
            )
          }
        />
        <Select
          label='Icon'
          options={iconOptions}
          selectedOption={selectedOption}
          placeholder='Select an icon'
          onSelectCollapse={() => handleFormFieldTouch(setLinkIcon)}
          selectOption={(option) =>
            updateFormField(
              option.icon as IconDefinition,
              [VALIDATOR_REQUIRE, VALIDATOR_ICON],
              setLinkIcon
            )
          }
          isInvalid={linkIcon.isTouched && !linkIcon.isValid}
          error='Please select an icon!'
        />
        <Button
          disabled={!isFormValid}
          label='Save new link'
          type='submit'
          icon={faSave}
        />
      </form>
    </Modal>
  )
}

export { AddEditLinkModal }
