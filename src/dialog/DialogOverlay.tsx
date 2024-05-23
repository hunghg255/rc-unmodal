import * as Dialog from '@radix-ui/react-dialog';
import React, { forwardRef } from 'react';
import type { LegacyRef } from 'react';
import { useMotionComponent } from '../providers';
import classNames from 'classnames';

export const DialogOverlay = forwardRef(
  (
    { onClick, zIndex, className }: { onClick?: () => void; zIndex?: number; className?: string },
    ref: LegacyRef<HTMLDivElement>,
  ) => {
    const m = useMotionComponent();

    return (
      //@ts-ignore
      <Dialog.Overlay asChild ref={ref}>
        <m.div
          onClick={onClick}
          className={classNames('fixed inset-0 z-[11] bg-overlay', className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex }}
        />
      </Dialog.Overlay>
    );
  },
);
