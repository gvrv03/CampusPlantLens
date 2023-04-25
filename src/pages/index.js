export default function Home() {
  var sectionStyle = {
    backgroundImage: "url('/gparvi.jpg')",
  };
  return (
    <main className="h-screen   relative -mt-5">
      <div
        style={sectionStyle}
        className=" h-3/4 bg-no-repeat bg-cover  flex items-center left-0  w-full relative p-5 -z-40"
      >
        <div className="absolute h-full w-full left-0 right-0 top-0  bgLight2 -z-50" />
        <LandingPage />
      </div>
      <div className="flex justify-start  gap-10  bottom-5 h-1/4 bg-blue-950 p-5">
        <img
          src="https://thumbs.dreamstime.com/b/young-plant-growing-sunlight-89517487.jpg"
          alt="plant"
          className="h-full"
        />
        <div className="w-4/6 text-white" >
          <h1 className="font-bold text-5xl my-2">Campus Plant Lens</h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            cumque, error, facere eveniet perferendis doloribus sed officiis
            aspernatur nihil doloremque dolorem nesciunt aliquam necessitatibus
            facilis dolore nisi at? Dolorem eius maiores tempore commodi
            dignissimos voluptates odio amet hic, deserunt neque delectus m!
          </p>
        </div>
      </div>{" "}
    </main>
  );
}

const LandingPage = () => {
  return (
    <section className="mx-10">
      <div className="mt-20">
        <h1 className="font-bold text-6xl text-white">
          Government Polytechnic,
          <br /> Arvi
        </h1>
      </div>
    </section>
  );
};
