import React, { Dispatch, SetStateAction, useState } from "react";
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
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function ServiceCard({
  image,
  title,
  content,
  setShowModal,
}: ServiceCardType) {
  const [opened, setOpened] = useState(false);

  return (
    <ServiceContainer>
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

          <button onClick={() => setShowModal(true)} className="quote">
            Get a quote
            <HiArrowLongRight />
          </button>
        </ServiceContent>
      </div>
    </ServiceContainer>
  );
}
