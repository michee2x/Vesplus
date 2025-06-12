import Hero from '../Sections/Hero'

const HomePage = () => {
  return (
    <div className='w-full min-h-[500vh] bg-zinc-900'>
      <Hero />
    </div>
  )
}

export default HomePage


{/* <div className="h-[350px] relative lg:h-auto w-full">
            <ul
              ref={cardRef}
              className="flex h-[250px] bg-blue-700 min-h-full gap-1 items-center"
            >
              {[
                "http://localhost:5173/1694012779makereignteampagelukeengel.png",
                "/1694012819makereignteampagenataliedecanha.png",
                "/1694073882makereignpagecaseethnicmaskfloating2x.jpg",
                "/1694074773makereigntbcwomanafrohairstylevodacomlogo2x.jpg",
                "/1694170255makereignpagecaseappagencyclientmobile2x.jpg",
                "/1694539877makereignpagecaseclientphotography2x%20(1).png",
              ].map((e, idx) => {
                return (
                  <li
                    key={e}
                    ref={(el) => {
                      cardsRef.current[idx] = el
                    }}
                    className={`min-w-[570px] overflow-hidden relative h-[250px] lg:h-[280px] bg-zinc-400`}
                  >
                    <img
                      className="w-full absolute inset-0 h-full object-cover"
                      src={e}
                      alt={e}
                    />
                    <div className="w-full flex flex-col p-4 justify-end h-full absolute z-50 bg-gradient-to-bl from-transparent via-transparent to-black/60">
                      <p>
                        Lorem ipsum dolor sit, amet
                      </p>
                      <p>
                        tenetur incidunt harum
                      </p>
                    </div>
                    <div className="absolute lg:hidden bottom-0 w-full h-1/2 bg-gradient-to-br from-transparent via-transparent to-black"></div>
                  </li>
                );
              })}
            </ul>
            <div className="fixed bottom-0 right-0 w-1/4 h-full bg-gradient-to-r from-transparent via-transparent to-black"></div>
            <div className="absolute lg:hidden bottom-5 w-fit h-auto uppercase">
              (Scroll For More)
            </div>
          </div> */}