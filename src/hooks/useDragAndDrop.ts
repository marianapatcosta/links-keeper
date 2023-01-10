import { useRef, useState } from 'react'

interface useDragAndDropData {
  isDragging: boolean
  dragStart: (index: number) => void
  dragEnter: (index: number) => void
  drop: () => void
}

export const useDragAndDrop = <T>(
  items: T[],
  onUpdatedItems: (value: T[]) => void
): useDragAndDropData => {
  const [isDragging, setIsDragging] = useState(false)
  let dragItemIndex = useRef<number | null>(null)
  let dragOverItemIdex = useRef<number | null>(null)

  const dragStart = (index: number) => {
    dragOverItemIdex.current = null
    dragItemIndex.current = index
  }

  const dragEnter = (index: number) => {
    dragOverItemIdex.current = index
  }

  const drop = () => {
    setIsDragging(false)
    if (dragItemIndex.current === null || dragOverItemIdex === null) return
    const updatedItems = [...items]
    const [draggedItem] = updatedItems.splice(dragItemIndex.current, 1)
    updatedItems.splice(dragOverItemIdex.current!, 0, draggedItem)
    onUpdatedItems(updatedItems)
    dragItemIndex.current = null
    dragOverItemIdex.current = null
  }

  return { isDragging, dragStart, dragEnter, drop }
}
