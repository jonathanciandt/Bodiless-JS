import React, { FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  Div,
  designable,
  asToken,
} from '@bodiless/fclasses';

export type CouponComponents = {
  Description: ComponentType<StylableProps>,
  Header: ComponentType<StylableProps>,
  Wrapper: ComponentType<StylableProps>,
  Content: ComponentType<StylableProps>,
};

const couponComponentsStart:CouponComponents = {
  Description: Div,
  Header: Div,
  Wrapper: Div,
  Content: Div,
};

type Props = DesignableComponentsProps<CouponComponents> & { };

const CouponBottom: FC<Props> = ({ components }) => {
  const {
    Content,
    Description,
    Header,
    Wrapper
  } = components;

  return (
    <Wrapper>
      <label>
        <input type="checkbox" />
      </label>
      <Content>
        <Header>Save $0.00</Header>
        <Description>My Default Description</Description>
      </Content>
    </Wrapper>
  );
};

const asCouponBottom = asToken(
  designable(couponComponentsStart, 'CouponBottom'),
);

export default asCouponBottom(CouponBottom);
