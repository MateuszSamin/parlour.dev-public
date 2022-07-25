import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { MdSectionHeading } from "../util/mdSectionHeading";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";

export const Software = ({ data, parentField = "" }) => {
  return (
    <Section color={data.color} className="py-24">
      <MdSectionHeading data={data.heading} />
      <Container className="flex flex-col items-center" size="custom">
        {data.software?.map((block, i) => (
          <PieceOfSoftware key={i} data={block} />
        ))}
      </Container>
    </Section>
  );
};

const PieceOfSoftware = ({ data }) => {
  const gradient = { from: data.from || "black", to: data.to || "white" };

  return (
    <div className="flex flex-col max-w-lg md:max-w-none md:flex-row gap-4 lg:gap-8 items-stretch justify-between mb-4 lg:mb-8 last:mb-0">
      <ThirdContainer>
        <Item type="bg" className="h-1/3 rounded-[34px]" {...gradient}>
          <Item
            type="text"
            className="h-full bg-white flex items-center justify-center"
          >
            <StrokedText {...gradient}>{data.name}</StrokedText>
          </Item>
        </Item>
        <Item
          type="text"
          className="h-2/3 bg-parlourDark flex flex-col justify-end text-white"
        >
          <TextGradient className="text-xl lg:text-2xl font-bold" {...gradient}>
            {data.tagline}
          </TextGradient>
        </Item>
      </ThirdContainer>
      <ThirdContainer>
        <Item
          type="text"
          className="h-full min-h-[66%] bg-parlourDark flex flex-col justify-center text-white prose prose-dark"
        >
          <TinaMarkdown content={data.description} />
        </Item>
        <Item
          type="bg"
          className="hover:scale-95 duration-300 transition min-h-1/3 !rounded-[33.5px]"
          {...gradient}
        >
          <Item
            type="text"
            className="h-full bg-white flex items-center justify-center"
          >
            <TextGradient href={data.href} className="text-xl" {...gradient}>
              Browse code
            </TextGradient>
          </Item>
        </Item>
      </ThirdContainer>
      <ThirdContainer>
        <Item className="relative overflow-hidden md:h-3/5 h-64">
          {data.image && (
            <Image src={data.image} alt="" layout="fill" objectFit="cover" />
          )}
        </Item>
        <Item className="hidden md:block relative overflow-hidden md:h-2/5">
          {data.image2 && (
            <Image src={data.image2} alt="" layout="fill" objectFit="cover" />
          )}
        </Item>
      </ThirdContainer>
    </div>
  );
};

export const StrokedText = ({ from = "", to = "", children }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px");

  return (
    <TextGradient
      className="font-bold text-2xl lg:text-4xl text-white w-full text-center"
      style={{
        WebkitTextStrokeColor: "transparent",
        WebkitTextStrokeWidth: isDesktop ? "5px" : "4px",
      }}
      from={from}
      to={to}
    >
      {children}
    </TextGradient>
  );
};

export const ThirdContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} flex flex-col justify-between items-stretch gap-4 lg:gap-8`}
      style={{ flexBasis: "33%" }}
    >
      {children}
    </div>
  );
};

const Item = ({
  children,
  className = "",
  type = "",
  from = "",
  to = "",
  center = false,
  basis = undefined,
  style = {}
}) => (
  <div
    className={`rounded-[30px] ${className}\
    ${type === "text" && "p-5"}\
    ${type === "bg" && "p-[0.13rem] md:p-[0.2rem]"}\
    shadow-lg\
    ${center ? "flex flex-col items-center justify-center" : ""}`}
    style={{
      background:
        type === "bg" && `linear-gradient(to bottom right, ${from}, ${to})`,
      flexBasis: basis,
      ...style
    }}
  >
    {children}
  </div>
);
export const SoftwareItem = Item;

export const TextGradient = ({
  children,
  className = "",
  style = {},
  from = "",
  to = "",
  href = undefined,
}) => {
  if (href)
    return (
      <Link href={href}>
        <a
          className={`text-transparent !bg-clip-text ${className}`}
          style={{
            background: `linear-gradient(to right, ${from}, ${to})`,
            backgroundClip: "text",
            ...style,
          }}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {children}
        </a>
      </Link>
    );

  return (
    <p
      className={`text-transparent !bg-clip-text ${className}`}
      style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
        backgroundClip: "text",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export const softwareBlockSchema: TinaTemplate = {
  name: "software",
  label: "Software we Built",
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Software",
      name: "software",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "tagline",
          label: "Tagline (short description)",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "image",
          name: "image2",
          label: "Second image",
        },
        {
          type: "string",
          name: "from",
          label: "Gradient: from color",
        },
        {
          type: "string",
          name: "to",
          label: "Gradient: to color",
        },
        {
          type: "string",
          name: "href",
          label: "Link",
        },
      ],
    },
  ],
};
