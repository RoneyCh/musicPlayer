import { v4 as uuidv4 } from "uuid";


const benSound = () => {
  return [
    {
      name: "Creative Minds",
      cover:
        "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      artist: "Benjamin Tissot (also known as Bensound)",
      audio: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
      color: ["#55CEAC", "#ED2375"],
      id: uuidv4(),
      active: true,
      alt: "",
    },
    {
      name: "Ukulele",
      cover:
        "https://images.pexels.com/photos/2287129/pexels-photo-2287129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      artist: "Benjamin Tissot (also known as Bensound)",
      audio: "https://bensound.com/bensound-music/bensound-ukulele.mp3",
      color: ["#F6C572", "#439EB1"],
      id: uuidv4(),
      active: false,
      alt: "",
    },
    {
      name: "Jazzy Frenchy",
      cover:
        "https://images.pexels.com/photos/8521994/pexels-photo-8521994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      artist: "Benjamin Tissot (also known as Bensound)",
      audio: "https://bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
      color: ["#3E3A3A", "#9C9A98"],
      id: uuidv4(),
      active: false,
      alt: "",
    },
    {
      name: "Creepy",
      cover:
        "https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/10670326/pexels-photo-10670326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      artist: "Benjamin Tissot (also known as Bensound)",
      audio: "https://bensound.com/bensound-music/bensound-creepy.mp3",
      color: ["#F3AC24", "#DF4501"],
      id: uuidv4(),
      active: false,
      alt: "",
    },
    {
      name: "The Jazz Piano",
      cover:
        "https://images.pexels.com/photos/8520097/pexels-photo-8520097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      artist: "Benjamin Tissot (also known as Bensound)",
      audio: "https://bensound.com/bensound-music/bensound-thejazzpiano.mp3",
      color: ["#23140B", "#B5B0B5"],
      id: uuidv4(),
      active: false,
      alt: "",
    },
    {
      name: "Tenderness",
      cover:
        "https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      artist: "Benjamin Tissot (also known as Bensound)",
      audio: "https://bensound.com/bensound-music/bensound-tenderness.mp3",
      color: ["#47161C", "#123D13"],
      id: uuidv4(),
      active: false,
      alt: "",
    },
  ];
}

export default benSound;