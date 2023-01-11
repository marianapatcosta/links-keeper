import { HTMLProps } from 'react';
interface SelectProps<OptionType> extends HTMLProps<HTMLDivElement> {
    options: OptionType[];
    selectedOption: OptionType | undefined;
    label?: string;
    placeholder?: string;
    error?: string;
    isInvalid?: boolean;
    additionalClass?: string;
    selectOption: (option: OptionType) => void;
    onSelectCollapse?: () => void;
}
declare const Select: <OptionType extends {
    label: JSX.Element;
    value: string;
}>({ label, error, additionalClass, options, selectedOption, disabled, isInvalid, placeholder, onSelectCollapse, selectOption, ...rest }: SelectProps<OptionType>) => JSX.Element;
export { Select };
