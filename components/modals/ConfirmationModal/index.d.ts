/// <reference types="react" />
interface ConfirmationModalProps {
    title?: string;
    question?: string;
    isModalClosing: boolean;
    onConfirm: () => void;
    onCloseModal: () => void;
    onCloseModalSuccess: () => void;
}
declare const ConfirmationModal: React.FC<ConfirmationModalProps>;
export { ConfirmationModal };
