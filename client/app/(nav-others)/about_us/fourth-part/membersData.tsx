// membersData.ts
export interface Member {
  id: number;
  name: string;
  role: string;
  image: string; // <-- changed to string
  linkedin: string;
  phone: string;
}

export const membersData: Member[] = [
  {
    id: 1,
    name: "Saeed Alyami",
    role: "President",
    // Path is relative to the `public` folder
    image: "/membersPhotos/mem1.jpeg",
    linkedin: "https://www.linkedin.com/in/saeed-alyami-14946b273/",
    phone: "#",
  },
  {
    id: 2,
    name: "Ali Alyami",
    role: "Vice president",
    image: "/membersPhotos/mem2.jpeg",
    linkedin: "https://www.linkedin.com/in/ali-alyami-057732307/",
    phone: "#",
  },
  {
    id: 3,
    name: "Amro Elsayed",
    role: "leader of Academic",
    image: "/membersPhotos/mem3.jpeg",
    linkedin: "http://linkedin.com/in/amro-elsayed-259152286",
    phone: "#",
  },
  {
    id: 4,
    name: "Mohammed Alotaibi",
    role: "Leader of Development",
    image: "/membersPhotos/memX.jpg",
    linkedin:
      "https://www.linkedin.com/in/mohammed-alotaibi-10a520292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    phone: "#",
  },
  {
    id: 5,
    name: "Saeed K. Yousef",
    role: "v.Leader of Dev",
    image: "/membersPhotos/mem5.jpeg",
    linkedin:
      "https://www.linkedin.com/in/saeed-k-yousef-aa346829a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    phone: "#",
  },
  {
    id: 6,
    name: "Abdulrahman Alzahrani",
    role: "Leader of Activities",
    image: "/membersPhotos/mem6.jpeg",
    linkedin:
      "https://www.linkedin.com/in/abdulrahman-alzahrani-capm-a2b6a12a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    phone: "#",
  },
  {
    id: 7,
    name: "Khalid Almutairi",
    role: "v.Leader of Activities",
    image: "/membersPhotos/mem7.jpeg",
    linkedin:
      "https://www.linkedin.com/in/khalid-almutairi-bb1790251/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    phone: "#",
  },
  {
    id: 8,
    name: "---",
    role: "v.Leader of Academic",
    image: "/membersPhotos/memX.jpg",
    linkedin: "#",
    phone: "#",
  },
  {
    id: 9,
    name: "---",
    role: "Leader of Media",
    image: "/membersPhotos/memX.jpg",
    linkedin: "#",
    phone: "#",
  },
  {
    id: 10,
    name: "---",
    role: "v.Leader of Media",
    image: "/membersPhotos/memX.jpg",
    linkedin: "#",
    phone: "#",
  },
];
