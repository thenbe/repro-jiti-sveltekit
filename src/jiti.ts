import createJITI, { type JITIOptions } from 'jiti'

const DEFAULT_EXTENSIONS = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx', '.mts', '.cts']

// https://github.com/unjs/jiti#options
// https://github.com/unjs/jiti/issues/32
// https://github.com/unjs/jiti/issues/72
const options = {
	interopDefault: true,
	extensions: DEFAULT_EXTENSIONS,
	esmResolve: false,
	debug: true,
	cache: false,
} satisfies JITIOptions;

const createLoader = (options: JITIOptions) => createJITI(process.cwd(), options)

export const jitiCJS = createLoader(options)

export const jitiESM = createLoader({ ...options, esmResolve: true })

const ts = '../ts.js'

console.log(jitiESM(ts))
