<p align="center">
<a href="https://www.npmjs.com/package/rc-unmodal" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/carbon:carousel-horizontal.svg?color=%2361d7ff" alt="logo" width='100'/></a>
</p>

<p align="center">
 A react component unified modal ✨
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rc-unmodal" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/rc-unmodal.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rc-unmodal" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/rc-unmodal.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=rc-unmodal" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/rc-unmodal" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/rc-unmodal/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/rc-unmodal/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rc-unmodal" alt="License" /></a>
</p>

## Live demo

[Live Demo](https://rc-unmodal.vercel.app/)

## Installation

[![NPM](https://nodei.co/npm/rc-unmodal.png?compact=true)](https://nodei.co/npm/rc-unmodal/)

## Install

```
npm i rc-unmodal@latest
```

## Use

```tsx
import { Modal, MotionModalStackContainer } from 'rc-unmodal';

const BasicModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal title="A declaratively modal" open={open} onOpenChange={setOpen}>
        <p>This is a modal. You can put anything you want in here. And It can be nested.</p>
      </Modal>
    </>
  );
};

const App = () => {
  return (
    <MotionModalStackContainer clickOutsideToDismiss={true} responsive>
      <BasicModal />
    </MotionModalStackContainer>
  );
};
```

### About

<a href="https://www.buymeacoffee.com/hunghg255" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Gia Hung – [hung.hg](https://hung.thedev.id)
