import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BrandStory from '@/components/home/BrandStory';
import CategoryHighlights from '@/components/home/CategoryHighlights';
import WhyChittaCherita from '@/components/home/WhyChittaCherita';
import GalleryStrip from '@/components/home/GalleryStrip';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BrandStory />
      <CategoryHighlights />
      <WhyChittaCherita />
      <GalleryStrip />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
