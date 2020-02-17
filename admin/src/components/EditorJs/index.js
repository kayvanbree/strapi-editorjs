import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EditorJs from '@natterstefan/react-editor-js'
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';
import Link from '@editorjs/link';
import Delimiter from '@editorjs/delimiter';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Paragraph from '@editorjs/paragraph';

const Wrapper = styled.div`
  .editorjs__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({onChange, name, value}) => {
  var editor = null;

  const onSave = async () => {
    try {
      const outputData = await editor.save();
      const dataString = JSON.stringify(outputData);
      onChange({ target: { name, value: dataString } });
    } catch (e) {
      console.log('Saving failed: ', e);
    }
  };

  return (
    <Wrapper>
      <EditorJs
        data={JSON.parse(value)}
        onChange={onSave}
        tools={{
          header: {
            class: Header,
            inlineToolbar: ['link'],
            config: {
              placeholder: 'Header'
            },
            shortcut: 'CMD+SHIFT+H'
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
            },
            shortcut: 'CMD+SHIFT+O'
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true
              }
            }
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          },
          link: Link,
          marker: {
            class:  Marker,
            shortcut: 'CMD+SHIFT+M'
          },
          table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
          },
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
          },
          delimiter: Delimiter,
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          }
        }}
        editorInstance={editorInstance => {
          editor = editorInstance
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
