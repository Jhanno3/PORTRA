export default function Home() {
  return (
    <main className="relative flex min-h-[85vh] flex-1 flex-col justify-between overflow-hidden bg-portra-black px-6 py-10 text-portra-white sm:px-10 sm:py-14">
      {/* Placeholder background — swap for the real hero photograph
          (blurred b/w, per brief) via next/image with object-cover. */}
      <div aria-hidden className="hero-bg-placeholder absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-portra-black/10 via-portra-black/40 to-portra-black/85"
      />

      <div className="relative flex items-start justify-between gap-8">
        <div>
          <h1 className="text-display font-bold leading-none lowercase">
            portra<sup className="text-[0.35em] font-normal">®</sup>
          </h1>
          <p className="-mt-1 text-h2 font-semibold lowercase text-portra-neutral sm:-mt-2">
            Studio
          </p>
        </div>

        <p className="hidden max-w-[14rem] text-right text-sm leading-relaxed text-portra-neutral sm:block">
          Strategy. Design. Content.
          <br />
          Built to be <em className="italic">remembered</em>.
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        <span className="h-px w-10 bg-portra-taupe" />
        <p className="max-w-md text-sm leading-relaxed text-portra-neutral">
          <span className="block font-medium text-portra-white">
            Creative studio for brands, culture &amp; experiences.
          </span>
          From brief to delivery, without the chaos.
        </p>
      </div>
    </main>
  );
}
