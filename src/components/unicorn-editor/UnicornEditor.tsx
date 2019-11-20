import "draft-js/dist/Draft.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";

import { EditorState } from "draft-js";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import createDividerPlugin from "draft-js-divider-plugin";
import {
  BlockquoteButton,
  BoldButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  ItalicButton,
  OrderedListButton,
  UnorderedListButton
} from "draft-js-buttons";
import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import ImageButton from "./ImageButton";

const sideToolbarStyles = {
  buttonStyles: {
    buttonWrapper: "draftJsToolbar__buttonWrapper__1Dmqh",
    button: "draftJsToolbar__button__qi1gf",
    active: "draftJsToolbar__active__3qcpF",
    separator: "draftJsToolbar__separator__3M3L7"
  },
  blockTypeSelectStyles: {
    blockType: "draftJsToolbar__blockType__27Jwn",
    spacer: "draftJsToolbar__spacer__2Os2z",
    popup: "draftJsToolbar__popup__GHzbY"
  },
  toolbarStyles: {
    wrapper: "draftJsToolbar__wrapper__9NZgg"
  }
};

const linkifyPlugin = createLinkifyPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;
const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const sideToolbarPlugin = createSideToolbarPlugin({
  position: "left",
  theme: sideToolbarStyles
});
const { SideToolbar } = sideToolbarPlugin;
const dividerPlugin = createDividerPlugin();
const { DividerButton } = dividerPlugin;

const plugins = [
  linkifyPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
  sideToolbarPlugin,
  inlineToolbarPlugin
];

interface Props {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  readOnly?: boolean;
}

// TODO: ドラッグアンドドロップで画像を挿入できるようにする
// TODO: いろいろエラーを消す
// TODO: Indexeddbで下書き保存できるようにする
// TODO: 開いた画像ファイルをアップロードできるようにする. なにかしらのラッパーライブラリを利用したほうがよさげ. https://caniuse.com/#feat=indexeddb
// https://github.com/acaua/unicorn-editor/blob/master/src/unicorn-editor/UnicornEditor.tsx
export const UnicornEditor: NextPage<Props> = props => {
  const { editorState, setEditorState, readOnly } = props;

  const getEditorState = () => editorState;

  const editorRef = React.useRef<Editor>(null);

  const focus = () => {
    if (editorRef != null && editorRef.current != null) {
      editorRef.current.focus();
    }
  };

  return (
    <div
      onClick={focus}
      style={{
        width: "100%",
        alignItems: "stretch",
        backgroundColor: "#aaaaaa",
        padding: 10
      }}
    >
      <Editor
        editorKey="unicorn-editor"
        ref={editorRef}
        plugins={plugins}
        editorState={editorState}
        onChange={editorState => {
          setEditorState(editorState);
          // console.group();
          // console.log(
          //   JSON.stringify(
          //     convertToRaw(editorState.getCurrentContent()),
          //     null,
          //     2
          //   )
          // );
          // console.groupEnd();
        }}
        readOnly={!!readOnly}
      />
      {!readOnly && (
        <>
          <SideToolbar>
            {() => (
              <>
                <BlockquoteButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <BoldButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <HeadlineOneButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <HeadlineTwoButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <HeadlineThreeButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <ItalicButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <OrderedListButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <UnorderedListButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <DividerButton
                  setEditorState={setEditorState}
                  getEditorState={getEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
                <ImageButton
                  getEditorState={getEditorState}
                  setEditorState={setEditorState}
                  theme={sideToolbarStyles.buttonStyles}
                />
              </>
            )}
          </SideToolbar>
          <AlignmentTool />
          <InlineToolbar />
        </>
      )}
    </div>
  );
};

// SSRを利用する場合はこのコンポネントを利用すること
// `getIn`がundefinedだっていうエラーが出てしまうことを回避する
export const DynamicUnicornEditor = dynamic(
  () => {
    return new Promise<NextPage<Props>>(resolve => {
      resolve(UnicornEditor);
    });
  },
  { ssr: false }
);
