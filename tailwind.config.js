
/** @type {import('tailwindcss').Config} */


export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		'./components/ui/**/*.{js,ts,jsx,tsx}', //   shadcn components
	],
	theme: {
		extend: {
			colors: {
				bgGray: ' #F4F4F4',
				lightCyan: '#B0FFFF',
				cyan: '#00FFFF',
				darkGray: '#1A1A1A',
				black: '#000000',



			},
			fontFamily: {
				raleway: [
					'Raleway"',
					'inter',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},

	darkMode: ['class'], // Enables dark mode with a class

}
