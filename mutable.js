module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFunction(fn) {
  return Object.prototype.toString.call(fn) == '[object Function]'
}

function extend(target) {
    var fn = arguments[arguments.length-1]
    fn = isFunction(fn) ? fn : false
    
    for (var i = 1; i < arguments.length-(1&fn); i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key) && (!fn || fn(target, source, key))) {
                target[key] = source[key]
            }
        }
    }

    return target
}
