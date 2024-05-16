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

export default () => {
  return page(
    html`<div class="p-5 text-xl sm:text-3xl">
      ${background()}
      <h1
        class="font-jaro text-[30vw] leading-[24vw] text-[#43238c] xl:text-[400px] xl:leading-[319px]"
      >
        fruity rooters
      </h1>
      <div class="ml-0 sm:ml-[0.5vw]">
        <div class="mb-5 mt-7 text-gray-800 md:mb-7 md:mt-14">
          <p class="">Gay men's social club in Bozeman, MT.</p>
        </div>
        <div class="flex flex-col gap-3 text-gray-800 sm:block">
          <a
            href="https://discord.com/"
            target="_blank"
            class="underline hover:underline"
            >Discord</a
          >
          <p class="hidden px-5 md:inline">|</p>
          <a
            href="https://instagram.com/fruityrooters"
            target="_blank"
            class="underline hover:underline"
            >Instagram</a
          >
          <p class="hidden px-5 md:inline">|</p>
          <a
            href="https://discord.com/"
            target="_blank"
            class="underline hover:underline"
            >Calendar</a
          >
        </div>
      </div>
    </div>`,
  )
}
