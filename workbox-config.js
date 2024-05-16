module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,html,jpg,json,css}'
	],
	swDest: '/swjs',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};