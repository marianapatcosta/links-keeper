import { ReactNode } from 'react';
import type { Link } from '../types';
interface UseSearchLinksData {
    filteredLinks: Link[] | undefined;
    isSearching: boolean;
    SearchLinks: ReactNode | null;
}
export declare const useSearchLinks: (links: Link[] | undefined, additionalClass?: string) => UseSearchLinksData;
export {};
