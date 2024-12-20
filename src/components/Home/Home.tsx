import profilePic from '../../assets/profile.png';
import helloGif from '../../assets/hello.gif';
import Skills from './Skills';
import DownloadButton from '../DownloadButton/DownloadButton';

const Home = () => {
  return (
    <section className='pt-32 lg:py-44'>
      <div className='flex flex-col items-center space-y-8 lg:flex-row-reverse lg:justify-center lg:space-y-0 lg:space-x-10'>
        <div className=''>
          <img
            src={profilePic}
            alt='Profile pic'
            className='w-64 h-64 lg:w-[1100px] lg:h-[450px] rounded-full border-[3px] border-[#3f9eee]'
          />
        </div>
        <div className='px-2 flex flex-start flex-col'>
          <div className='flex gap-2 items-center'>
            <span className='text-[#3f9eee] font-semibold'>Hey</span>
            <img src={helloGif} className='w-6' />
            <span className='text-[#3f9eee] text-lg font-bold'>,</span>
          </div>
          <div className=''>
            <h1 className='text-[8vw] lg:text-[6vw] text-[#d4e9fb] font-bold font-font-calibre '>
              Sachin Kumar ,
            </h1>
            <p className='text-3xl lg:text-5xl font-font-calibre text-[#aad4f7] font-bold mb-2 lg:mb-6'>
              I'm a ,
            </p>
            <p className='changeWord text-4xl lg:text-6xl font-font-calibre text-[#aad4f7] font-bold '></p>
            <p className='text-[#8892b0] text-lg font-font-nunito mt-6 lg:w-[70%]'>
              I am a passionate full-stack developer who loves turning ideas
              into interactive web applications. I enjoy crafting seamless user
              experiences on the frontend and building robust logic on the
              backend. JavaScript is my favorite tool—it keeps surprising me,
              and I’m always eager to learn more about it! 😊
            </p>
            <DownloadButton />
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Home;
