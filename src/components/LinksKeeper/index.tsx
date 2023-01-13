import { useState } from 'react'
import { useUserData } from '@/hooks/useUserData'
import type { ColorSettings, Profile } from '@/types'
import { EditUserProfile } from '../EditUserProfile'
import { UserProfile } from '../UserProfile'
import styles from './styles.module.scss'

export interface LinksKeeperProps {
  profile?: Profile
  colors?: ColorSettings
  additionalClass?: string
}

const LinksKeeper: React.FC<LinksKeeperProps> = ({
  additionalClass,
  profile: propsProfile,
  colors: propsColors,
}) => {
  const isStaticMode = !!propsProfile?.links?.length
  const { colors, profile, cssVars } = useUserData(
    isStaticMode
      ? {
          profile: propsProfile,
          colors: propsColors,
        }
      : undefined
  )
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <div
      className={`${styles['links-keeper']} ${
        additionalClass ? additionalClass : ''
      }`}
      style={cssVars}
    >
      {isEditMode ? (
        <EditUserProfile
          profile={profile}
          colors={colors}
          onExitEditMode={() => setIsEditMode(false)}
        />
      ) : (
        <UserProfile
          profile={profile}
          isStaticMode={isStaticMode}
          onOpenEditMode={() => setIsEditMode(true)}
        />
      )}
    </div>
  )
}

export { LinksKeeper }
