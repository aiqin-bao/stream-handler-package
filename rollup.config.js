import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.esm.js',
            format: 'es'
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({ declaration: true, declarationDir: 'dist' })
    ]
};
