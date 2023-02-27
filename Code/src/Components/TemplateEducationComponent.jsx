import { Container } from "@mui/system";
import React from "react";
import "../Styles/TemplateEducationComponent.css";

const TemplateEducationCompnent = (props) => {
  return (
    // <h3 className="template-education-details">
    //   {props.education.degree} in {props.education.domain}{" "}
    //   <span className="template-education-university">
    //     {props.education.university}
    //   </span>
    //   <span className="education-start-end">
    //     ({props.education.startYear} - {props.education.endYear})
    //   </span>
    // </h3>
    <Container className="template-one-education-comp">
        <div className="template-one-education-comp__upper">
            <h3 className="template-one-education-comp_name">{props.education.university}</h3>
            <h4 className = "template-one-education-comp_month">{props.education.startYear} - {props.education.endYear}</h4>
        </div>
        <div className="template-one-education-comp__lower">
            <p className="template-one-education-comp_description"><span>{props.education.degree}</span> - {props.education.domain}</p>
            <h5 className="template-one-education-com_cgpa">CGPA: {props.education.cgpa}</h5>
        </div>
    </Container>

  );
};

export default TemplateEducationCompnent;
