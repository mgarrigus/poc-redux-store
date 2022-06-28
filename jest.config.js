const config = require('@salesforce-mc/nui-test/config');

const finalConfig = config();

module.exports = Object.assign(finalConfig, {
	// Custom config
	setupFilesAfterEnv: ['<rootDir>/config/test-setup.js'],
	testPathIgnorePatterns: ['/node_modules/'],
	transformIgnorePatterns: [
		'/node_modules/(?!(@salesforce|@salesforce/design-system-react))'
	],
	transform: Object.assign(finalConfig.transform, {
		'^.+\\.jsx?$': 'babel-jest'
	}),
	collectCoverage: true
});
