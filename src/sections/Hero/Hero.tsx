import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import HeroContent from "./herocontent"

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <HeroContent />
      </Container>
    </Section>
  );
}