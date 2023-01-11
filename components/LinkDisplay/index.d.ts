import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { Link } from '../../types';
interface LinkDisplayProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    link: Link;
    onSelectLink: () => void;
    additionalClass?: string;
}
declare const LinkDisplay: React.FC<LinkDisplayProps>;
export { LinkDisplay };
