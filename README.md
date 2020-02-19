# Demo product app

This is an example product landing page that demonstrates how an existing UI component library and new UI library of derivitive components could work together. 

This app requires verdaccio to proxy unpublished npm packages from a local registry.

## Running demo

1. Install verdaccio

```bash
npm i -g verdaccio
```

2. start verdaccio
```bash
verdaccio
```

Now all calls to npm will be proxied through verdaccio. This allows us to publish npm packages locally for testing.

3. clone derivitive monorepo

```bash
git clone git@github.com:MikeLockz/demo-ui-lib.git
```

4. install dependencies

```bash
yarn
```

if that command fails, try to run `yarn install --network-concurrency=1` which will take a long time to complete.

5. publish packages to local npm registry

```bash
lerna publish  --registry http://localhost:4873
```

6. You should be able to run the pre-built landing page.

```bash
yarn start
```

7. You should be able to use any unpublished packages from the derivitive UI monorepo in your project. 

```bash
yarn install @rimble/button
```
