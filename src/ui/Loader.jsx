function Loader() {
  return (
    <div className=' absolute flex space-x-2 justify-center items-center bg-slate-200/20 backdrop-blur-sm min-h-screen z-10 inset-0'>
    <span className='sr-only'>Loading...</span>
     <div className='h-8 w-8 z-11 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 z-11 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 z-11 bg-black rounded-full animate-bounce'></div>
 </div>
  );
}

export default Loader;