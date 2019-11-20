import AddPhotoAlternate from "@material-ui/icons/AddPhotoAlternate";
import { EditorState } from "draft-js";
import React from "react";
import { DraftJsButtonTheme } from "draft-js-buttons";

import addImage from "draft-js-image-plugin/lib/modifiers/addImage";

interface ImageButtonProps {
  theme?: DraftJsButtonTheme;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}

export default class ImageButton extends React.Component<
  ImageButtonProps,
  any
> {
  private input: HTMLInputElement | null = null;

  public render() {
    const { theme } = this.props;
    return (
      <div
        className={
          theme != null && theme.buttonWrapper != null
            ? theme.buttonWrapper
            : undefined
        }
        onMouseDown={this.preventBubblingUp}
      >
        <button
          type="button"
          onClick={this.onClick}
          title="Adicionar uma imagem"
          className={
            theme != null && theme.button != null ? theme.button : undefined
          }
        >
          <AddPhotoAlternate />
          <input
            type="file"
            ref={c => {
              this.input = c;
            }}
            onChange={this.onChange}
            style={{ display: "none" }}
          />
        </button>
      </div>
    );
  }

  private preventBubblingUp = (event: any) => {
    event.preventDefault();
  };

  private onClick = () => {
    if (this.input) {
      this.input.value = "";
      this.input.click();
    }
  };

  private onChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file.type.indexOf("image/") === 0) {
      const { getEditorState, setEditorState } = this.props;
      const imageUrl = URL.createObjectURL(file);

      const newState = addImage(getEditorState(), imageUrl);
      setEditorState(newState);
    }
  };
}
