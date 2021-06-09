import React, { FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  A,
  Button,
  H2,
  Div,
  designable,
} from '@bodiless/fclasses';

export type CouponComponents = {
  DownloadBtn: ComponentType<StylableProps>,
  TotalWrapper: ComponentType<StylableProps>,
  TotalLabel: ComponentType<StylableProps>,
  TotalValue: ComponentType<StylableProps>,
  Wrapper: ComponentType<StylableProps>
};

const couponComponentsStart:CouponComponents = {
  DownloadBtn: Button,
  TotalWrapper: H2,
  TotalLabel: Div,
  TotalValue: Div,
  Wrapper: Div
};

type Props = DesignableComponentsProps<CouponComponents> & { };

const CouponResult: FC<Props> = ({ components }) => {
  const { DownloadBtn, TotalLabel, TotalValue, TotalWrapper, Wrapper } = components;

  return (
    <Wrapper>
      <DownloadBtn>Download Coupons</DownloadBtn>
      <TotalWrapper>
        <TotalLabel>Total Savings</TotalLabel>
        <TotalValue>$0.00</TotalValue>
      </TotalWrapper>
    </Wrapper>
  );
};

export default designable(couponComponentsStart, 'CouponResult')(CouponResult);
