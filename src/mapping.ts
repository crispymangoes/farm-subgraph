import { Deposit, Withdraw } from '../generated/Gravity/GFI_Farm'
import { Farmer } from '../generated/schema'

export function handleDeposit(event: Deposit): void {
  let id = event.params.user.toHex()
  let farmer = Farmer.load(id)
  if (farmer == null) {
    farmer = new Farmer(id)
  }
  farmer.user = event.params.user
  if (farmer.amount == null) {
    farmer.amount = event.params.amount
  }
  else {
    farmer.amount = farmer.amount.plus(event.params.amount)
  }
  farmer.save()
}

export function handleWithdraw(event: Withdraw): void {
  let id = event.params.user.toHex()
  let farmer = Farmer.load(id)
  if (farmer == null) {
    farmer = new Farmer(id)
  }
  farmer.user = event.params.user
  if (farmer.amount != null) {
    farmer.amount = farmer.amount.minus(event.params.amount)
  }
  farmer.save()
}
