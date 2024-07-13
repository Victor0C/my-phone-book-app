<template>
	<header>
		<nav class="navbar bg-primary d-flex justify-content-center">
			<div class="container-fluid">
				<h1 class="text-light fs-3 fst-italic">My Phone Book</h1>
			</div>
		</nav>
	</header>

	<main class="container-fluid flex-grow-1 my-4">
		<router-view></router-view>
	</main>

	<footer class="container-fluid align-items-center py-3 mt-auto bg-primary">
		<p class="text-center text-light m-0">© 2024 Victor Hugo Oliveira Cunha</p>
	</footer>
</template>
