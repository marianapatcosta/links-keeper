import { HTMLAttributes, RefAttributes, ReactNode } from 'react';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isModalClosing: boolean;
    description?: string;
    header?: ReactNode;
    footer?: ReactNode;
    additionalClass?: string;
    onCloseModal: () => void;
    onCloseModalSuccess: () => void;
}
declare const Modal: React.FC<ModalProps & RefAttributes<HTMLDivElement>>;
export { Modal };
