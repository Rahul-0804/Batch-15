import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template1.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import { data } from "../Data/data";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";
import TemplateOneProjectComponent from "../Components/TemplateOneProjectComponent";

const Template1 = (props) => {
   console.log(
    props.personalinfo,
    props.workexperience,
    props.projects,
    props.educationinfo,
    props.skills
   );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const proj = props.projects ? props.projects : data.projects;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  console.log(props.index);
  return (
    <Paper
      style={{
        padding: "0 0 20px 0",
      }}
      sx={{
        width: {
          xs: "400px",
          sm: "450px",
          md: "500px",
          lg: "550px",
          xl: "600px",
        },
        height: {
          xs: "500px", 
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={2}>
      <TemplateHeader
        primaryColor={"tomato"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"tomato"} title={"Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"tomato"} title={"Projects"} />
        <ul style={{ paddingBottom: 10 }}>
          {proj.map((project, index) => {
            return (
              <TemplateOneProjectComponent
                key={index}
                project={project}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"tomato"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"tomato"} title={"Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template1;
