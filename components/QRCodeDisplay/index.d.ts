import { HTMLAttributes, RefAttributes } from 'react';
interface QRCodeDisplayProps extends HTMLAttributes<HTMLDivElement> {
    url: string;
    showUrl?: boolean;
}
declare const QRCodeDisplay: React.FC<QRCodeDisplayProps & RefAttributes<HTMLDivElement>>;
export { QRCodeDisplay };
