import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Demetrius-ch" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/demetrius-le-grand-bangake-687489378/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=61580928104534",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
