## Description
Experiments with single-spa across frameworks

## What we want to test
- Default create-single-spa works for react (18)
- Default create-single-spa works for angular (17)
- Default create-single-spa works for root-config
- Customize webpack to use module federation for exported modules
    - Test out if we should keep using system target
    - Test out if we should use esm target
    - Test out if we can keep "var" target
- Customize a vite bundler to work with single-spa
- Expose a parcel and consume it
- Routing cross frameworks work (test out scenarios)
- ...and more

For testing
```
cd root-config
npm i
npm run start

cd react-app
npm i
npm run start // or npm run start:standalone for standalone
```
