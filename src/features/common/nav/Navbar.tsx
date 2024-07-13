import Carousel from '@/features/common/ui/Carousel';
import TeamsBanner from '@/features/common/ui/TeamsBanner';
import { imageSources } from '@/lib/const';
import Banner from './Banner';
import LeagueLogo from './LeagueLogo';
import Menu from './Menu';

const Navbar = () => (
  <div className="bg-gray-100">
    <TeamsBanner className="hidden md:flex" images={imageSources} />
    <Banner className="md:hidden" />
    <Carousel className="hidden md:flex" />
    <Menu className="hidden md:flex" />
    <LeagueLogo className="hidden md:flex" />
  </div>
);

export default Navbar;
