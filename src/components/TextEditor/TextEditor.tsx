import { color } from '@/styles/color';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [
      {
        color: [],
      },
      { background: [] },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];

const TextEditor = () => {
  const [content, setContent] = useState('');
  return (
    <Container>
      <QuillWrapper
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
        // ref={quillRef}
      />
    </Container>
  );
};

export default TextEditor;

const Container = styled.div`
  .quill {
    border-radius: 6px;
  }
  .ql-toolbar {
    border-radius: 6px 6px 0 0;
    border: 1px solid ${color.gray.gray6};
    background: ${color.gray.gray6};
  }
  .ql-container {
    border: 1px solid ${color.gray.gray6};
    box-sizing: border-box;
    border-radius: 0 0 6px 6px;
    height: 347px;
    width: 1140px;
  }
  .ql-editor {
    color: ${color.gray.white};
  }
`;
