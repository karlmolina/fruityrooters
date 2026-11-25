import { html } from 'htl'

const background = () => {
  return html`<div
    class="rainbow fixed bottom-0 left-0 right-0 top-[-99px] -z-10 flex"
  />`
}

const page = (children: HTMLElement) => {
  return html`<div class="p-0">${children}</div>`
}

const instagramLink = 'https://instagram.com/fruityrooters'
const calendarLink =
  'https://calendar.google.com/calendar/u/0/embed?src=5dc1d060720578b11a4b231f2687f7f29b1a3238731037f38a083ce7ef041e33@group.calendar.google.com&ctz=America/Denver&mode=AGENDA'

// Contact form submissions are sent with Formspree (https://formspree.io).
// Create a free form there, then paste its endpoint here, e.g.
// 'https://formspree.io/f/abcdwxyz'.
const contactFormEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'

// Every image in src/assets/photos is bundled and shown in the photo grid.
const photoModules = import.meta.glob<string>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)
const photos = Object.keys(photoModules)
  .sort()
  .map((path) => photoModules[path])

const photoGrid = () => {
  if (photos.length === 0) return null
  return html`<section class="mt-14 md:mt-20">
    <h2 class="mb-5 font-jaro text-5xl text-[#43238c]/[0.9] sm:text-7xl">
      photos
    </h2>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
      ${photos.map(
        (src) =>
          html`<a href="${instagramLink}" target="_blank" class="block">
            <img
              src="${src}"
              alt="Fruity Rooters on Instagram"
              loading="lazy"
              class="aspect-square w-full rounded object-cover shadow-md"
            />
          </a>`,
      )}
    </div>
    <p class="mt-4 text-gray-800">
      More on
      <a href="${instagramLink}" target="_blank" class="underline"
        >Instagram</a
      >.
    </p>
  </section>`
}

const inputClass =
  'w-full rounded border border-gray-800/30 bg-white/90 px-3 py-2 text-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#43238c]'

const contactForm = () => {
  const status = html`<p class="min-h-[1.5em] text-lg text-gray-900"></p>`
  const form = html`<form
    action="${contactFormEndpoint}"
    method="POST"
    class="flex max-w-xl flex-col gap-3"
  >
    <label class="flex flex-col gap-1 text-lg text-gray-800">
      Name
      <input name="name" type="text" required class="${inputClass}" />
    </label>
    <label class="flex flex-col gap-1 text-lg text-gray-800">
      Email
      <input name="email" type="email" required class="${inputClass}" />
    </label>
    <label class="flex flex-col gap-1 text-lg text-gray-800">
      Message
      <textarea
        name="message"
        rows="5"
        required
        class="${inputClass}"
      ></textarea>
    </label>
    <input type="text" name="_gotcha" class="hidden" tabindex="-1" />
    <button
      type="submit"
      class="self-start rounded bg-[#43238c]/[0.9] px-6 py-2 text-lg text-white hover:bg-[#43238c] disabled:opacity-60"
    >
      Send
    </button>
    ${status}
  </form>` as HTMLFormElement

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const button = form.querySelector('button') as HTMLButtonElement
    button.disabled = true
    status.textContent = 'Sending…'
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(String(response.status))
      form.reset()
      status.textContent = "Thanks! We'll get back to you soon."
    } catch {
      status.textContent =
        'Sorry, something went wrong. Please try again or message us on Instagram.'
    } finally {
      button.disabled = false
    }
  })

  return html`<section id="contact" class="mt-14 md:mt-20">
    <h2 class="mb-5 font-jaro text-5xl text-[#43238c]/[0.9] sm:text-7xl">
      contact
    </h2>
    ${form}
  </section>`
}

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
          <p class="hidden px-5 md:inline">|</p>
          <a href="#contact" class="underline hover:underline">Contact</a>
        </div>
        ${photoGrid()} ${contactForm()}
      </div>
    </div>`,
  )
}
