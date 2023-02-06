import { useState, useRef, useEffect } from "preact/hooks";
import type { FunctionComponent, JSX } from "preact";

interface Props {
  pageLinks: {
    name: string;
    link: string;
  }[];
}

const MobileMenu: FunctionComponent<Props> = ({ pageLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backdropRef.current) return;

    if (isOpen) {
      backdropRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  const handleKeyPress = (e: JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          tabIndex={0}
          onKeyDown={handleKeyPress}
          ref={backdropRef}
          className="fixed inset-0 z-40 bg-zinc-900/50 backdrop-blur focus:outline-none"
        >
          <div
            ref={modalRef}
            className="z-50 mx-5 mt-5 rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-zinc-600 shadow-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Navigation</span>
              <svg
                onClick={() => setIsOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <ul className="mt-5 divide-y divide-zinc-200 dark:divide-zinc-600">
              {pageLinks.map(({ name, link }, index) => (
                <li key={index} className="py-2">
                  <a href={link} className="transition-colors active:text-blue-600">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-600 shadow-lg dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 md:hidden"
      >
        <span className="text-sm">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </>
  );
};

export default MobileMenu;
