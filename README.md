# JS Payshares Base

[![Build Status](https://travis-ci.org/payshares/js-payshares-base.svg)](https://travis-ci.org/payshares/js-payshares-base)
[![Code Climate](https://codeclimate.com/github/payshares/js-payshares-base/badges/gpa.svg)](https://codeclimate.com/github/payshares/js-payshares-base)
[![Coverage Status](https://coveralls.io/repos/payshares/js-payshares-base/badge.svg?branch=master&service=github)](https://coveralls.io/github/payshares/js-payshares-base?branch=master)
[![Dependency Status](https://david-dm.org/payshares/js-payshares-base.svg)](https://david-dm.org/payshares/js-payshares-base)

The payshares-base library is the lowest-level payshares helper library.  It consists of classes
to read, write, hash, and sign the xdr structures that are used in [payshares-core](https://github.com/payshares/payshares-core).
This is an implementation in JavaScript that can be used on either Node.js or web browsers.

* **[API Reference](https://payshares.github.io/js-payshares-base/)**

> **Warning!** Node version of this package is using [`ed25519`](https://www.npmjs.com/package/ed25519) package, a native implementation of [Ed25519](https://ed25519.cr.yp.to/) in Node.js, as an [optional dependency](https://docs.npmjs.com/files/package.json#optionaldependencies). This means that if for any reason installation of this package fails, `payshares-base` will fallback to the much slower implementation contained in [`tweetnacl`](https://www.npmjs.com/package/tweetnacl).
>
> If you are using `payshares-base` in a browser you can ignore this. However, for production backend deployments you should definitely be using `ed25519`. If `ed25519` is successfully installed and working `PaysharesBase.FastSigning` variable will be equal `true`. Otherwise it will be `false`.

## Quick start

Using npm to include js-payshares-base in your own project:
```shell
npm install --save payshares-base
```

For browsers, [use Bower to install it](#to-use-in-the-browser). It exports a
variable `PaysharesBase`. The example below assumes you have `payshares-base.js`
relative to your html file.

```html
<script src="payshares-base.js"></script>
<script>console.log(PaysharesBase);</script>
```

## Install

### To use as a module in a Node.js project
1. Install it using npm:

  ```shell
  npm install --save payshares-base
  ```
2. require/import it in your JavaScript:

  ```js
  var PaysharesBase = require('payshares-base');
  ```

### To self host for use in the browser
1. Install it using [bower](http://bower.io):

  ```shell
  bower install payshares-base
  ```

2. Include it in the browser:

  ```html
  <script src="./bower_components/payshares-base/payshares-base.js"></script>
  <script>console.log(PaysharesBase);</script>
  ```

If you don't want to use install Bower, you can copy built JS files from the [bower-js-payshares-base repo](https://github.com/payshares/bower-js-payshares-base).

### To use the [cdnjs](https://cdnjs.com/libraries/payshares-base) hosted script in the browser
1. Instruct the browser to fetch the library from [cdnjs](https://cdnjs.com/libraries/payshares-base), a 3rd party service that hosts js libraries:

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/payshares-base/{version}/payshares-base.js"></script>
  <script>console.log(PaysharesBase);</script>
  ```

Note that this method relies using a third party to host the JS library. This may not be entirely secure.

Make sure that you are using the latest version number. They can be found on the [releases page in Github](https://github.com/payshares/js-payshares-base/releases).

### To develop and test js-payshares-base itself
1. Clone the repo

  ```shell
  git clone https://github.com/payshares/js-payshares-base.git
  ```
2. Install dependencies inside js-payshares-base folder

  ```shell
  cd js-payshares-base
  npm install
  ```

## Usage
For information on how to use js-payshares-base, take a look at the docs in the [docs folder](./docs).

## Testing
To run all tests:
```shell
gulp test
```

To run a specific set of tests:
```shell
gulp test:node
gulp test:browser
```

Tests are also run on the [Travis CI js-payshares-base project](https://travis-ci.org/payshares/js-payshares-base) automatically.

## Documentation
Documentation for this repo lives inside the [docs folder](./docs).

## Contributing
Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to this project.

## Publishing to npm
```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
```
A new version will be published to npm **and** Bower by Travis CI.

npm >=2.13.0 required.
Read more about [npm version](https://docs.npmjs.com/cli/version).

## License
js-payshares-base is licensed under an Apache-2.0 license. See the [LICENSE](./LICENSE) file for details.
