# treat-nesting-repro

Reproduction for issue: [https://github.com/seek-oss/treat/issues/125](https://github.com/seek-oss/treat/issues/125)

## Install

```bash
yarn install
```

This should install all dependancies

#### To build the webpack reproduciton:

```bash
cd packages/treat-ui-library && yarn run build
```

Ouptut should be available in `lib`

#### To build the rollup reproduciton:

```bash
cd packages/treat-ui-library && yarn run build
```

Ouptut should be available in `lib` and `lib-esm`
