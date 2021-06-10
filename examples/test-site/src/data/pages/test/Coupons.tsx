import React, { FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  Div,
  designable,
  addClasses,
  asToken,
  replaceWith,
} from '@bodiless/fclasses';
import { flow } from 'lodash';

import Coupon from '../../../components/Coupon';
import CouponHeader from '../../../components/Coupon/CouponHeader';
import CouponResult from '../../../components/Coupon/CouponResult';

import {
  asImageCoupon,
  asBasicCoupon,
  asCouponHeader,
  asCouponResult,
  asChildrenModifier
} from './token';

import { withTitle } from '@bodiless/layouts';
import { FlowContainer } from '@bodiless/layouts-ui';

const Wrapper = flow(
  addClasses('w-full md:w-4/12'),
)(Div);

const BasicHeader = asCouponHeader(CouponHeader);

const BasicResult = asCouponResult(CouponResult);

const BasicCoupon = flow(
  asBasicCoupon,
  asImageCoupon,
)(Coupon);

const couponDesign = {
  Coupon: asToken(
    replaceWith(BasicCoupon),
    withTitle('Add New Coupon'),
    asChildrenModifier
  ),
};

type CouponsComponents = {
  Coupon: any,
  Header: any,
  Result: any,
  Wrapper: ComponentType<StylableProps>,
};

const couponsComponentsStart:CouponsComponents = {
  Coupon: BasicCoupon,
  Header: BasicHeader,
  Result: BasicResult,
  Wrapper,
};

type Props = DesignableComponentsProps<CouponsComponents> & { };

const Coupons: FC<Props> = ({ components }) => {
  const {
    Result,
    Header,
    Wrapper,
  } = components;

  return (
    <Wrapper>
      <Header />
        <FlowContainer nodeKey="couponContainer" design={couponDesign} />
      <Result />
    </Wrapper>
  );
};

const asCoupons = asToken(
  designable(couponsComponentsStart, 'Coupons'),
);

export default asCoupons(Coupons);
