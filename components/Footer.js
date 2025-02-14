import { Youtube, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <span className="text-xl font-bold tracking-wide text-orange-600 uppercase">
              WolfDen Lounge
            </span>

            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">
                An oasis of elegance, relaxation, and the finest drinks in the
                city.
              </p>
              <p className="mt-4 text-sm text-white">
                Where elegance meets relaxation, and every sip is an experience.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-orange-600">
              Contacts
            </p>
            <div className="flex text-white">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href="tel:0979398094"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-white hover:text-orange-600"
              >
                0979398094
              </a>
            </div>
            <div className="flex text-white">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:wolfdenaddis@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-white hover:text-orange-600"
              >
                wolfdenaddis@gmail.com
              </a>
            </div>
            <div className="flex text-white">
              <p className="mr-1 text-white">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-white hover:text-orange-600"
              >
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-orange-600">
              Social
            </span>
            <div className="flex items-center mt-4 space-x-10 ">
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-white"
              >
                <Youtube size={30} color="white" />
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-white"
              >
                <Instagram size={30} color="white" />
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-orange-600"
              >
                <Linkedin size={30} color="white" />
              </a>
            </div>
            <p className="mt-4 text-sm text-white">
              Follow us on social media for updates and events.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © 2025 WolfDen Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
