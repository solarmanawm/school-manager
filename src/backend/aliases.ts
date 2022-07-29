import moduleAlias from 'module-alias';
import path from 'path';

const IS_DEV = process.env.NODE_ENV === 'development';
const root = IS_DEV ? path.resolve(__dirname, '..', '..') : path.resolve(__dirname, '..');
const configDev = path.resolve(root, 'config');
const configProd = path.resolve(root, 'dist/config');
const firebasePath = path.resolve(root, 'firebase');
console.log({
    root,
    configDev,
    configProd,
    firebasePath,
})
moduleAlias.addAliases({
    '@firebaseConfig': firebasePath,
    '@config': IS_DEV ? configDev : configProd,
});
