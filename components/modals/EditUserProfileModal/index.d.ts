/// <reference types="react" />
import type { Link, Modal } from '../../../types';
interface EditUserProfileProps {
    isModalClosing: boolean;
    modalType: Modal | null;
    selectedLink: Link | null;
    addLink: (link: Link) => void;
    editLink: (link: Link) => void;
    deleteLink: () => void;
    onExitEditMode: () => void;
    onCloseModal: () => void;
    onCloseModalSuccess: () => void;
}
declare const EditUserProfileModal: React.FC<EditUserProfileProps>;
export { EditUserProfileModal };
