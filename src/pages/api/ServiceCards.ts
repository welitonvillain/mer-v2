import { StaticImageData } from "next/image";

import domesticRemovalsImage from "/public/domestic-removals.jpg";
import businessRemovalsImage from "/public/business-removals.jpg";
import manAndVanImage from "/public/man-and-van.jpg";
import storageServiceImage from "/public/storage.jpg";
import packingImage from "/public/packing.jpg";
import europeanImage from "/public/european.jpg";
import clearanceImage from "/public/clearance.jpg";

export type Card = {
  id: number;
  image: StaticImageData;
  title: string;
  content: string;
};

const DOMESTIC_REMOVALS: Card = {
  id: 1,
  image: domesticRemovalsImage,
  title: "Domestic Removals",
  content:
    "They say that moving home is one of life’s most stressful events. And having helped hundreds of people move over the years, we’ve seen that stress first-hand. That’s why we’ve developed a domestic removals process that lifts the burden from the shoulders of our clients — and places it firmly on ours! <br /><br />We take a fresh approach to every domestic removals project. We start by assessing both locations, your possessions and all the specific challenges associated with the job. We then create a bespoke action plan designed to make the big day as smooth and hassle-free as possible. <br /><br />We can help with everything — from packing up your possessions to disposing of unwanted items. All you need to do is savour what should be a joyous moment in your life.",
};

const BUSINESS_REMOVALS: Card = {
  id: 2,
  image: businessRemovalsImage,
  title: "Business Removals",
  content:
    "We know how much moving an office can disrupt the day-to-day operations of a business. That’s why we have developed a system that minimises disruption and allows you to focus on what’s really important — your customers. <br /><br />Time is money, as they say. And the longer it takes to relocate an office or business premises, the more the business stands to lose in terms of revenues and customer satisfaction. We’re conscious of this, which is why speed, reliability and professionalism are our priorities.<br /><br />Whether you simply need us to move office equipment or provide a comprehensive removals service that includes packing and unpacking, we’re here to help.",
};

const MAN_AND_VAN: Card = {
  id: 3,
  image: manAndVanImage,
  title: "Man and Van Services",
  content:
    "Our man & van services can be used for almost anything that requires commercial transport. Perhaps you want a clearout to make way for new furniture. Maybe you need to dispose of garden waste, debris or general clutter. If you need something transporting from A to B, we have the men and the van you’re looking for.",
};

const STORAGE_SERVICE: Card = {
  id: 4,
  image: storageServiceImage,
  title: "Storage Service",
  content:
    "Are you facing a storage crunch in your house or office? Do you have too many items but not enough space to store them all? Are you in-between homes, and need a safe place to store your belongings? If yes, then MyExclusive Removals can provide you with the solution to your storage problems. We offer a range of secure and safe storage solutions for your belongings, making sure that they are stored properly and are easily accessible.",
};

const EUROPEAN_MOVES: Card = {
  id: 5,
  image: europeanImage,
  title: "European Moves",
  content:
    "For anyone, moving home can be an exciting but daunting experience at the best of times, but so much more so, if you are planning to move from the UK to Europe.<br /><br />In considering your move, you will have considered lots of factors, from language barriers to cultural differences. However, one of the most significant concerns is the actual logistics of moving your belongings from one country to another. That's where our European moves services come in. We provide a range of tailored solutions to help make your move to Europe smooth, hassle-free, and stress-free.<br /><br />One of the most significant benefits of using our European moves services is that we provide a range of options to cater to your specific needs. Whether you are moving a few boxes or an entire household, we have a complete set of solutions available to help make your move seamless.",
};

const HOUSE_CLEARANCE: Card = {
  id: 6,
  image: clearanceImage,
  title: "House Clearance",
  content:
    "There are many reasons why you may be considering a house clearance – whether clearing the home of a deceased relative, making a brand new life overseas, or simply downsizing… whatever the reason, you want to find a team that will provide an efficient and stress free process.<br /><br />Fortunately, MyExclusive Removals provides a simple house clearance service.<br /><br />We provide a range of tailored solutions to help you get rid of unwanted items quickly and efficiently. We help you declutter your old house and ensure that everything is disposed of properly.<br /><br />One of the most significant benefits of using our house clearance service is the time and effort we can save you. Instead of spending weeks sorting through your belongings and trying to decide what to keep and what to get rid of, a professional team can come in and take care of everything for you. They will handle all the heavy lifting and ensure that everything is disposed of properly.",
};

const PACKING_SERVICE: Card = {
  id: 7,
  image: packingImage,
  title: "Packing Service",
  content:
    "Moving to a new home or office can be an exciting and invigorating experience. However, the process of packing can be daunting and time-consuming. Many people struggle with finding the right materials, packing fragile items correctly, and organising their belongings for a seamless move, let alone, find the time to do the packing in the first place. That's where our packing services come in - we can help you save time, reduce stress, and ensure that your possessions arrive at your new location safely and securely.<br /><br />Our packing service can help you with everything from packing your entire home or office to just a few items. We can provide you with all the materials you need, including boxes, tape, packing paper, and bubble wrap. We will also help you organize your belongings, label boxes, and even pack fragile or specialty items such as artwork, antiques, and electronics.",
};

export function cards(): Card[] {
  return [
    DOMESTIC_REMOVALS,
    BUSINESS_REMOVALS,
    MAN_AND_VAN,
    STORAGE_SERVICE,
    EUROPEAN_MOVES,
    HOUSE_CLEARANCE,
    PACKING_SERVICE,
  ];
}
