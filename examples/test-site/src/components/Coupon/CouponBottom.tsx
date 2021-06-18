import React, { useContext, FC, ComponentType } from 'react';
import {
  StylableProps,
  DesignableComponentsProps,
  Div,
  designable,
  asToken,
} from '@bodiless/fclasses';
import { TestContext } from '../../data/pages/test/index';

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
    Wrapper,
  } = components;

  /* TODO: Remove all the context logic from here.
  It needs a specific place to work with ContextAPI. */
  const { setValues } = useContext(TestContext);

  const toggleValues = ({ target }) => {
    const isChecked = target?.checked;
    const parsedTargetValue = parseFloat(target.value);

    setValues(({ couponsTotal }) => ({ couponsTotal: isChecked ? couponsTotal += parsedTargetValue : couponsTotal -= parsedTargetValue }));
  };

  return (
    <Wrapper>
      <label>
        <input type="checkbox" onChange={(e) => toggleValues(e)} value="1" />
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
