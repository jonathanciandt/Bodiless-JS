import { asToken, withDesign, addClasses, addProps } from "@bodiless/fclasses";
import { flow } from "lodash";
import { asEditable } from "@bodiless/components";

const asImageCoupon = asToken(
  withDesign({
    ImageWrapper: flow(
      addClasses('bg-teal-100'),
    ),
    CouponImage: flow(
      addClasses('mx-auto h-120px'),
    ),
  }),
);

const asBasicCoupon = asToken(
  withDesign({
    Wrapper: flow(
      addClasses('border-solid border border-gray-500'),
      addClasses('rounded-lg overflow-hidden mb-3'),
    ),
  }),
);

const asCouponHeader = withDesign({
  Wrapper: flow(
    addClasses('flex items-center justify-between mb-2'),
  ),
  Title: flow(
    addClasses('font-bold text-2xl'),
    asEditable('couponsTitle', 'Coupons'),
  ),
  Link: flow(
    addClasses('border-solid border-b-2 border-teal-800'),
    addClasses('font-bold text-sm text-teal-800 leading-none'),
    addProps({
      href: 'https://www.justblink.com/products',
      target: '_blank',
      title: 'How It Works',
    }),
  ),
});

const asTotalDefaultConfigs = addClasses('font-bold text-teal-800 text-sm');

const asCouponResult = withDesign({
  Wrapper: flow(
    addClasses('flex items-center justify-between mt-2 mb-8'),
  ),
  DownloadBtn: flow(
    addClasses('flex items-center py-2 px-7 justify-center'),
    addClasses('border-solid border-2 border-teal-700'),
    addClasses('text-teal-700 font-bold text-sm'),
    addClasses('rounded-full bg-white shadow-md'),
  ),
  TotalWrapper: flow(
    addClasses('text-right'),
  ),
  TotalLabel: flow(
    asTotalDefaultConfigs,
  ),
  TotalValue: flow(
    asTotalDefaultConfigs,
  ),
});

const asChildrenModifier = withDesign({
  CouponBody: asToken(
    withDesign({
      Description: flow(
        addClasses('my-extra-class-without-behavior')
      )
    })
  )
})

export {
  asImageCoupon,
  asBasicCoupon,
  asCouponHeader,
  asCouponResult,
  asChildrenModifier
}