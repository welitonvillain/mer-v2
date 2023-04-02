import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

import {
  ServiceContainer,
  Service,
  ServiceContent,
} from "@/styles/components/ServiceCard";

type ServiceCardType = {
  image: StaticImageData;
  title: string;
  content: string;
};

export default function ServiceCard({
  image,
  title,
  content,
}: ServiceCardType) {
  const [opened, setOpened] = useState(false);

  return (
    <ServiceContainer>
      {/* <span className="containerTitle">{title}</span> */}
      <div className="container">
        <Service
          className="domestic-removals"
          onClick={() => setOpened(!opened)}
        >
          <Image src={image} width={500} alt="domestic removals" />

          <div className="cardContent">
            <span>{title}</span>
            <div className="view">
              {opened ? (
                <MdArrowDropDown className="arrow" />
              ) : (
                <MdArrowRight className="arrow" />
              )}

              <span>see more</span>
            </div>
          </div>
        </Service>
        <ServiceContent opened={opened}>
          <span className="containerTitle">{title}</span>
          <span
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <a
            href="https://rm-myexclusiveremovals.co.uk/survey.php"
            target={"_blank"}
            className="quote"
          >
            Get a quote
            <HiArrowLongRight />
          </a>
        </ServiceContent>
      </div>
    </ServiceContainer>
  );
}
