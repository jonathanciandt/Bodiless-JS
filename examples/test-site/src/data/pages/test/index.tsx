/**
 * Copyright © 2021 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { flow } from 'lodash';
import {
  addClasses,
  replaceWith,
  asToken,
  Div,
  withDesign,
  addProps,
} from '@bodiless/fclasses';
import { FlowContainer } from '@bodiless/layouts-ui';
import { withTitle } from '@bodiless/layouts';

import Layout from '../../../components/Layout';
import Coupon from '../../../components/Coupon';
import CouponHeader from '../../../components/Coupon/CouponHeader';
import CouponResult from '../../../components/Coupon/CouponResult';

import Coupons from './Coupons';

import {
  asImageCoupon,
  asBasicCoupon,
  asCouponHeader,
  asCouponResult,
  asChildrenModifier
} from './token';

// const CouponsWrapper = flow(
//   addClasses('w-full md:w-4/12'),
// )(Div);

// const BasicCoupon = flow(
//   asBasicCoupon,
//   asImageCoupon,
// )(Coupon);

// const couponDesign = {
//   Coupon: asToken(
//     replaceWith(BasicCoupon),
//     withTitle('Add New Coupon'),
//     asChildrenModifier
//   ),
// };

// const BasicHeader = asCouponHeader(CouponHeader);

// const BasicResult = asCouponResult(CouponResult);

const SimpleCoupons = asToken()(Coupons);

export default props => (
  <Page {...props}>
    <Layout>
      <SimpleCoupons />
      {/* <CouponsWrapper>
        <BasicHeader />
        <FlowContainer nodeKey="couponContainer" design={couponDesign} />
        <BasicResult />
      </CouponsWrapper> */}
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
    ...DefaultContentQuery
  }
`;
