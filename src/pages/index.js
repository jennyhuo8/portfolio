import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '@/components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
    </Layout>
  );
};

export default Home;
