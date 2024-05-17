module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,html,jpg,json,css}'
	],
	swDest: '/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
			urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'images-cache',
				expiration: {
					maxEntries: 50, // Maximum number of entries to cache
					maxAgeSeconds: 30 * 24 * 60 * 60, // Maximum age of entries (30 days)
				},
				cacheableResponse: {
					statuses: [0, 200], // Cache responses with these statuses
				},
			},
		},
		{
			urlPattern: /\.(?:js|css)$/,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'static-resources',
				expiration: {
					maxEntries: 100,
					maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
				},
			},
		},
		{
			urlPattern: /^https:\/\/api\.example\.com\/data/,
			handler: 'NetworkFirst',
			options: {
				cacheName: 'api-data',
				networkTimeoutSeconds: 10, // Time to wait for a network response
				cacheableResponse: {
					statuses: [0, 200], // Cache responses with these statuses
				},
			},
		},
	],
	offlineGoogleAnalytics: true, // Enable offline Google Analytics
	skipWaiting: true, // Skip waiting for the service worker to become active
	clientsClaim: true, // Take control of all pages that the service worker controls
	navigateFallback: '/offline.html', // Fallback URL for navigation requests when offline
	navigateFallbackDenylist: [/^\/_/, /admin/], // URLs to exclude from the fallback navigation
	manifestTransforms: [
		(manifestEntries) => {
			// Transform the generated manifest file
			manifestEntries.push({
				url: '/push-manifest.json',
				revision: null, // Workbox will generate a unique revision for this entry
			});
			// Return the transformed manifest entries
			return {manifest: manifestEntries};
		},
	],
};
