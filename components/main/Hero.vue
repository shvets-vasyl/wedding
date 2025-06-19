<template>
  <section class="hero">
    <IconText class="top-text" />

    <p class="name1 h1">Микита</p>
    <p class="name2 h1">С<span>о</span>ф<span>і</span>к<span>о</span></p>

    <img class="flowers-img" src="/images/flowers1.png" alt="" />

		<img class="flowers-mob" srcset="/images/hero-bg.png" alt="">

    <div class="info">
      <div class="top">
        <p class="p1 date"><span>15 вересня</span> 2025 року</p>
        <p class="p1 address">вулиця Воздвиженська, 60а/б, Київ, 04017</p>
      </div>

      <div class="foot">
        <p class="p1">Будемо раді бачити вас на нашому святі!</p>
      </div>
    </div>

    <div class="content">
      <div class="title2 title-word-1 h1">запр<span>о</span>шує</div>
      <div class="title2 title-word-2 h1">на</div>
      <div class="title2 title-word-3 h1">вес<span>i</span>лля</div>

      <div class="photo">
				<div class="photo-cover photo-cover-1" />
				<div class="photo-cover photo-cover-2" />
				<div class="image">
  				<img src="/images/photo1.webp" alt="" />
				</div>
      </div>

			<div class="descr p2">
				З великим задоволенням запрошуємо вас стати частиною одного з найважливіших днів у нашому житті — дня, коли ми скажемо одне одному “Так” і розпочнемо нову сімейну історію
			</div>

			<div class="title3 h5">
				Найкращий подарунок для нас це ваша присутність!
			</div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.hero {
  position: relative;
	padding-bottom: 7.5rem;
	@include mobile {
		padding-bottom: 3.75rem;
	}
}
.name1 {
  text-align: right;
  padding-top: 1rem;
  margin-bottom: 0;
  padding-right: 1.5rem;
	@include mobile {
		text-align: center;
		padding-top: 4.125rem;
		padding-right: 0;
	}
}
.name2 {
  padding-right: 1rem;
  text-align: right;
  position: relative;
  z-index: 3;
	@include mobile {
		text-align: center;
		padding-right: 0;
	}
}
.name2 span {
	font-family: var(--font-cti);
}
.flowers-img {
  position: absolute;
  top: 0;
  width: 59.6875rem;
  left: 0;
	z-index: 2;
	pointer-events: none;

	@include mobile {
		display: none;
	}
}
.top-text {
  position: absolute;
  top: -0.5rem;
  right: 15rem;

	@include mobile {
		display: none;
	}
}
.date {
  font-family: var(--font-hb);
  margin-bottom: 0.75rem;
}
.address {
  width: 10.625rem;
}
.info {
  padding-left: 3rem;
  margin-left: 44.75rem;
  margin-top: 1.875rem;
	position: relative;
	border-left: .0625rem solid rgba(#000, 0.1);
	z-index: 2;

	@include mobile {
		margin-left: 8.4375rem;
		padding-left: 1rem;
		margin-top: 3rem;
	}
}
.info:after {
	content: "";
	position: absolute;
	left: -0.0625rem;
	top: 0;
	width: .0625rem;
	height: 4.375rem;
	background: #000;

	@include mobile {
		height: 3.125rem;
	}
}
.foot {
  margin-top: 14.125rem;
  width: 9.625rem;

	@include mobile {
		margin-top: 8.125rem;
	}
}
.content {
  margin-top: 7.5625rem;
  position: relative;

	@include mobile {
		margin-top: 2rem;
	}
}
.title-word-1 {
	@include mobile {
		text-align: center;
	}
}
.title-word-2 {
  text-align: right;
  padding-right: 11.4375rem;
	@include mobile {
		padding-right: .75rem;
	}
}
.title-word-3 {
  text-align: center;
	position: relative;
	z-index: 2;
	@include mobile {
		z-index: 0;
	}
}
.photo {
  position: absolute;
  top: 6.875rem;
  left: 50%;
  transform: translateX(-50%);

	@include mobile {
		top: 10rem;
	}
}
.image {
	padding: 0.625rem 0.625rem 4.375rem;
  background: var(--c-white);
	position: relative;
	z-index: 2;

	@include mobile {
		padding: .25rem .25rem 2.25rem;
	}
}
.photo-cover {
	content: "";
	position: absolute;
	inset: 0;
	background: #f7f7f7;
}
.photo-cover-1 {
	transform: rotate(-4.045deg);
	top: .625rem;
}
.photo-cover-2 {
	transform: rotate(4.413deg);
}
.photo img {
  width: 20.8125rem;

	@include mobile {
		width: 11.4375rem;
	}
}
.descr {
	width: 19.875rem;
	margin: 10.5rem auto 0;
	text-align: center;

	@include mobile {
		width: 20.5rem;
		margin: 19.3125rem auto 0;
	}
}
.title3 {
	width: 31.125rem;
	margin: 4.4375rem auto 0;
	text-align: center;

	@include mobile {
		width: 20rem;
		margin: 2rem auto 0;
	}
}
.title-word-1 span, .title-word-3 span {
	font-family: var(--font-cti);
}
.flowers-mob {
	display: none;
	@include mobile {
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		position: absolute;
		pointer-events: none;
	}
}
</style>
