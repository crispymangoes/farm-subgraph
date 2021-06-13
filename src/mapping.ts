import { BigDecimal } from '@graphprotocol/graph-ts'
import { Deposit, Withdraw } from '../generated/Gravity/GFI_Farm'
import { Farmer } from '../generated/schema'

export function handleDeposit(event: Deposit): void {
  let id = event.params.user.toHex()
  let farmer = Farmer.load(id)
  if (farmer == null) {
    farmer = new Farmer(id)
  }
  farmer.user = event.params.user
  farmer.amountIn = new BigDecimal(event.params.amount)
  farmer.save()
}

export function handleWithdraw(event: Withdraw): void {
  let id = event.params.user.toHex()
  let farmer = Farmer.load(id)
  if (farmer == null) {
    farmer = new Farmer(id)
  }
  farmer.user = event.params.user
  farmer.amountOut = new BigDecimal(event.params.amount)
  farmer.save()
}
