import "draft-js-hashtag-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import "draft-js-mention-plugin/lib/plugin.css";
import "draft-js-emoji-plugin/lib/plugin.css";
import "draft-js-undo-plugin/lib/plugin.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";

import React from "react";
import DraftJSEditor, { composeDecorators } from "draft-js-plugins-editor";
import createHashtagPlugin from "draft-js-hashtag-plugin"; // d.ts無し
import createLinkifyPlugin from "draft-js-linkify-plugin"; // d.ts無し
import createMentionPlugin, {
  defaultSuggestionsFilter,
  DefaultSuggestType
} from "draft-js-mention-plugin"; // d.ts無し
import createEmojiPlugin from "draft-js-emoji-plugin"; // d.ts有り
import createUndoPlugin from "draft-js-undo-plugin"; // d.ts無し
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin"; // d.ts無し
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin"; // d.ts無し
import createImagePlugin from "draft-js-image-plugin"; // d.ts有り
import createFocusPlugin from "draft-js-focus-plugin"; // d.ts有り
import createAlignmentPlugin from "draft-js-alignment-plugin"; // d.ts無し
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin"; // d.ts有り
import {
  convertFromRaw,
  EditorState,
  RawDraftContentState,
  convertToRaw
} from "draft-js";

const emojiPlugin = createEmojiPlugin();
const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const mentionPlugin = createMentionPlugin();
const undoPlugin = createUndoPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const sideToolbarPlugin = createSideToolbarPlugin();
const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const { MentionSuggestions } = mentionPlugin;
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const { UndoButton, RedoButton } = undoPlugin;
const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;
const { AlignmentTool } = alignmentPlugin;

const plugins = [
  // emojiPlugin,
  hashtagPlugin,
  linkifyPlugin,
  mentionPlugin,
  undoPlugin,
  inlineToolbarPlugin,
  sideToolbarPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  imagePlugin
];

