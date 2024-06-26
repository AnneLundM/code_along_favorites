import Favorites from "../components/favorites/Favorites";
import MyFavorites from "../components/myFavorites/MyFavorites";
import Newsletter from "../components/newsletter/Newsletter";
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
      <SectionHeader title='Mine favoritter' />
      <MyFavorites />
      <SectionHeader title='Nyhedsbrev' />
      <Newsletter />
    </section>
  );
};

export default Home;
