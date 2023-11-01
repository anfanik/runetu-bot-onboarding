import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Настройка VPN-сервера',
          description: 'Для добаления сервера <b>🇵🇱 Warsaw</b> следуйте этой инструкции.',
          button: 'Далее',
        },

        // form
        {
          extends: 'slide',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Установка VPN-клиента',
          description: 'Мы рекомендуем использовать <b><a href="https://getoutline.org/en-GB/get-started/#step-3" style="color: dodgerblue">Outline</a></b>, но вы можете использовать и любой другой с поддержкой <b>Shadowsocks</b>.',
          button: 'Клиент установлен',
        },

        {
          extends: 'form',
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Добавление сервера',
          description: 'Если вы используете рекомендуемый VPN-клиент, Outline, то просто нажимите кнопку <b>Установить</b> или добавьте ключ доступа вручную.',
          form: [
            {
              placeholder: 'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTprVHFYa1ZNOXJkbUhva1AxTkJQa3ds@174.138.49.215:28857/#%F0%9F%87%BA%F0%9F%87%B8%20New%20York%20%7C%20@runetu'
            },
          ],

          button: {
            href: 'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTprVHFYa1ZNOXJkbUhva1AxTkJQa3ds@174.138.49.215:28857/#%F0%9F%87%BA%F0%9F%87%B8%20New%20York%20%7C%20@runetu',
            content: 'Установить'
          },
        }
      ],
    },
  ],
});
