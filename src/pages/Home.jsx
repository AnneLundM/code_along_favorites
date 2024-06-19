import PageHeader from "../components/pageHeader/PageHeader";
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
    </section>
  );
};

export default Home;
