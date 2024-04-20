const {ethers} = require('hardhat')
const {expect} = require('chai')

const tokens = (n)=>{
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
  let token

  beforeEach(async()=>{
    const Token = await ethers.getContractFactory('Token') 
    token = await Token.deploy('FITZ Coin', 'FTC', '1000000')
  })

  describe('Deployment', ()=>{
    const name = 'FITZ Coin'
    const symbol = 'FTC'
    const decimals = '18'
    const totalSupply = ('1000000')

    it("has correct name", async () => {
      expect(await token.name()).to.equal('FITZ Coin')
    })
    
    it("has correct symbol", async () => {
      expect(await token.symbol()).to.equal('FTC')
    })
    
    it("has correct decimals", async () => {
      expect(await token.decimals()).to.equal('18')
    })
    
    it("has correct total supply", async () => {
      expect(await token.totalSupply()).to.equal(tokens('1000000'))
    })
  })
  })
  