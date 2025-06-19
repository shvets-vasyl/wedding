<template>
  <section class="dress">
    <svg
      class="circle"
      viewBox="0 0 1440 1513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M720.5 1C77.9167 1 -443 521.92 -443 1164.51H372.01L720.5 1513L1884 1164.51C1884 521.92 1363.08 1 720.5 1Z"
        fill="white"
      />
      <path
        opacity="0.12"
        d="M1864 1157.5C1864 525.962 1352.04 14 720.5 14C88.9624 14 -423 525.962 -423 1157.5"
        stroke="black"
      />
      <path
        opacity="0.12"
        d="M1890 1171C1890 524.827 1366.4 1 720.5 1C74.603 1 -449 524.827 -449 1171"
        stroke="black"
        stroke-dasharray="3 3"
      />
    </svg>

    <div class="content">
      <div class="title h2">Дрес-код<br />та кольорова<br />палітра</div>

      <div class="colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 156 16"
          class="colors-svg"
          fill="none"
        >
          <circle cx="8" cy="8" r="8" fill="#BB1105" />
          <circle cx="36" cy="8" r="8" fill="#FBEDDB" />
          <circle cx="92" cy="8" r="8" fill="#3E6699" />
          <circle cx="64" cy="8" r="8" fill="#D8E5F5" />
          <circle cx="120" cy="8" r="8" fill="#5E9841" />
          <circle cx="148" cy="8" r="8" fill="#202020" />
        </svg>
      </div>

      <p class="descr p2">
        Надихайтеся нашою палітрою: бежевий, білий, коричневий. Це не
        обов'язковий дрес-код - це підказка для вашого образу
      </p>

      <div class="persons">
        <div v-for="(item, i) in persons" :key="i" class="person">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const persons = [
  "/images/type1.webp",
  "/images/type2.webp",
  "/images/type3.webp",
  "/images/type4.webp",
  "/images/type5.webp",
  "/images/type6.webp",
  "/images/type7.webp",
  "/images/type8.webp",
];
</script>
<style scoped lang="scss">
.dress {
  width: 100%;
  padding-top: 8.75rem;
  padding-bottom: 3.125rem;
  position: relative;
  margin-top: -20rem;
	@include mobile {
		padding-top: 5rem;
		padding-bottom: 15rem;
	}
}
.title {
  text-align: center;
  margin-bottom: 13.25rem;
	@include mobile {
		font-size: 4rem;
		margin-bottom: 15.625rem;
		line-height: 73%;
	}
}
.circle {
  width: 90rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.colors-svg {
  width: 9.75rem;
}
.descr {
  margin: 1.6875rem auto 0;
  width: 19.375rem;
  text-align: center;
}
.person img {
	width: 100%;
}
.person {
	position: absolute;
}
.person:nth-child(1) {
	width: 11.6875rem;
	top: .625rem;
	right: 4.9375rem;

	@include mobile {
		right: -5rem;
		top: 5.5rem;
		width: 9.3125rem;
	}
}
.person:nth-child(2) {
	width: 15.4375rem;
	right: 13.6875rem;
	top: 20rem;

	@include mobile {
		width: 10rem;
		right: 0;
		top: 10.125rem;
	}
}
.person:nth-child(3) {
	width: 12.0625rem;
	left: 29.75rem;
	top: 17.5625rem;

	@include mobile {
		width: 7.5rem;
		left: 5.5rem;
		top: 9rem;
	}
}
.person:nth-child(4) {
	width: 12.125rem;
	left: 14.5rem;
	top: 32.0625rem;

	@include mobile {
		width: 8.5rem;
		left: -0.625rem;
		top: 17.5rem;
	}
}
.person:nth-child(5) {
	width: 13.4375rem;
	left: 4.75rem;
	top: 9.25rem;

	@include mobile {
		width: 8.5rem;
		left: -0.6875rem;
		top: 5rem;
	}
}
.person:nth-child(6) {
	width: 11.375rem;
	right: .875rem;
	top: 33.375rem;

	@include mobile {
		width: 8.5rem;
		right: -6.5rem;
		top: 20rem;
	}
}
.person:nth-child(7) {
	width: 14.0625rem;
	left: 30.25rem;
	top: 43.6875rem;
	@include mobile {
		width: 8.5rem;
		left: 4.1875rem;
		top: 31rem;
	}
}
.person:nth-child(8) {
	width: 12.4375rem;
	right: 22.9375rem;
	top: 46.375rem;

	@include mobile {
		width: 8.5rem;
		left: 15rem;
		top: 33rem;
	}
}
</style>
