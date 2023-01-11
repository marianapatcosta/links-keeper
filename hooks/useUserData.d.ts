import type { UserData, Profile, StyleProps, ColorSettings } from '../types';
interface UseUserData {
    profile?: Profile;
    colors?: ColorSettings;
    cssVars: StyleProps;
}
export declare const useUserData: (userDataProps?: UserData) => UseUserData;
export {};
