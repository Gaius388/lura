import worldMap from "../../public/worldMap.svg";
import Image from "next/image";
const WorldMapConnect = () => {
  return (
    <section className="my-4 text-center">
      <h2 className="text-2xl font-medium py-4">
        Connect to more than 700 servers in 16 different locations.
      </h2>
      <p className="text-xs">
        Connect to your preferred servers and locations easily by adding them to
        your favourites list.
      </p>
      <div className="px-2 flex justify-center my-12">
        <Image src={worldMap} alt="world map" />
      </div>
    </section>
  );
};

export default WorldMapConnect;
