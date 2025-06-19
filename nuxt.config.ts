export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  css: ["@/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_utils.scss" as *;',
          api: "modern-compiler",
        },
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      title: "Весілля Микити та Софії | Запрошення на свято",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Запрошення на весілля Микити та Софії | Дата: 15 вересня 2025 року | Місце: Ресторан 'Тераса', Готель 'Воздвиженський', Київ. Приєднуйтесь до нашого свята!",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "og:image:width",
          content: "600",
        },
        {
          property: "og:image:height",
          content: "314",
        },
        {
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          property: "og:image",
          content: "https://source.unsplash.com/1200x630/?wedding,flowers",
        },
        {
          property: "og:description",
          content:
            "Запрошуємо вас на наше весілля 15 вересня 2025 року у Києві. Чекаємо вас на нашому святі!",
        },
        {
          property: "og:title",
          content: "Весілля Микити та Софії | Запрошення на свято",
        },
        {
          property: "og:site_name",
          content: "",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://cdn-icons-png.flaticon.com/512/3176/3176363.png",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: { port: 6969 },
});
