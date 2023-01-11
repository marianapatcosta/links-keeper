/// <reference types="react" />
import { Link } from '../../types';
interface QRCodeModalProps {
    avatarUrl?: string;
    username?: string;
    selectedLink: Link;
    isModalClosing: boolean;
    onCloseModal: () => void;
    onCloseModalSuccess: () => void;
}
declare const QRCodeModal: React.FC<QRCodeModalProps>;
export { QRCodeModal };
