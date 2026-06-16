export interface Stat {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  tags?: string[];
}

export const stats: Stat[] = [
  {
    id: "years",
    value: "10+",
    label: "Years of medical excellence",
    tags: ["2,000+ Procedures", "50+ Treatments"],
  },
  {
    id: "since",
    value: "Since 2016",
    label: "Established & trusted",
  },
  {
    id: "satisfaction",
    value: "99%",
    label: "2k+ Global trusted customers",
    sublabel: "★★★★★",
  },
];

export interface WheelItem {
  id: string;
  label: string;
  angle: number; // degrees from top, clockwise
  imageUrl: string;
}

export const wheelItems: WheelItem[] = [
  {
    id: "prp",
    label: "PRP Therapy",
    angle: 195,
    imageUrl:
      "https://framerusercontent.com/images/fRkN7RTfKeL08Kpz6CrDLlrDc.jpg?width=100&height=100",
  },
  {
    id: "hairloss",
    label: "Hair Loss Treatment",
    angle: 222,
    imageUrl:
      "https://framerusercontent.com/images/GXrVkAKOuyZ6jsH2mk3ALm0ncw.jpg?width=100&height=100",
  },
  {
    id: "scar",
    label: "Scar Reduction",
    angle: 249,
    imageUrl:
      "https://framerusercontent.com/images/hpCeYxp9YhmeNk4SNFOzNVe8M.jpg?width=100&height=100",
  },
  {
    id: "pigment",
    label: "Pigmentation Care",
    angle: 276,
    imageUrl:
      "https://framerusercontent.com/images/jSFZ7ROTAOOS0hkJqlUtWsKmKe8.jpg?width=100&height=100",
  },
  {
    id: "aging",
    label: "Aging Solutions",
    angle: 303,
    imageUrl:
      "https://framerusercontent.com/images/BpGNqeqsBfGoXmblZ5zbtLzBM.jpg?width=100&height=100",
  },
  {
    id: "rejuv",
    label: "Skin Rejuvenation",
    angle: 330,
    imageUrl:
      "https://framerusercontent.com/images/LLgU7Wo4MxblkbiOwo1xZB1o7ig.jpg?width=100&height=100",
  },
  {
    id: "botox",
    label: "Botox & Fillers",
    angle: 357,
    imageUrl:
      "https://framerusercontent.com/images/UE0hiu8Gc8M7F2YUVcZ3ePMlsc.jpg?width=100&height=100",
  },
  {
    id: "laser",
    label: "Laser Treatments",
    angle: 24,
    imageUrl:
      "https://framerusercontent.com/images/Jvm6ENMcLTrn2S9rqOPXlCQ538M.jpg?width=100&height=100",
  },
];
