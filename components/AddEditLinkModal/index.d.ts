/// <reference types="react" />
import type { Link } from '../../types';
interface AddEditLinkModalProps {
    selectedLink: Link | null;
    onAddLink: (link: Link) => void;
    onEditLink: (link: Link) => void;
    isModalClosing: boolean;
    onCloseModal: () => void;
    onCloseModalSuccess: () => void;
}
declare const AddEditLinkModal: React.FC<AddEditLinkModalProps>;
export { AddEditLinkModal };
