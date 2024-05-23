import { motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';

import { ModalStackContainerProps } from '../modal/types';
import { ModalStackContainer as MSC } from '../modal/container';

export const MotionModalStackContainer: FC<PropsWithChildren & Omit<ModalStackContainerProps, 'm'>> = (props) => {
  const { children, ...rest } = props;

  return (
    <MSC m={motion} {...rest}>
      {children}
    </MSC>
  );
};
