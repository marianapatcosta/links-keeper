/// <reference types="react" />
import type { ColorSettings, Profile } from '../../types';
export interface LinksKeeperProps {
    profile?: Profile;
    colors?: ColorSettings;
    additionalClass?: string;
}
declare const LinksKeeper: React.FC<LinksKeeperProps>;
export { LinksKeeper };
