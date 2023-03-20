import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { useAppContext } from "../appContext";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);
  const { theme } = useAppContext();

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
          <Container className="d-flex align-content-center justify-content-center">
            {resume && (
              <a href={resume} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant={theme === "light" ? "outline-dark" : "outline-light"}
                  className="mt-5"
                >
                  Resum&eacute;
                </Button>
              </a>
            )}
          </Container>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
