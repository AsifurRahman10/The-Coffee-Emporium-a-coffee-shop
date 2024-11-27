export const Title = ({ title, description }) => {
  return (
    <div className="text-center w-10/12 md:w-8/12 mx-auto">
      <h2 className="rancho text-4xl text-[#374151]">{title}</h2>
      <p className="text-[#5c5b5a] raleway mt-6">{description}</p>
    </div>
  );
};
