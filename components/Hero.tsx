import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-32 lg:bold-78">Know Your Weaknesses Before </h1>
        <h1><span className='re-col bold-52 lg:bold-88'>The Hackers Do</span></h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        We help businesses stay ahead of the game by identifying and addressing vulnerabilities
before they can be exploited. Trust us to help you stay secure.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-red-70">
            1k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Book A Free 30 Min Consultation" 
            variant="btn_red" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex flex-col gap-8 rounded-3xl px-7 py-8">
          {/* Right side image */}
          <Image 
            src="/phones.png"
            alt="Right side image"
            width={600}
            height={300}
            className="relative z-20 flex w-[1468px] flex-col gap-8 right-[-5px] top-[-30px] w-10 lg:w-[5000px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
