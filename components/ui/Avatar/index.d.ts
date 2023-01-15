import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
interface AvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    additionalClass?: string;
}
declare const Avatar: React.FC<AvatarProps>;
export { Avatar };
