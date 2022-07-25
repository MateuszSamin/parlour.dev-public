import Link from "next/link";

export const NavbarPopup = ({ className = "" }) => (
  <div className={`fixed top-16 -ml-8  ${className}`}>
    <div
      className={`min-w-[24rem] min-h-[10rem] bg-white flex flex-row items-stretch justify-center drop-shadow-2xl shadow-2xl rounded-xl pb-12 px-12 pt-6 mt-5`}
    >
      <div className="flex flex-row justify-between items-start gap-8">
        <PopupSection title="Product suite">
          <Product
            title="Parlour Care"
            icon="https://res.cloudinary.com/parlour-development/image/upload/v1658739273/logos/parlourcareplus1_ou2u4k.webp"
            smallIcon
            href="/care"
          >
            <p>
              Never disappoint your customers again. Automatically scan your app
              for problems and have our team fix them for you.
            </p>
            <ul className="list-disc">
              <li>Improve SEO</li>
              <li>Scan for vulnerabilities</li>
              <li>Have your bugs fixed for you</li>
            </ul>
          </Product>
        </PopupSection>
        <PopupSection title="Services">
          <Product
            title="Blockchain Development"
            icon="https://res.cloudinary.com/parlour-development/image/upload/v1655748679/dapp_hcwmew.webp"
            href="/projects"
          >
            <p>
              Build your app with support from our team. With over 10 happy
              clients, we have the expertise to bring your ideas to life.
            </p>
          </Product>
          <Product
            title="Auditing"
            icon="https://res.cloudinary.com/parlour-development/image/upload/v1658741043/cloud-lock-4065319-3361351_hugcz7.png"
            href="/auditing"
          >
            <p>
              Opportunity makes the thief. Secure your software with our help,
              without performance penalties.
            </p>
          </Product>
        </PopupSection>
      </div>
    </div>
  </div>
);

export const Product = ({
  title = "Parlour Care",
  icon = "",
  smallIcon = false,
  children = null,
  href = "#",
}) => (
  <Link href={href} passHref>
    <a className="flex flex-row gap-6">
      <div className="flex w-16 justify-center">
        <div
          className={smallIcon ? "w-12" : "w-16"}
          style={{ aspectRatio: "1" }}
        >
          <img className="max-w-full max-h-full object-contain" src={icon} />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-64 leading-snug text-sm">
        <h2 className="font-bold text-base">{title}</h2>
        {children}
      </div>
    </a>
  </Link>
);

export const PopupSection = ({ title = "", children = null }) => (
  <div className="flex flex-col gap-4">
    <h1 className="uppercase text-gray-500 text-sm">{title}</h1>
    {children}
  </div>
);
