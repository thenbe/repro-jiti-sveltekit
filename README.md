- https://github.com/webpro/knip/issues/346
- https://github.com/unjs/jiti/issues/32

```
# 1. install deps
npm install

# 2. run
npm run start

# 3. observe error
> repro-jiti-sveltekit@1.0.0 start /home/nbe/projects/playground/repro-jiti-sveltekit
> jiti src/jiti.ts

[jiti] [transpile] [esm] /home/nbe/projects/playground/repro-jiti-sveltekit/ts.js (4.032ms)
/home/nbe/projects/playground/repro-jiti-sveltekit/ts.js:5
  exports.ts = ts = (await Promise.resolve().then(() => require('typescript'))).default;

SyntaxError: Unexpected identifier 'Promise'
```
