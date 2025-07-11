import { Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
      <footer className="bg-black mt-auto">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
            <span className="text-xl font-bold tracking-wide text-green-600 uppercase">
              Wolf Den Lounge
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
              <p className="text-base font-bold tracking-wide text-green-600">
                Contacts
              </p>
              <div className="flex text-white">
                <p className="mr-1 text-white">Phone:</p>
                <a
                    href="tel:0979398094"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-white hover:text-green-600"
                >
                  0979398094
                </a>
              </div>
              <div className="flex text-white">
                <p className="mr-1 text-white">Email:</p>
                <a
                    href="mailto:Wolf Denaddis@gmail.com"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-white hover:text-green-600"
                >
                  Wolf Denaddis@gmail.com
                </a>
              </div>
              <div className="flex text-white">
                <p className="mr-1 text-white">Address:</p>
                <a
                    href="https://maps.app.goo.gl/Ph5JPnx6KVDjyqps8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Our address"
                    title="Our address"
                    className="transition-colors duration-300 text-white hover:text-green-600"
                >
                  From Gazebo to Wollo Sefer road, Addis Ababa
                </a>
              </div>
            </div>
            <div>
            <span className="text-base font-bold tracking-wide text-green-600">
              Social
            </span>
              <div className="flex items-center mt-4 space-x-10">
                <a
                    href="https://youtube.com/@wolf-f7r?si=YSW7A5NGQX-XrbNd"
                    className="text-white transition-colors duration-300 hover:text-green-600"
                >
                  <Youtube size={30} color="white" />
                </a>
                <a
                    href="https://www.instagram.com/Wolf Denaddis?igsh=ZzRmOGp4ZDdmaDRx&utm_source=qr"
                    className="text-white transition-colors duration-300 hover:text-green-600"
                >
                  <Instagram size={30} color="white" />
                </a>
                <a
                    href="https://www.tiktok.com/@Wolf Denaddis?_t=ZM-8xpQE4larlo&_r=1"
                    className="text-white transition-colors duration-300 hover:text-green-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                       className="bi bi-tiktok text-white" viewBox="0 0 16 16">
                    <path
                        d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-sm text-white">
                Follow us on social media for updates and events.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-white">
              © 2025 Wolf Den Lounge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}