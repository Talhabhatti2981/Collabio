/** Fixed desk rate used everywhere amounts are shown. 1 GBP = 370 PKR. */
export const PKR_PER_GBP = 370

export function pkr(pounds: number) {
  const rupees = Math.round(pounds * PKR_PER_GBP)
  return `Rs ${rupees.toLocaleString('en-US')}`
}
