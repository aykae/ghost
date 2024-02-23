import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("GhostFactory", function () {

	async function deployGhostFactoryFixture() {
		const [creator0, creator1] = await ethers.getSigners();

		const GhostFactory = await ethers.getContractFactory("GhostFactory");
		const gf = await GhostFactory.deploy();

		return { gf, creator0, creator1 };
	}

    describe("PolicyDeployment", async function () {

		it ("Should create different addresses for different creators", async function () {
			const { gf, creator0, creator1 } = await loadFixture(deployGhostFactoryFixture);

			const g0Addy = await gf.createPolicy(creator0.address);
			const g1Addy = await gf.createPolicy(creator1.address);

			expect(g0Addy).to.not.equal(g1Addy);
		});

		it ("Should not create multiple policies with the exact same parameters", async function () {
			const { gf, creator0, creator1 } = await loadFixture(deployGhostFactoryFixture);

			const ghost0 = await gf.createPolicy(creator0.address);
			await expect(gf.createPolicy(creator0.address)).to.be.revertedWith(
				"Policy already exists"
			);

		});
    });
});