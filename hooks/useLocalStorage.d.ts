interface UseLocalStorageReturn {
    getStoredItem: <T>(collection: string) => T | undefined;
    saveItemInStorage: <T>(collection: string, item: T) => void;
    removeStoredItem: <T>(collection: string) => void;
}
declare const useLocalStorage: () => UseLocalStorageReturn;
export { useLocalStorage };
