import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        {/* Flex container for left and right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
  {/* Right side: Custom text */}
          <div className="flex-1 lg:text-left text-indigo-200/75">
            <p className="mb-2 font-semibold text-lg">Get in touch with us</p>
            <p className="text-sm">
              Have any questions or need advice? Reach out and our experts will help you.
            </p>
          </div>
          {/* Left side: Logo + info + social */}
          <div className="flex-1 space-y-4 lg:text-right">
            <Logo />
            <p className="text-sm text-indigo-200/65">
              © Nikan Technology
              <span className="text-gray-700"> · </span>
              <a
                className="text-indigo-200/65 transition hover:text-indigo-500"
                href="#0"
              >
                Terms
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
