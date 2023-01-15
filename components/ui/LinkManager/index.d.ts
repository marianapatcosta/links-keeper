import { HTMLAttributes } from 'react';
import { Link } from '../../../types';
interface LinkManagerProps extends HTMLAttributes<HTMLDivElement> {
    link: Link;
    additionalClass?: string;
    draggable?: boolean;
    onEditLink: () => void;
    onDeleteLink: () => void;
    dragStart: () => void;
    dragEnter: () => void;
    drop: () => void;
}
declare const LinkManager: React.FC<LinkManagerProps>;
export { LinkManager };
