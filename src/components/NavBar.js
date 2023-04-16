import Image from "next/image";
import Link from "next/link";
import luraHeader from "../../public/lura_header.svg";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/features" },
  { name: "Pricing", to: "/pricing" },
  { name: "Help", to: "/help" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-[3.5em]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">Your Company</span>
          <Image className="h-8 w-auto" src={luraHeader} alt="lura logo" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <RiMenuFill className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.to}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {session && session ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              className="font-semibold text-sm text-purpleLura"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end font-semibold gap-3 text-sm">
            <Link href={'/login'}>Sign In</Link>
            <Link href={'/register'} className="border border-purpleLura text-purpleLura px-6 rounded-3xl leading-6">
              Sign Up{" "}
            </Link>{" "}
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={luraHeader} alt="lura logo" />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RiCloseLine className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {session && session ? (
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => signOut()}
                  >
                    Log out
                  </button>
                ) : (
                  <div className="flex lg:flex-1 justify-center font-semibold gap-3 text-md">
                    <Link href={'/login'}>Sign In</Link>
                    <Link  href={'/register'}className="border border-purpleLura text-purpleLura px-6 rounded-3xl leading-6">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
