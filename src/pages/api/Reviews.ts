interface reviewType {
  id: number;
  message: string;
  author: string;
  stars: number;
}

const reviews: reviewType[] = [
  {
    id: 1,
    message:
      '"I recently used this company for my move and I couldn\'t be happier with the service I received. The movers were professional, efficient, and took great care of my belongings. I would highly recommend this company to anyone in need of a stress-free move."',
    author: "Jane Smith",
    stars: 5,
  },
  {
    id: 2,
    message:
      '"This company made my move a breeze. The team was on-time, organized, and went above and beyond to ensure everything was packed and transported safely. I was very impressed with their attention to detail and customer service."',
    author: "Michael Johnson",
    stars: 5,
  },
  {
    id: 3,
    message:
      '"I had a great experience with this company. The movers were friendly and made sure to handle my furniture and belongings with care. They also had all the necessary equipment to make the move as smooth as possible. I would definitely use them again."',
    author: "Sarah Lee",
    stars: 5,
  },
  {
    id: 4,
    message:
      '"I was very pleased with the service I received from this company. They were prompt, efficient, and professional. The movers took great care to ensure that everything was packed and transported without damage. I would highly recommend them."',
    author: "David Brown",
    stars: 5,
  },
  {
    id: 5,
    message:
      '"I was very impressed with the level of customer service I received from this company. The team was friendly, efficient, and went above and beyond to make my move as stress-free as possible. I would definitely use them again and recommend them to others."',
    author: "Emily Davis",
    stars: 5,
  },
];

export const getReviews = (): reviewType[] => {
  return reviews;
};
