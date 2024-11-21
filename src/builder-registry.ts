"use client"
import { builder, Builder } from "@builder.io/react";
import Carousel from "@components/davidoff/carousel";
import ProductCarousel from "@components/davidoff/grid/three-items";
import Hero from "@components/davidoff/hero";
import ProductCollection from "@components/davidoff/product/product-collection";
import Footer from "@components/layout/davidoff/footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(Carousel, {
    name: "Carousel"
});

Builder.registerComponent(Hero, {
    name: "Hero"
});

Builder.registerComponent(Footer, {
    name: "Footer"
});

Builder.registerComponent(ProductCarousel, {
    name: "ProductCarousel",
});

Builder.registerComponent(ProductCollection, {
    name: 'ProductCollection',
    inputs: [
      {
        name: 'collection',
        type: 'BigCommerceProductsList',
      },
    ],
  });