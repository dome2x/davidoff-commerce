'use client';
import { builder, Builder } from '@builder.io/react';
import Carousel from '@components/davidoff/carousel';
import Hero from '@components/layout/davidoff/hero';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Carousel, {
  name: 'Carousel'
});

Builder.registerComponent(Hero, {
  name: 'Hero'
});
