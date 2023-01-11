import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react';
interface AvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src?: string;
    alt?: string;
    heading?: string;
    subHeading?: string;
    additionalClass?: string;
    children?: ReactNode;
}
declare const AvatarHeader: React.FC<AvatarProps>;
export { AvatarHeader };
