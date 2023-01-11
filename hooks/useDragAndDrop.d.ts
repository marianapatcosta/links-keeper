interface useDragAndDropData {
    isDragging: boolean;
    dragStart: (index: number) => void;
    dragEnter: (index: number) => void;
    drop: () => void;
}
export declare const useDragAndDrop: <T>(items: T[], onUpdatedItems: (value: T[]) => void) => useDragAndDropData;
export {};
