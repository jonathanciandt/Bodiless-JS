import React, { FC, ComponentType, useContext } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  Button,
  H2,
  Div,
  designable,
} from '@bodiless/fclasses';
import { TestContext } from '../../data/pages/test/index';

export type CouponComponents = {
  DownloadBtn: ComponentType<StylableProps>,
  TotalWrapper: ComponentType<StylableProps>,
  TotalLabel: ComponentType<StylableProps>,
  TotalValue: ComponentType<StylableProps>,
  Wrapper: ComponentType<StylableProps>,
};

const couponComponentsStart:CouponComponents = {
  DownloadBtn: Button,
  TotalWrapper: H2,
  TotalLabel: Div,
  TotalValue: Div,
  Wrapper: Div,
};

type Props = DesignableComponentsProps<CouponComponents> & { };

const CouponResult: FC<Props> = ({ components }) => {
  const {
    DownloadBtn,
    TotalLabel,
    TotalValue,
    TotalWrapper,
    Wrapper,
  } = components;

  const { values } = useContext(TestContext);

  const { couponsTotal = 0 } = values;

  return (
    <Wrapper>
      <DownloadBtn>Download Coupons</DownloadBtn>
      <TotalWrapper>
        <TotalLabel>Total Savings</TotalLabel>
        <TotalValue>
          $
          {couponsTotal}
        </TotalValue>
      </TotalWrapper>
    </Wrapper>
  );
};

export default designable(couponComponentsStart, 'CouponResult')(CouponResult);
