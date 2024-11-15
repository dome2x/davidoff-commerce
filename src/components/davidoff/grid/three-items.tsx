import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@components/ui/carousel";
import { getCollectionProducts } from "@lib/bigcommerce";
import { useQuery } from "@tanstack/react-query";
import GridItemTile from "./tile";


export default function ProductCarousel() {
  
  // const products: ProductData[] = [
  //   {
  //     id: 1,
  //     name: "YEAR OF THE SNAKE FLAGSHIP",
  //     subtitle: "EXCLUSIVE LIMITED EDITION",
  //     size: "52 | 2.1cm",
  //     length: '6" | 15.2cm',
  //     duration: "50-70min",
  //     intensity: 3,
  //     format: "TORO",
  //     isNew: true
  //   },
  //   {
  //     id: 2,
  //     name: "GRAND CRU",
  //     subtitle: "CLASSIC COLLECTION",
  //     size: "50 | 2.0cm",
  //     length: '5" | 12.7cm',
  //     duration: "40-60min",
  //     intensity: 4,
  //     format: "ROBUSTO",
  //     isNew: false
  //   },
  //   {
  //     id: 3,
  //     name: "WINSTON CHURCHILL",
  //     subtitle: "THE LATE HOUR",
  //     size: "54 | 2.1cm",
  //     length: '7" | 17.8cm',
  //     duration: "60-80min",
  //     intensity: 5,
  //     format: "CHURCHILL",
  //     isNew: true
  //   }
  // ]

  const products = useQuery<any[]>({
    queryKey: ["products"],
    queryFn: () => {
      const res = getCollectionProducts({ collection: 'hidden-homepage-featured-items' })
      console.log(res);
      return res
    }
  })
  
  return (
    <Carousel className="w-full max-w-[950px]">
      <CarouselContent>
        {products.data && products.data.map((product) => (
          <CarouselItem key={product.id} className="pl-4">
            <GridItemTile data={{
              id: product.id,
              name: product.title,
              subtitle: product.handle,
              size: "50 | 2.1cm",
              length: '5" | 12.7cm',
              duration: "40-60min",
              intensity: 4,
              format: "ROBUSTO",
              availableForSale: product.availableForSale,
              href: `/product/${product.id}`,
              featuredImage: {
                url: product.featuredImage.url
              }
            }} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}