import Favorites from "../components/favorites/Favorites";
import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import useFetchById from "../hooks/useFetchById";

const Home = () => {
  const { recipe } = useFetchById(5);

  return (
    <section>
      <PageHeader
        title='Smagfulde Favoritter'
        subTitle='Her kan der stå en undertitel!'
        headerImg={recipe?.image}
      />
      <SectionHeader title='Brugernes Favoritter' />
      <Favorites />
    </section>
  );
};

export default Home;
