export default defineEventHandler(async (event) => {
  try {
    const {
			name,
			drink,
			message,
			withKids,
		} = await readBody(event)

		const token = '7949062297:AAECc7P5LOYzEImt0sLFktZw84mHrZhDQ7g';
		const chat_id = '-4979998425';
		const url = `https://api.telegram.org/bot${token}/sendMessage`;

    let tg_message = ""

    tg_message += `<i>Нова RSVP відправка</i> 🥂:\n\n`

		tg_message += `<b>Ім'я:</b> ${name}\n`
		tg_message += `<b>Улюблений напій:</b> ${drink}\n`
		tg_message += `<b>Чи з дітьми:</b> ${withKids}\n`
		tg_message += `<b>Алергії/побажання:</b> ${message}\n`

    await $fetch(url, {
      method: "post",
      body: {
        chat_id,
        text: tg_message,
        parse_mode: "HTML",
      },
    })

    return {
      status: 200,
      message: "ok",
    }
  } catch (error) {
    return {
      status: 400,
      message: error,
    }
  }
})
