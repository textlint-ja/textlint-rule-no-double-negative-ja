// LICENSE : MIT
"use strict";
/*
    (e)「~ないわけでは / でもない」
 */
import matchTokenStream from "./../matchTokenStream";
export default function (context) {
    const {RuleError} = context;
    const matchPatternないわけでもない = matchTokenStream([
        {
            "basic_form": "ない"
        },
        {
            "reading": "ワケ",// 漢字に対応するため
            "pos": "名詞"
        },
        {
            "conjugated_form": "連用形",
            "basic_form": "だ"
        },
        {
            "surface_form": "も",
            "pos": "助詞"
        },
        {
            "basic_form": "ない",
            "pos": "形容詞"
        }
    ]);
    const matchPatternないわけではない = matchTokenStream([
        {
            "basic_form": "ない"
        },
        {
            "reading": "ワケ",// 漢字に対応するため
            "pos": "名詞"
        },
        {
            "conjugated_form": "連用形",
            "basic_form": "だ"
        },
        {
            "surface_form": "は",
            "pos": "助詞"
        },
        {
            "basic_form": "ない"
        }
    ]);
    return (token) => {
        if (matchPatternないわけでもない(token)) {
            return new RuleError("二重否定: 〜ないわけでもない", {
                column: token.word_position - 1
            });
        }
        if (matchPatternないわけではない(token)) {
            return new RuleError("二重否定: 〜ないわけではない", {
                column: token.word_position - 1
            });
        }
    };
}