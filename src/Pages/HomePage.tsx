import Test from '../Components/Test';
import Hero from '../Sections/Hero'

const HomePage = () => {
  return (
    <div className="w-full min-h-[1000vh] bg-zinc-950">
      <Hero />
        <Test />
    </div>
  );
}

export default HomePage
