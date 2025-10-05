import { guestType } from "../../../../src/types/global"

const guestsDescriptionFormatter = (guestsAmount: guestType)=>{

  if (!guestsAmount || guestsAmount === null) return ''
  const amount = (guestsAmount.childs || 0) + (guestsAmount.kids || 0) + (guestsAmount.teens || 0) + (guestsAmount.adults || 0)
  if(amount === 0 ) return ''
  if(amount > 0 ) return amount
  return ''
}

export default guestsDescriptionFormatter