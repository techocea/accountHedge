import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#home"
      >
        Home
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#why-us"
      >
        Why Us
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#features"
      >
        Features
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#pricing"
      >
        Pricing
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/#faq"
      >
        FAQ
      </HashLink>
    </>
  );
};

export default NavLinks;
