import React from 'react';

import Image from 'components/Image';
import Panel from 'components/Panel';

import cn from 'utils/cn';
import media from 'utils/media';

import './phone-image.css';

const PhoneImagePanel = ({ fileName }) => (
  <Panel>
    <Image
      className={cn(fileName.includes('phone-image') && 'phone-image')}
      fileName={fileName}
      height={media.greaterThan.phone() ? 500 : 400}
      width={media.greaterThan.phone() ? 250 : 200}
    />
  </Panel>
);

export default PhoneImagePanel;
