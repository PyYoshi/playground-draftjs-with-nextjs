declare module "draft-js-side-toolbar-plugin" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type SideToolbarEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;

    SideToolbar: ComponentType<unknown>;
  };

  declare const createSideToolbarPlugin: () => SideToolbarEditorPlugin;

  export default createSideToolbarPlugin;
}

declare module "draft-js-side-toolbar-plugin/components/BlockTypeSelect" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  export type BlockTypeSelect = ComponentType<unknown>;
}

declare module "draft-js-side-toolbar-plugin/components/Toolbar" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  export type Toolbar = ComponentType<unknown>;
}
