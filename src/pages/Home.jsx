import useData from "../hooks/useData";

const Home = () => {
  const { hola } = useData();
  console.log(hola);
  return <div>Home</div>;
};

export default Home;
