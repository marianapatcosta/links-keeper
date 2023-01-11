/// <reference types="react" />
import type { Profile } from '../../types';
interface UserProfileProps {
    isStaticMode: boolean;
    profile?: Profile;
    onOpenEditMode: () => void;
}
declare const UserProfile: React.FC<UserProfileProps>;
export { UserProfile };
