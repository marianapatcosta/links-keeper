/// <reference types="react" />
import type { ColorSettings, Profile } from '../../types';
interface EditUserProfileProps {
    profile?: Profile;
    colors?: ColorSettings;
    onExitEditMode: () => void;
}
declare const EditUserProfile: React.FC<EditUserProfileProps>;
export { EditUserProfile };
