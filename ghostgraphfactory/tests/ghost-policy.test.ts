import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ClaimCollected } from "../generated/schema"
import { ClaimCollected as ClaimCollectedEvent } from "../generated/GhostPolicy/GhostPolicy"
import { handleClaimCollected } from "../src/ghost-policy"
import { createClaimCollectedEvent } from "./ghost-policy-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let pholder = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let newClaimCollectedEvent = createClaimCollectedEvent(pholder, amount)
    handleClaimCollected(newClaimCollectedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClaimCollected created and stored", () => {
    assert.entityCount("ClaimCollected", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClaimCollected",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pholder",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ClaimCollected",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
