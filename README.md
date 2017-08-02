# PUI CSS Compiler

For compiling Pivotal UI css if you don't have a JavaScript build chain set up

## Install
```sh
git clone https://github.com/charleshansen/pui-css-compiler.git
cd pui-css-compiler
npm i
```

(you may need to install/upgrade node or npm. I recommend node 6+ and npm 3+)

## Configure PUI modules

First, add any pui css modules you are using
```sh
npm i pui-css-forms pui-css-whitespace --save
```
Next, add the modules in `index.js`. For each module you want to use, add an `import` line
As an example, the file looks like
```js
import 'pui-css-forms';
import 'pui-css-whitespace';
```
## Compile

```sh
npm start
```

This should produce a file `components.css`. You should be able to use that in your project
