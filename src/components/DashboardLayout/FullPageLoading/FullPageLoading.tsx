import React from 'react';
import { Spin } from 'antd';
import './FullPageLoading.scss';

export const FullPageLoading = () => {
  return (
    <div className="fp-loading">
      <Spin size="large" />
    </div>
  );
};
