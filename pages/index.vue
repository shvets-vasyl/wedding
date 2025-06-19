<template>
  <main class="main-page">
    <img class="bg" src="/images/bg.webp" alt="">

		<TheHeader />
		<HeaderMob />
		<TheMenu />

		<div class="wrap">
			<MainHero />
			<MainWhere />
			<MainDress />
			<MainForm />
			<MainJoin />
			<TheFooter />
		</div>
  </main>
</template>
<script setup lang="ts">


onMounted(() => {
	gsap.to(".main-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.main-page {
	overflow: hidden;
	position: relative;
	opacity: 0;
}
.bg {
	object-fit: cover;
	object-position: center center;
	width: 100%;
	height: 100%;
	min-height: 389.0625rem;
	position: absolute;
}
.wrap {
	position: relative;
	z-index: 2;
}
</style>
