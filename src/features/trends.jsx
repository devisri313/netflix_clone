import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const trending = [
  { id: 1, title: "Dude", img: "/images/card1.jpg" },
  { id: 2, title: "Delhi Crime", img: "/images/card2.jpg" },
  { id: 3, title: "DLI Kadai", img: "/images/card3.jpg" },
  { id: 4, title: "Jolly LLB 3", img: "/images/card4.jpg" },
  { id: 5, title: "Movie 5", img: "/images/card5.jpg" },
  { id: 6, title: "Movie 6", img: "/images/card6.jpg" },
  { id: 7, title: "Movie 7", img: "/images/card7.jpg" },
  { id: 8, title: "Movie 8", img: "/images/card8.jpg" },
  { id: 9, title: "Movie 9", img: "/images/card9.jpg" },
  { id: 10, title: "Movie 10", img: "/images/card10.jpg" },
];

function Trends() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4 mt-5">Trending Now</h2>

      <Carousel
        plugins={[Autoplay({ delay: 2500 })]}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {trending.map((item, index) => (
            <CarouselItem
              key={item.id}
              className="pl-4 basis-[200px] md:basis-[220px] lg:basis-60"
            >
              <div className="relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl w-full max-h-[350px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="md:flex text-black hover:text-black" />
        <CarouselNext className="md:flex text-black hover:text-black" />
      </Carousel>
    </div>
  );
}

export default Trends;
