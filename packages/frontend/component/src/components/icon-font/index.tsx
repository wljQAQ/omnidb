import React from 'react';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFontUrl = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4739655_7b2s2edxpab.js'
});

interface IconFontProps {
  type: string;
  className?: string;
}

export const IconFont: React.FC<IconFontProps> = ({ type, className }) => <IconFontUrl type={type} className={className} />;
