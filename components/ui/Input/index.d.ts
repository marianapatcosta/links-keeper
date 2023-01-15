import { HTMLProps, RefAttributes } from 'react';
interface InputProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    error?: string;
    isInvalid?: boolean;
    additionalClass?: string;
}
declare const Input: React.FC<InputProps & RefAttributes<HTMLInputElement>>;
export { Input };
