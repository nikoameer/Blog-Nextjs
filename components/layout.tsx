import Link from "next/link";

import { PreviewAlert } from "components/preview-alert";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="px-6 mx-auto text-white">
        <header className="max-w-full">
          <div className="flex items-center justify-between pb-6 mx-auto">
            <div className="p-4 text-black bg-white">
              <Link
                href="/"
                className="text-2xl font-semibold no-underline hover:text-blogGreen"
              >
                Nikolas Kapali
              </Link>
            </div>
            <Link
              href="https://next-drupal.org/docs"
              target="_blank"
              rel="external"
              className="hover:text-blue-600"
            >
              Read the docs
            </Link>
          </div>
        </header>
        <main className="max-w-screen-xl py-10 mx-auto">{children}</main>
      </div>
    </>
  );
}
