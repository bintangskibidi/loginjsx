// import Navbar from "../Components/Navbar";
import Hero from "../Components/Navbar";



const HeroComponent = () => {
    return <Hero />;
}

const LendingPage = () => {
    return (
        <div>
          <div className="flex justify-center w-[100%] mt-20">
        <section className="s-content w-[390px] md:w-[1125px] px-5 md:px-10  py-5 lg:pl-28">
        <HeroComponent />


         </section>
        </div>
        </div>
    );
}

export default LendingPage;