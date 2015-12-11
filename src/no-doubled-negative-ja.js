// LICENSE : MIT
"use strict";
// tokens -> event emitter -> return check
import {getTokenizer} from "kuromojin";
import NakumonaiRule from "./rules/なくは-ない";
import NidemoNaiRule from "./rules/ないでも-ない";
export default function (context) {
    const {Syntax,getSource, report,RuleError} = context;
    const ruleなくもない = NakumonaiRule(context);
    const ruleないでもない = NidemoNaiRule(context);
    return {
        [Syntax.Str](node){
            const text = getSource(node);
            const results = [];
            const pushError = (error) => {
                if (error) {
                    results.push(error);
                }
            };
            return getTokenizer().then(tokenizer => {
                return tokenizer.tokenizeForSentence(text);
            }).then(tokens => {
                tokens.forEach(token => {
                    pushError(ruleなくもない(token));
                    pushError(ruleないでもない(token));
                });
            }).then(()=> {
                results.forEach(error => {
                    report(node, error);
                })
            })
        }
    }

}