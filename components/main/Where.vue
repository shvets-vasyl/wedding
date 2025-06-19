<template>
  <section class="where">
    <svg
      class="right-decor"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.3333 1H0" stroke="black" stroke-width="2" />
      <path d="M32 11.6667V33" stroke="black" stroke-width="2" />
    </svg>
    <svg
      class="left-decor"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6667 1H33" stroke="black" stroke-width="2" />
      <path d="M1 11.6667L1 33" stroke="black" stroke-width="2" />
    </svg>

    <svg class="center-decor" viewBox="0 0 32 2" fill="none">
      <path d="M-2.38419e-07 1L32 1" stroke="black" stroke-width="2" />
    </svg>

    <svg
      class="star"
      viewBox="0 0 1440 3468"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.09"
        d="M720.5 0L721.248 1716.68L869.819 9.49902L722.735 1716.87L1017.5 37.8921L724.197 1717.25L1161.93 84.868L725.619 1717.81L1301.52 149.912L726.985 1718.55L1434.75 232.312L728.28 1719.46L1560.15 331.165L729.49 1720.52L1676.35 445.387L730.601 1721.74L1782.08 573.728L731.602 1723.09L1876.18 714.78L732.48 1724.56L1957.62 867L733.228 1726.13L2025.5 1028.72L733.836 1727.79L2079.08 1198.16L734.298 1729.51L2117.78 1373.48L734.609 1731.29L2141.17 1552.75L734.765 1733.09L2149 1734L734.765 1734.91L2141.17 1915.25L734.609 1736.71L2117.78 2094.52L734.298 1738.49L2079.08 2269.84L733.836 1740.21L2025.5 2439.28L733.228 1741.87L1957.62 2601L732.48 1743.44L1876.18 2753.22L731.602 1744.91L1782.08 2894.27L730.601 1746.26L1676.35 3022.61L729.49 1747.48L1560.15 3136.84L728.28 1748.54L1434.75 3235.69L726.985 1749.45L1301.52 3318.09L725.619 1750.19L1161.93 3383.13L724.197 1750.75L1017.5 3430.11L722.735 1751.13L869.819 3458.5L721.248 1751.32L720.5 3468L719.752 1751.32L571.181 3458.5L718.265 1751.13L423.498 3430.11L716.803 1750.75L279.069 3383.13L715.381 1750.19L139.477 3318.09L714.015 1749.45L6.25 3235.69L712.72 1748.54L-119.151 3136.84L711.51 1747.48L-235.353 3022.61L710.399 1746.26L-341.082 2894.27L709.398 1744.91L-435.181 2753.22L708.52 1743.44L-516.617 2601L707.772 1741.87L-584.5 2439.28L707.164 1740.21L-638.084 2269.84L706.702 1738.49L-676.784 2094.52L706.391 1736.71L-700.175 1915.25L706.235 1734.91L-708 1734L706.235 1733.09L-700.175 1552.75L706.391 1731.29L-676.784 1373.48L706.702 1729.51L-638.084 1198.16L707.164 1727.79L-584.5 1028.72L707.772 1726.13L-516.617 867L708.52 1724.56L-435.181 714.78L709.398 1723.09L-341.082 573.728L710.399 1721.74L-235.353 445.387L711.51 1720.52L-119.151 331.165L712.72 1719.46L6.25 232.312L714.015 1718.55L139.477 149.912L715.381 1717.81L279.069 84.868L716.803 1717.25L423.498 37.8921L718.265 1716.87L571.181 9.49902L719.752 1716.68L720.5 0Z"
        fill="url(#paint0_radial_17_120)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_17_120"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(720.5 1734) rotate(90) scale(1734 1428.5)"
        >
          <stop stop-opacity="0" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>

    <div class="title h2">
      <div>Готель</div>
      <div>"Воздвиженський"</div>
      <div>Ресторан</div>
      <div>Тераса</div>
    </div>

    <div class="content">
      <div class="photo">
        <img src="/images/photo2.webp" alt="" />
      </div>
      <div class="date">15.09.25</div>
      <div class="left">
        <p class="content-title h5">15 Вересня <br />2025 року</p>

        <div class="items">
          <div v-for="(item, i) in timeline" :key="i" class="item">
            <div class="p2">{{ item.time }}</div>
            <div>
              <svg viewBox="0 0 32 2" fill="none">
                <path
                  opacity="0.2"
                  d="M0 1H32"
                  stroke="black"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="p2">{{ item.text }}</div>
          </div>
        </div>

        <p class="address p1">Воздвиженська, 60а/б, Київ, 04017</p>
      </div>
      <div class="right">
        <a class="btn-location" href="https://maps.app.goo.gl/xSJUMixCTXg1dSfcA" target="_blank">
          <TheButton text="локація<br>на карті" />
        </a>

        <p class="details p1">
          На локації є паркінг - біля головного входу Терраси або біля входу у
          готель Воздвиженська
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const timeline = [
  {
    time: "13:30",
    text: "Збір гостей",
  },
  {
    time: "14:00",
    text: "Церемонія одруження",
  },
  {
    time: "15:00",
    text: "Святковий банкет",
  },
  {
    time: "20:30",
    text: "Подача весільного торта",
  },
  {
    time: "22:00",
    text: "Завершення святкування",
  },
];
</script>
<style scoped lang="scss">
.where {
  padding-top: 7.5rem;
  padding-bottom: 26.875rem;
  background: var(--c-white);
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  position: relative;

	@include mobile {
		padding-top: 3rem;
		margin-left: 0;
		margin-right: 0;
	}
}
.title {
  text-align: center;
  margin-bottom: 11rem;
}
.content {
  display: flex;
  justify-content: space-between;
  position: relative;

	@include mobile {
		flex-direction: column;
	}
}
.left {
  padding-left: 16.9375rem;
  display: flex;
  flex-direction: column;

	@include mobile {
		padding-left: 1rem;
	}
}
.right {
  padding-right: 6.125rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 41.25rem;
	@include mobile {
		padding-right: 0;
		flex: 1;
	}
}
.content-title {
  margin-bottom: 3.5rem;
	@include mobile {
		margin-bottom: 2rem;
	}
}
.item {
  display: flex;
  align-items: center;
}
.item:not(:last-child) {
  margin-bottom: 1.5rem;
}
.item div:nth-child(1) {
  flex: 0 0 3.125rem;
  font-family: var(--font-hb);
}
.item div:nth-child(3) {
  margin-left: 0.75rem;
}
.item svg {
  width: 2rem;
}
.address {
  margin-top: 10.25rem;
  width: 8.4375rem;

	@include mobile {
		margin-top: 5.5rem;
		width: 10rem;
	}
}
.btn-location {
  align-self: flex-end;

	@include mobile {
		position: absolute;
		top: 17rem;
		right: 1rem;
	}
}
.details {
  margin-top: auto;
  width: 20.9375rem;
  opacity: 0.4;
	@include mobile {
		margin-top: 1rem;
		margin-left: 1rem;
		width: 15.9375rem;
	}
}
.photo {
  width: 25.8125rem;
  position: absolute;
  top: -21.875rem;
  left: 48.75rem;
  transform: rotate(4.6deg);

	@include mobile {
		width: 11.4375rem;
		transform: rotate(4deg);
		left: 47%;
		top: -11.5rem;
	}
}
.photo img {
  width: 100%;
}
.date {
  font-size: 15.6875rem;
  letter-spacing: -0.6288rem;
  text-transform: uppercase;
  font-family: var(--font-ct);
  position: absolute;
  transform: rotate(-90deg);
  top: 23.4375rem;
  left: -20.875rem;

	@include mobile {
		display: none;
	}
}
.star {
  pointer-events: none;
  position: absolute;
  top: -18.75rem;
  left: 50%;
  width: 90rem;
  transform: translateX(-50%);
}
.center-decor,
.right-decor,
.left-decor {
	position: absolute;
  top: 1rem;
	opacity: 0.1;
	width: 2rem;

	@include mobile {
		display: none;
	}
}
.right-decor {
  right: 1rem;
}
.left-decor {
  left: 1rem;
}
.center-decor {
  left: 50%;
  transform: translateX(-50%);
}
</style>
