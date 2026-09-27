export default function SkipLink() {
  return (
    <a
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg font-label-md text-label-md"
      href="#main-content"
    >
      Skip to main content
    </a>
  );
}
