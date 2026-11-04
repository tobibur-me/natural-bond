# Natural Bond সরিষার তেল: landing page

A single-product Bengali landing page for [naturalbond.shop](https://naturalbond.shop). Visitors choose a size and quantity, fill in a short form, and the order opens as a ready-made WhatsApp message.

Built with Next.js, TypeScript, Tailwind CSS, GSAP with ScrollTrigger, and Lucide icons.

## Setup

You need Node.js 20.9 or newer and pnpm.

```bash
pnpm install     # install dependencies
pnpm dev         # run locally at http://localhost:3000
pnpm typecheck   # check types
pnpm build       # production build
pnpm start       # serve the production build
```

## Changing content

Almost everything you'll want to change is in two places, and no component needs editing:

| What | Where |
|---|---|
| Phone, WhatsApp, address, Facebook, website | `Config/SiteConfig.ts` |
| Sizes, prices, delivery areas, quantity limits | `Config/SiteConfig.ts` |
| Logo, gallery images, video | `Config/SiteConfig.ts` |
| All Bengali text, including FAQ answers | The matching file in `Data/` |
| Colours, font stack, shadows | `Styles/Tokens.css` |

### Changing prices and delivery

Each size and delivery area in `Config/SiteConfig.ts` holds its own amount:

```ts
{ id: "1l", label: "১ লিটার", liters: 1, price: 280, image: one },
{ id: "inside", label: "ঢাকার ভিতরে", charge: 100 },
```

These amounts update the whole page: the size rows, per-litre rates, order summary, FAQ answers, WhatsApp message and search data.

If a size's `price` is `null`, the page shows "দাম জানতে যোগাযোগ করুন". The final total appears only once the visitor has chosen a delivery area.

## Changing images

| Image | Where to put it | Then |
|---|---|---|
| Logo | `public/images/` | In `Config/SiteConfig.ts`, update `logo.src`, `width` and `height` |
| Font | `public/font/SolaimanLipi.woff2` | Already in place, as a compressed copy of `SolaimanLipi.ttf`. To change the file, edit `Lib/BrandFont.ts` |
| Bottle photo for a size | `public/images/` | In `Config/SiteConfig.ts`, change the matching `one`, `two` or `five` line |
| Gallery | `public/images/` | In `Config/SiteConfig.ts`, add or change items in `gallery`. The first item becomes the large tile |
| Brand story | `public/images/` | In `Data/StoryCopy.ts`, change `src`, `width` and `height`, and remove `crop` for a whole image |
| Cooking cards | `public/images/` | In `Data/CookingCopy.ts`, change `src`, `width` and `height`, and adjust `crop` |
| Video and its cover | `public/videos/`, `public/images/` | In `Config/SiteConfig.ts`, set `video.src` and `video.poster` |

For example, the video setting would be `video: { src: "/videos/natural-bond-commercial.mp4", poster: "/images/VideoCover.jpg" }`.

A `crop` shows part of an image, measured in pixels from its top-left corner. The story and cooking crops also keep the text and logos in the source images out of view.

Until a video is added, the video section is a short brand band, and the "ভিডিও" menu link stays hidden. Both change automatically once `video.src` is set.

`public/images/Derived/` holds copies made from your files: the transparent logo and bottle, and the share image.

To remove the poster from the gallery, delete its line from `gallery` in `Config/SiteConfig.ts`.

## Deployment

Image compression needs a running Node.js server, so use a host that supports Next.js.

**Vercel:** import the repository and deploy. The defaults work as they are.

**Your own Node.js server:**

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

Static-only hosting, including basic cPanel plans, won't serve the images correctly without changes.

## Code conventions

- Every file is 50 lines or fewer. Only the lockfile, this README and `docs.txt` are exempt.
- Files and folders use PascalCase, except names Next.js requires in lower case (`app/`, `page.tsx`, `layout.tsx`, `globals.css`, config files).
- Components are written as `const Name = () => { ... }; export default Name;`.
- Types live in `Types/`, and text and data live in `Data/` or `Config/`, never inside a component.
- Hook files use PascalCase (`UseOrder.ts`), but the function stays `useOrder` because React requires it.
