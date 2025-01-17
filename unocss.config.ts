import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Lato',
					weights: [400]
				},
				caudex: {
					name: 'Neuton',
					weights: [400, 700]
				}
			}
		})
	],
	transformers: [transformerVariantGroup()],
	theme: {
		container: {
			center: true
		},
		colors: {
			kishindo: {
				yellow: '#ffdb00',
				blue: '#005aff',
				background: '#254279'
			}

		}
	}
})
