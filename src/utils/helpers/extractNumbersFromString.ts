export const extractNumberFromConcatenatedString = (inputString: string): number | null => {
  const match = inputString.match(/\d+/)

  if (match) {
    const number = parseInt(match[0], 10)
    return isNaN(number) ? null : number
  }

  return null
}
