import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { EditorState, convertFromRaw, RawDraftContentState } from "draft-js";

import { DynamicUnicornEditor } from "../src/components/unicorn-editor/UnicornEditor";

export default function Editor() {
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createWithContent(convertFromRaw(initialEditorState))
  );

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <DynamicUnicornEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </Box>
    </Container>
  );
}

const initialEditorState: RawDraftContentState = {
  blocks: [
    {
      key: "5m8m0",
      text: "序",
      type: "header-one",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "3ps73",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "77vtj",
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
      key: "8qe99",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "7imp2",
      text:
        "　「吾輩は猫である」は雜誌ホトヽギスに連載した續き物である。固より纒つた話の筋を讀ませる普通の小説ではないから、どこで切つて一册としても興味の上に於て左したる影響のあらう筈がない。然し自分の考ではもう少し書いた上でと思つて居たが、書肆が頻りに催促をするのと、多忙で意の如く稿を續ぐ餘暇がないので［＃「ないので」は底本では「なので」］、差し當り是丈を出版する事にした。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "fsn07",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "r9q6",
      text:
        "　自分が既に雜誌へ出したものを再び單行本の體裁として公にする以上は、之を公にする丈の價値があると云ふ意味に解釋されるかも知れぬ。「吾輩は猫である」が果してそれ丈の價値があるかないかは著者の分として言ふべき限りでないと思ふ。たゞ自分の書いたものが自分の思ふ樣な體裁で世の中へ出るのは、内容の價値如何に關らず、自分丈は嬉しい感じがする。自分に對しては此事實が出版を促がすに充分な動機である。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "1nqes",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "5dhim",
      text:
        "　此書を公けにするに就て中村不折氏は數葉の挿畫をかいてくれた。橋口五葉氏は表紙其他の模樣を意匠してくれた。兩君の御蔭に因つて文章以外に一種の趣味を添へ得たるは余の深く徳とする所である。［＃「。」は底本では「、」］",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "15dak",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "amlbl",
      text:
        "　自分が今迄「吾輩は猫である」を草しつゝあつた際、一面識もない人が時々書信又は繪端書抔をわざ／＼寄せて意外の褒辭を賜はつた事がある。自分が書いたものが斯んな見ず知らずの人から同情を受けて居ると云ふ事を發見するのは非常に難有い。今出版の機を利用して是等の諸君に向つて一言感謝の意を表する。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "9820g",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "ee523",
      text:
        "　此書は趣向もなく、搆造もなく、尾頭の心元なき海鼠の樣な文章であるから、たとひ此一卷で消えてなくなつた所で一向差し支へはない。又實際消えてなくなるかも知れん。然し將來忙中に閑を偸んで硯の塵を吹く機會があれは再び稿を續ぐ積である。猫が生きて居る間は――猫が丈夫で居る間は――猫が氣が向くときは――余も亦筆を執らねばならぬ。",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "dupr1",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "cfjgp",
      text: "　明治三十八年九月　　夏目漱石",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 1,
          length: 14,
          style: "BOLD"
        }
      ],
      entityRanges: [],
      data: {}
    },
    {
      key: "b01fb",
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
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Ich_der_Kater.jpg",
        width: 98,
        alignment: "center"
      }
    }
  }
};
