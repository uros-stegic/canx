## Synopsis

CANX is labeling tool for collecting handwritten characters. It is also a platform so administrators can add/remove new
characters as they like. It includes tools for monitoring labeling process and mechanisms for detecting false input.
CANX is written as a website as a school project for class "R338 Web Programming" and is intended to be run on mobile
platforms only.

## Installation

### Dependencies

* ghc - Haskell compiler
* cabal - build system for Haskell
* stack - Haskell development tool
* nodejs - Javascript server-side environment
* npm - nodejs package manager
* mongodb - NoSQL DBMS

### Installation

From folder `canx/server/canx-server/` run:
```
stack build yesod-bin cabal-install --install-ghc
stack build
```
After that, go to folder `canx/client/canx-client/` and run:
```
npm install
```

## Usage

```
./build run
```
After that, visit `http://localhost:3000`

## License

Everything inside this repository is licensed under GPL-3.0 license.

