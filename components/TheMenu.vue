<template>
  <div class="menu" :class="{ open: menuOpen }">
		<img src="/images/menu.webp" class="inner-img" alt="">
    <div class="items">
      <div
        v-for="(item, i) in nav"
        class="link"
        @click="scrollToSect(item.link)"
      >
        {{ item.text }}
      </div>
    </div>

		<div class="info">
			<p class="p1">15 вересня 2025 року</p>
			<p class="p1">Воздвиженська,<br />60а/б, Київ, 04017</p>
		</div>
  </div>
  <header></header>
</template>
<script setup lang="ts">
const menuOpen = useState("menu-open");

const nav = [
  {
    text: "Вітання",
    link: "section.hero",
  },
  {
    text: "Де і коли",
    link: "section.where .title",
  },
  {
    text: "Програма",
    link: "section.where .content",
  },
  {
    text: "Дрес-код",
    link: "section.dress",
  },
  {
    text: "Форма",
    link: "section.form form",
  },
  {
    text: "Побажання",
    link: "section.form .descr",
  },
];

const scrollToSect = (link: string) => {
	menuOpen.value = false
  useScrollTo(link);
};
</script>
<style scoped lang="scss">
.menu {
  position: fixed;
  inset: 0;
	display: none;
	z-index: 99;
	@include mobile {
		display: block;
		opacity: 0;
		visibility: hidden;
		transition: all .3s ease;
	}
}
.menu.open {
	opacity: 1;
	visibility: visible;
}
.items {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 3.125rem;
	line-height: 88%;
	letter-spacing: -0.0938rem;
	font-family: var(--font-ct);
}
.info {
	position: absolute;
	bottom: 2rem;
	left: 0;
	width: 100%;
	text-align: center;
}
.info p:nth-child(1) {
	font-family: var(--font-hb);
	margin-bottom: 1rem;
}
</style>
