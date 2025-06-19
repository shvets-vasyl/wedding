<template>
  <section class="form">
    <img class="fabric" src="/images/fabric.webp" alt="" />
    <img class="flowers" src="/images/flowers2.png" alt="" />

		<img class="mob-bg" src="/images/form-bg.png" alt="">

    <div class="title1 h4">Невелике</div>
    <div class="title2 h4">побажання</div>
    <div class="title3 h4">від нас</div>

    <div class="descr">
      <div class="text">
        Замість квітів будемо дуже раді, якщо ви принесете пляшечку алкоголю,
        яка зігріє нас у затишний вечір і збереже пам'ять про цей день!
      </div>
    </div>

    <div class="form-block">
      <img class="inner-img" src="/images/photo3.webp" alt="" />

      <form @submit="handleSubmit">
        <p class="p1 form-text">Допоможіть нам краще підготуватися!</p>
        <div class="fields-block">
          <input v-model="name" type="text" name="name" placeholder="Ваше ім'я" />
          <input v-model="drink" type="text" name="drink" placeholder="Улюблений напій" />
          <textarea
						v-model="message"
            name="message"
            placeholder="Чи є у вас алергії або побажання щодо харчування?"
          ></textarea>
        </div>
        <div class="fields-block2">
          <p class="p1 form-question">Чи будете з дітьми?</p>
          <button
            type="button"
            class="btn-small p1"
            :class="{ active: withKids === 'Так' }"
            @click="handleSelect('Так')"
          >
            Так
          </button>
          <button
            type="button"
            class="btn-small p1"
            :class="{ active: withKids === 'Ні' }"
            @click="handleSelect('Ні')"
          >
            Ні
          </button>
					<div class="btn-wrap">
          <button type="submit" class="form-btn p1" >
            Відправити
          </button>
					</div>
        </div>
        <p class="p1 form-text2">
          Ми готуємо це свято з любов’ю та натхненням, і найголовніше для нас —
          провести цей день у колі найрідніших людей
        </p>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
const name = ref("");
const drink = ref("");
const message = ref("");
const withKids = ref<string | null>(null);

const handleSelect = (value: string) => {
  withKids.value = value;
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const payload = {
    name: name.value,
    drink: drink.value,
    message: message.value,
    withKids: withKids.value || "",
  };

	console.log(payload);


  try {
		const resp = await $fetch("/api/form", {
			method: "POST",
			body: JSON.stringify(payload),
		})

		console.log(resp);

    alert("Дякуємо! Ваші відповіді успішно відправлені. До зустрічі на святі!");
  } catch (error) {
    console.error(error);
    alert("Помилка при відправці форми.");
  }
};
</script>
<style scoped lang="scss">
.form {
  position: relative;
}
.fabric {
  width: 117.75rem;
  margin-left: -13.75rem;
  z-index: 2;
  position: relative;
	@include mobile {
		display: none;
	}
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;

	@include mobile {
		display: block;
	}
}
.form-img {
  width: 100%;
}
.form-block {
  position: relative;
  width: 50%;
  height: 56.3125rem;
  margin-left: auto;
  margin-top: -9.375rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1.5rem;

	@include mobile {
		width: 100%;
		margin-top: 0;
		height: 49rem;
		padding-bottom: 1.25rem;
		margin-top: -1.5rem;
	}
}
.title1,
.title2,
.title3 {
  text-align: center;
  width: 50%;
  position: absolute;
  top: 56.25rem;
	@include mobile {
		top: 23rem;
		text-align: center;
		width: 100%;
	}
}
.title2 {
  transform: translateY(100%);
  z-index: 2;
}
.title3 {
  transform: translateY(200%);
  z-index: 2;
}
.descr {
  width: 50%;
  text-align: center;
  position: absolute;
  bottom: 6.5rem;
  left: 0;

	@include mobile {
		width: 100%;
		bottom: auto;
		top: 37rem;
	}
}
.text {
  width: 18.6875rem;
  margin-left: auto;
  margin-right: auto;
	@include mobile {
		width: 20.4375rem;
	}
}
form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-text {
  width: 9.625rem;
  margin-bottom: 2.4375rem;
	@include mobile {
		margin-bottom: 1.25rem;
	}
}
.form-text,
.form-text2 {
  color: var(--c-white);
  text-align: center;
}
.form-text2 {
  margin-top: 3.5rem;
  width: 27.0625rem;

	@include mobile {
		margin-top: 1.25rem;
		width: 21.4375rem;
	}
}
.fields-block {
  background: var(--c-white);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  width: 37.375rem;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;

	@include mobile {
		width: 22.4375rem;
		padding: 1rem;
	}
}

input,
textarea {
  font-size: 0.75rem;
  line-height: 110%;
  letter-spacing: -0.015rem;
  text-transform: uppercase;
  font-family: var(--font-hm);
  color: var(--c-black);
  padding-bottom: 0.625rem;
  border-bottom: 0.0625rem solid rgba(#000, 0.1);
}
input {
  flex: 0 0 16.1875rem;
  width: 16.1875rem;
	@include mobile {
		width: 100%;
		flex: 0 0 100%;
		margin-bottom: 1rem;
	}
}
textarea {
  width: 100%;
  margin-top: 2rem;
  resize: none;
  min-height: 5rem;
  max-height: 5rem;
	@include mobile {
		margin-top: 0;
	}
}
input::placeholder,
textarea::placeholder {
  font-family: var(--font-hm);
  color: var(--c-black);
}
.fields-block2 {
  background: var(--c-white);
  padding: 2rem;
  display: flex;
  align-items: center;
  width: 37.375rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.1875rem;

	@include mobile {
		width: 22.4375rem;
		flex-wrap: wrap;
		padding: 1rem;
	}
}
.btn-wrap {
margin-left: auto;
@include mobile {
	flex: 0 0 100%;
	display: flex;
	justify-content: center;
	margin-top: 1rem;
}
}
.form-btn {
  text-decoration: underline;
  text-underline-offset: 0.4375rem;
}
@include hover {
  .form-btn:hover {
    text-decoration: none;
  }
}
.btn-small {
  width: 2.8125rem;
  height: 1.6875rem;
  border-radius: 50%;
  border: 0.0625rem solid rgba(#000, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.125rem;
  margin-left: 0.25rem;
  transition: all 0.3s ease;

	@include mobile {
		width: 3.4375rem;
		height: 2rem;
	}
}
.form-question {
  margin-right: 0.75rem;
	@include mobile {
		margin-right: auto;
	}
}
@include hover {
  .btn-small:hover {
    background: var(--c-black);
    color: var(--c-white);
  }
}
.btn-small.active {
  background: var(--c-black);
  color: var(--c-white);
}
.flowers {
	position: absolute;
	top: 5.625rem;
	left: 0;
	width: 55.75rem;
	z-index: 2;
	pointer-events: none;

	@include mobile {
		display: none;
	}
}
.mob-bg {
	display: none;
	@include mobile {
		display: block;
		width: 100%;
	}
}
</style>
