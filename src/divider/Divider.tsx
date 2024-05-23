import classNames from 'classnames';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export const Divider: FC<DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>> = (props) => {
  const { className, ...rest } = props;
  return <hr className={classNames('my-4 h-[0.5px] border-0 bg-black !bg-opacity-30', className)} {...rest} />;
};
