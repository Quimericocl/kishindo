import { defineLocalBusiness } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/scripts',
		'@nuxtjs/seo'
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
	site: {
		name: 'Kishindo',
		url: 'https://kishindo.cl',
		description: 'Centro de desarrollo integral a través de las artes marciales y terapias complementarias',
		lang: 'es'
	},
	schemaOrg: {
		identity: defineLocalBusiness({
			'@type': 'SportsActivityLocation', // Choose from https://schema.org/LocalBusiness#subtypes
			// Basic Information (Required)
			'name': 'Kishindo',
			'legalName': 'SERVICIOS DE ARTES JAPONESES VIOLETA CERDA DIAZ E.I.R.L.',
			'url': 'https://kishindo.cl',
			'description': 'Karate, Kendo y Reiki en Concepción',
			// Location (Required)
			'address': {
				streetAddress: 'Prieto 1058',
				addressLocality: 'Concepción',
				addressRegion: 'Región del Bío Bío',
				postalCode: '4030000',
				addressCountry: 'CL'
			},
			'email': 'contacto@kishindo.cl',
			'telephone': '+56997100416',
			'openingHours': [
				'Mo-Th 09:00-22:00'
			],
			'employee': [
				{
					'@type': 'Person',
					'name': 'Germán Díaz',
					'jobTitle': 'Instructor de Karate',
					'description': '7° Dan en Goju Ryu de la escuela Shodokan'
				},
				{
					'@type': 'Person',
					'name': 'Germán Díaz',
					'jobTitle': 'Instructor de Kendo',
					'description': '5° Dan en Kendo'
				},
				{
					'@type': 'Person',
					'name': 'Violeta Cerda',
					'jobTitle': 'Maestra de Reiki y Flores de Bach'
				}
			],
			'hasOfferCatalog': {
				'@type': 'OfferCatalog',
				'name': 'Servicios de Kishindo',
				'itemListElement': [
					{
						'@type': 'Offer',
						'itemOffered': {
							'@type': 'Service',
							'name': 'Karate Goju Ryu',
							'description': 'Entrenamiento tradicional de Karate estilo Goju Ryu de la escuela Shodokan',
							'category': 'Artes Marciales'
						}
					},
					{
						'@type': 'Offer',
						'itemOffered': {
							'@type': 'Service',
							'name': 'Kendo',
							'description': 'Arte marcial japonés basado en la esgrima tradicional samurái',
							'category': 'Artes Marciales'
						}
					},
					{
						'@type': 'Offer',
						'itemOffered': {
							'@type': 'Service',
							'name': 'Reiki',
							'description': 'Terapia energética tradicional japonesa',
							'category': 'Terapia Alternativa'
						}
					},
					{
						'@type': 'Offer',
						'itemOffered': {
							'@type': 'Service',
							'name': 'Flores de Bach',
							'description': 'Terapia natural con esencias florales',
							'category': 'Terapia Alternativa'
						}
					}
				]
			}
		})
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
