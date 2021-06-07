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

import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { flow } from 'lodash';
import { addClasses, withDesign, replaceWith, asToken, addProps } from '@bodiless/fclasses';
import { FlowContainer } from '@bodiless/layouts-ui';
import { withTitle } from '@bodiless/layouts';

import Layout from '../../../components/Layout';
import Coupon from '../../../components/Coupon';
import CouponHeader from '../../../components/Coupon/CouponHeader';
import { asEditable } from '@bodiless/components';

const asImageCoupon = asToken(
  withDesign({
    ImageWrapper: flow(
      addClasses('bg-teal-100'),
    ),
    CouponImage: flow(
      addClasses('mx-auto'),
    ),
  })
);

const asBasicCoupon = asToken(
  withDesign({
    Wrapper: flow(
      addClasses('border-solid border border-gray-500 rounded-lg'),
    ),
    Header: flow(
      addClasses('font-bold text-base'),
      asEditable('title', 'My Title')
    ),
    Description: flow(
      addClasses('text-base'),
    )
  })
);

const BasicCoupon = flow(
  asBasicCoupon,
  asImageCoupon
)(Coupon);

const couponDesign = {
  Coupon: asToken(
    replaceWith(BasicCoupon),
    withTitle('Add New Coupon'),
  ),
}

const asCouponHeader = withDesign({
  Wrapper: flow(
    addClasses('flex items-center justify-between'),
  ),
  Title: flow(
    addClasses('font-bold text-2xl'),
    asEditable('couponsTitle', 'Coupons')
  ),
  Link: flow(
    addClasses('font-bold text-sm text-teal-800 border-solid border-b-2 border-teal-800 leading-none'),
    addProps({
      href: "https://www.justblink.com/products",
      target: "_blank",
      title: "How It Works"
    })
  ),
})

const BasicHeader = asCouponHeader(CouponHeader);

export default props => (
  <Page {...props}>
    <Layout>
        <div>
          <BasicHeader />
          <FlowContainer nodeKey="couponContainer" design={couponDesign} />
        </div>
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
