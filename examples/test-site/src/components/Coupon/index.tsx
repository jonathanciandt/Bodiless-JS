import React, { FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  Div,
  P,
  Img,
  designable,
  withDesign,
  addClasses,
} from '@bodiless/fclasses';
import { asBodilessImage } from '@bodiless/components-ui';
import { flow } from 'lodash';
import { asEditable } from '@bodiless/components';
import CouponBottom from './CouponBottom';

const Image = flow(
  asBodilessImage('image'),
)(Img);

const asCouponBottom = flow(
  withDesign({
    Wrapper: flow(
      addClasses('flex items-center pt-3 pb-12 px-6'),
    ),
    Content: flow(
      addClasses('pl-6'),
    ),
    Header: flow(
      addClasses('font-bold text-base text-teal-800 mb-1'),
      asEditable('title', 'My Title'),
    ),
    Description: flow(
      addClasses('text-base'),
    ),
  })
);

const CustomBody = asCouponBottom(CouponBottom);

export type CouponComponents = {
  CouponImage: ComponentType<StylableProps>,
  Description: ComponentType<StylableProps>,
  Header: ComponentType<StylableProps>,
  ImageWrapper: ComponentType<StylableProps>,
  Wrapper: ComponentType<StylableProps>,
  CouponBody: ComponentType<StylableProps>,
};

const couponComponentsStart:CouponComponents = {
  CouponImage: Image,
  Description: P,
  Header: Div,
  ImageWrapper: Div,
  Wrapper: Div,
  CouponBody: CustomBody
};

type Props = DesignableComponentsProps<CouponComponents> & { };

const Coupon: FC<Props> = ({ components }) => {
  const {
    CouponImage,
    ImageWrapper,
    Wrapper,
    CouponBody,
  } = components;

  return (
    <Wrapper>
      <ImageWrapper>
        <CouponImage />
      </ImageWrapper>
      <CouponBody />
    </Wrapper>
  );
};

export default designable(couponComponentsStart, 'Tout')(Coupon);
