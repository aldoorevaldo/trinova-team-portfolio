function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const isCenter = align === "center"

  return (
    <div
      className={`flex w-full max-w-2xl flex-col ${
        isCenter
          ? "mx-auto items-center text-center"
          : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-trinova-accent sm:text-sm">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-trinova-text sm:text-4xl lg:text-[42px] lg:leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-trinova-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading