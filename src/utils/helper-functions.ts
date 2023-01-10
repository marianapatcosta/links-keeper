export const share = async (url: string, title?: string, text?: string) => {
  if (!url) return

  if (typeof navigator !== 'undefined' && !navigator.share) {
    navigator.clipboard.writeText(url)
    return alert(`${url} was copied to clipboard!`)
  }

  const shareData = {
    title: title || 'Check this link!',
    text: text || '',
    url,
  }

  try {
    await navigator.share(shareData)
  } catch (error) {
    alert('It was not possible to share the link. Please try again.')
  }
}

export const isPhoneNumber = (url: string): boolean => {
  const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  return phoneRegex.test(url)
}

export const isEmail = (url: string): boolean => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return emailRegex.test(url)
}

export const isUrl = (url: string): boolean => {
  const urlRegex = /^(http|https):\/\//
  return urlRegex.test(url)
}

export const isHexColor = (color: string): boolean => {
  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return colorRegex.test(color)
}

export const isValidBase64ImageUrl = (url: string): boolean => {
  const regex = /^data:image\/([a-zA-Z]*);base64,([^"]*)$/
  return regex.test(url)
}

export const lighten = (hex: string, percent: number): string => {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  // Lighten each color
  r = Math.round((255 - r) * percent) + r
  g = Math.round((255 - g) * percent) + g
  b = Math.round((255 - b) * percent) + b

  // Convert back to hex
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export const darken = (hex: string, percent: number): string => {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  // Darken each color
  r = r - Math.round(r * percent)
  g = g - Math.round(g * percent)
  b = b - Math.round(b * percent)

  // Convert back to hex
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export const convertImageUrlIntoBase64 = async (
  imageUrl: string
): Promise<string | null> => {
  try {
    if (!imageUrl) {
      return ''
    }
    const response = await fetch(imageUrl)

    const arrayBuffer = await response.arrayBuffer()
    const base64 = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    )

    return `data:${response.headers.get('Content-Type')};base64,${base64}`
  } catch (error) {
    console.error(error)
    return null
  }
}

export const generateRandomId = (): string => {
  if (
    typeof window !== 'undefined' &&
    !!window.crypto &&
    !!window.crypto.randomUUID
  ) {
    return window?.crypto?.randomUUID()
  }
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    '-'
  )
}

export const isTouchDevice = () =>
  'ontouchstart' in window || !!navigator.maxTouchPoints
