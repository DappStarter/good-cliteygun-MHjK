require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food cycle cruise spice quality guess problem metal gate'; 
let testAccounts = [
"0xf81669a85b04f2d6339b82fdb8e3b0a5ac5efc0ab2eb1d86188b5ecd2ff31336",
"0xafeca88b9799bba52dea4d027a9ee6a8e32d7b71ef58e58997a2c368e0d78363",
"0x2282db4439a475a9e6b50e3075659c2a7a5da3f272e3cceefabc4db5c9b0e8aa",
"0x97416d4bbb43557367aebbd43afe9162c76300789abd6f5d58989e6b071e060a",
"0x49c10f25d030f6e86a2f58d0655f8731e64c412d762200914597ac1a2e629ff1",
"0x48189e7fd461d915729760ce0ba986289d1fd358affda20e6e2f6a7b2f63743d",
"0xad3f1fd2908517c06c7bfb25f0b847f692c61d0294fb3f117dec383fc6ac3f32",
"0xa889da91a2aba8df8bde81dc21d9a6b3738fc94b88f76153fb593836d98b74e6",
"0xccddb62f981640111bae68d8357dddcca408b216f184943b290f292e34042bae",
"0xa5efee7af61160622b048dc16dcf0e905e46ffaaafd5761fc768b311fa9f23db"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


