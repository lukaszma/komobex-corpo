import { categories } from "./categories"

const { ALL, ICO, IE, IWK, WIK } = categories

export const projects = [
  {
    id: 1,
    title: "Arena Gliwice",
    subtitles: [ALL, WIK, IWK],
    imgSrc: '../../../hala-gliwice-1.jpg'
  },
  {
    id: 2,
    title: "Wroclavia",
    subtitles: [ALL, WIK, IWK],
    imgSrc: '../../../wroclavia_2.jpg'
  },
  {
    id: 3,
    title: "Alan Home",
    subtitles: [ALL, ICO, IWK],
    imgSrc: '../../../img-work-04.jpg'
  },
  {
    id: 4,
    title: "Jannet Home",
    subtitles: [ALL, ICO],
    imgSrc: '../../../img-work-05.jpg'
  },
  {
    id: 5,
    title: "Papa Ron's Restaurant",
    subtitles: [ALL, ICO],
    imgSrc: '../../../img-work-05.jpg'
  },
  {
    id: 6,
    title: "Edu Hostel",
    subtitles: [ALL, IE],
    imgSrc: '../../../img-work-05.jpg'
  },
]
