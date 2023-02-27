import { Container } from "@mui/system";
import React from "react";
import "../Styles/TemplateOneProjectComponent.css";

const TemplateOneProjectComponent = (props) => {
  return (
    <Container className="template-one-project-comp">
        <div className="template-one-project-comp__upper">
            <li>
                <h3 className="template-one-project-comp_name">{props.project.projectName}{' '}|{' '}<a href="google.com" className="template-one-project-comp_link"> {props.projectLink}Demo</a></h3>
            </li>
                <h4 className = "template-one-project-comp_month">{props.project.month} - {props.project.Year}</h4>
        </div>
        <div className="template-one-project-comp__lower">
            <p className="template-one-project-comp_description">{props.project.projectDescription}</p>
        </div>
    </Container>
  );
};

export default TemplateOneProjectComponent;
