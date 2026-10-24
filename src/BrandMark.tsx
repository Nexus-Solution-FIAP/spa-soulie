export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="29" stroke="#1D7AD4" strokeWidth="4.5" />
      <path
        d="M32 46V22.5"
        stroke="#3FAF3A"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M32 28c-4.4-6.2-10.5-7.6-13.2-6.4-1.6.7-2 2.6-.7 4.2 3.2 3.8 9.2 5.2 13.9 4.2"
        fill="#62C94A"
      />
      <path
        d="M32 26.5c4.2-5.8 10.2-7 12.8-5.8 1.6.7 2 2.5.8 4.1-3 3.6-8.8 5-13.6 4"
        fill="#7ED957"
      />
      <path
        d="M18 44.5c0-5.4 3.2-8.8 7.2-9.4 1.3 3.2 4.2 5.6 6.8 6.6-2.6 1.4-8.4 3.6-14 2.8Z"
        fill="#1D7AD4"
      />
      <circle cx="21.4" cy="31.4" r="3.15" fill="#1D7AD4" />
      <path
        d="M46 44.5c0-5.4-3.2-8.8-7.2-9.4-1.3 3.2-4.2 5.6-6.8 6.6 2.6 1.4 8.4 3.6 14 2.8Z"
        fill="#1D7AD4"
      />
      <circle cx="42.6" cy="31.4" r="3.15" fill="#1D7AD4" />
    </svg>
  )
}
