import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const SmallLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="min-vw-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_URL} />
      </Hyperlink>
      <div className="d-flex align-items-center justify-content-center m-3.5">
        <div>
          <h1 className="h5 data-hj-suppress">
            {formatMessage(messages['welcome.to.platform'], { siteName: getConfig().SITE_NAME, fullName })}
          </h1>
          <h2 className="h1 text-primary">
            {formatMessage(messages['complete.your.profile.1'])}
            <div>
              {formatMessage(messages['complete.your.profile.2'])}
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

SmallLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default SmallLayout;
