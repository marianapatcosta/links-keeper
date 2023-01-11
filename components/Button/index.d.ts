import { DetailedHTMLProps, ButtonHTMLAttributes, MouseEvent } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
declare type ButtonType = 'action' | 'primary' | 'secondary';
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string;
    icon?: IconProp;
    iconSize?: SizeProp;
    disabled?: boolean;
    additionalClass?: string;
    buttonType?: ButtonType;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: React.FC<ButtonProps>;
export { Button };
