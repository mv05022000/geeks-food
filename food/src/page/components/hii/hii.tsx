import React from 'react';

import styles from './hii.css';

export interface hiiProps {
  prop?: string;
}

export function hii({prop = 'default value'}: hiiProps) {
  return <div className={styles.hii}>hii {prop}</div>;
}
