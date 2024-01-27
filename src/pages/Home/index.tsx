import Container from '@/components/ui/Container';
import HeroSection from './HeroSection';
import NowService from './NowService';

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <NowService />
    </Container>
  );
};

export default Home;
