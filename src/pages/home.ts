import { html } from 'htl'

const background = () => {
  return html`<div
    class="rainbow fixed bottom-0 left-0 right-0 top-[-99px] -z-10 flex"
  />`
}

const page = (children: HTMLElement) => {
  children.remove
  return html`<div class="p-0">${children}</div>`
}

const discordInviteLink = 'https://discord.com/invite/SdvajBsGbr'
const instagramLink = 'https://instagram.com/fruityrooters'
const calendarLink =
  'https://calendar.google.com/calendar/u/0/embed?src=5dc1d060720578b11a4b231f2687f7f29b1a3238731037f38a083ce7ef041e33@group.calendar.google.com&ctz=America/Denver&mode=AGENDA'
const whatsAppLink = 'https://chat.whatsapp.com/EYkm1gV9Lz3AfD8JmtpRC5'

export default () => {
  return page(
    html`<div class="p-5 text-xl sm:text-3xl">
      ${background()}
      <h1
        class="font-jaro text-[30vw] leading-[24vw] text-[#43238c]/[0.9] xl:text-[400px] xl:leading-[319px]"
      >
        fruity rooters
      </h1>
      <div class="ml-0 sm:ml-[0.5vw]">
        <div class="mb-5 mt-7 text-gray-800 md:mb-7 md:mt-14">
          <p class="">Gay men's social club in Bozeman, MT.</p>
        </div>
        <div class="flex flex-col gap-3 text-gray-800 sm:block">
          <a
            href="${discordInviteLink}"
            target="_blank"
            class="underline hover:underline"
            >Discord</a
          >
          <p class="hidden px-5 md:inline">|</p>
          <a
            href="${whatsAppLink}"
            target="_blank"
            class="underline hover:underline"
            >WhatsApp</a
          >
          <p class="hidden px-5 md:inline">|</p>
          <a
            href="${instagramLink}"
            target="_blank"
            class="underline hover:underline"
            >Instagram</a
          >
          <p class="hidden px-5 md:inline">|</p>
          <a
            href="${calendarLink}"
            target="_blank"
            class="underline hover:underline"
            >Calendar</a
          >
        </div>
      </div>
    </div>`,
  )
}
