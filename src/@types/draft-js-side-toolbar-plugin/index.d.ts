declare module "draft-js-side-toolbar-plugin" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type SideToolbarEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;

    SideToolbar: ComponentType<unknown>;
  };

  type createSideToolbarPluginConfigTheme = {
    buttonStyles: Object;
    blockTypeSelectStyles: Object;
    toolbarStyles: Object;
  };

  type createSideToolbarPluginConfig = {
    theme?: createSideToolbarPluginConfigTheme;
    position?: "left" | "right";
  };

  declare const createSideToolbarPlugin: (
    config?: createSideToolbarPluginConfig
  ) => SideToolbarEditorPlugin;

  export default createSideToolbarPlugin;
}

declare module "draft-js-side-toolbar-plugin/lib/components/BlockTypeSelect" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";
  import { DraftJsButtonTheme } from "draft-js-buttons";

  interface BlockTypeSelectProps {
    theme?: DraftJsButtonTheme;
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
  }

  declare const BlockTypeSelect: ComponentType<BlockTypeSelectProps>;

  export default BlockTypeSelect;
}

declare module "draft-js-side-toolbar-plugin/lib/components/Toolbar" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  export type Toolbar = ComponentType<unknown>;
}

declare module "draft-js-side-toolbar-plugin/lib/components/Toolbar" {}
