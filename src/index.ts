import Chain from './chain';
import Wallet from './wallet';

const fox = new Wallet();
const bob = new Wallet();
const alice = new Wallet();

fox.sendMoney(50, bob.publicKey);
bob.sendMoney(23, alice.publicKey);
alice.sendMoney(5, bob.publicKey);

console.log(Chain.instance);
