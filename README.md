## Description
Experiments with single-spa across frameworks

## What we want to test
- Default create-single-spa works for react ✅
- Default create-single-spa works for angular ✅
- Default create-single-spa works for root-config ✅
- Test routing across react/angular apps ✅
- Customize webpack to use module federation for exported modules 🚧
    - Test out if we should keep using system target 🚧
    - Test out if we should use esm target 🚧
    - Test out if we can keep existing target 🚧
- Customize a vite bundler to work with single-spa ✅
- Expose a parcel and consume it 🚧
- import the `import-map.json` from external file in root-config ✅
- Create a `manifest.json` from which we register our applications ✅
- ...and more

## Running
```
node run-all install
node run-all start

Go to http://localhost:9000
```

To view the import map overrides feature, write in the console:

```
localStorage.setItem('devtools', true);
```