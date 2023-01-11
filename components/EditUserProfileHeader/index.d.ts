import { ChangeEvent } from 'react';
interface EditUserProfileHeaderProps {
    avatarUrl: string;
    username: string;
    onRemoveAvatar: () => void;
    onAvatarUpload: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
    onSaveChanges: () => void;
    onDiscardChanges: () => void;
}
declare const EditUserProfileHeader: React.FC<EditUserProfileHeaderProps>;
export { EditUserProfileHeader };
