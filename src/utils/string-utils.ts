export const capitalize = (word: string): string => {
  if (word.length === 0) {
    return word
  }
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const isStringifiedObject = (value: string): boolean => {
  try {
    const parsedValue = JSON.parse(value)
    return typeof parsedValue === 'object'
  } catch (e) {
    return false
  }
}
