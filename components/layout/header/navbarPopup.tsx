import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const NavbarPopup = ({ className = "", data = undefined }) => (
  <div className={`fixed top-16 -ml-8  ${className}`}>
    <div
      className={`min-w-[24rem] min-h-[10rem] bg-white flex flex-row items-stretch justify-center drop-shadow-2xl shadow-2xl rounded-xl pb-12 px-12 pt-6 mt-5`}
    >
      <div className="flex flex-row justify-between items-start gap-8">
        {data?.map((collection, idx) => (
          <PopupSection key={idx} data={collection} />
        ))}
      </div>
    </div>
  </div>
);

export const NavbarPopupMobile = ({ data = undefined }) => (
  <>
    {data?.map(({ products }, idxa) =>
      products?.map((product, idxb) => (
        <Product
          key={`${idxa} ${idxb}`}
          data={{ ...product, description: undefined }}
        />
      ))
    )}
  </>
);

const PopupSection = ({ data = undefined }) => (
  <div className="flex flex-col gap-4">
    <h1 className="uppercase text-gray-500 text-sm">{data.label}</h1>
    {data.products?.map((product, idx) => (
      <Product key={idx} data={product} />
    ))}
  </div>
);

const Product = ({ data = undefined }) => (
  <Link href={data?.href || ""} passHref>
    <a className="flex flex-row gap-6">
      <div className="flex w-16 justify-center">
        <div
          className={data?.smallIcon ? "w-12" : "w-16"}
          style={{ aspectRatio: "1" }}
        >
          {data?.icon && (
            <img
              className="max-w-full max-h-full object-contain"
              src={data?.icon}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-64 leading-snug text-sm">
        <h2 className="font-bold text-base">{data?.label}</h2>
        {data?.description && <TinaMarkdown content={data.description} />}
      </div>
    </a>
  </Link>
);
