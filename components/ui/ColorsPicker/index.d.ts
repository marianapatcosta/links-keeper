import { FormEvent } from 'react';
import type { ColorSettings } from '../../../types';
interface ColorsPickerProps {
    title?: string;
    colors: ColorSettings;
    onColorUpdate: (event: FormEvent<HTMLInputElement>) => void;
}
declare const ColorsPicker: React.FC<ColorsPickerProps>;
export { ColorsPicker };
