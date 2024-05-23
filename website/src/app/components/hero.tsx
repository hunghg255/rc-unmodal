'use client';

import { Modal, MotionModalStackContainer, useModalStack, PresentSheet } from 'rc-unmodal';

import { GithubIcon } from './GithubIcon';
import { codeToHtml } from 'shiki';
import { useEffect, useState } from 'react';

function Code({ children, lang = 'javascript' }: { children: string; lang?: string }) {
  const [code, setcode] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      const html = await codeToHtml(children, {
        lang: lang,
        theme: 'vitesse-light',
      });
      setcode(html);
    };
    fetchCode();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
}

const code1 = `
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
}

const App = () => {
  return <MotionModalStackContainer clickOutsideToDismiss={true} responsive>
    <BasicModal />
  </MotionModalStackContainer>
}
`;

const code2 = `
import { Modal, MotionModalStackContainer } from 'rc-unmodal';

const BasicNested = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>
      <Modal title="A declaratively modal" open={open} onOpenChange={setOpen}>
        <p>This is a modal 1. You can put anything you want in here. And It can be nested.</p>

        <button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Open Modal 2
        </button>
      </Modal>

      <Modal title="A declaratively modal 2" open={open2} onOpenChange={setOpen2}>
        <p>This is a modal 2. You can put anything you want in here. And It can be nested.</p>
      </Modal>
    </>
  );
};

const App = () => {
  return <MotionModalStackContainer clickOutsideToDismiss={true} responsive>
    <BasicNested />
  </MotionModalStackContainer>
}
`;

const code3 = `
import { PresentSheet, MotionModalStackContainer } from 'rc-unmodal';

const BasicSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Sheet
      </button>

      <PresentSheet open={open} onOpenChange={setOpen} content={<div>Sheet Content</div>} />
    </>
  );
};

const App = () => {
  return <MotionModalStackContainer>
    <BasicSheet />
  </MotionModalStackContainer>
}
`;

const BasicModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <MotionModalStackContainer clickOutsideToDismiss={true} responsive>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-[10px]"
      >
        Open Modal
      </button>
      <Modal title="A declaratively modal" open={open} onOpenChange={setOpen}>
        <p>This is a modal. You can put anything you want in here. And It can be nested.</p>
      </Modal>
    </MotionModalStackContainer>
  );
};

const BasicNested = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <MotionModalStackContainer clickOutsideToDismiss={true} responsive>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>
      <Modal title="A declaratively modal" open={open} onOpenChange={setOpen}>
        <p>This is a modal 1. You can put anything you want in here. And It can be nested.</p>

        <button
          onClick={() => {
            setOpen2(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Open Modal 2
        </button>
      </Modal>

      <Modal title="A declaratively modal 2" open={open2} onOpenChange={setOpen2}>
        <p>This is a modal 2. You can put anything you want in here. And It can be nested.</p>
      </Modal>
    </MotionModalStackContainer>
  );
};

const BasicSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <MotionModalStackContainer>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-[10px]"
      >
        Open Sheet
      </button>

      <PresentSheet open={open} onOpenChange={setOpen} content={<div>Sheet Content</div>} />
    </MotionModalStackContainer>
  );
};

export function Hero() {
  return (
    <>
      <div className="space-y-1 mb-[20px]">
        <h2 className="text-2xl font-semibold mb-[10px]">Installation</h2>
        <Code lang="bash">npm install rc-unmodal</Code>
      </div>
      <div className="mb-[30px]">
        <h2 className="text-2xl font-semibold mb-[10px]">Basic Modal</h2>

        <BasicModal />

        <div>
          <Code>{code1}</Code>
        </div>
      </div>

      <div className="mb-[30px]">
        <h2 className="text-2xl font-semibold mb-[10px]">Basic Nested</h2>

        <BasicNested />

        <div>
          <Code>{code2}</Code>
        </div>
      </div>

      <div className="mb-[30px]">
        <h2 className="text-2xl font-semibold mb-[10px]">Basic Sheet</h2>

        <BasicSheet />

        <div>
          <Code>{code3}</Code>
        </div>
      </div>
    </>
  );
}
