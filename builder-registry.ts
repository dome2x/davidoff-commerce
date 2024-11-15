'use client';
import { builder, Builder } from '@builder.io/react';
import { Carousel } from './components/carousel';
import { Gallery } from './components/product/gallery';
import Grid from './components/grid';
import Label from './components/label';
import LogoSquare from './components/logo-square';
import { ThreeItemGrid } from './components/grid/three-items';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Carousel, {
  name: 'Carousel'
});

Builder.registerComponent(Gallery, {
  name: 'Gallery',
  inputs: [
    {
      name: 'images',
      type: 'object',
      hideFromUI: true,
      meta: {
        ts: '{ src: string; altText: string; }[]'
      },
      required: true
    }
  ]
});

Builder.registerComponent(LogoSquare, {
  name: 'LogoSquare',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm']
    }
  ]
});

Builder.registerComponent(Grid, {
  name: 'Grid',
  inputs: [
    {
      name: 'length',
      type: 'number',
      required: true
    }
  ]
});

Builder.registerComponent(ThreeItemGrid, {
  name: 'ThreeItemGrid'
});

Builder.registerComponent(Label, {
  name: 'Label',
  inputs: [
    {
      name: 'amount',
      type: 'string',
      required: true
    },
    {
      name: 'currencyCode',
      type: 'string',
      required: true
    },
    {
      name: 'position',
      type: 'string',
      enum: ['bottom', 'center']
    },
    {
      name: 'title',
      type: 'string',
      required: true
    }
  ]
});
