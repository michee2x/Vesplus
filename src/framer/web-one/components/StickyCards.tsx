import Lenis from '@studio-freight/lenis';
const Card = ({index}:{index:number}) => {
    return (
      <div
        style={{ zIndex: index }}
        className={`w-full px-4 bg-zinc-950 sticky top-16  mx-auto mt-28 justify-between border-t-[.9px] border-gray-300 flex py-10 h-screen`}
      >
        <div className="flex h-full w-2/3">
          <div className="w-1/2 h-full">
            <h1 className="text-[1.5rem]">Defining Personal Identity</h1>
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <h1 className="text-[4rem] tracking-[-0.3rem] leading-none">
              Portrait Photography
            </h1>
            <p className="mt-4 mb-8 text-2xl text-white/[0.6]">
              Studio or location portraits that reflect personality,
              professionalism, or lifestyle.
            </p>
            {[
              "• Natural lighting & studio options",
              "• Retouching and skin tone accuracy",
              "• deal for branding & social profiles",
              "• Multiple background choices",
              " • Expression coaching",
            ].map((e) => {
              return (
                <p className="border-y-[.9px] border-white/[0.1] py-3 text-xl text-white/[0.6]">{e}</p>
              );
            })}
          </div>
        </div>
        <img
          src="src/framer/web-one/images/cardImages/WjGhVX2grmjQAfMIyIUYq9In0.png" //"https://cdn.prod.website-files.com/680e6eb73a92d608019cb962/680f9a1678d78ea3840ca6ff_Frame%203.jpg"
          alt=""
          className="object-cover w-[30%] h-[88%]"
        />
      </div>
    );
}
const StickyCards = () => {
    
  return (
    <div className='w-full relative bg-zinc-950 flex-col min-h-screen flex items-center justify-center'>
        {[1,2,3, 4,5].map(e => {
            return <Card index={e} key={e} />;
        })}
    </div>
  )
}

export default StickyCards