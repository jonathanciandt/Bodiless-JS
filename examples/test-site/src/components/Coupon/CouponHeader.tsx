import React, { FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  A,
  H2,
  Div,
  designable,
} from '@bodiless/fclasses';

export type CouponComponents = {
  Link: ComponentType<StylableProps>,
  Title: ComponentType<StylableProps>,
  Wrapper: ComponentType<StylableProps>
};

const couponComponentsStart:CouponComponents = {
  Link: A,
  Title: H2,
  Wrapper: Div,
};

type Props = DesignableComponentsProps<CouponComponents> & { };

const CouponHeader: FC<Props> = ({ components }) => {
  const { Link, Title, Wrapper } = components;

  return (
    <Wrapper>
      <Title>Coupons</Title>
      <Link>How It Works</Link>
    </Wrapper>
  );
};

export default designable(couponComponentsStart, 'CouponHeader')(CouponHeader);
