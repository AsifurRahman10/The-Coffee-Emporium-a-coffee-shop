export const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[700px] bg-banner-bg">
        <div className="hero-content text-neutral-content">
          <div className="flex">
            <div className="flex-1"></div>
            <div className="flex-1">
              <h1 className="mb-5 text-5xl font-bold rancho whitespace-nowrap">
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="raleway text-base mb-5">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button className="btn bg-[#E3B577] border-2 border-transparent rounded-none rancho text-[#242222] text-2xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
