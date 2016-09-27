/**
 * Created by sunsu on 2016/9/22.
 */
export default function clone(val) {
    var o = {};

    if (typeof val == 'object') {
        if (val == null) {
            o = null;
        }
        else if (val instanceof Array) {
            var len = val.length;
            o = [];
            for (var i = 0; i < len; i++) {
                o.push(clone(val[i]));
            }
        }
        else {
            for (var t in val) {
                o[t] = clone(val[t]);
            }
        }
    }
    else {
        o = val;
    }
    return o;
};