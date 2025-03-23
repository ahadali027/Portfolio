import Projects from '../components/sections/Projects';
import SectionHeading from '../components/ui/SectionHeading';
import Container from '../components/ui/Container';

const ProjectsPage = () => {
  return (
    <div className="pt-24 pb-20">
      <Container>
        <SectionHeading
          title="My Projects"
          subtitle="Explore my portfolio of web applications built with the MERN stack"
          centered
        />
      </Container>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
