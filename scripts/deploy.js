async function main() {
  // We get the contract to deploy
  const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
  console.log('Address owner:', OWNER_ADDRESS);
  if (OWNER_ADDRESS != undefined) {
    const N1Token = await ethers.getContractFactory('N1Token');
    const token = await N1Token.deploy(OWNER_ADDRESS);
    console.log('NFTify (N1) Token deployed to:', token.address);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
