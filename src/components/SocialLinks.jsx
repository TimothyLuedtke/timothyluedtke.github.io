import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// // Data
// import { Blog } from "../data";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  // const { blog, html_url } = useSelector(selectData);
  const { html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        target="blank"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/timothyluedtke/"
        target="blank"
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
      >
        <FaLinkedin />
      </a>
      {/* {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )} */}
    </StyledSocialLinks>
  );
}