// https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Home/UnicornEditor/index.js
export class PocAnnouncementEditor extends React.Component {
  editorRef: DraftJSEditor | null = null;

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
    suggestions: mentions
  };

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState
    });
  };

  onMentionSearchChange = ({ value }: { value: string }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions)
    });
  };

  focus = () => {
    if (this.editorRef != null) {
      this.editorRef.focus();
    }
    console.log(convertToRaw(this.state.editorState.getCurrentContent()));
  };

  render() {
    return (
      <div className="root">
        <div className="editor" onClick={this.focus}>
          <DraftJSEditor
            editorKey="poc-announcement-editor"
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            spellCheck
            ref={element => {
              this.editorRef = element;
            }}
          />
          <SideToolbar />
          <InlineToolbar />
          <AlignmentTool />
          <EmojiSuggestions />
        </div>
        <div>
          <MentionSuggestions
            onSearchChange={this.onMentionSearchChange}
            suggestions={this.state.suggestions}
          />
          <div className="emojiOptions">
            <EmojiSelect />
          </div>
          <div className="editorButton">
            <UndoButton />
          </div>
          <div className="editorButton">
            <RedoButton />
          </div>
        </div>
        <style jsx>{`
          .root {
            background: #fff;
          }

          .editor {
            border: 1px solid #ddd;
            cursor: text;
            padding: 16px;
            border-radius: 2px;
            margin-bottom: 10px;
            box-shadow: inset 0px 1px 8px -3px #ababab;
            background: #fefefe;
          }

          .editor :global(.public-DraftEditor-content) {
            min-height: 240px;
          }

          .stateButton {
            border: 1px solid #bbb;
            height: 40px;
            padding: 0 1.2em;
            color: #888;
            margin: 0;
            border-radius: 20px;
            line-height: 1.2em;
            cursor: pointer;
            margin-right: 10px;
            position: relative;
            top: -4px;
            background-color: #fff;
          }

          .stateButton:focus {
            outline: 0; /* reset for :focus */
          }

          .stateButton:hover {
            background: #f3f3f3;
          }

          .stateButton:active {
            background: #e6e6e6;
          }

          .pressedStateButton {
            composes: stateButton;
            background-color: #ededed;
          }

          .editorButton {
            margin-right: 10px;
            display: inline-block;
          }

          .emojiOptions {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    );
  }
}

const mentions: Array<DefaultSuggestType> = [
  {
    name: "Matthew Russell",
    link: "https://twitter.com/mrussell247",
    avatar:
      "https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg"
  },
  {
    name: "Julian Krispel-Samsel",
    link: "https://twitter.com/juliandoesstuff",
    avatar: "https://avatars2.githubusercontent.com/u/1188186?v=3&s=400"
  },
  {
    name: "Jyoti Puri",
    link: "https://twitter.com/jyopur",
    avatar: "https://avatars0.githubusercontent.com/u/2182307?v=3&s=400"
  },
  {
    name: "Max Stoiber",
    link: "https://twitter.com/mxstbr",
    avatar:
      "https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg"
  },
  {
    name: "Nik Graf",
    link: "https://twitter.com/nikgraf",
    avatar: "https://avatars0.githubusercontent.com/u/223045?v=3&s=400"
  },
  {
    name: "Pascal Brandt",
    link: "https://twitter.com/psbrandt",
    avatar:
      "https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png"
  }
];

const initialState: RawDraftContentState = {
  blocks: [
    {
      key: "5ab2o",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "ov7r",
      text: " ",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ],
      data: {}
    },
    {
      key: "e23a8",
      text: "『吾輩は猫である』上篇自序",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "c7p24",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "26jf2",
      text:
        "「吾輩は猫である」は雑誌ホトトギスに連載した続き物である。固もとより纏まとまった話の筋を読ませる普通の小説ではないから、どこで切って一冊としても興味の上に於おいて左さしたる影響のあろう筈はずがない。然しかし自分の考ではもう少し書いた上でと思って居たが、書肆しょしが頻しきりに催促をするのと、多忙で意の如ごとく稿を続つぐ余暇がないので、差し当り是丈これだけを出版する事にした。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "a0bie",
      text:
        "　自分が既に雑誌へ出したものを再び単行本の体裁として公にする以上は、之これを公にする丈だけの価値があると云う意味に解釈されるかも知れぬ。「吾輩は猫である」が果してそれ丈の価値があるかないかは著者の分として言うべき限りでないと思う。ただ自分の書いたものが自分の思う様な体裁で世の中へ出るのは、内容の価値如何いかんに関らず、自分丈だけは嬉うれしい感じがする。自分に対しては此事実が出版を促うながすに充分な動機である。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "67dov",
      text:
        "　此書を公けにするに就ついて中村不折氏は数葉の※(「插」でつくりの縦棒が下に突き抜けている、第4水準2-13-28)画をかいてくれた。橋口五葉氏は表紙其他の模様を意匠してくれた。両君の御蔭おかげに因よって文章以外に一種の趣味を添え得たるは余の深く徳とする所である。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "cri2s",
      text:
        "　自分が今迄「吾輩は猫である」を草しつつあった際、一面識もない人が時々書信又は絵端書抔えはがきなどをわざわざ寄せて意外の褒辞ほうじを賜わった事がある。自分が書いたものが斯こんな見ず知らずの人から同情を受けて居ると云う事を発見するのは非常に難有ありがたい。今出版の機を利用して是等これらの諸君に向って一言感謝の意を表する。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "7avrl",
      text:
        "　此書は趣向もなく、構造もなく、尾頭の心元なき海鼠なまこの様な文章であるから、たとい此一巻で消えてなくなった所で一向差さし支つかえはない。又実際消えてなくなるかも知れん。然し将来忙中に閑を偸ぬすんで硯すずりの塵ちりを吹く機会があれば再び稿を続ぐ積つもりである。猫が生きて居る間は――猫が丈夫で居る間は――猫が気が向くときは――余も亦また筆を執とらねばらぬ。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "6lkvd",
      text: "　　明治三十八年九月",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "7n6b4",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "fjapj",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ],
  entityMap: {
    "0": {
      type: "IMAGE",
      mutability: "IMMUTABLE",
      data: {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Ich_der_Kater.jpg"
      }
    }
  }
};
