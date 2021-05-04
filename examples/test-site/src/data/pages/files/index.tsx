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
import {
  A,
  addClasses,
  addProps,
  H1,
  Div,
} from '@bodiless/fclasses';
import { asLinkInANewTab, FileUploadStatus } from '@bodiless/components';
import type { UploadStatusProps } from '@bodiless/components';
import flow from 'lodash/flow';

import Layout from '../../../components/Layout';
import {
  asEditableLink, asLink, asHeader1,
} from '../../../components/Elements.token';

const Title = asHeader1(H1);

const Section = flow(
  addClasses('my-2'),
)(Div);

const DefaultLink = flow(
  asEditableLink('default'),
  asLink,
)(A);

const CustomAllowedTypesLink = flow(
  asEditableLink('allowedType', undefined, () => ({
    fileUpload: {
      accept: 'application/pdf, application/msword',
    },
  })),
  asLink,
)(A);

const CUSTOM_FILE_REJECTED_MESSAGE = 'File type is not accepted, the acceptable file types are Word and PDFs';

const CustomUploadStatus = ({ status, selectedFile }: UploadStatusProps) => {
  let statusText;
  switch (status) {
    case FileUploadStatus.FileAccepted:
      statusText = `File "${selectedFile}" selected`;
      break;
    case FileUploadStatus.FileRejected:
      statusText = CUSTOM_FILE_REJECTED_MESSAGE;
      break;
    default:
      statusText = '';
  }
  return (
    <div>{statusText}</div>
  );
};

const CustomValidationMessageLink = flow(
  asEditableLink('validationMessage'),
  addProps({
    ui: {
      fileUpload: {
        DragRejected: flow(
          addClasses('bl-text-red'),
          addProps({
            children: 'File type is not accepted, the acceptable file types are Word and PDFs',
          }),
        )(Div),
        UploadStatus: CustomUploadStatus,
      },
    },
  }),
  asLink,
)(A);

const NewTabLink = flow(
  asEditableLink('newTab'),
  asLink,
  asLinkInANewTab,
)(A);

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <Title>Link to Downloadable Files Demo Page</Title>
      <Section>
        <DefaultLink>Default Link</DefaultLink>
      </Section>
      <Section>
        <CustomAllowedTypesLink>Custom allowed file types link</CustomAllowedTypesLink>
      </Section>
      <Section>
        <CustomValidationMessageLink>Custom validation message link</CustomValidationMessageLink>
      </Section>
      <Section>
        <NewTabLink>New tab link</NewTabLink>
      </Section>
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
