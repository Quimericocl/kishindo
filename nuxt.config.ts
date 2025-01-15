export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/scripts'
	],
	unocss: {
		preflight: true
	},
	compatibilityDate: '2024-10-30',
	scripts: {
		registry: {
			cloudflareWebAnalytics: true
		}
	},
	runtimeConfig: {
		public: {
			scripts: {
				cloudflareWebAnalytics: {
					token: ''
				}
			}
		}
	}
})
