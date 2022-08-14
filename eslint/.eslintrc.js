module.exports = {
	main: "./.eslintrc.js",
	exports: {
		import: "./.eslintrc.js",
		require: "./.eslintrc.js",
	},
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "import", "prettier"],
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		"linebreak-style": ["error", "unix"],
		indent: ["tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"import/extensions": 2,
		"import/first": 2,
		"prettier/prettier": "error",
	},
};
