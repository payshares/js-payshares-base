import * as PaysharesBase from "../src"

var keypair = PaysharesBase.Keypair.random();
var data = 'data to sign';
var signature = PaysharesBase.sign(data, keypair.rawSecretKey());

console.log('Signature: '+signature.toString('hex'));

if (PaysharesBase.verify(data, signature, keypair.rawPublicKey())) {
  console.log('OK!');
} else {
  console.log('Bad signature!');
}
