import Experience from '../components/sections/Experience';
import SectionHeading from '../components/ui/SectionHeading';
import Container from '../components/ui/Container';

const ExperiencePage = () => {
  return (
    <div className="pt-24 pb-20">
      <Container>
        <SectionHeading
          title="My Experience"
          subtitle="My professional journey and expertise in the tech industry"
          centered
        />
      </Container>
      <Experience />
    </div>
  );
};

export default ExperiencePage;
