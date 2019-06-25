Btc ECIES
======

[![NPM Package](https://img.shields.io/npm/v/@owstack/ecies.svg?style=flat-square)](https://www.npmjs.org/package/@owstack/ecies)
[![Build Status](https://img.shields.io/travis/owstack/ecies.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/ecies)
[![Coverage Status](https://img.shields.io/coveralls/owstack/ecies.svg?style=flat-square)](https://coveralls.io/r/owstack/ecies)

A module for [btc][btc] that implements the [Elliptic Curve Integrated Encryption Scheme (ECIES)][ECIES]. Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

See [the main btc repo](https://github.com/owstack/btc) or the [btc guide on ECIES](http://btc.io/guide/module/ecies/index.html) for more information.

Credit to [@ryanxcharles][ryan] for the original implementation.

## Getting started

ECIES will allow to securely encrypt and decrypt messages using ECDSA key pairs (bitcoin cryptography).

```javascript
var alice = ECIES()
  .privateKey(aliceKey)
  .publicKey(bobKey.publicKey);

var message = 'some secret message';
var encrypted = alice.encrypt(message);

// encrypted will contain an encrypted buffer only Bob can decrypt

var bob = ECIES()
  .privateKey(bobKey)
  .publicKey(aliceKey.publicKey);
var decrypted = bob
  .decrypt(encrypted)
  .toString();
// decrypted will be 'some secret message'
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/ecies/blob/master/CONTRIBUTING.md) on the repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/ecies/blob/master/LICENSE).

Copyright 2017-2019 Open Wallet Stack.

[key-lib]: http://github.com/owstack/key-lib
[ECIES]: http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme
[ryan]: http://github.com/ryanxcharles
