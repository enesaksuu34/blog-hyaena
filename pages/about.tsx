import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About - Hyaena Blog"
        description="Welcome to the Hyaena Digital Blog - your hub for navigating the digital realm. Dive into a world where innovation meets expertise as we explore the latest trends, insights, and solutions in the ever-evolving landscape of technology."
      >
        <Prose>
        <p>
          At Hyaena Digital, we stand at the forefront of digital transformation, providing unparalleled services tailored to your needs. Led by a team of visionaries, tech enthusiasts, and cybersecurity experts, we are committed to empowering individuals and companies through cutting-edge solutions and top-notch security measures.
        </p>
        <p>
          Embark on a journey with us as we share our experiences, knowledge, and industry insights gained from years of serving clients worldwide. From cybersecurity tips to server management best practices, we are here to equip you with the tools you need to thrive in the digital age.
        </p>
        <p>
          Our mission is simple yet powerful: to democratize digitalization and make it accessible to all. Through our blog, we aim to demystify complex technologies, offer practical advice, and foster a community of digital enthusiasts dedicated to continuous learning and growth.
        </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
