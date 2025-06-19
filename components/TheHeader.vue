<template>
  <header>
    <div
      v-for="(item, i) in nav"
      class="p1 link"
      @click="scrollToSect(item.link)"
    >
      {{ item.text }}
    </div>
  </header>
</template>
<script setup lang="ts">
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
  useScrollTo(link);
};
</script>
<style scoped lang="scss">
header {
  position: fixed;
  top: 6.0625rem;
  left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  z-index: 100;
	@include mobile {
		display: none;
	}
}
.link {
  cursor: pointer;
  transition: all 0.3s ease;
}
@include hover {
  .link:hover {
    opacity: 0.5;
  }
}
.active {
  font-family: var(--hb);
}
</style>
