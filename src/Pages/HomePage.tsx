import Test from '../Components/Test';
import Hero from '../Sections/Hero'

const HomePage = () => {
  return (
    <div className="w-full min-h-[1000vh] bg-zinc-950">
      <Hero />
        <Test />
        <div className='w-full h-[200vh] bg-blue-600'>

        </div>
    </div>
  );
}

export default HomePage
