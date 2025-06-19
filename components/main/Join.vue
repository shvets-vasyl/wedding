<template>
  <section class="join">
    <p class="h3 title">
			Приєднуйтесь до нашого Telegram чату
		</p>
		<client-only>
			<p class="h3 title-mobile">
				<div>Приєднуйтесь</div>
				<div>до нашого</div>
				<div>Telegram чату</div>
			</p>
		</client-only>
		<p class="descr p2">
			Тут ви знайдете всю важливу інформацію про святкування, зможете поставити запитання та залишатися на зв’язку з іншими гостями
		</p>

		<img class="code" src="/images/code.webp" alt="">

		<a class="link" href="https://t.me/+88FOr5RPKB1kNTgy" target="_blank">
			<TheButton text="Перейти в<br />телеграм" />
		</a>
  </section>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.join {
	margin: .625rem;
	margin-bottom: 0;
	background: var(--c-white);
	padding: 2.5rem 2rem 2rem;
	position: relative;
	@include mobile {
		margin: .5rem;
		margin-bottom: 0;
		padding: 1rem 0.5rem;
	}
}
.title {
	width: 59.5rem;
	margin-bottom: 12.625rem;
	@include mobile {
		display: none;
	}
}
.title-mobile {
	display: none;
	@include mobile {
		display: block;
		margin-bottom: 9.125rem;
	}
}
.title-mobile div:nth-child(1),
.title-mobile div:nth-child(2) {
	text-align: right;
}
.descr {
	width: 22.375rem;
	@include mobile {
		width: 18.2rem;
		padding-left: .5rem;
	}
}
.code {
	width: 8.25rem;
	position: absolute;
	top: 1rem;
	right: 1rem;
	@include mobile {
		display: none;
	}
}
.link {
	position: absolute;
	top: 12rem;
	left: 55.3125rem;
	@include mobile {
		left: auto;
		right: 1rem;
		top: 9rem;
	}
}
</style>
