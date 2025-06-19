<template>
  <footer>
    <p>© 2025</p>
		<p>Микита та Софія. <br class="br-mob" />До зустрічі на святі!</p>

		<img class="flowers" src="/images/flowers3.png" alt="">
  </footer>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
footer {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 1.5rem 2.625rem;
	font-size: .875rem;
	font-weight: 500;
	line-height: 116%;
	letter-spacing: -0.0175rem;
	text-transform: uppercase;
	position: relative;

	@include mobile {
		display: flex;
		flex-direction: column;
		padding: 1.25rem 1.5rem;
	}
}
footer p:nth-child(1) {
	@include mobile {
		order: 2;
	}
}
footer p:nth-child(2) {
	text-align: center;
	@include mobile {
		text-align: left;
		margin-bottom: .75rem;
		order: 1;
	}
}
.flowers {
	position: absolute;
	width: 50.5rem;
	bottom: 0;
	right: 0;
	pointer-events: none;
	@include mobile {
		width: 22rem;
	}
}
.br-mob {
	display: none;
	@include mobile {
		display: block;
	}
}
</style>
