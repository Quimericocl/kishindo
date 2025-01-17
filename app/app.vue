<template>
	<div class="font-caudex grid min-h-screen place-items-center supports-[(min-height:100svh)]:min-h-100svh">
		<div class="relative h-800px w-full bg-dark">
			<div class="center-absolute absolute aspect-square h-350px">
				<div class="mb-9 flex flex-col items-center">
					<img src="assets/logos/Kishindo.png" alt="Kishindo logo" width="250">
					<div class="text-white/80">
						<h1 class="text-center text-8 font-bold">
							Kishindo
						</h1>
						<h2 class="text-center text-5 text-white/50 leading-2">
							Centro de desarrollo integral
						</h2>
					</div>
				</div>
				<div class="border border-white/20 rounded-2 p-2">
					<p class="text-center text-white/90 italic">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut error harum cumque minima.
					</p>
				</div>
			</div>
		</div>

		<!-- Karate y Kendo -->
		<div class="relative h-900px w-full flex overflow-hidden lt-lg:(h-auto flex-col)">
			<!-- Karate -->
			<div class="group relative h-full flex-grow-1 flex-basis-40% overflow-hidden bg-kishindo-yellow p-5">
				<div class="mx-auto mb-8 flex justify-center">
					<div class="w-full flex flex-col items-center rounded-2 bg-white/30 p-5">
						<img src="assets/logos/Karate.png" alt="Kishindo - Karate logo" width="250" class="mx-auto">
						<h3 class="text-center text-9 text-kishindo-background font-bold">
							Karate
						</h3>
						<p class="text-center text-dark/90 leading-1 italic">
							El arte de la mano vacía.
						</p>
					</div>
				</div>

				<h4 class="text-center text-5">
					Sobre nuestro estilo
				</h4>
				<div class="mb-5 border border-dark/20 rounded-2 p-2">
					<p class="text-justify text-dark/90">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cum illo? Soluta tempora, rerum assumenda rem doloremque cum quod accusamus voluptatem facilis dolorum inventore nisi sed quasi aut ex voluptate!

						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cum illo? Soluta tempora, rerum assumenda rem doloremque cum quod accusamus voluptatem facilis dolorum inventore nisi sed quasi aut ex voluptate!
					</p>
				</div>

				<div class="flex flex-1 justify-center gap-x-2">
					<template v-for="i in 3" :key="`${i}-testimonio-karate`">
						<div class="h-300px w-200px flex flex-1 flex-col items-center justify-center bg-white/30 px-2">
							<div class="aspect-square flex-basis-45% rounded-full bg-dark" />
							<p class="mb-3 text-dark/80">
								Gonzalo Díaz
							</p>
							<p class="border border-dark/20 text-center text-dark italic">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nobis magni vel sed...
							</p>
						</div>
					</template>
				</div>
			</div>

			<div class="relative flex-shrink-5 flex-grow-5 flex-basis-50% bg-dark/95 p-5 lt-lg:order-last">
				<h4 class="mb-5 text-center text-8 text-white/80">
					¡Ven por tu clase <span class="text-white">gratis</span>!
				</h4>
				<div class="mx-auto mb-10 aspect-square w-350px bg-white/10" />

				<h5 class="mb-1 text-center text-white font-bold">
					Horario de clases
				</h5>
				<table class="w-full rounded-2 bg-dark p-5 text-center">
					<thead class="text-white/50">
						<tr>
							<th>Hora</th>
							<th>Lunes</th>
							<th>Martes</th>
							<th>Miercoles</th>
							<th>Jueves</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="text-white">
								19:00 - 20:30
							</td>
							<td class="text-white">
								Karate
							</td>
							<td />
							<td class="text-white">
								Karate
							</td>
							<td class="text-white">
								Karate
							</td>
						</tr>
						<tr>
							<td class="text-white/80">
								20:30 - 22:00
							</td>
							<td />
							<td class="text-white">
								Kendo
							</td>
							<td />
							<td class="text-white">
								Kendo
							</td>
						</tr>
					</tbody>
				</table>

				<div class="p-10 text-center text-white">
					<p>Contactanos en:</p>

					<div class="text-white/25">
						Instagram, N telefono, correo
					</div>
				</div>
			</div>
			<!-- Kendo -->
			<div class="group-hover h-full flex-grow-1 flex-basis-40% overflow-hidden bg-kishindo-background p-5">
				<div class="mx-auto mb-8 flex justify-center">
					<div class="w-full flex flex-col items-center rounded-2 bg-dark/20 p-5">
						<img src="assets/logos/Kendo.png" alt="Kishindo - Kendo logo" width="250" class="relative z-1">
						<h3 class="text-center text-9 text-kishindo-yellow font-bold">
							Kendo
						</h3>
						<p class="text-center text-white/90 leading-1 italic">
							El camino de la espada.
						</p>
					</div>
					<div class="hidden h-200px w-full group-hover:(relative flex)">
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam soluta nulla dolorem, ex ea, distinctio, ipsum neque tempora ipsa iusto maiores! Unde possimus labore ullam! Quae excepturi sint illo minus!</p>
					</div>
				</div>
				<h4 class="text-center text-5 text-white/95">
					¿Qué es Kendo?
				</h4>
				<div class="mb-5 border border-white/20 rounded-2 p-2">
					<p class="text-justify text-white">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cum illo? Soluta tempora, rerum assumenda rem doloremque cum quod accusamus voluptatem facilis dolorum inventore nisi sed quasi aut ex voluptate!

						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, cum illo? Soluta tempora, rerum assumenda rem doloremque cum quod accusamus voluptatem facilis dolorum inventore nisi sed quasi aut ex voluptate!
					</p>
				</div>

				<div class="flex flex-1 justify-center gap-x-2">
					<template v-for="i in 3" :key="`${i}-testimonio-kendo`">
						<div class="h-300px w-200px flex flex-1 flex-col items-center justify-center bg-dark/15 px-2">
							<div class="aspect-square flex-basis-45% rounded-full bg-white" />
							<p class="mb-3 text-white/80">
								Gustavo Marín
							</p>
							<p class="border border-white/20 text-center text-white italic">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nobis magni vel sed...
							</p>
						</div>
					</template>
				</div>
			</div>
		</div>

		<!-- <div class="h-1px w-full bg-dark" /> -->

		<!-- Reiki -->
		<div class="h-800px w-full overflow-hidden bg-pink/50 p-5">
			<div class="relative mx-auto w-50% flex justify-center lt-lg:w-full">
				<div>
					<div class="aspect-square h-400px flex rounded-full">
						<img src="assets/Reiki_decoration.png" alt="Kishindo - Reiki logo" class="center-absolute absolute max-w-400px opacity-80">
						<img src="assets/logos/Reiki.png" alt="Kishindo - Reiki logo" width="250" class="center-absolute absolute max-w-300px">
					</div>

					<div>
						<h3 class="text-center text-7 text-violet-9 font-bold">
							Reiki y Flores de Bach
						</h3>
						<p class="text-center text-dark leading-1 italic">
							La práctica de la energía universal y las esencias florales.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Mapa -->
		<!-- <div class="relative h-500px w-full flex overflow-hidden bg-dark" /> -->
		<Footer />
	</div>
</template>

<style>
.center-absolute{
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto auto auto auto;
}

.animate-grow:hover{
	flex-basis: 200%;
	transition: all 825ms;
}

.animate-grow{
	transition: all 825ms;
}
</style>
