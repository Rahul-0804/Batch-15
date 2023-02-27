import templateOneImg from "../Images/resume-template-1.jpg";
import templateTwoImg from "../Images/resume-template-two.jpg";
import templateThreeImg from "../Images/template-3.png";
import templateFourImg from "../Images/template-4.png";
import templateFiveImg from "../Images/template-5.jpg";
import templateSixImg from "../Images/template-6.png";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";


export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template Three",
    template_img: templateThreeImg,
    template: <Template1 />,
  },
  {
    id: 4,
    template_name: "Template Four",
    template_img: templateFourImg,
    template: <Template1 />,
  },
  {
    id: 5,
    template_name: "Template Five",
    template_img: templateFiveImg,
    template: <Template1 />,
  },
  {
    id: 6,
    template_name: "Template Six",
    template_img: templateSixImg,
    template: <Template1 />,
  }
];
