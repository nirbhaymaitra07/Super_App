import aegis from "/images/Quick-Access/aegis.svg";
import ampli from "/images/Quick-Access/ampli.svg";
import clink from "/images/Quick-Access/clink.svg";
import dapp from "/images/Quick-Access/image96.svg";
import iZak from "/images/Quick-Access/iZak.svg";
import Logo from "/images/Quick-Access/Logo.svg";
import Museo from "/images/Quick-Access/museo.svg";
import revee from "/images/Quick-Access/revee.svg";
import Artboard from "/images/Quick-Access-hover/Artboard.svg";
import Circle from "/images/Quick-Access-hover/Circle.svg";
import Frame1 from "/images/Quick-Access-hover/Frame-1.svg";
import Frame2 from "/images/Quick-Access-hover/Frame-2.svg";
import Frame3 from "/images/Quick-Access-hover/Frame-3.svg";
import Frame4 from "/images/Quick-Access-hover/Frame-4.svg";
import Frame5 from "/images/Quick-Access-hover/Frame-5.svg";
import Frame6 from "/images/Quick-Access-hover/Frame-6.svg";

const Icons = [
  { img: revee, title: "View TV Guide", src: Frame6 },
  { img: Logo, title: "05:48 AM", src: Artboard, subtitle: "Sunshine" },
  {
    img: iZak,
    title: "11,434 KWH",
    src: Circle,
    text: "10%",
    subtitle: "Energy Consumed",
  },
  { img: aegis, title: "View Message Board", src: Frame4 },
  { img: Museo, title: "Go to my Wishlist", src: Frame3 },
  { img: dapp, title: "Go to my Wishlist", src: Frame2 },
  { img: ampli, title: "Raise a fund", src: Frame1, subtitle: "help one" },
  { img: clink, title: "Report an issue", src: Frame5 },
];

export default Icons;
