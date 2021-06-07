import React, { FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  Div,
  P,
  Img,
  designable,
} from '@bodiless/fclasses';
import { asBodilessImage } from '@bodiless/components-ui';
import { flow } from 'lodash';

const Image = flow(
  asBodilessImage('image'),
)(Img);

export type CouponComponents = {
  CouponImage: ComponentType<StylableProps>,
  Description: ComponentType<StylableProps>,
  Header: ComponentType<StylableProps>,
  ImageWrapper: ComponentType<StylableProps>,
  Wrapper: ComponentType<StylableProps>,
};

const couponComponentsStart:CouponComponents = {
  CouponImage: Image,
  Description: P,
  Header: Div,
  ImageWrapper: Div,
  Wrapper: Div,
};

type Props = DesignableComponentsProps<CouponComponents> & { };

const Coupon: FC<Props> = ({ components }) => {
  const {
    CouponImage,
    Description,
    Header,
    ImageWrapper,
    Wrapper,
  } = components;

  return (
    <Wrapper>
      <ImageWrapper>
        <CouponImage />
      </ImageWrapper>
      <Header>Save $0.00</Header>
      <Description>My Default Description</Description>
    </Wrapper>
  );
};

export default designable(couponComponentsStart, 'Tout')(Coupon);
