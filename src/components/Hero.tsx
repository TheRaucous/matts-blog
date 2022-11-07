import GridEffect from './gridEffect/GridEffect';

export default function Hero() {
  return (
    <div className="relative">
      <GridEffect />
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-auto h-fit w-fit bg-c-bg-01/75 shadow-md shadow-black/50 backdrop-blur-sm md:flex">
          <div className="flex h-64 w-64 items-center border md:h-80 md:w-80">
            <h1 className="w-full text-center text-3xl">Stuff goes here</h1>
          </div>
          <div className="flex h-64 w-64 items-center border md:h-80 md:w-80">
            <h1 className="w-full text-center text-3xl">Stuff goes here</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
