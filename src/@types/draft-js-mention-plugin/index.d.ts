declare module "draft-js-mention-plugin" {
  import { ComponentType } from "react";
  import { DraftDecorator, EditorState } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  export type DefaultSuggestType = {
    name: string;
    link: string;
    avatar: string;
  };

  type MentionSuggestionsProps = {
    onSearchChange(value: unknown): void;
    suggestions: Array<DefaultSuggestType>;
  };

  type MentionEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;

    MentionSuggestions: ComponentType<MentionSuggestionsProps>;
  };

  declare const createMentionPlugin: () => MentionEditorPlugin;

  export declare const defaultSuggestionsFilter: (
    searchValue: string,
    suggestions: Array<DefaultSuggestType>
  ) => Array<DefaultSuggestType>;

  export default createMentionPlugin;
}
