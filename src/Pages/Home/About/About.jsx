import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero rounded-2xl my-20">
      <div className="hero-content flex-col space-y-5 lg:space-y-0 lg:flex-row items-center p-10">
        <div className="relative lg:w-1/2 p-5">
          <img
            src={person}
            className="max-w-[460px] object-cover object-center h-[475px] rounded-lg shadow-2xl"
            alt="Hero Section 2nd Image a person"
          />
          <img
            src={parts}
            className="absolute left-1/3 top-1/2 max-w-[325px] border-[10px] border-base-100 object-cover object-center h-[330px] rounded-lg shadow-2xl"
            alt="Hero Section Image vehicle spare parts"
          />
        </div>
        <div className="lg:w-1/2 p-5">
          <p className="text-xl font-bold text-primaryOrange">About Us</p>
          <h2 className="text-5xl font-bold leading-tight">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <div className="text-neutral-400 text-lg space-y-5 my-5">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don`t look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomized words which don`t look even slightly
              believable.
            </p>
          </div>
          <button className="bg-primaryOrange hover:outline outline-primaryOrange outline-2 hover:bg-transparent py-4 px-8 rounded-md duration-300 text-lg text-base-100 hover:text-neutral-800 font-bold mt-8">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
