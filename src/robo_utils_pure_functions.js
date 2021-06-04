function formatUnicorn(str) {
    // based on https://stackoverflow.com/a/18234317
    str = str.toString();
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length) {
        var t = typeof args[0];
        var key;
        args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(args)
            : args[0];

        for (key in args) {
            // replace {key} with the value of args[key]
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
            // replace {key?valueIfTrue:valueIfFalse} with
            // the value of (args[key] ? valueIfTrue : valueIfFalse).
            // If p1 or p2 is a braced variable name, get its value
            // TODO make this tidier / recursive
            str = str.replace(new RegExp("\\{" + key + "\\?\\{([^?:}]*)\\}:\\{([^?:}]*)\\}\\}", "gi"),
                  (match, p1, p2) => args[key] ? args[p1.slice(1, -1)] : args[p2.slice(1, -1)]);
            str = str.replace(new RegExp("\\{" + key + "\\?\\{([^?:}]*)\\}:([^?:}]*)\\}", "gi"),
                  (match, p1, p2) => args[key] ? args[p1.slice(1, -1)] : p2);
            str = str.replace(new RegExp("\\{" + key + "\\?([^?:}]*):\\{([^?:}]*)\\}\\}", "gi"),
                  (match, p1, p2) => args[key] ? p1 : args[p2.slice(1, -1)]);
            str = str.replace(new RegExp("\\{" + key + "\\?([^?:}]*):([^?:}]*)\\}", "gi"),
                  (match, p1, p2) => args[key] ? p1 : p2);
        }
    }
    return str;
};

function adjectify(rank, words, breaks) {
    words[2] = words[2] ? words[2] : '';
    if (rank < breaks[2]) {
        return 'significantly ' + words[0] + ' than';
    } else if (rank < breaks[4]) {
        return 'somewhat ' + words[0] + ' than';
    } else if (rank < breaks[6]) {
        return words[2] + 'close to';
        return 'close to';
    } else if (rank < breaks[8]) {
        return 'somewhat ' + words[1] + ' than';
    } else {
        return 'significantly ' + words[1] + ' than';
    }
}

function plusminus(value, unit, singular = '%') {
    unit = Math.abs(value) === 1 ? singular : unit;
    if (value > 0) {
        return 'an increase of ' + value + unit + ' compared to 2001';
    } else if (value < 0) {
        return 'a decrease of ' + Math.abs(value) + unit + ' compared to 2001'
    }  else if (value < 0) {
        return 'the same as in 2001'
    }
}

function ordinal_suffix_of(i) {
    if (i < 10) {
        return [
            "",
            "",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth",
            "seventh",
            "eighth",
            "ninth"
        ][i];
    }
    // TODO: check if the remainder of this function is correct
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

export { formatUnicorn, adjectify, plusminus, ordinal_suffix_of };
