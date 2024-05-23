import { m } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import { ModalStackContainerProps } from '../modal/types';
import { ModalStackContainer as MSC } from '../modal/container';

export const LazyMotionModalStackContainer: FC<PropsWithChildren & Omit<ModalStackContainerProps, 'm'>> = (props) => (
  <MSC m={m}>{props.children}</MSC>
);
