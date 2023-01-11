/// <reference types="react" />
interface NoLinksProps {
    sentence?: string;
    additionalClass?: string;
    showAddButton?: boolean;
    onAddNewLink: () => void;
}
declare const NoLinks: React.FC<NoLinksProps>;
export { NoLinks };
