import React, { HTMLProps } from 'react';
interface SearchProps extends HTMLProps<HTMLInputElement> {
    additionalClass?: string;
    onSearch: (value: string) => void;
    onClear?: () => void;
}
declare const Search: React.FC<SearchProps>;
export { Search };
