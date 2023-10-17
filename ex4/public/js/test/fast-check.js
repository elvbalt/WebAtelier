(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

    window.fc = require('fast-check');
    },{"fast-check":195}],2:[function(require,module,exports){
    'use strict'

    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray

    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }

    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63

    function getLens (b64) {
      var len = b64.length

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=')
      if (validLen === -1) validLen = len

      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4)

      return [validLen, placeHoldersLen]
    }

    // base64 is 4/3 + up to two characters of the original data
    function byteLength (b64) {
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function _byteLength (b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function toByteArray (b64) {
      var tmp
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]

      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

      var curByte = 0

      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen

      var i
      for (i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)]
        arr[curByte++] = (tmp >> 16) & 0xFF
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }

      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[curByte++] = tmp & 0xFF
      }

      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp
      var output = []
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF)
        output.push(tripletToBase64(tmp))
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      var tmp
      var len = uint8.length
      var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
      var parts = []
      var maxChunkLength = 16383 // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1]
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        )
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1]
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        )
      }

      return parts.join('')
    }

    },{}],3:[function(require,module,exports){
    (function (Buffer){(function (){
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */

    'use strict'

    var base64 = require('base64-js')
    var ieee754 = require('ieee754')

    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50

    var K_MAX_LENGTH = 0x7fffffff
    exports.kMaxLength = K_MAX_LENGTH

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Print warning and recommend using `buffer` v4.x which has an Object
     *               implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * We report that the browser does not support typed arrays if the are not subclassable
     * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
     * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
     * for __proto__ and has a buggy typed array implementation.
     */
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
        typeof console.error === 'function') {
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      )
    }

    function typedArraySupport () {
      // Can typed array instances can be augmented?
      try {
        var arr = new Uint8Array(1)
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
        return arr.foo() === 42
      } catch (e) {
        return false
      }
    }

    Object.defineProperty(Buffer.prototype, 'parent', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.buffer
      }
    })

    Object.defineProperty(Buffer.prototype, 'offset', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.byteOffset
      }
    })

    function createBuffer (length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"')
      }
      // Return an augmented `Uint8Array` instance
      var buf = new Uint8Array(length)
      buf.__proto__ = Buffer.prototype
      return buf
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          )
        }
        return allocUnsafe(arg)
      }
      return from(arg, encodingOrOffset, length)
    }

    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species != null &&
        Buffer[Symbol.species] === Buffer) {
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
      })
    }

    Buffer.poolSize = 8192 // not used by this implementation

    function from (value, encodingOrOffset, length) {
      if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
      }

      if (ArrayBuffer.isView(value)) {
        return fromArrayLike(value)
      }

      if (value == null) {
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
          'or Array-like Object. Received type ' + (typeof value)
        )
      }

      if (isInstance(value, ArrayBuffer) ||
          (value && isInstance(value.buffer, ArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
      }

      if (typeof value === 'number') {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        )
      }

      var valueOf = value.valueOf && value.valueOf()
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length)
      }

      var b = fromObject(value)
      if (b) return b

      if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
          typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(
          value[Symbol.toPrimitive]('string'), encodingOrOffset, length
        )
      }

      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
      )
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length)
    }

    // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
    // https://github.com/feross/buffer/pull/148
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number')
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"')
      }
    }

    function alloc (size, fill, encoding) {
      assertSize(size)
      if (size <= 0) {
        return createBuffer(size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(size).fill(fill, encoding)
          : createBuffer(size).fill(fill)
      }
      return createBuffer(size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(size, fill, encoding)
    }

    function allocUnsafe (size) {
      assertSize(size)
      return createBuffer(size < 0 ? 0 : checked(size) | 0)
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(size)
    }
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(size)
    }

    function fromString (string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }

      var length = byteLength(string, encoding) | 0
      var buf = createBuffer(length)

      var actual = buf.write(string, encoding)

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual)
      }

      return buf
    }

    function fromArrayLike (array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0
      var buf = createBuffer(length)
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
      }
      return buf
    }

    function fromArrayBuffer (array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds')
      }

      var buf
      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array)
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset)
      } else {
        buf = new Uint8Array(array, byteOffset, length)
      }

      // Return an augmented `Uint8Array` instance
      buf.__proto__ = Buffer.prototype
      return buf
    }

    function fromObject (obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0
        var buf = createBuffer(len)

        if (buf.length === 0) {
          return buf
        }

        obj.copy(buf, 0, 0, len)
        return buf
      }

      if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
          return createBuffer(0)
        }
        return fromArrayLike(obj)
      }

      if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data)
      }
    }

    function checked (length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
      }
      return Buffer.alloc(+length)
    }

    Buffer.isBuffer = function isBuffer (b) {
      return b != null && b._isBuffer === true &&
        b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    }

    Buffer.compare = function compare (a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
      if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        )
      }

      if (a === b) return 0

      var x = a.length
      var y = b.length

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i]
          y = b[i]
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    }

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    }

    Buffer.concat = function concat (list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i
      if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
          length += list[i].length
        }
      }

      var buffer = Buffer.allocUnsafe(length)
      var pos = 0
      for (i = 0; i < list.length; ++i) {
        var buf = list[i]
        if (isInstance(buf, Uint8Array)) {
          buf = Buffer.from(buf)
        }
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos)
        pos += buf.length
      }
      return buffer
    }

    function byteLength (string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
          'Received type ' + typeof string
        )
      }

      var len = string.length
      var mustMatch = (arguments.length > 2 && arguments[2] === true)
      if (!mustMatch && len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            }
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    Buffer.byteLength = byteLength

    function slowToString (encoding, start, end) {
      var loweredCase = false

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0
      start >>>= 0

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8'

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase()
            loweredCase = true
        }
      }
    }

    // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
    // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
    // reliably in a browserify context because there could be multiple different
    // copies of the 'buffer' package in use. This method works even for Buffer
    // instances that were created from another copy of the `buffer` package.
    // See: https://github.com/feross/buffer/issues/154
    Buffer.prototype._isBuffer = true

    function swap (b, n, m) {
      var i = b[n]
      b[n] = b[m]
      b[m] = i
    }

    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
      }
      return this
    }

    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
      }
      return this
    }

    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
      }
      return this
    }

    Buffer.prototype.toString = function toString () {
      var length = this.length
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    }

    Buffer.prototype.toLocaleString = Buffer.prototype.toString

    Buffer.prototype.equals = function equals (b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    }

    Buffer.prototype.inspect = function inspect () {
      var str = ''
      var max = exports.INSPECT_MAX_BYTES
      str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
      if (this.length > max) str += ' ... '
      return '<Buffer ' + str + '>'
    }

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength)
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. ' +
          'Received type ' + (typeof target)
        )
      }

      if (start === undefined) {
        start = 0
      }
      if (end === undefined) {
        end = target ? target.length : 0
      }
      if (thisStart === undefined) {
        thisStart = 0
      }
      if (thisEnd === undefined) {
        thisEnd = this.length
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0
      end >>>= 0
      thisStart >>>= 0
      thisEnd >>>= 0

      if (this === target) return 0

      var x = thisEnd - thisStart
      var y = end - start
      var len = Math.min(x, y)

      var thisCopy = this.slice(thisStart, thisEnd)
      var targetCopy = target.slice(start, end)

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i]
          y = targetCopy[i]
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    }

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
      }
      byteOffset = +byteOffset // Coerce to Number.
      if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1
      var arrLength = arr.length
      var valLength = val.length

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2
          arrLength /= 2
          valLength /= 2
          byteOffset /= 2
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i
      if (dir) {
        var foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex
            foundIndex = -1
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
          var found = true
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    }

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0
      var remaining = buf.length - offset
      if (!length) {
        length = remaining
      } else {
        length = Number(length)
        if (length > remaining) {
          length = remaining
        }
      }

      var strLen = string.length

      if (length > strLen / 2) {
        length = strLen / 2
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16)
        if (numberIsNaN(parsed)) return i
        buf[offset + i] = parsed
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset >>> 0
        if (isFinite(length)) {
          length = length >>> 0
          if (encoding === undefined) encoding = 'utf8'
        } else {
          encoding = length
          length = undefined
        }
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset
      if (length === undefined || length > remaining) length = remaining

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8'

      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    }

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end)
      var res = []

      var i = start
      while (i < end) {
        var firstByte = buf[i]
        var codePoint = null
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
            : (firstByte > 0xBF) ? 2
              : 1

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte
              }
              break
            case 2:
              secondByte = buf[i + 1]
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 3:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 4:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              fourthByte = buf[i + 3]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD
          bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000
          res.push(codePoint >>> 10 & 0x3FF | 0xD800)
          codePoint = 0xDC00 | codePoint & 0x3FF
        }

        res.push(codePoint)
        i += bytesPerSequence
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000

    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = ''
      var i = 0
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      var len = buf.length

      if (!start || start < 0) start = 0
      if (!end || end < 0 || end > len) end = len

      var out = ''
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i])
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end)
      var res = ''
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length
      start = ~~start
      end = end === undefined ? len : ~~end

      if (start < 0) {
        start += len
        if (start < 0) start = 0
      } else if (start > len) {
        start = len
      }

      if (end < 0) {
        end += len
        if (end < 0) end = 0
      } else if (end > len) {
        end = len
      }

      if (end < start) end = start

      var newBuf = this.subarray(start, end)
      // Return an augmented `Uint8Array` instance
      newBuf.__proto__ = Buffer.prototype
      return newBuf
    }

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }

      return val
    }

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length)
      }

      var val = this[offset + --byteLength]
      var mul = 1
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul
      }

      return val
    }

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      return this[offset]
    }

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return this[offset] | (this[offset + 1] << 8)
    }

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return (this[offset] << 8) | this[offset + 1]
    }

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    }

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    }

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
      mul *= 0x80

      if (val >= mul) val -= Math.pow(2, 8 * byteLength)

      return val
    }

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)

      var i = byteLength
      var mul = 1
      var val = this[offset + --i]
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
      }
      mul *= 0x80

      if (val >= mul) val -= Math.pow(2, 8 * byteLength)

      return val
    }

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    }

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset] | (this[offset + 1] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset + 1] | (this[offset] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    }

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    }

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, true, 23, 4)
    }

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, false, 23, 4)
    }

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, true, 52, 8)
    }

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, false, 52, 8)
    }

    function checkInt (buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }

      var mul = 1
      var i = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }

      var i = byteLength - 1
      var mul = 1
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
      this[offset] = (value & 0xff)
      return offset + 1
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset + 3] = (value >>> 24)
      this[offset + 2] = (value >>> 16)
      this[offset + 1] = (value >>> 8)
      this[offset] = (value & 0xff)
      return offset + 4
    }

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }

      var i = 0
      var mul = 1
      var sub = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)

        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }

      var i = byteLength - 1
      var mul = 1
      var sub = 0
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }

      return offset + byteLength
    }

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
      if (value < 0) value = 0xff + value + 1
      this[offset] = (value & 0xff)
      return offset + 1
    }

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      this[offset + 2] = (value >>> 16)
      this[offset + 3] = (value >>> 24)
      return offset + 4
    }

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      if (value < 0) value = 0xffffffff + value + 1
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4)
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    }

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8)
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    }

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
      if (!start) start = 0
      if (!end && end !== 0) end = this.length
      if (targetStart >= target.length) targetStart = target.length
      if (!targetStart) targetStart = 0
      if (end > 0 && end < start) end = start

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
      }

      var len = end - start

      if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end)
      } else if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (var i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start]
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        )
      }

      return len
    }

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start
          start = 0
          end = this.length
        } else if (typeof end === 'string') {
          encoding = end
          end = this.length
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0)
          if ((encoding === 'utf8' && code < 128) ||
              encoding === 'latin1') {
            // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code
          }
        }
      } else if (typeof val === 'number') {
        val = val & 255
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0
      end = end === undefined ? this.length : end >>> 0

      if (!val) val = 0

      var i
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val
        }
      } else {
        var bytes = Buffer.isBuffer(val)
          ? val
          : Buffer.from(val, encoding)
        var len = bytes.length
        if (len === 0) {
          throw new TypeError('The value "' + val +
            '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len]
        }
      }

      return this
    }

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

    function base64clean (str) {
      // Node takes equal signs as end of the Base64 encoding
      str = str.split('=')[0]
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = str.trim().replace(INVALID_BASE64_RE, '')
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '='
      }
      return str
    }

    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity
      var codePoint
      var length = string.length
      var leadSurrogate = null
      var bytes = []

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            }

            // valid lead
            leadSurrogate = codePoint

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }

        leadSurrogate = null

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint)
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      var c, hi, lo
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
      }

      return byteArray
    }

    function base64ToBytes (str) {
      return base64.toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
      }
      return i
    }

    // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
    // the `instanceof` check but they should be treated as of that type.
    // See: https://github.com/feross/buffer/issues/166
    function isInstance (obj, type) {
      return obj instanceof type ||
        (obj != null && obj.constructor != null && obj.constructor.name != null &&
          obj.constructor.name === type.name)
    }
    function numberIsNaN (obj) {
      // For IE11 support
      return obj !== obj // eslint-disable-line no-self-compare
    }

    }).call(this)}).call(this,require("buffer").Buffer)
    },{"base64-js":2,"buffer":3,"ieee754":204}],4:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.adapter = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const Stream_1 = require("../../stream/Stream");
    const AdaptedValue = Symbol('adapted-value');
    function toAdapterValue(rawValue, adapter) {
        const adapted = adapter(rawValue.value_);
        if (!adapted.adapted) {
            return rawValue;
        }
        return new Value_1.Value(adapted.value, AdaptedValue);
    }
    class AdapterArbitrary extends Arbitrary_1.Arbitrary {
        constructor(sourceArb, adapter) {
            super();
            this.sourceArb = sourceArb;
            this.adapter = adapter;
            this.adaptValue = (rawValue) => toAdapterValue(rawValue, adapter);
        }
        generate(mrng, biasFactor) {
            const rawValue = this.sourceArb.generate(mrng, biasFactor);
            return this.adaptValue(rawValue);
        }
        canShrinkWithoutContext(value) {
            return this.sourceArb.canShrinkWithoutContext(value) && !this.adapter(value).adapted;
        }
        shrink(value, context) {
            if (context === AdaptedValue) {
                if (!this.sourceArb.canShrinkWithoutContext(value)) {
                    return Stream_1.Stream.nil();
                }
                return this.sourceArb.shrink(value, undefined).map(this.adaptValue);
            }
            return this.sourceArb.shrink(value, context).map(this.adaptValue);
        }
    }
    function adapter(sourceArb, adapter) {
        return new AdapterArbitrary(sourceArb, adapter);
    }
    exports.adapter = adapter;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/Stream":198}],5:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlwaysShrinkableArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Stream_1 = require("../../stream/Stream");
    const NoUndefinedAsContext_1 = require("./helpers/NoUndefinedAsContext");
    class AlwaysShrinkableArbitrary extends Arbitrary_1.Arbitrary {
        constructor(arb) {
            super();
            this.arb = arb;
        }
        generate(mrng, biasFactor) {
            const value = this.arb.generate(mrng, biasFactor);
            return (0, NoUndefinedAsContext_1.noUndefinedAsContext)(value);
        }
        canShrinkWithoutContext(value) {
            return true;
        }
        shrink(value, context) {
            if (context === undefined && !this.arb.canShrinkWithoutContext(value)) {
                return Stream_1.Stream.nil();
            }
            const safeContext = context !== NoUndefinedAsContext_1.UndefinedContextPlaceholder ? context : undefined;
            return this.arb.shrink(value, safeContext).map(NoUndefinedAsContext_1.noUndefinedAsContext);
        }
    }
    exports.AlwaysShrinkableArbitrary = AlwaysShrinkableArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../stream/Stream":198,"./helpers/NoUndefinedAsContext":46}],6:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArrayArbitrary = void 0;
    const Stream_1 = require("../../stream/Stream");
    const symbols_1 = require("../../check/symbols");
    const integer_1 = require("../integer");
    const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const DepthContext_1 = require("./helpers/DepthContext");
    const BuildSlicedGenerator_1 = require("./helpers/BuildSlicedGenerator");
    const globals_1 = require("../../utils/globals");
    const safeMathFloor = Math.floor;
    const safeMathLog = Math.log;
    const safeMathMax = Math.max;
    const safeArrayIsArray = Array.isArray;
    function biasedMaxLength(minLength, maxLength) {
        if (minLength === maxLength) {
            return minLength;
        }
        return minLength + safeMathFloor(safeMathLog(maxLength - minLength) / safeMathLog(2));
    }
    class ArrayArbitrary extends Arbitrary_1.Arbitrary {
        constructor(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, setBuilder, customSlices) {
            super();
            this.arb = arb;
            this.minLength = minLength;
            this.maxGeneratedLength = maxGeneratedLength;
            this.maxLength = maxLength;
            this.setBuilder = setBuilder;
            this.customSlices = customSlices;
            this.lengthArb = (0, integer_1.integer)({ min: minLength, max: maxGeneratedLength });
            this.depthContext = (0, DepthContext_1.getDepthContextFor)(depthIdentifier);
        }
        preFilter(tab) {
            if (this.setBuilder === undefined) {
                return tab;
            }
            const s = this.setBuilder();
            for (let index = 0; index !== tab.length; ++index) {
                s.tryAdd(tab[index]);
            }
            return s.getData();
        }
        static makeItCloneable(vs, shrinkables) {
            vs[symbols_1.cloneMethod] = () => {
                const cloned = [];
                for (let idx = 0; idx !== shrinkables.length; ++idx) {
                    (0, globals_1.safePush)(cloned, shrinkables[idx].value);
                }
                this.makeItCloneable(cloned, shrinkables);
                return cloned;
            };
            return vs;
        }
        generateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems) {
            let numSkippedInRow = 0;
            const s = setBuilder();
            const slicedGenerator = (0, BuildSlicedGenerator_1.buildSlicedGenerator)(this.arb, mrng, this.customSlices, biasFactorItems);
            while (s.size() < N && numSkippedInRow < this.maxGeneratedLength) {
                const current = slicedGenerator.next();
                if (s.tryAdd(current)) {
                    numSkippedInRow = 0;
                }
                else {
                    numSkippedInRow += 1;
                }
            }
            return s.getData();
        }
        safeGenerateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems) {
            const depthImpact = safeMathMax(0, N - biasedMaxLength(this.minLength, this.maxGeneratedLength));
            this.depthContext.depth += depthImpact;
            try {
                return this.generateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems);
            }
            finally {
                this.depthContext.depth -= depthImpact;
            }
        }
        generateNItems(N, mrng, biasFactorItems) {
            const items = [];
            const slicedGenerator = (0, BuildSlicedGenerator_1.buildSlicedGenerator)(this.arb, mrng, this.customSlices, biasFactorItems);
            slicedGenerator.attemptExact(N);
            for (let index = 0; index !== N; ++index) {
                const current = slicedGenerator.next();
                (0, globals_1.safePush)(items, current);
            }
            return items;
        }
        safeGenerateNItems(N, mrng, biasFactorItems) {
            const depthImpact = safeMathMax(0, N - biasedMaxLength(this.minLength, this.maxGeneratedLength));
            this.depthContext.depth += depthImpact;
            try {
                return this.generateNItems(N, mrng, biasFactorItems);
            }
            finally {
                this.depthContext.depth -= depthImpact;
            }
        }
        wrapper(itemsRaw, shrunkOnce, itemsRawLengthContext, startIndex) {
            const items = shrunkOnce ? this.preFilter(itemsRaw) : itemsRaw;
            let cloneable = false;
            const vs = [];
            const itemsContexts = [];
            for (let idx = 0; idx !== items.length; ++idx) {
                const s = items[idx];
                cloneable = cloneable || s.hasToBeCloned;
                (0, globals_1.safePush)(vs, s.value);
                (0, globals_1.safePush)(itemsContexts, s.context);
            }
            if (cloneable) {
                ArrayArbitrary.makeItCloneable(vs, items);
            }
            const context = {
                shrunkOnce,
                lengthContext: itemsRaw.length === items.length && itemsRawLengthContext !== undefined
                    ? itemsRawLengthContext
                    : undefined,
                itemsContexts,
                startIndex,
            };
            return new Value_1.Value(vs, context);
        }
        generate(mrng, biasFactor) {
            const biasMeta = this.applyBias(mrng, biasFactor);
            const targetSize = biasMeta.size;
            const items = this.setBuilder !== undefined
                ? this.safeGenerateNItemsNoDuplicates(this.setBuilder, targetSize, mrng, biasMeta.biasFactorItems)
                : this.safeGenerateNItems(targetSize, mrng, biasMeta.biasFactorItems);
            return this.wrapper(items, false, undefined, 0);
        }
        applyBias(mrng, biasFactor) {
            if (biasFactor === undefined) {
                return { size: this.lengthArb.generate(mrng, undefined).value };
            }
            if (this.minLength === this.maxGeneratedLength) {
                return { size: this.lengthArb.generate(mrng, undefined).value, biasFactorItems: biasFactor };
            }
            if (mrng.nextInt(1, biasFactor) !== 1) {
                return { size: this.lengthArb.generate(mrng, undefined).value };
            }
            if (mrng.nextInt(1, biasFactor) !== 1 || this.minLength === this.maxGeneratedLength) {
                return { size: this.lengthArb.generate(mrng, undefined).value, biasFactorItems: biasFactor };
            }
            const maxBiasedLength = biasedMaxLength(this.minLength, this.maxGeneratedLength);
            const targetSizeValue = (0, integer_1.integer)({ min: this.minLength, max: maxBiasedLength }).generate(mrng, undefined);
            return { size: targetSizeValue.value, biasFactorItems: biasFactor };
        }
        canShrinkWithoutContext(value) {
            if (!safeArrayIsArray(value) || this.minLength > value.length || value.length > this.maxLength) {
                return false;
            }
            for (let index = 0; index !== value.length; ++index) {
                if (!(index in value)) {
                    return false;
                }
                if (!this.arb.canShrinkWithoutContext(value[index])) {
                    return false;
                }
            }
            const filtered = this.preFilter((0, globals_1.safeMap)(value, (item) => new Value_1.Value(item, undefined)));
            return filtered.length === value.length;
        }
        shrinkItemByItem(value, safeContext, endIndex) {
            let shrinks = Stream_1.Stream.nil();
            for (let index = safeContext.startIndex; index < endIndex; ++index) {
                shrinks = shrinks.join((0, LazyIterableIterator_1.makeLazy)(() => this.arb.shrink(value[index], safeContext.itemsContexts[index]).map((v) => {
                    const beforeCurrent = (0, globals_1.safeMap)((0, globals_1.safeSlice)(value, 0, index), (v, i) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext.itemsContexts[i]));
                    const afterCurrent = (0, globals_1.safeMap)((0, globals_1.safeSlice)(value, index + 1), (v, i) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext.itemsContexts[i + index + 1]));
                    return [
                        [...beforeCurrent, v, ...afterCurrent],
                        undefined,
                        index,
                    ];
                })));
            }
            return shrinks;
        }
        shrinkImpl(value, context) {
            if (value.length === 0) {
                return Stream_1.Stream.nil();
            }
            const safeContext = context !== undefined
                ? context
                : { shrunkOnce: false, lengthContext: undefined, itemsContexts: [], startIndex: 0 };
            return (this.lengthArb
                .shrink(value.length, safeContext.lengthContext)
                .drop(safeContext.shrunkOnce && safeContext.lengthContext === undefined && value.length > this.minLength + 1 ? 1 : 0)
                .map((lengthValue) => {
                const sliceStart = value.length - lengthValue.value;
                return [
                    (0, globals_1.safeMap)((0, globals_1.safeSlice)(value, sliceStart), (v, index) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext.itemsContexts[index + sliceStart])),
                    lengthValue.context,
                    0,
                ];
            })
                .join((0, LazyIterableIterator_1.makeLazy)(() => value.length > this.minLength
                ? this.shrinkItemByItem(value, safeContext, 1)
                : this.shrinkItemByItem(value, safeContext, value.length)))
                .join(value.length > this.minLength
                ? (0, LazyIterableIterator_1.makeLazy)(() => {
                    const subContext = {
                        shrunkOnce: false,
                        lengthContext: undefined,
                        itemsContexts: (0, globals_1.safeSlice)(safeContext.itemsContexts, 1),
                        startIndex: 0,
                    };
                    return this.shrinkImpl((0, globals_1.safeSlice)(value, 1), subContext)
                        .filter((v) => this.minLength <= v[0].length + 1)
                        .map((v) => {
                        return [[new Value_1.Value((0, symbols_1.cloneIfNeeded)(value[0]), safeContext.itemsContexts[0]), ...v[0]], undefined, 0];
                    });
                })
                : Stream_1.Stream.nil()));
        }
        shrink(value, context) {
            return this.shrinkImpl(value, context).map((contextualValue) => this.wrapper(contextualValue[0], true, contextualValue[1], contextualValue[2]));
        }
    }
    exports.ArrayArbitrary = ArrayArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../check/symbols":193,"../../stream/LazyIterableIterator":197,"../../stream/Stream":198,"../../utils/globals":201,"../integer":120,"./helpers/BuildSlicedGenerator":36,"./helpers/DepthContext":38}],7:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.arrayInt64 = void 0;
    const Stream_1 = require("../../stream/Stream");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const ArrayInt64_1 = require("./helpers/ArrayInt64");
    class ArrayInt64Arbitrary extends Arbitrary_1.Arbitrary {
        constructor(min, max) {
            super();
            this.min = min;
            this.max = max;
            this.biasedRanges = null;
        }
        generate(mrng, biasFactor) {
            const range = this.computeGenerateRange(mrng, biasFactor);
            const uncheckedValue = mrng.nextArrayInt(range.min, range.max);
            if (uncheckedValue.data.length === 1) {
                uncheckedValue.data.unshift(0);
            }
            return new Value_1.Value(uncheckedValue, undefined);
        }
        computeGenerateRange(mrng, biasFactor) {
            if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
                return { min: this.min, max: this.max };
            }
            const ranges = this.retrieveBiasedRanges();
            if (ranges.length === 1) {
                return ranges[0];
            }
            const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
            return id < 0 ? ranges[0] : ranges[id + 1];
        }
        canShrinkWithoutContext(value) {
            const unsafeValue = value;
            return (typeof value === 'object' &&
                value !== null &&
                (unsafeValue.sign === -1 || unsafeValue.sign === 1) &&
                Array.isArray(unsafeValue.data) &&
                unsafeValue.data.length === 2 &&
                (((0, ArrayInt64_1.isStrictlySmaller64)(this.min, unsafeValue) && (0, ArrayInt64_1.isStrictlySmaller64)(unsafeValue, this.max)) ||
                    (0, ArrayInt64_1.isEqual64)(this.min, unsafeValue) ||
                    (0, ArrayInt64_1.isEqual64)(this.max, unsafeValue)));
        }
        shrinkArrayInt64(value, target, tryTargetAsap) {
            const realGap = (0, ArrayInt64_1.substract64)(value, target);
            function* shrinkGen() {
                let previous = tryTargetAsap ? undefined : target;
                const gap = tryTargetAsap ? realGap : (0, ArrayInt64_1.halve64)(realGap);
                for (let toremove = gap; !(0, ArrayInt64_1.isZero64)(toremove); toremove = (0, ArrayInt64_1.halve64)(toremove)) {
                    const next = (0, ArrayInt64_1.substract64)(value, toremove);
                    yield new Value_1.Value(next, previous);
                    previous = next;
                }
            }
            return (0, Stream_1.stream)(shrinkGen());
        }
        shrink(current, context) {
            if (!ArrayInt64Arbitrary.isValidContext(current, context)) {
                const target = this.defaultTarget();
                return this.shrinkArrayInt64(current, target, true);
            }
            if (this.isLastChanceTry(current, context)) {
                return Stream_1.Stream.of(new Value_1.Value(context, undefined));
            }
            return this.shrinkArrayInt64(current, context, false);
        }
        defaultTarget() {
            if (!(0, ArrayInt64_1.isStrictlyPositive64)(this.min) && !(0, ArrayInt64_1.isStrictlyNegative64)(this.max)) {
                return ArrayInt64_1.Zero64;
            }
            return (0, ArrayInt64_1.isStrictlyNegative64)(this.min) ? this.max : this.min;
        }
        isLastChanceTry(current, context) {
            if ((0, ArrayInt64_1.isZero64)(current)) {
                return false;
            }
            if (current.sign === 1) {
                return (0, ArrayInt64_1.isEqual64)(current, (0, ArrayInt64_1.add64)(context, ArrayInt64_1.Unit64)) && (0, ArrayInt64_1.isStrictlyPositive64)((0, ArrayInt64_1.substract64)(current, this.min));
            }
            else {
                return (0, ArrayInt64_1.isEqual64)(current, (0, ArrayInt64_1.substract64)(context, ArrayInt64_1.Unit64)) && (0, ArrayInt64_1.isStrictlyNegative64)((0, ArrayInt64_1.substract64)(current, this.max));
            }
        }
        static isValidContext(_current, context) {
            if (context === undefined) {
                return false;
            }
            if (typeof context !== 'object' || context === null || !('sign' in context) || !('data' in context)) {
                throw new Error(`Invalid context type passed to ArrayInt64Arbitrary (#1)`);
            }
            return true;
        }
        retrieveBiasedRanges() {
            if (this.biasedRanges != null) {
                return this.biasedRanges;
            }
            if ((0, ArrayInt64_1.isEqual64)(this.min, this.max)) {
                this.biasedRanges = [{ min: this.min, max: this.max }];
                return this.biasedRanges;
            }
            const minStrictlySmallerZero = (0, ArrayInt64_1.isStrictlyNegative64)(this.min);
            const maxStrictlyGreaterZero = (0, ArrayInt64_1.isStrictlyPositive64)(this.max);
            if (minStrictlySmallerZero && maxStrictlyGreaterZero) {
                const logMin = (0, ArrayInt64_1.logLike64)(this.min);
                const logMax = (0, ArrayInt64_1.logLike64)(this.max);
                this.biasedRanges = [
                    { min: logMin, max: logMax },
                    { min: (0, ArrayInt64_1.substract64)(this.max, logMax), max: this.max },
                    { min: this.min, max: (0, ArrayInt64_1.substract64)(this.min, logMin) },
                ];
            }
            else {
                const logGap = (0, ArrayInt64_1.logLike64)((0, ArrayInt64_1.substract64)(this.max, this.min));
                const arbCloseToMin = { min: this.min, max: (0, ArrayInt64_1.add64)(this.min, logGap) };
                const arbCloseToMax = { min: (0, ArrayInt64_1.substract64)(this.max, logGap), max: this.max };
                this.biasedRanges = minStrictlySmallerZero
                    ? [arbCloseToMax, arbCloseToMin]
                    : [arbCloseToMin, arbCloseToMax];
            }
            return this.biasedRanges;
        }
    }
    function arrayInt64(min, max) {
        const arb = new ArrayInt64Arbitrary(min, max);
        return arb;
    }
    exports.arrayInt64 = arrayInt64;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/Stream":198,"./helpers/ArrayInt64":33}],8:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BigIntArbitrary = void 0;
    const Stream_1 = require("../../stream/Stream");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const BiasNumericRange_1 = require("./helpers/BiasNumericRange");
    const ShrinkBigInt_1 = require("./helpers/ShrinkBigInt");
    const globals_1 = require("../../utils/globals");
    class BigIntArbitrary extends Arbitrary_1.Arbitrary {
        constructor(min, max) {
            super();
            this.min = min;
            this.max = max;
        }
        generate(mrng, biasFactor) {
            const range = this.computeGenerateRange(mrng, biasFactor);
            return new Value_1.Value(mrng.nextBigInt(range.min, range.max), undefined);
        }
        computeGenerateRange(mrng, biasFactor) {
            if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
                return { min: this.min, max: this.max };
            }
            const ranges = (0, BiasNumericRange_1.biasNumericRange)(this.min, this.max, BiasNumericRange_1.bigIntLogLike);
            if (ranges.length === 1) {
                return ranges[0];
            }
            const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
            return id < 0 ? ranges[0] : ranges[id + 1];
        }
        canShrinkWithoutContext(value) {
            return typeof value === 'bigint' && this.min <= value && value <= this.max;
        }
        shrink(current, context) {
            if (!BigIntArbitrary.isValidContext(current, context)) {
                const target = this.defaultTarget();
                return (0, ShrinkBigInt_1.shrinkBigInt)(current, target, true);
            }
            if (this.isLastChanceTry(current, context)) {
                return Stream_1.Stream.of(new Value_1.Value(context, undefined));
            }
            return (0, ShrinkBigInt_1.shrinkBigInt)(current, context, false);
        }
        defaultTarget() {
            if (this.min <= 0 && this.max >= 0) {
                return (0, globals_1.BigInt)(0);
            }
            return this.min < 0 ? this.max : this.min;
        }
        isLastChanceTry(current, context) {
            if (current > 0)
                return current === context + (0, globals_1.BigInt)(1) && current > this.min;
            if (current < 0)
                return current === context - (0, globals_1.BigInt)(1) && current < this.max;
            return false;
        }
        static isValidContext(current, context) {
            if (context === undefined) {
                return false;
            }
            if (typeof context !== 'bigint') {
                throw new Error(`Invalid context type passed to BigIntArbitrary (#1)`);
            }
            const differentSigns = (current > 0 && context < 0) || (current < 0 && context > 0);
            if (context !== (0, globals_1.BigInt)(0) && differentSigns) {
                throw new Error(`Invalid context value passed to BigIntArbitrary (#2)`);
            }
            return true;
        }
    }
    exports.BigIntArbitrary = BigIntArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/Stream":198,"../../utils/globals":201,"./helpers/BiasNumericRange":34,"./helpers/ShrinkBigInt":50}],9:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloneArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const symbols_1 = require("../../check/symbols");
    const Stream_1 = require("../../stream/Stream");
    const globals_1 = require("../../utils/globals");
    const safeSymbolIterator = Symbol.iterator;
    const safeIsArray = Array.isArray;
    const safeObjectIs = Object.is;
    class CloneArbitrary extends Arbitrary_1.Arbitrary {
        constructor(arb, numValues) {
            super();
            this.arb = arb;
            this.numValues = numValues;
        }
        generate(mrng, biasFactor) {
            const items = [];
            if (this.numValues <= 0) {
                return this.wrapper(items);
            }
            for (let idx = 0; idx !== this.numValues - 1; ++idx) {
                (0, globals_1.safePush)(items, this.arb.generate(mrng.clone(), biasFactor));
            }
            (0, globals_1.safePush)(items, this.arb.generate(mrng, biasFactor));
            return this.wrapper(items);
        }
        canShrinkWithoutContext(value) {
            if (!safeIsArray(value) || value.length !== this.numValues) {
                return false;
            }
            if (value.length === 0) {
                return true;
            }
            for (let index = 1; index < value.length; ++index) {
                if (!safeObjectIs(value[0], value[index])) {
                    return false;
                }
            }
            return this.arb.canShrinkWithoutContext(value[0]);
        }
        shrink(value, context) {
            if (value.length === 0) {
                return Stream_1.Stream.nil();
            }
            return new Stream_1.Stream(this.shrinkImpl(value, context !== undefined ? context : [])).map((v) => this.wrapper(v));
        }
        *shrinkImpl(value, contexts) {
            const its = (0, globals_1.safeMap)(value, (v, idx) => this.arb.shrink(v, contexts[idx])[safeSymbolIterator]());
            let cur = (0, globals_1.safeMap)(its, (it) => it.next());
            while (!cur[0].done) {
                yield (0, globals_1.safeMap)(cur, (c) => c.value);
                cur = (0, globals_1.safeMap)(its, (it) => it.next());
            }
        }
        static makeItCloneable(vs, shrinkables) {
            vs[symbols_1.cloneMethod] = () => {
                const cloned = [];
                for (let idx = 0; idx !== shrinkables.length; ++idx) {
                    (0, globals_1.safePush)(cloned, shrinkables[idx].value);
                }
                this.makeItCloneable(cloned, shrinkables);
                return cloned;
            };
            return vs;
        }
        wrapper(items) {
            let cloneable = false;
            const vs = [];
            const contexts = [];
            for (let idx = 0; idx !== items.length; ++idx) {
                const s = items[idx];
                cloneable = cloneable || s.hasToBeCloned;
                (0, globals_1.safePush)(vs, s.value);
                (0, globals_1.safePush)(contexts, s.context);
            }
            if (cloneable) {
                CloneArbitrary.makeItCloneable(vs, items);
            }
            return new Value_1.Value(vs, contexts);
        }
    }
    exports.CloneArbitrary = CloneArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../check/symbols":193,"../../stream/Stream":198,"../../utils/globals":201}],10:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandsArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const CommandsIterable_1 = require("../../check/model/commands/CommandsIterable");
    const CommandWrapper_1 = require("../../check/model/commands/CommandWrapper");
    const ReplayPath_1 = require("../../check/model/ReplayPath");
    const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
    const Stream_1 = require("../../stream/Stream");
    const oneof_1 = require("../oneof");
    const RestrictedIntegerArbitraryBuilder_1 = require("./builders/RestrictedIntegerArbitraryBuilder");
    class CommandsArbitrary extends Arbitrary_1.Arbitrary {
        constructor(commandArbs, maxGeneratedCommands, maxCommands, sourceReplayPath, disableReplayLog) {
            super();
            this.sourceReplayPath = sourceReplayPath;
            this.disableReplayLog = disableReplayLog;
            this.oneCommandArb = (0, oneof_1.oneof)(...commandArbs).map((c) => new CommandWrapper_1.CommandWrapper(c));
            this.lengthArb = (0, RestrictedIntegerArbitraryBuilder_1.restrictedIntegerArbitraryBuilder)(0, maxGeneratedCommands, maxCommands);
            this.replayPath = [];
            this.replayPathPosition = 0;
        }
        metadataForReplay() {
            return this.disableReplayLog ? '' : `replayPath=${JSON.stringify(ReplayPath_1.ReplayPath.stringify(this.replayPath))}`;
        }
        buildValueFor(items, shrunkOnce) {
            const commands = items.map((item) => item.value_);
            const context = { shrunkOnce, items };
            return new Value_1.Value(new CommandsIterable_1.CommandsIterable(commands, () => this.metadataForReplay()), context);
        }
        generate(mrng) {
            const size = this.lengthArb.generate(mrng, undefined);
            const sizeValue = size.value;
            const items = Array(sizeValue);
            for (let idx = 0; idx !== sizeValue; ++idx) {
                const item = this.oneCommandArb.generate(mrng, undefined);
                items[idx] = item;
            }
            this.replayPathPosition = 0;
            return this.buildValueFor(items, false);
        }
        canShrinkWithoutContext(value) {
            return false;
        }
        filterOnExecution(itemsRaw) {
            const items = [];
            for (const c of itemsRaw) {
                if (c.value_.hasRan) {
                    this.replayPath.push(true);
                    items.push(c);
                }
                else
                    this.replayPath.push(false);
            }
            return items;
        }
        filterOnReplay(itemsRaw) {
            return itemsRaw.filter((c, idx) => {
                const state = this.replayPath[this.replayPathPosition + idx];
                if (state === undefined)
                    throw new Error(`Too short replayPath`);
                if (!state && c.value_.hasRan)
                    throw new Error(`Mismatch between replayPath and real execution`);
                return state;
            });
        }
        filterForShrinkImpl(itemsRaw) {
            if (this.replayPathPosition === 0) {
                this.replayPath = this.sourceReplayPath !== null ? ReplayPath_1.ReplayPath.parse(this.sourceReplayPath) : [];
            }
            const items = this.replayPathPosition < this.replayPath.length
                ? this.filterOnReplay(itemsRaw)
                : this.filterOnExecution(itemsRaw);
            this.replayPathPosition += itemsRaw.length;
            return items;
        }
        shrink(_value, context) {
            if (context === undefined) {
                return Stream_1.Stream.nil();
            }
            const safeContext = context;
            const shrunkOnce = safeContext.shrunkOnce;
            const itemsRaw = safeContext.items;
            const items = this.filterForShrinkImpl(itemsRaw);
            if (items.length === 0) {
                return Stream_1.Stream.nil();
            }
            const rootShrink = shrunkOnce
                ? Stream_1.Stream.nil()
                : new Stream_1.Stream([[]][Symbol.iterator]());
            const nextShrinks = [];
            for (let numToKeep = 0; numToKeep !== items.length; ++numToKeep) {
                nextShrinks.push((0, LazyIterableIterator_1.makeLazy)(() => {
                    const fixedStart = items.slice(0, numToKeep);
                    return this.lengthArb
                        .shrink(items.length - 1 - numToKeep, undefined)
                        .map((l) => fixedStart.concat(items.slice(items.length - (l.value + 1))));
                }));
            }
            for (let itemAt = 0; itemAt !== items.length; ++itemAt) {
                nextShrinks.push((0, LazyIterableIterator_1.makeLazy)(() => this.oneCommandArb
                    .shrink(items[itemAt].value_, items[itemAt].context)
                    .map((v) => items.slice(0, itemAt).concat([v], items.slice(itemAt + 1)))));
            }
            return rootShrink.join(...nextShrinks).map((shrinkables) => {
                return this.buildValueFor(shrinkables.map((c) => new Value_1.Value(c.value_.clone(), c.context)), true);
            });
        }
    }
    exports.CommandsArbitrary = CommandsArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../check/model/ReplayPath":165,"../../check/model/commands/CommandWrapper":166,"../../check/model/commands/CommandsIterable":167,"../../stream/LazyIterableIterator":197,"../../stream/Stream":198,"../oneof":135,"./builders/RestrictedIntegerArbitraryBuilder":28}],11:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConstantArbitrary = void 0;
    const Stream_1 = require("../../stream/Stream");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const symbols_1 = require("../../check/symbols");
    const safeObjectIs = Object.is;
    class ConstantArbitrary extends Arbitrary_1.Arbitrary {
        constructor(values) {
            super();
            this.values = values;
        }
        generate(mrng, _biasFactor) {
            const idx = this.values.length === 1 ? 0 : mrng.nextInt(0, this.values.length - 1);
            const value = this.values[idx];
            if (!(0, symbols_1.hasCloneMethod)(value)) {
                return new Value_1.Value(value, idx);
            }
            return new Value_1.Value(value, idx, () => value[symbols_1.cloneMethod]());
        }
        canShrinkWithoutContext(value) {
            for (let idx = 0; idx !== this.values.length; ++idx) {
                if (safeObjectIs(this.values[idx], value)) {
                    return true;
                }
            }
            return false;
        }
        shrink(value, context) {
            if (context === 0 || safeObjectIs(value, this.values[0])) {
                return Stream_1.Stream.nil();
            }
            return Stream_1.Stream.of(new Value_1.Value(this.values[0], 0));
        }
    }
    exports.ConstantArbitrary = ConstantArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../check/symbols":193,"../../stream/Stream":198}],12:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrequencyArbitrary = void 0;
    const Stream_1 = require("../../stream/Stream");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const DepthContext_1 = require("./helpers/DepthContext");
    const MaxLengthFromMinLength_1 = require("./helpers/MaxLengthFromMinLength");
    const globals_1 = require("../../utils/globals");
    const safePositiveInfinity = Number.POSITIVE_INFINITY;
    const safeMaxSafeInteger = Number.MAX_SAFE_INTEGER;
    const safeNumberIsInteger = Number.isInteger;
    const safeMathFloor = Math.floor;
    const safeMathPow = Math.pow;
    const safeMathMin = Math.min;
    class FrequencyArbitrary extends Arbitrary_1.Arbitrary {
        constructor(warbs, constraints, context) {
            super();
            this.warbs = warbs;
            this.constraints = constraints;
            this.context = context;
            let currentWeight = 0;
            this.cumulatedWeights = [];
            for (let idx = 0; idx !== warbs.length; ++idx) {
                currentWeight += warbs[idx].weight;
                (0, globals_1.safePush)(this.cumulatedWeights, currentWeight);
            }
            this.totalWeight = currentWeight;
        }
        static from(warbs, constraints, label) {
            if (warbs.length === 0) {
                throw new Error(`${label} expects at least one weighted arbitrary`);
            }
            let totalWeight = 0;
            for (let idx = 0; idx !== warbs.length; ++idx) {
                const currentArbitrary = warbs[idx].arbitrary;
                if (currentArbitrary === undefined) {
                    throw new Error(`${label} expects arbitraries to be specified`);
                }
                const currentWeight = warbs[idx].weight;
                totalWeight += currentWeight;
                if (!safeNumberIsInteger(currentWeight)) {
                    throw new Error(`${label} expects weights to be integer values`);
                }
                if (currentWeight < 0) {
                    throw new Error(`${label} expects weights to be superior or equal to 0`);
                }
            }
            if (totalWeight <= 0) {
                throw new Error(`${label} expects the sum of weights to be strictly superior to 0`);
            }
            const sanitizedConstraints = {
                depthBias: (0, MaxLengthFromMinLength_1.depthBiasFromSizeForArbitrary)(constraints.depthSize, constraints.maxDepth !== undefined),
                maxDepth: constraints.maxDepth != undefined ? constraints.maxDepth : safePositiveInfinity,
                withCrossShrink: !!constraints.withCrossShrink,
            };
            return new FrequencyArbitrary(warbs, sanitizedConstraints, (0, DepthContext_1.getDepthContextFor)(constraints.depthIdentifier));
        }
        generate(mrng, biasFactor) {
            if (this.mustGenerateFirst()) {
                return this.safeGenerateForIndex(mrng, 0, biasFactor);
            }
            const selected = mrng.nextInt(this.computeNegDepthBenefit(), this.totalWeight - 1);
            for (let idx = 0; idx !== this.cumulatedWeights.length; ++idx) {
                if (selected < this.cumulatedWeights[idx]) {
                    return this.safeGenerateForIndex(mrng, idx, biasFactor);
                }
            }
            throw new Error(`Unable to generate from fc.frequency`);
        }
        canShrinkWithoutContext(value) {
            return this.canShrinkWithoutContextIndex(value) !== -1;
        }
        shrink(value, context) {
            if (context !== undefined) {
                const safeContext = context;
                const selectedIndex = safeContext.selectedIndex;
                const originalBias = safeContext.originalBias;
                const originalArbitrary = this.warbs[selectedIndex].arbitrary;
                const originalShrinks = originalArbitrary
                    .shrink(value, safeContext.originalContext)
                    .map((v) => this.mapIntoValue(selectedIndex, v, null, originalBias));
                if (safeContext.clonedMrngForFallbackFirst !== null) {
                    if (safeContext.cachedGeneratedForFirst === undefined) {
                        safeContext.cachedGeneratedForFirst = this.safeGenerateForIndex(safeContext.clonedMrngForFallbackFirst, 0, originalBias);
                    }
                    const valueFromFirst = safeContext.cachedGeneratedForFirst;
                    return Stream_1.Stream.of(valueFromFirst).join(originalShrinks);
                }
                return originalShrinks;
            }
            const potentialSelectedIndex = this.canShrinkWithoutContextIndex(value);
            if (potentialSelectedIndex === -1) {
                return Stream_1.Stream.nil();
            }
            return this.defaultShrinkForFirst(potentialSelectedIndex).join(this.warbs[potentialSelectedIndex].arbitrary
                .shrink(value, undefined)
                .map((v) => this.mapIntoValue(potentialSelectedIndex, v, null, undefined)));
        }
        defaultShrinkForFirst(selectedIndex) {
            ++this.context.depth;
            try {
                if (!this.mustFallbackToFirstInShrink(selectedIndex) || this.warbs[0].fallbackValue === undefined) {
                    return Stream_1.Stream.nil();
                }
            }
            finally {
                --this.context.depth;
            }
            const rawShrinkValue = new Value_1.Value(this.warbs[0].fallbackValue.default, undefined);
            return Stream_1.Stream.of(this.mapIntoValue(0, rawShrinkValue, null, undefined));
        }
        canShrinkWithoutContextIndex(value) {
            if (this.mustGenerateFirst()) {
                return this.warbs[0].arbitrary.canShrinkWithoutContext(value) ? 0 : -1;
            }
            try {
                ++this.context.depth;
                for (let idx = 0; idx !== this.warbs.length; ++idx) {
                    const warb = this.warbs[idx];
                    if (warb.weight !== 0 && warb.arbitrary.canShrinkWithoutContext(value)) {
                        return idx;
                    }
                }
                return -1;
            }
            finally {
                --this.context.depth;
            }
        }
        mapIntoValue(idx, value, clonedMrngForFallbackFirst, biasFactor) {
            const context = {
                selectedIndex: idx,
                originalBias: biasFactor,
                originalContext: value.context,
                clonedMrngForFallbackFirst,
            };
            return new Value_1.Value(value.value, context);
        }
        safeGenerateForIndex(mrng, idx, biasFactor) {
            ++this.context.depth;
            try {
                const value = this.warbs[idx].arbitrary.generate(mrng, biasFactor);
                const clonedMrngForFallbackFirst = this.mustFallbackToFirstInShrink(idx) ? mrng.clone() : null;
                return this.mapIntoValue(idx, value, clonedMrngForFallbackFirst, biasFactor);
            }
            finally {
                --this.context.depth;
            }
        }
        mustGenerateFirst() {
            return this.constraints.maxDepth <= this.context.depth;
        }
        mustFallbackToFirstInShrink(idx) {
            return idx !== 0 && this.constraints.withCrossShrink && this.warbs[0].weight !== 0;
        }
        computeNegDepthBenefit() {
            const depthBias = this.constraints.depthBias;
            if (depthBias <= 0 || this.warbs[0].weight === 0) {
                return 0;
            }
            const depthBenefit = safeMathFloor(safeMathPow(1 + depthBias, this.context.depth)) - 1;
            return -safeMathMin(this.totalWeight * depthBenefit, safeMaxSafeInteger) || 0;
        }
    }
    exports.FrequencyArbitrary = FrequencyArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/Stream":198,"../../utils/globals":201,"./helpers/DepthContext":38,"./helpers/MaxLengthFromMinLength":45}],13:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntegerArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const Stream_1 = require("../../stream/Stream");
    const BiasNumericRange_1 = require("./helpers/BiasNumericRange");
    const ShrinkInteger_1 = require("./helpers/ShrinkInteger");
    const safeMathSign = Math.sign;
    const safeNumberIsInteger = Number.isInteger;
    const safeObjectIs = Object.is;
    class IntegerArbitrary extends Arbitrary_1.Arbitrary {
        constructor(min, max) {
            super();
            this.min = min;
            this.max = max;
        }
        generate(mrng, biasFactor) {
            const range = this.computeGenerateRange(mrng, biasFactor);
            return new Value_1.Value(mrng.nextInt(range.min, range.max), undefined);
        }
        canShrinkWithoutContext(value) {
            return (typeof value === 'number' &&
                safeNumberIsInteger(value) &&
                !safeObjectIs(value, -0) &&
                this.min <= value &&
                value <= this.max);
        }
        shrink(current, context) {
            if (!IntegerArbitrary.isValidContext(current, context)) {
                const target = this.defaultTarget();
                return (0, ShrinkInteger_1.shrinkInteger)(current, target, true);
            }
            if (this.isLastChanceTry(current, context)) {
                return Stream_1.Stream.of(new Value_1.Value(context, undefined));
            }
            return (0, ShrinkInteger_1.shrinkInteger)(current, context, false);
        }
        defaultTarget() {
            if (this.min <= 0 && this.max >= 0) {
                return 0;
            }
            return this.min < 0 ? this.max : this.min;
        }
        computeGenerateRange(mrng, biasFactor) {
            if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
                return { min: this.min, max: this.max };
            }
            const ranges = (0, BiasNumericRange_1.biasNumericRange)(this.min, this.max, BiasNumericRange_1.integerLogLike);
            if (ranges.length === 1) {
                return ranges[0];
            }
            const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
            return id < 0 ? ranges[0] : ranges[id + 1];
        }
        isLastChanceTry(current, context) {
            if (current > 0)
                return current === context + 1 && current > this.min;
            if (current < 0)
                return current === context - 1 && current < this.max;
            return false;
        }
        static isValidContext(current, context) {
            if (context === undefined) {
                return false;
            }
            if (typeof context !== 'number') {
                throw new Error(`Invalid context type passed to IntegerArbitrary (#1)`);
            }
            if (context !== 0 && safeMathSign(current) !== safeMathSign(context)) {
                throw new Error(`Invalid context value passed to IntegerArbitrary (#2)`);
            }
            return true;
        }
    }
    exports.IntegerArbitrary = IntegerArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/Stream":198,"./helpers/BiasNumericRange":34,"./helpers/ShrinkInteger":51}],14:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazyArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    class LazyArbitrary extends Arbitrary_1.Arbitrary {
        constructor(name) {
            super();
            this.name = name;
            this.underlying = null;
        }
        generate(mrng, biasFactor) {
            if (!this.underlying) {
                throw new Error(`Lazy arbitrary ${JSON.stringify(this.name)} not correctly initialized`);
            }
            return this.underlying.generate(mrng, biasFactor);
        }
        canShrinkWithoutContext(value) {
            if (!this.underlying) {
                throw new Error(`Lazy arbitrary ${JSON.stringify(this.name)} not correctly initialized`);
            }
            return this.underlying.canShrinkWithoutContext(value);
        }
        shrink(value, context) {
            if (!this.underlying) {
                throw new Error(`Lazy arbitrary ${JSON.stringify(this.name)} not correctly initialized`);
            }
            return this.underlying.shrink(value, context);
        }
    }
    exports.LazyArbitrary = LazyArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162}],15:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MixedCaseArbitrary = void 0;
    const bigUintN_1 = require("../bigUintN");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
    const ToggleFlags_1 = require("./helpers/ToggleFlags");
    const globals_1 = require("../../utils/globals");
    const globals_2 = require("../../utils/globals");
    class MixedCaseArbitrary extends Arbitrary_1.Arbitrary {
        constructor(stringArb, toggleCase, untoggleAll) {
            super();
            this.stringArb = stringArb;
            this.toggleCase = toggleCase;
            this.untoggleAll = untoggleAll;
        }
        buildContextFor(rawStringValue, flagsValue) {
            return {
                rawString: rawStringValue.value,
                rawStringContext: rawStringValue.context,
                flags: flagsValue.value,
                flagsContext: flagsValue.context,
            };
        }
        generate(mrng, biasFactor) {
            const rawStringValue = this.stringArb.generate(mrng, biasFactor);
            const chars = [...rawStringValue.value];
            const togglePositions = (0, ToggleFlags_1.computeTogglePositions)(chars, this.toggleCase);
            const flagsArb = (0, bigUintN_1.bigUintN)(togglePositions.length);
            const flagsValue = flagsArb.generate(mrng, undefined);
            (0, ToggleFlags_1.applyFlagsOnChars)(chars, flagsValue.value, togglePositions, this.toggleCase);
            return new Value_1.Value((0, globals_1.safeJoin)(chars, ''), this.buildContextFor(rawStringValue, flagsValue));
        }
        canShrinkWithoutContext(value) {
            if (typeof value !== 'string') {
                return false;
            }
            return this.untoggleAll !== undefined
                ? this.stringArb.canShrinkWithoutContext(this.untoggleAll(value))
                :
                    this.stringArb.canShrinkWithoutContext(value);
        }
        shrink(value, context) {
            let contextSafe;
            if (context !== undefined) {
                contextSafe = context;
            }
            else {
                if (this.untoggleAll !== undefined) {
                    const untoggledValue = this.untoggleAll(value);
                    const valueChars = [...value];
                    const untoggledValueChars = [...untoggledValue];
                    const togglePositions = (0, ToggleFlags_1.computeTogglePositions)(untoggledValueChars, this.toggleCase);
                    contextSafe = {
                        rawString: untoggledValue,
                        rawStringContext: undefined,
                        flags: (0, ToggleFlags_1.computeFlagsFromChars)(untoggledValueChars, valueChars, togglePositions),
                        flagsContext: undefined,
                    };
                }
                else {
                    contextSafe = {
                        rawString: value,
                        rawStringContext: undefined,
                        flags: (0, globals_2.BigInt)(0),
                        flagsContext: undefined,
                    };
                }
            }
            const rawString = contextSafe.rawString;
            const flags = contextSafe.flags;
            return this.stringArb
                .shrink(rawString, contextSafe.rawStringContext)
                .map((nRawStringValue) => {
                const nChars = [...nRawStringValue.value];
                const nTogglePositions = (0, ToggleFlags_1.computeTogglePositions)(nChars, this.toggleCase);
                const nFlags = (0, ToggleFlags_1.computeNextFlags)(flags, nTogglePositions.length);
                (0, ToggleFlags_1.applyFlagsOnChars)(nChars, nFlags, nTogglePositions, this.toggleCase);
                return new Value_1.Value((0, globals_1.safeJoin)(nChars, ''), this.buildContextFor(nRawStringValue, new Value_1.Value(nFlags, undefined)));
            })
                .join((0, LazyIterableIterator_1.makeLazy)(() => {
                const chars = [...rawString];
                const togglePositions = (0, ToggleFlags_1.computeTogglePositions)(chars, this.toggleCase);
                return (0, bigUintN_1.bigUintN)(togglePositions.length)
                    .shrink(flags, contextSafe.flagsContext)
                    .map((nFlagsValue) => {
                    const nChars = (0, globals_1.safeSlice)(chars);
                    (0, ToggleFlags_1.applyFlagsOnChars)(nChars, nFlagsValue.value, togglePositions, this.toggleCase);
                    return new Value_1.Value((0, globals_1.safeJoin)(nChars, ''), this.buildContextFor(new Value_1.Value(rawString, contextSafe.rawStringContext), nFlagsValue));
                });
            }));
        }
    }
    exports.MixedCaseArbitrary = MixedCaseArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/LazyIterableIterator":197,"../../utils/globals":201,"../bigUintN":91,"./helpers/ToggleFlags":55}],16:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SchedulerArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const Stream_1 = require("../../stream/Stream");
    const SchedulerImplem_1 = require("./implementations/SchedulerImplem");
    function buildNextTaskIndex(mrng) {
        const clonedMrng = mrng.clone();
        return {
            clone: () => buildNextTaskIndex(clonedMrng),
            nextTaskIndex: (scheduledTasks) => {
                return mrng.nextInt(0, scheduledTasks.length - 1);
            },
        };
    }
    class SchedulerArbitrary extends Arbitrary_1.Arbitrary {
        constructor(act) {
            super();
            this.act = act;
        }
        generate(mrng, _biasFactor) {
            return new Value_1.Value(new SchedulerImplem_1.SchedulerImplem(this.act, buildNextTaskIndex(mrng.clone())), undefined);
        }
        canShrinkWithoutContext(value) {
            return false;
        }
        shrink(_value, _context) {
            return Stream_1.Stream.nil();
        }
    }
    exports.SchedulerArbitrary = SchedulerArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/Stream":198,"./implementations/SchedulerImplem":57}],17:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const symbols_1 = require("../../check/symbols");
    const Stream_1 = require("../../stream/Stream");
    const globals_1 = require("../../utils/globals");
    const stringify_1 = require("../../utils/stringify");
    const safeObjectDefineProperties = Object.defineProperties;
    function prettyPrint(seenValuesStrings) {
        return `Stream(${(0, globals_1.safeJoin)(seenValuesStrings, ',')}…)`;
    }
    class StreamArbitrary extends Arbitrary_1.Arbitrary {
        constructor(arb) {
            super();
            this.arb = arb;
        }
        generate(mrng, biasFactor) {
            const appliedBiasFactor = biasFactor !== undefined && mrng.nextInt(1, biasFactor) === 1 ? biasFactor : undefined;
            const enrichedProducer = () => {
                const seenValues = [];
                const g = function* (arb, clonedMrng) {
                    while (true) {
                        const value = arb.generate(clonedMrng, appliedBiasFactor).value;
                        (0, globals_1.safePush)(seenValues, value);
                        yield value;
                    }
                };
                const s = new Stream_1.Stream(g(this.arb, mrng.clone()));
                return safeObjectDefineProperties(s, {
                    toString: { value: () => prettyPrint(seenValues.map(stringify_1.stringify)) },
                    [stringify_1.toStringMethod]: { value: () => prettyPrint(seenValues.map(stringify_1.stringify)) },
                    [stringify_1.asyncToStringMethod]: { value: async () => prettyPrint(await Promise.all(seenValues.map(stringify_1.asyncStringify))) },
                    [symbols_1.cloneMethod]: { value: enrichedProducer, enumerable: true },
                });
            };
            return new Value_1.Value(enrichedProducer(), undefined);
        }
        canShrinkWithoutContext(value) {
            return false;
        }
        shrink(_value, _context) {
            return Stream_1.Stream.nil();
        }
    }
    exports.StreamArbitrary = StreamArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../check/symbols":193,"../../stream/Stream":198,"../../utils/globals":201,"../../utils/stringify":203}],18:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubarrayArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
    const Stream_1 = require("../../stream/Stream");
    const globals_1 = require("../../utils/globals");
    const IsSubarrayOf_1 = require("./helpers/IsSubarrayOf");
    const IntegerArbitrary_1 = require("./IntegerArbitrary");
    const safeMathFloor = Math.floor;
    const safeMathLog = Math.log;
    const safeArrayIsArray = Array.isArray;
    class SubarrayArbitrary extends Arbitrary_1.Arbitrary {
        constructor(originalArray, isOrdered, minLength, maxLength) {
            super();
            this.originalArray = originalArray;
            this.isOrdered = isOrdered;
            this.minLength = minLength;
            this.maxLength = maxLength;
            if (minLength < 0 || minLength > originalArray.length)
                throw new Error('fc.*{s|S}ubarrayOf expects the minimal length to be between 0 and the size of the original array');
            if (maxLength < 0 || maxLength > originalArray.length)
                throw new Error('fc.*{s|S}ubarrayOf expects the maximal length to be between 0 and the size of the original array');
            if (minLength > maxLength)
                throw new Error('fc.*{s|S}ubarrayOf expects the minimal length to be inferior or equal to the maximal length');
            this.lengthArb = new IntegerArbitrary_1.IntegerArbitrary(minLength, maxLength);
            this.biasedLengthArb =
                minLength !== maxLength
                    ? new IntegerArbitrary_1.IntegerArbitrary(minLength, minLength + safeMathFloor(safeMathLog(maxLength - minLength) / safeMathLog(2)))
                    : this.lengthArb;
        }
        generate(mrng, biasFactor) {
            const lengthArb = biasFactor !== undefined && mrng.nextInt(1, biasFactor) === 1 ? this.biasedLengthArb : this.lengthArb;
            const size = lengthArb.generate(mrng, undefined);
            const sizeValue = size.value;
            const remainingElements = (0, globals_1.safeMap)(this.originalArray, (_v, idx) => idx);
            const ids = [];
            for (let index = 0; index !== sizeValue; ++index) {
                const selectedIdIndex = mrng.nextInt(0, remainingElements.length - 1);
                (0, globals_1.safePush)(ids, remainingElements[selectedIdIndex]);
                (0, globals_1.safeSplice)(remainingElements, selectedIdIndex, 1);
            }
            if (this.isOrdered) {
                (0, globals_1.safeSort)(ids, (a, b) => a - b);
            }
            return new Value_1.Value((0, globals_1.safeMap)(ids, (i) => this.originalArray[i]), size.context);
        }
        canShrinkWithoutContext(value) {
            if (!safeArrayIsArray(value)) {
                return false;
            }
            if (!this.lengthArb.canShrinkWithoutContext(value.length)) {
                return false;
            }
            return (0, IsSubarrayOf_1.isSubarrayOf)(this.originalArray, value);
        }
        shrink(value, context) {
            if (value.length === 0) {
                return Stream_1.Stream.nil();
            }
            return this.lengthArb
                .shrink(value.length, context)
                .map((newSize) => {
                return new Value_1.Value((0, globals_1.safeSlice)(value, value.length - newSize.value), newSize.context);
            })
                .join(value.length > this.minLength
                ? (0, LazyIterableIterator_1.makeLazy)(() => this.shrink((0, globals_1.safeSlice)(value, 1), undefined)
                    .filter((newValue) => this.minLength <= newValue.value.length + 1)
                    .map((newValue) => new Value_1.Value([value[0], ...newValue.value], undefined)))
                : Stream_1.Stream.nil());
        }
    }
    exports.SubarrayArbitrary = SubarrayArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../stream/LazyIterableIterator":197,"../../stream/Stream":198,"../../utils/globals":201,"./IntegerArbitrary":13,"./helpers/IsSubarrayOf":43}],19:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TupleArbitrary = void 0;
    const Stream_1 = require("../../stream/Stream");
    const symbols_1 = require("../../check/symbols");
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    const globals_1 = require("../../utils/globals");
    const safeArrayIsArray = Array.isArray;
    const safeObjectDefineProperty = Object.defineProperty;
    class TupleArbitrary extends Arbitrary_1.Arbitrary {
        constructor(arbs) {
            super();
            this.arbs = arbs;
            for (let idx = 0; idx !== arbs.length; ++idx) {
                const arb = arbs[idx];
                if (arb == null || arb.generate == null)
                    throw new Error(`Invalid parameter encountered at index ${idx}: expecting an Arbitrary`);
            }
        }
        static makeItCloneable(vs, values) {
            return safeObjectDefineProperty(vs, symbols_1.cloneMethod, {
                value: () => {
                    const cloned = [];
                    for (let idx = 0; idx !== values.length; ++idx) {
                        (0, globals_1.safePush)(cloned, values[idx].value);
                    }
                    TupleArbitrary.makeItCloneable(cloned, values);
                    return cloned;
                },
            });
        }
        static wrapper(values) {
            let cloneable = false;
            const vs = [];
            const ctxs = [];
            for (let idx = 0; idx !== values.length; ++idx) {
                const v = values[idx];
                cloneable = cloneable || v.hasToBeCloned;
                (0, globals_1.safePush)(vs, v.value);
                (0, globals_1.safePush)(ctxs, v.context);
            }
            if (cloneable) {
                TupleArbitrary.makeItCloneable(vs, values);
            }
            return new Value_1.Value(vs, ctxs);
        }
        generate(mrng, biasFactor) {
            return TupleArbitrary.wrapper((0, globals_1.safeMap)(this.arbs, (a) => a.generate(mrng, biasFactor)));
        }
        canShrinkWithoutContext(value) {
            if (!safeArrayIsArray(value) || value.length !== this.arbs.length) {
                return false;
            }
            for (let index = 0; index !== this.arbs.length; ++index) {
                if (!this.arbs[index].canShrinkWithoutContext(value[index])) {
                    return false;
                }
            }
            return true;
        }
        shrink(value, context) {
            let s = Stream_1.Stream.nil();
            const safeContext = safeArrayIsArray(context) ? context : [];
            for (let idx = 0; idx !== this.arbs.length; ++idx) {
                const shrinksForIndex = this.arbs[idx]
                    .shrink(value[idx], safeContext[idx])
                    .map((v) => {
                    const nextValues = (0, globals_1.safeMap)(value, (v, idx) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext[idx]));
                    return [...(0, globals_1.safeSlice)(nextValues, 0, idx), v, ...(0, globals_1.safeSlice)(nextValues, idx + 1)];
                })
                    .map((values) => TupleArbitrary.wrapper(values));
                s = s.join(shrinksForIndex);
            }
            return s;
        }
    }
    exports.TupleArbitrary = TupleArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163,"../../check/symbols":193,"../../stream/Stream":198,"../../utils/globals":201}],20:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithShrinkFromOtherArbitrary = void 0;
    const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
    const Value_1 = require("../../check/arbitrary/definition/Value");
    function isSafeContext(context) {
        return context !== undefined;
    }
    function toGeneratorValue(value) {
        if (value.hasToBeCloned) {
            return new Value_1.Value(value.value_, { generatorContext: value.context }, () => value.value);
        }
        return new Value_1.Value(value.value_, { generatorContext: value.context });
    }
    function toShrinkerValue(value) {
        if (value.hasToBeCloned) {
            return new Value_1.Value(value.value_, { shrinkerContext: value.context }, () => value.value);
        }
        return new Value_1.Value(value.value_, { shrinkerContext: value.context });
    }
    class WithShrinkFromOtherArbitrary extends Arbitrary_1.Arbitrary {
        constructor(generatorArbitrary, shrinkerArbitrary) {
            super();
            this.generatorArbitrary = generatorArbitrary;
            this.shrinkerArbitrary = shrinkerArbitrary;
        }
        generate(mrng, biasFactor) {
            return toGeneratorValue(this.generatorArbitrary.generate(mrng, biasFactor));
        }
        canShrinkWithoutContext(value) {
            return this.shrinkerArbitrary.canShrinkWithoutContext(value);
        }
        shrink(value, context) {
            if (!isSafeContext(context)) {
                return this.shrinkerArbitrary.shrink(value, undefined).map(toShrinkerValue);
            }
            if ('generatorContext' in context) {
                return this.generatorArbitrary.shrink(value, context.generatorContext).map(toGeneratorValue);
            }
            return this.shrinkerArbitrary.shrink(value, context.shrinkerContext).map(toShrinkerValue);
        }
    }
    exports.WithShrinkFromOtherArbitrary = WithShrinkFromOtherArbitrary;

    },{"../../check/arbitrary/definition/Arbitrary":162,"../../check/arbitrary/definition/Value":163}],21:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.anyArbitraryBuilder = void 0;
    const stringify_1 = require("../../../utils/stringify");
    const array_1 = require("../../array");
    const oneof_1 = require("../../oneof");
    const tuple_1 = require("../../tuple");
    const bigInt_1 = require("../../bigInt");
    const date_1 = require("../../date");
    const float32Array_1 = require("../../float32Array");
    const float64Array_1 = require("../../float64Array");
    const int16Array_1 = require("../../int16Array");
    const int32Array_1 = require("../../int32Array");
    const int8Array_1 = require("../../int8Array");
    const uint16Array_1 = require("../../uint16Array");
    const uint32Array_1 = require("../../uint32Array");
    const uint8Array_1 = require("../../uint8Array");
    const uint8ClampedArray_1 = require("../../uint8ClampedArray");
    const sparseArray_1 = require("../../sparseArray");
    const KeyValuePairsToObject_1 = require("../mappers/KeyValuePairsToObject");
    const ArrayToMap_1 = require("../mappers/ArrayToMap");
    const ArrayToSet_1 = require("../mappers/ArrayToSet");
    const ObjectToPrototypeLess_1 = require("../mappers/ObjectToPrototypeLess");
    const letrec_1 = require("../../letrec");
    const uniqueArray_1 = require("../../uniqueArray");
    const DepthContext_1 = require("../helpers/DepthContext");
    function mapOf(ka, va, maxKeys, size, depthIdentifier) {
        return (0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)(ka, va), {
            maxLength: maxKeys,
            size,
            comparator: 'SameValueZero',
            selector: (t) => t[0],
            depthIdentifier,
        }).map(ArrayToMap_1.arrayToMapMapper, ArrayToMap_1.arrayToMapUnmapper);
    }
    function dictOf(ka, va, maxKeys, size, depthIdentifier) {
        return (0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)(ka, va), {
            maxLength: maxKeys,
            size,
            selector: (t) => t[0],
            depthIdentifier,
        }).map(KeyValuePairsToObject_1.keyValuePairsToObjectMapper, KeyValuePairsToObject_1.keyValuePairsToObjectUnmapper);
    }
    function setOf(va, maxKeys, size, depthIdentifier) {
        return (0, uniqueArray_1.uniqueArray)(va, { maxLength: maxKeys, size, comparator: 'SameValueZero', depthIdentifier }).map(ArrayToSet_1.arrayToSetMapper, ArrayToSet_1.arrayToSetUnmapper);
    }
    function prototypeLessOf(objectArb) {
        return objectArb.map(ObjectToPrototypeLess_1.objectToPrototypeLessMapper, ObjectToPrototypeLess_1.objectToPrototypeLessUnmapper);
    }
    function typedArray(constraints) {
        return (0, oneof_1.oneof)((0, int8Array_1.int8Array)(constraints), (0, uint8Array_1.uint8Array)(constraints), (0, uint8ClampedArray_1.uint8ClampedArray)(constraints), (0, int16Array_1.int16Array)(constraints), (0, uint16Array_1.uint16Array)(constraints), (0, int32Array_1.int32Array)(constraints), (0, uint32Array_1.uint32Array)(constraints), (0, float32Array_1.float32Array)(constraints), (0, float64Array_1.float64Array)(constraints));
    }
    function anyArbitraryBuilder(constraints) {
        const arbitrariesForBase = constraints.values;
        const depthSize = constraints.depthSize;
        const depthIdentifier = (0, DepthContext_1.createDepthIdentifier)();
        const maxDepth = constraints.maxDepth;
        const maxKeys = constraints.maxKeys;
        const size = constraints.size;
        const baseArb = (0, oneof_1.oneof)(...arbitrariesForBase, ...(constraints.withBigInt ? [(0, bigInt_1.bigInt)()] : []), ...(constraints.withDate ? [(0, date_1.date)()] : []));
        return (0, letrec_1.letrec)((tie) => ({
            anything: (0, oneof_1.oneof)({ maxDepth, depthSize, depthIdentifier }, baseArb, tie('array'), tie('object'), ...(constraints.withMap ? [tie('map')] : []), ...(constraints.withSet ? [tie('set')] : []), ...(constraints.withObjectString ? [tie('anything').map((o) => (0, stringify_1.stringify)(o))] : []), ...(constraints.withNullPrototype ? [prototypeLessOf(tie('object'))] : []), ...(constraints.withTypedArray ? [typedArray({ maxLength: maxKeys, size })] : []), ...(constraints.withSparseArray
                ? [(0, sparseArray_1.sparseArray)(tie('anything'), { maxNumElements: maxKeys, size, depthIdentifier })]
                : [])),
            keys: constraints.withObjectString
                ? (0, oneof_1.oneof)({ arbitrary: constraints.key, weight: 10 }, { arbitrary: tie('anything').map((o) => (0, stringify_1.stringify)(o)), weight: 1 })
                : constraints.key,
            array: (0, array_1.array)(tie('anything'), { maxLength: maxKeys, size, depthIdentifier }),
            set: setOf(tie('anything'), maxKeys, size, depthIdentifier),
            map: (0, oneof_1.oneof)(mapOf(tie('keys'), tie('anything'), maxKeys, size, depthIdentifier), mapOf(tie('anything'), tie('anything'), maxKeys, size, depthIdentifier)),
            object: dictOf(tie('keys'), tie('anything'), maxKeys, size, depthIdentifier),
        })).anything;
    }
    exports.anyArbitraryBuilder = anyArbitraryBuilder;

    },{"../../../utils/stringify":203,"../../array":81,"../../bigInt":86,"../../date":102,"../../float32Array":109,"../../float64Array":110,"../../int16Array":117,"../../int32Array":118,"../../int8Array":119,"../../letrec":126,"../../oneof":135,"../../sparseArray":140,"../../tuple":145,"../../uint16Array":146,"../../uint32Array":147,"../../uint8Array":148,"../../uint8ClampedArray":149,"../../uniqueArray":154,"../helpers/DepthContext":38,"../mappers/ArrayToMap":59,"../mappers/ArrayToSet":60,"../mappers/KeyValuePairsToObject":67,"../mappers/ObjectToPrototypeLess":70}],22:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boxedArbitraryBuilder = void 0;
    const UnboxedToBoxed_1 = require("../mappers/UnboxedToBoxed");
    function boxedArbitraryBuilder(arb) {
        return arb.map(UnboxedToBoxed_1.unboxedToBoxedMapper, UnboxedToBoxed_1.unboxedToBoxedUnmapper);
    }
    exports.boxedArbitraryBuilder = boxedArbitraryBuilder;

    },{"../mappers/UnboxedToBoxed":77}],23:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildCharacterArbitrary = void 0;
    const integer_1 = require("../../integer");
    const IndexToCharString_1 = require("../mappers/IndexToCharString");
    function buildCharacterArbitrary(min, max, mapToCode, unmapFromCode) {
        return (0, integer_1.integer)({ min, max }).map((n) => (0, IndexToCharString_1.indexToCharStringMapper)(mapToCode(n)), (c) => unmapFromCode((0, IndexToCharString_1.indexToCharStringUnmapper)(c)));
    }
    exports.buildCharacterArbitrary = buildCharacterArbitrary;

    },{"../../integer":120,"../mappers/IndexToCharString":64}],24:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildAlphaNumericPercentArbitrary = exports.buildAlphaNumericArbitrary = exports.buildLowerAlphaNumericArbitrary = exports.buildLowerAlphaArbitrary = void 0;
    const fullUnicode_1 = require("../../fullUnicode");
    const oneof_1 = require("../../oneof");
    const mapToConstant_1 = require("../../mapToConstant");
    const globals_1 = require("../../../utils/globals");
    const safeStringFromCharCode = String.fromCharCode;
    const lowerCaseMapper = { num: 26, build: (v) => safeStringFromCharCode(v + 0x61) };
    const upperCaseMapper = { num: 26, build: (v) => safeStringFromCharCode(v + 0x41) };
    const numericMapper = { num: 10, build: (v) => safeStringFromCharCode(v + 0x30) };
    function percentCharArbMapper(c) {
        const encoded = (0, globals_1.encodeURIComponent)(c);
        return c !== encoded ? encoded : `%${(0, globals_1.safeNumberToString)((0, globals_1.safeCharCodeAt)(c, 0), 16)}`;
    }
    function percentCharArbUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported');
        }
        const decoded = decodeURIComponent(value);
        return decoded;
    }
    const percentCharArb = (0, fullUnicode_1.fullUnicode)().map(percentCharArbMapper, percentCharArbUnmapper);
    const buildLowerAlphaArbitrary = (others) => (0, mapToConstant_1.mapToConstant)(lowerCaseMapper, { num: others.length, build: (v) => others[v] });
    exports.buildLowerAlphaArbitrary = buildLowerAlphaArbitrary;
    const buildLowerAlphaNumericArbitrary = (others) => (0, mapToConstant_1.mapToConstant)(lowerCaseMapper, numericMapper, { num: others.length, build: (v) => others[v] });
    exports.buildLowerAlphaNumericArbitrary = buildLowerAlphaNumericArbitrary;
    const buildAlphaNumericArbitrary = (others) => (0, mapToConstant_1.mapToConstant)(lowerCaseMapper, upperCaseMapper, numericMapper, { num: others.length, build: (v) => others[v] });
    exports.buildAlphaNumericArbitrary = buildAlphaNumericArbitrary;
    const buildAlphaNumericPercentArbitrary = (others) => (0, oneof_1.oneof)({ weight: 10, arbitrary: (0, exports.buildAlphaNumericArbitrary)(others) }, { weight: 1, arbitrary: percentCharArb });
    exports.buildAlphaNumericPercentArbitrary = buildAlphaNumericPercentArbitrary;

    },{"../../../utils/globals":201,"../../fullUnicode":111,"../../mapToConstant":128,"../../oneof":135}],25:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildCompareFunctionArbitrary = void 0;
    const TextEscaper_1 = require("../helpers/TextEscaper");
    const symbols_1 = require("../../../check/symbols");
    const hash_1 = require("../../../utils/hash");
    const stringify_1 = require("../../../utils/stringify");
    const integer_1 = require("../../integer");
    const tuple_1 = require("../../tuple");
    const globals_1 = require("../../../utils/globals");
    const safeObjectAssign = Object.assign;
    const safeObjectKeys = Object.keys;
    function buildCompareFunctionArbitrary(cmp) {
        return (0, tuple_1.tuple)((0, integer_1.integer)().noShrink(), (0, integer_1.integer)({ min: 1, max: 0xffffffff }).noShrink()).map(([seed, hashEnvSize]) => {
            const producer = () => {
                const recorded = {};
                const f = (a, b) => {
                    const reprA = (0, stringify_1.stringify)(a);
                    const reprB = (0, stringify_1.stringify)(b);
                    const hA = (0, hash_1.hash)(`${seed}${reprA}`) % hashEnvSize;
                    const hB = (0, hash_1.hash)(`${seed}${reprB}`) % hashEnvSize;
                    const val = cmp(hA, hB);
                    recorded[`[${reprA},${reprB}]`] = val;
                    return val;
                };
                return safeObjectAssign(f, {
                    toString: () => {
                        const seenValues = safeObjectKeys(recorded)
                            .sort()
                            .map((k) => `${k} => ${(0, stringify_1.stringify)(recorded[k])}`)
                            .map((line) => `/* ${(0, TextEscaper_1.escapeForMultilineComments)(line)} */`);
                        return `function(a, b) {
      // With hash and stringify coming from fast-check${seenValues.length !== 0 ? `\n  ${(0, globals_1.safeJoin)(seenValues, '\n  ')}` : ''}
      const cmp = ${cmp};
      const hA = hash('${seed}' + stringify(a)) % ${hashEnvSize};
      const hB = hash('${seed}' + stringify(b)) % ${hashEnvSize};
      return cmp(hA, hB);
    }`;
                    },
                    [symbols_1.cloneMethod]: producer,
                });
            };
            return producer();
        });
    }
    exports.buildCompareFunctionArbitrary = buildCompareFunctionArbitrary;

    },{"../../../check/symbols":193,"../../../utils/globals":201,"../../../utils/hash":202,"../../../utils/stringify":203,"../../integer":120,"../../tuple":145,"../helpers/TextEscaper":54}],26:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildPaddedNumberArbitrary = void 0;
    const integer_1 = require("../../integer");
    const NumberToPaddedEight_1 = require("../mappers/NumberToPaddedEight");
    function buildPaddedNumberArbitrary(min, max) {
        return (0, integer_1.integer)({ min, max }).map(NumberToPaddedEight_1.numberToPaddedEightMapper, NumberToPaddedEight_1.numberToPaddedEightUnmapper);
    }
    exports.buildPaddedNumberArbitrary = buildPaddedNumberArbitrary;

    },{"../../integer":120,"../mappers/NumberToPaddedEight":69}],27:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildPartialRecordArbitrary = void 0;
    const globals_1 = require("../../../utils/globals");
    const option_1 = require("../../option");
    const tuple_1 = require("../../tuple");
    const EnumerableKeysExtractor_1 = require("../helpers/EnumerableKeysExtractor");
    const ValuesAndSeparateKeysToObject_1 = require("../mappers/ValuesAndSeparateKeysToObject");
    const noKeyValue = Symbol('no-key');
    function buildPartialRecordArbitrary(recordModel, requiredKeys) {
        const keys = (0, EnumerableKeysExtractor_1.extractEnumerableKeys)(recordModel);
        const arbs = [];
        for (let index = 0; index !== keys.length; ++index) {
            const k = keys[index];
            const requiredArbitrary = recordModel[k];
            if (requiredKeys === undefined || (0, globals_1.safeIndexOf)(requiredKeys, k) !== -1) {
                (0, globals_1.safePush)(arbs, requiredArbitrary);
            }
            else {
                (0, globals_1.safePush)(arbs, (0, option_1.option)(requiredArbitrary, { nil: noKeyValue }));
            }
        }
        return (0, tuple_1.tuple)(...arbs).map((0, ValuesAndSeparateKeysToObject_1.buildValuesAndSeparateKeysToObjectMapper)(keys, noKeyValue), (0, ValuesAndSeparateKeysToObject_1.buildValuesAndSeparateKeysToObjectUnmapper)(keys, noKeyValue));
    }
    exports.buildPartialRecordArbitrary = buildPartialRecordArbitrary;

    },{"../../../utils/globals":201,"../../option":136,"../../tuple":145,"../helpers/EnumerableKeysExtractor":40,"../mappers/ValuesAndSeparateKeysToObject":78}],28:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.restrictedIntegerArbitraryBuilder = void 0;
    const integer_1 = require("../../integer");
    const WithShrinkFromOtherArbitrary_1 = require("../WithShrinkFromOtherArbitrary");
    function restrictedIntegerArbitraryBuilder(min, maxGenerated, max) {
        const generatorArbitrary = (0, integer_1.integer)({ min, max: maxGenerated });
        if (maxGenerated === max) {
            return generatorArbitrary;
        }
        const shrinkerArbitrary = (0, integer_1.integer)({ min, max });
        return new WithShrinkFromOtherArbitrary_1.WithShrinkFromOtherArbitrary(generatorArbitrary, shrinkerArbitrary);
    }
    exports.restrictedIntegerArbitraryBuilder = restrictedIntegerArbitraryBuilder;

    },{"../../integer":120,"../WithShrinkFromOtherArbitrary":20}],29:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildStringifiedNatArbitrary = void 0;
    const constantFrom_1 = require("../../constantFrom");
    const nat_1 = require("../../nat");
    const tuple_1 = require("../../tuple");
    const NatToStringifiedNat_1 = require("../mappers/NatToStringifiedNat");
    function buildStringifiedNatArbitrary(maxValue) {
        return (0, tuple_1.tuple)((0, constantFrom_1.constantFrom)('dec', 'oct', 'hex'), (0, nat_1.nat)(maxValue)).map(NatToStringifiedNat_1.natToStringifiedNatMapper, NatToStringifiedNat_1.natToStringifiedNatUnmapper);
    }
    exports.buildStringifiedNatArbitrary = buildStringifiedNatArbitrary;

    },{"../../constantFrom":100,"../../nat":133,"../../tuple":145,"../mappers/NatToStringifiedNat":68}],30:[function(require,module,exports){
    "use strict";
    var __rest = (this && this.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.typedIntArrayArbitraryArbitraryBuilder = void 0;
    const array_1 = require("../../array");
    function typedIntArrayArbitraryArbitraryBuilder(constraints, defaultMin, defaultMax, TypedArrayClass, arbitraryBuilder) {
        const generatorName = TypedArrayClass.name;
        const { min = defaultMin, max = defaultMax } = constraints, arrayConstraints = __rest(constraints, ["min", "max"]);
        if (min > max) {
            throw new Error(`Invalid range passed to ${generatorName}: min must be lower than or equal to max`);
        }
        if (min < defaultMin) {
            throw new Error(`Invalid min value passed to ${generatorName}: min must be greater than or equal to ${defaultMin}`);
        }
        if (max > defaultMax) {
            throw new Error(`Invalid max value passed to ${generatorName}: max must be lower than or equal to ${defaultMax}`);
        }
        return (0, array_1.array)(arbitraryBuilder({ min, max }), arrayConstraints).map((data) => TypedArrayClass.from(data), (value) => {
            if (!(value instanceof TypedArrayClass))
                throw new Error('Invalid type');
            return [...value];
        });
    }
    exports.typedIntArrayArbitraryArbitraryBuilder = typedIntArrayArbitraryArbitraryBuilder;

    },{"../../array":81}],31:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildUriPathArbitrary = void 0;
    const webSegment_1 = require("../../webSegment");
    const array_1 = require("../../array");
    const SegmentsToPath_1 = require("../mappers/SegmentsToPath");
    function sqrtSize(size) {
        switch (size) {
            case 'xsmall':
                return ['xsmall', 'xsmall'];
            case 'small':
                return ['small', 'xsmall'];
            case 'medium':
                return ['small', 'small'];
            case 'large':
                return ['medium', 'small'];
            case 'xlarge':
                return ['medium', 'medium'];
        }
    }
    function buildUriPathArbitrary(resolvedSize) {
        const [segmentSize, numSegmentSize] = sqrtSize(resolvedSize);
        return (0, array_1.array)((0, webSegment_1.webSegment)({ size: segmentSize }), { size: numSegmentSize }).map(SegmentsToPath_1.segmentsToPathMapper, SegmentsToPath_1.segmentsToPathUnmapper);
    }
    exports.buildUriPathArbitrary = buildUriPathArbitrary;

    },{"../../array":81,"../../webSegment":160,"../mappers/SegmentsToPath":74}],32:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildUriQueryOrFragmentArbitrary = void 0;
    const CharacterRangeArbitraryBuilder_1 = require("./CharacterRangeArbitraryBuilder");
    const stringOf_1 = require("../../stringOf");
    function buildUriQueryOrFragmentArbitrary(size) {
        const others = ['-', '.', '_', '~', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ':', '@', '/', '?'];
        return (0, stringOf_1.stringOf)((0, CharacterRangeArbitraryBuilder_1.buildAlphaNumericPercentArbitrary)(others), { size });
    }
    exports.buildUriQueryOrFragmentArbitrary = buildUriQueryOrFragmentArbitrary;

    },{"../../stringOf":143,"./CharacterRangeArbitraryBuilder":24}],33:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logLike64 = exports.halve64 = exports.add64 = exports.negative64 = exports.substract64 = exports.clone64 = exports.isStrictlySmaller64 = exports.isEqual64 = exports.isStrictlyPositive64 = exports.isStrictlyNegative64 = exports.isZero64 = exports.Unit64 = exports.Zero64 = void 0;
    exports.Zero64 = { sign: 1, data: [0, 0] };
    exports.Unit64 = { sign: 1, data: [0, 1] };
    function isZero64(a) {
        return a.data[0] === 0 && a.data[1] === 0;
    }
    exports.isZero64 = isZero64;
    function isStrictlyNegative64(a) {
        return a.sign === -1 && !isZero64(a);
    }
    exports.isStrictlyNegative64 = isStrictlyNegative64;
    function isStrictlyPositive64(a) {
        return a.sign === 1 && !isZero64(a);
    }
    exports.isStrictlyPositive64 = isStrictlyPositive64;
    function isEqual64(a, b) {
        if (a.data[0] === b.data[0] && a.data[1] === b.data[1]) {
            return a.sign === b.sign || (a.data[0] === 0 && a.data[1] === 0);
        }
        return false;
    }
    exports.isEqual64 = isEqual64;
    function isStrictlySmaller64Internal(a, b) {
        return a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
    }
    function isStrictlySmaller64(a, b) {
        if (a.sign === b.sign) {
            return a.sign === 1
                ? isStrictlySmaller64Internal(a.data, b.data)
                : isStrictlySmaller64Internal(b.data, a.data);
        }
        return a.sign === -1 && (!isZero64(a) || !isZero64(b));
    }
    exports.isStrictlySmaller64 = isStrictlySmaller64;
    function clone64(a) {
        return { sign: a.sign, data: [a.data[0], a.data[1]] };
    }
    exports.clone64 = clone64;
    function substract64DataInternal(a, b) {
        let reminderLow = 0;
        let low = a[1] - b[1];
        if (low < 0) {
            reminderLow = 1;
            low = low >>> 0;
        }
        return [a[0] - b[0] - reminderLow, low];
    }
    function substract64Internal(a, b) {
        if (a.sign === 1 && b.sign === -1) {
            const low = a.data[1] + b.data[1];
            const high = a.data[0] + b.data[0] + (low > 0xffffffff ? 1 : 0);
            return { sign: 1, data: [high >>> 0, low >>> 0] };
        }
        return {
            sign: 1,
            data: a.sign === 1 ? substract64DataInternal(a.data, b.data) : substract64DataInternal(b.data, a.data),
        };
    }
    function substract64(arrayIntA, arrayIntB) {
        if (isStrictlySmaller64(arrayIntA, arrayIntB)) {
            const out = substract64Internal(arrayIntB, arrayIntA);
            out.sign = -1;
            return out;
        }
        return substract64Internal(arrayIntA, arrayIntB);
    }
    exports.substract64 = substract64;
    function negative64(arrayIntA) {
        return {
            sign: -arrayIntA.sign,
            data: [arrayIntA.data[0], arrayIntA.data[1]],
        };
    }
    exports.negative64 = negative64;
    function add64(arrayIntA, arrayIntB) {
        if (isZero64(arrayIntB)) {
            if (isZero64(arrayIntA)) {
                return clone64(exports.Zero64);
            }
            return clone64(arrayIntA);
        }
        return substract64(arrayIntA, negative64(arrayIntB));
    }
    exports.add64 = add64;
    function halve64(a) {
        return {
            sign: a.sign,
            data: [Math.floor(a.data[0] / 2), (a.data[0] % 2 === 1 ? 0x80000000 : 0) + Math.floor(a.data[1] / 2)],
        };
    }
    exports.halve64 = halve64;
    function logLike64(a) {
        return {
            sign: a.sign,
            data: [0, Math.floor(Math.log(a.data[0] * 0x100000000 + a.data[1]) / Math.log(2))],
        };
    }
    exports.logLike64 = logLike64;

    },{}],34:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.biasNumericRange = exports.bigIntLogLike = exports.integerLogLike = void 0;
    const globals_1 = require("../../../utils/globals");
    const safeMathFloor = Math.floor;
    const safeMathLog = Math.log;
    function integerLogLike(v) {
        return safeMathFloor(safeMathLog(v) / safeMathLog(2));
    }
    exports.integerLogLike = integerLogLike;
    function bigIntLogLike(v) {
        if (v === (0, globals_1.BigInt)(0))
            return (0, globals_1.BigInt)(0);
        return (0, globals_1.BigInt)((0, globals_1.String)(v).length);
    }
    exports.bigIntLogLike = bigIntLogLike;
    function biasNumericRange(min, max, logLike) {
        if (min === max) {
            return [{ min: min, max: max }];
        }
        if (min < 0 && max > 0) {
            const logMin = logLike(-min);
            const logMax = logLike(max);
            return [
                { min: -logMin, max: logMax },
                { min: (max - logMax), max: max },
                { min: min, max: min + logMin },
            ];
        }
        const logGap = logLike((max - min));
        const arbCloseToMin = { min: min, max: min + logGap };
        const arbCloseToMax = { min: (max - logGap), max: max };
        return min < 0
            ? [arbCloseToMax, arbCloseToMin]
            : [arbCloseToMin, arbCloseToMax];
    }
    exports.biasNumericRange = biasNumericRange;

    },{"../../../utils/globals":201}],35:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildSchedulerFor = void 0;
    const SchedulerImplem_1 = require("../implementations/SchedulerImplem");
    function buildNextTaskIndex(ordering) {
        let numTasks = 0;
        return {
            clone: () => buildNextTaskIndex(ordering),
            nextTaskIndex: (scheduledTasks) => {
                if (ordering.length <= numTasks) {
                    throw new Error(`Invalid schedulerFor defined: too many tasks have been scheduled`);
                }
                const taskIndex = scheduledTasks.findIndex((t) => t.taskId === ordering[numTasks]);
                if (taskIndex === -1) {
                    throw new Error(`Invalid schedulerFor defined: unable to find next task`);
                }
                ++numTasks;
                return taskIndex;
            },
        };
    }
    function buildSchedulerFor(act, ordering) {
        return new SchedulerImplem_1.SchedulerImplem(act, buildNextTaskIndex(ordering));
    }
    exports.buildSchedulerFor = buildSchedulerFor;

    },{"../implementations/SchedulerImplem":57}],36:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildSlicedGenerator = void 0;
    const NoopSlicedGenerator_1 = require("../implementations/NoopSlicedGenerator");
    const SlicedBasedGenerator_1 = require("../implementations/SlicedBasedGenerator");
    function buildSlicedGenerator(arb, mrng, slices, biasFactor) {
        if (biasFactor === undefined || slices.length === 0 || mrng.nextInt(1, biasFactor) !== 1) {
            return new NoopSlicedGenerator_1.NoopSlicedGenerator(arb, mrng, biasFactor);
        }
        return new SlicedBasedGenerator_1.SlicedBasedGenerator(arb, mrng, slices, biasFactor);
    }
    exports.buildSlicedGenerator = buildSlicedGenerator;

    },{"../implementations/NoopSlicedGenerator":56,"../implementations/SlicedBasedGenerator":58}],37:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomEqualSet = void 0;
    const globals_1 = require("../../../utils/globals");
    class CustomEqualSet {
        constructor(isEqual) {
            this.isEqual = isEqual;
            this.data = [];
        }
        tryAdd(value) {
            for (let idx = 0; idx !== this.data.length; ++idx) {
                if (this.isEqual(this.data[idx], value)) {
                    return false;
                }
            }
            (0, globals_1.safePush)(this.data, value);
            return true;
        }
        size() {
            return this.data.length;
        }
        getData() {
            return this.data;
        }
    }
    exports.CustomEqualSet = CustomEqualSet;

    },{"../../../utils/globals":201}],38:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDepthIdentifier = exports.getDepthContextFor = void 0;
    const depthContextCache = new Map();
    function getDepthContextFor(contextMeta) {
        if (contextMeta === undefined) {
            return { depth: 0 };
        }
        if (typeof contextMeta !== 'string') {
            return contextMeta;
        }
        const cachedContext = depthContextCache.get(contextMeta);
        if (cachedContext !== undefined) {
            return cachedContext;
        }
        const context = { depth: 0 };
        depthContextCache.set(contextMeta, context);
        return context;
    }
    exports.getDepthContextFor = getDepthContextFor;
    function createDepthIdentifier() {
        const identifier = { depth: 0 };
        return identifier;
    }
    exports.createDepthIdentifier = createDepthIdentifier;

    },{}],39:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indexToDouble = exports.doubleToIndex = exports.decomposeDouble = void 0;
    const ArrayInt64_1 = require("./ArrayInt64");
    const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
    const safePositiveInfinity = Number.POSITIVE_INFINITY;
    const safeNaN = Number.NaN;
    const safeEpsilon = Number.EPSILON;
    const INDEX_POSITIVE_INFINITY = { sign: 1, data: [2146435072, 0] };
    const INDEX_NEGATIVE_INFINITY = { sign: -1, data: [2146435072, 1] };
    function decomposeDouble(d) {
        const maxSignificand = 2 - safeEpsilon;
        for (let exponent = -1022; exponent !== 1024; ++exponent) {
            const powExponent = 2 ** exponent;
            const maxForExponent = maxSignificand * powExponent;
            if (Math.abs(d) <= maxForExponent) {
                return { exponent, significand: d / powExponent };
            }
        }
        return { exponent: safeNaN, significand: safeNaN };
    }
    exports.decomposeDouble = decomposeDouble;
    function positiveNumberToInt64(n) {
        return [~~(n / 0x100000000), n >>> 0];
    }
    function indexInDoubleFromDecomp(exponent, significand) {
        if (exponent === -1022) {
            const rescaledSignificand = significand * 2 ** 52;
            return positiveNumberToInt64(rescaledSignificand);
        }
        const rescaledSignificand = (significand - 1) * 2 ** 52;
        const exponentOnlyHigh = (exponent + 1023) * 2 ** 20;
        const index = positiveNumberToInt64(rescaledSignificand);
        index[0] += exponentOnlyHigh;
        return index;
    }
    function doubleToIndex(d) {
        if (d === safePositiveInfinity) {
            return (0, ArrayInt64_1.clone64)(INDEX_POSITIVE_INFINITY);
        }
        if (d === safeNegativeInfinity) {
            return (0, ArrayInt64_1.clone64)(INDEX_NEGATIVE_INFINITY);
        }
        const decomp = decomposeDouble(d);
        const exponent = decomp.exponent;
        const significand = decomp.significand;
        if (d > 0 || (d === 0 && 1 / d === safePositiveInfinity)) {
            return { sign: 1, data: indexInDoubleFromDecomp(exponent, significand) };
        }
        else {
            const indexOpposite = indexInDoubleFromDecomp(exponent, -significand);
            if (indexOpposite[1] === 0xffffffff) {
                indexOpposite[0] += 1;
                indexOpposite[1] = 0;
            }
            else {
                indexOpposite[1] += 1;
            }
            return { sign: -1, data: indexOpposite };
        }
    }
    exports.doubleToIndex = doubleToIndex;
    function indexToDouble(index) {
        if (index.sign === -1) {
            const indexOpposite = { sign: 1, data: [index.data[0], index.data[1]] };
            if (indexOpposite.data[1] === 0) {
                indexOpposite.data[0] -= 1;
                indexOpposite.data[1] = 0xffffffff;
            }
            else {
                indexOpposite.data[1] -= 1;
            }
            return -indexToDouble(indexOpposite);
        }
        if ((0, ArrayInt64_1.isEqual64)(index, INDEX_POSITIVE_INFINITY)) {
            return safePositiveInfinity;
        }
        if (index.data[0] < 0x200000) {
            return (index.data[0] * 0x100000000 + index.data[1]) * 2 ** -1074;
        }
        const postIndexHigh = index.data[0] - 0x200000;
        const exponent = -1021 + (postIndexHigh >> 20);
        const significand = 1 + ((postIndexHigh & 0xfffff) * 2 ** 32 + index.data[1]) * safeEpsilon;
        return significand * 2 ** exponent;
    }
    exports.indexToDouble = indexToDouble;

    },{"./ArrayInt64":33}],40:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractEnumerableKeys = void 0;
    const safeObjectKeys = Object.keys;
    const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
    const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    function extractEnumerableKeys(instance) {
        const keys = safeObjectKeys(instance);
        const symbols = safeObjectGetOwnPropertySymbols(instance);
        for (let index = 0; index !== symbols.length; ++index) {
            const symbol = symbols[index];
            const descriptor = safeObjectGetOwnPropertyDescriptor(instance, symbol);
            if (descriptor && descriptor.enumerable) {
                keys.push(symbol);
            }
        }
        return keys;
    }
    exports.extractEnumerableKeys = extractEnumerableKeys;

    },{}],41:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indexToFloat = exports.floatToIndex = exports.decomposeFloat = exports.EPSILON_32 = exports.MAX_VALUE_32 = exports.MIN_VALUE_32 = void 0;
    const safeNumberIsInteger = Number.isInteger;
    const safeNumberIsNaN = Number.isNaN;
    const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
    const safePositiveInfinity = Number.POSITIVE_INFINITY;
    const safeNaN = Number.NaN;
    exports.MIN_VALUE_32 = 2 ** -126 * 2 ** -23;
    exports.MAX_VALUE_32 = 2 ** 127 * (1 + (2 ** 23 - 1) / 2 ** 23);
    exports.EPSILON_32 = 2 ** -23;
    const INDEX_POSITIVE_INFINITY = 2139095040;
    const INDEX_NEGATIVE_INFINITY = -2139095041;
    function decomposeFloat(f) {
        const maxSignificand = 1 + (2 ** 23 - 1) / 2 ** 23;
        for (let exponent = -126; exponent !== 128; ++exponent) {
            const powExponent = 2 ** exponent;
            const maxForExponent = maxSignificand * powExponent;
            if (Math.abs(f) <= maxForExponent) {
                return { exponent, significand: f / powExponent };
            }
        }
        return { exponent: safeNaN, significand: safeNaN };
    }
    exports.decomposeFloat = decomposeFloat;
    function indexInFloatFromDecomp(exponent, significand) {
        if (exponent === -126) {
            return significand * 0x800000;
        }
        return (exponent + 127) * 0x800000 + (significand - 1) * 0x800000;
    }
    function floatToIndex(f) {
        if (f === safePositiveInfinity) {
            return INDEX_POSITIVE_INFINITY;
        }
        if (f === safeNegativeInfinity) {
            return INDEX_NEGATIVE_INFINITY;
        }
        const decomp = decomposeFloat(f);
        const exponent = decomp.exponent;
        const significand = decomp.significand;
        if (safeNumberIsNaN(exponent) || safeNumberIsNaN(significand) || !safeNumberIsInteger(significand * 0x800000)) {
            return safeNaN;
        }
        if (f > 0 || (f === 0 && 1 / f === safePositiveInfinity)) {
            return indexInFloatFromDecomp(exponent, significand);
        }
        else {
            return -indexInFloatFromDecomp(exponent, -significand) - 1;
        }
    }
    exports.floatToIndex = floatToIndex;
    function indexToFloat(index) {
        if (index < 0) {
            return -indexToFloat(-index - 1);
        }
        if (index === INDEX_POSITIVE_INFINITY) {
            return safePositiveInfinity;
        }
        if (index < 0x1000000) {
            return index * 2 ** -149;
        }
        const postIndex = index - 0x1000000;
        const exponent = -125 + (postIndex >> 23);
        const significand = 1 + (postIndex & 0x7fffff) / 0x800000;
        return significand * 2 ** exponent;
    }
    exports.indexToFloat = indexToFloat;

    },{}],42:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterInvalidSubdomainLabel = void 0;
    function filterInvalidSubdomainLabel(subdomainLabel) {
        if (subdomainLabel.length > 63) {
            return false;
        }
        return (subdomainLabel.length < 4 ||
            subdomainLabel[0] !== 'x' ||
            subdomainLabel[1] !== 'n' ||
            subdomainLabel[2] !== '-' ||
            subdomainLabel[3] !== '-');
    }
    exports.filterInvalidSubdomainLabel = filterInvalidSubdomainLabel;

    },{}],43:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSubarrayOf = void 0;
    function isSubarrayOf(source, small) {
        const countMap = new Map();
        let countMinusZero = 0;
        for (const sourceEntry of source) {
            if (Object.is(sourceEntry, -0)) {
                ++countMinusZero;
            }
            else {
                const oldCount = countMap.get(sourceEntry) || 0;
                countMap.set(sourceEntry, oldCount + 1);
            }
        }
        for (let index = 0; index !== small.length; ++index) {
            if (!(index in small)) {
                return false;
            }
            const smallEntry = small[index];
            if (Object.is(smallEntry, -0)) {
                if (countMinusZero === 0)
                    return false;
                --countMinusZero;
            }
            else {
                const oldCount = countMap.get(smallEntry) || 0;
                if (oldCount === 0)
                    return false;
                countMap.set(smallEntry, oldCount - 1);
            }
        }
        return true;
    }
    exports.isSubarrayOf = isSubarrayOf;

    },{}],44:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jsonConstraintsBuilder = void 0;
    const boolean_1 = require("../../boolean");
    const constant_1 = require("../../constant");
    const double_1 = require("../../double");
    function jsonConstraintsBuilder(stringArbitrary, constraints) {
        const { depthSize, maxDepth } = constraints;
        const key = stringArbitrary;
        const values = [
            (0, boolean_1.boolean)(),
            (0, double_1.double)({ noDefaultInfinity: true, noNaN: true }),
            stringArbitrary,
            (0, constant_1.constant)(null),
        ];
        return { key, values, depthSize, maxDepth };
    }
    exports.jsonConstraintsBuilder = jsonConstraintsBuilder;

    },{"../../boolean":92,"../../constant":99,"../../double":105}],45:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSize = exports.depthBiasFromSizeForArbitrary = exports.maxGeneratedLengthFromSizeForArbitrary = exports.relativeSizeToSize = exports.maxLengthFromMinLength = exports.DefaultSize = exports.MaxLengthUpperBound = void 0;
    const GlobalParameters_1 = require("../../../check/runner/configuration/GlobalParameters");
    const globals_1 = require("../../../utils/globals");
    const safeMathFloor = Math.floor;
    const safeMathMin = Math.min;
    exports.MaxLengthUpperBound = 0x7fffffff;
    const orderedSize = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
    const orderedRelativeSize = ['-4', '-3', '-2', '-1', '=', '+1', '+2', '+3', '+4'];
    exports.DefaultSize = 'small';
    function maxLengthFromMinLength(minLength, size) {
        switch (size) {
            case 'xsmall':
                return safeMathFloor(1.1 * minLength) + 1;
            case 'small':
                return 2 * minLength + 10;
            case 'medium':
                return 11 * minLength + 100;
            case 'large':
                return 101 * minLength + 1000;
            case 'xlarge':
                return 1001 * minLength + 10000;
            default:
                throw new Error(`Unable to compute lengths based on received size: ${size}`);
        }
    }
    exports.maxLengthFromMinLength = maxLengthFromMinLength;
    function relativeSizeToSize(size, defaultSize) {
        const sizeInRelative = (0, globals_1.safeIndexOf)(orderedRelativeSize, size);
        if (sizeInRelative === -1) {
            return size;
        }
        const defaultSizeInSize = (0, globals_1.safeIndexOf)(orderedSize, defaultSize);
        if (defaultSizeInSize === -1) {
            throw new Error(`Unable to offset size based on the unknown defaulted one: ${defaultSize}`);
        }
        const resultingSizeInSize = defaultSizeInSize + sizeInRelative - 4;
        return resultingSizeInSize < 0
            ? orderedSize[0]
            : resultingSizeInSize >= orderedSize.length
                ? orderedSize[orderedSize.length - 1]
                : orderedSize[resultingSizeInSize];
    }
    exports.relativeSizeToSize = relativeSizeToSize;
    function maxGeneratedLengthFromSizeForArbitrary(size, minLength, maxLength, specifiedMaxLength) {
        const { baseSize: defaultSize = exports.DefaultSize, defaultSizeToMaxWhenMaxSpecified } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
        const definedSize = size !== undefined ? size : specifiedMaxLength && defaultSizeToMaxWhenMaxSpecified ? 'max' : defaultSize;
        if (definedSize === 'max') {
            return maxLength;
        }
        const finalSize = relativeSizeToSize(definedSize, defaultSize);
        return safeMathMin(maxLengthFromMinLength(minLength, finalSize), maxLength);
    }
    exports.maxGeneratedLengthFromSizeForArbitrary = maxGeneratedLengthFromSizeForArbitrary;
    function depthBiasFromSizeForArbitrary(depthSizeOrSize, specifiedMaxDepth) {
        if (typeof depthSizeOrSize === 'number') {
            return 1 / depthSizeOrSize;
        }
        const { baseSize: defaultSize = exports.DefaultSize, defaultSizeToMaxWhenMaxSpecified } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
        const definedSize = depthSizeOrSize !== undefined
            ? depthSizeOrSize
            : specifiedMaxDepth && defaultSizeToMaxWhenMaxSpecified
                ? 'max'
                : defaultSize;
        if (definedSize === 'max') {
            return 0;
        }
        const finalSize = relativeSizeToSize(definedSize, defaultSize);
        switch (finalSize) {
            case 'xsmall':
                return 1;
            case 'small':
                return 0.5;
            case 'medium':
                return 0.25;
            case 'large':
                return 0.125;
            case 'xlarge':
                return 0.0625;
        }
    }
    exports.depthBiasFromSizeForArbitrary = depthBiasFromSizeForArbitrary;
    function resolveSize(size) {
        const { baseSize: defaultSize = exports.DefaultSize } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
        if (size === undefined) {
            return defaultSize;
        }
        return relativeSizeToSize(size, defaultSize);
    }
    exports.resolveSize = resolveSize;

    },{"../../../check/runner/configuration/GlobalParameters":186,"../../../utils/globals":201}],46:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noUndefinedAsContext = exports.UndefinedContextPlaceholder = void 0;
    const Value_1 = require("../../../check/arbitrary/definition/Value");
    exports.UndefinedContextPlaceholder = Symbol('UndefinedContextPlaceholder');
    function noUndefinedAsContext(value) {
        if (value.context !== undefined) {
            return value;
        }
        if (value.hasToBeCloned) {
            return new Value_1.Value(value.value_, exports.UndefinedContextPlaceholder, () => value.value);
        }
        return new Value_1.Value(value.value_, exports.UndefinedContextPlaceholder);
    }
    exports.noUndefinedAsContext = noUndefinedAsContext;

    },{"../../../check/arbitrary/definition/Value":163}],47:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toQualifiedObjectConstraints = void 0;
    const boolean_1 = require("../../boolean");
    const constant_1 = require("../../constant");
    const double_1 = require("../../double");
    const maxSafeInteger_1 = require("../../maxSafeInteger");
    const oneof_1 = require("../../oneof");
    const string_1 = require("../../string");
    const BoxedArbitraryBuilder_1 = require("../builders/BoxedArbitraryBuilder");
    function defaultValues(constraints) {
        return [
            (0, boolean_1.boolean)(),
            (0, maxSafeInteger_1.maxSafeInteger)(),
            (0, double_1.double)(),
            (0, string_1.string)(constraints),
            (0, oneof_1.oneof)((0, string_1.string)(constraints), (0, constant_1.constant)(null), (0, constant_1.constant)(undefined)),
        ];
    }
    function boxArbitraries(arbs) {
        return arbs.map((arb) => (0, BoxedArbitraryBuilder_1.boxedArbitraryBuilder)(arb));
    }
    function boxArbitrariesIfNeeded(arbs, boxEnabled) {
        return boxEnabled ? boxArbitraries(arbs).concat(arbs) : arbs;
    }
    function toQualifiedObjectConstraints(settings = {}) {
        function orDefault(optionalValue, defaultValue) {
            return optionalValue !== undefined ? optionalValue : defaultValue;
        }
        const valueConstraints = { size: settings.size };
        return {
            key: orDefault(settings.key, (0, string_1.string)(valueConstraints)),
            values: boxArbitrariesIfNeeded(orDefault(settings.values, defaultValues(valueConstraints)), orDefault(settings.withBoxedValues, false)),
            depthSize: settings.depthSize,
            maxDepth: settings.maxDepth,
            maxKeys: settings.maxKeys,
            size: settings.size,
            withSet: orDefault(settings.withSet, false),
            withMap: orDefault(settings.withMap, false),
            withObjectString: orDefault(settings.withObjectString, false),
            withNullPrototype: orDefault(settings.withNullPrototype, false),
            withBigInt: orDefault(settings.withBigInt, false),
            withDate: orDefault(settings.withDate, false),
            withTypedArray: orDefault(settings.withTypedArray, false),
            withSparseArray: orDefault(settings.withSparseArray, false),
        };
    }
    exports.toQualifiedObjectConstraints = toQualifiedObjectConstraints;

    },{"../../boolean":92,"../../constant":99,"../../double":105,"../../maxSafeInteger":129,"../../oneof":135,"../../string":141,"../builders/BoxedArbitraryBuilder":22}],48:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SameValueSet = void 0;
    const globals_1 = require("../../../utils/globals");
    const safeObjectIs = Object.is;
    class SameValueSet {
        constructor(selector) {
            this.selector = selector;
            this.selectedItemsExceptMinusZero = new globals_1.Set();
            this.data = [];
            this.hasMinusZero = false;
        }
        tryAdd(value) {
            const selected = this.selector(value);
            if (safeObjectIs(selected, -0)) {
                if (this.hasMinusZero) {
                    return false;
                }
                (0, globals_1.safePush)(this.data, value);
                this.hasMinusZero = true;
                return true;
            }
            const sizeBefore = this.selectedItemsExceptMinusZero.size;
            (0, globals_1.safeAdd)(this.selectedItemsExceptMinusZero, selected);
            if (sizeBefore !== this.selectedItemsExceptMinusZero.size) {
                (0, globals_1.safePush)(this.data, value);
                return true;
            }
            return false;
        }
        size() {
            return this.data.length;
        }
        getData() {
            return this.data;
        }
    }
    exports.SameValueSet = SameValueSet;

    },{"../../../utils/globals":201}],49:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SameValueZeroSet = void 0;
    const globals_1 = require("../../../utils/globals");
    class SameValueZeroSet {
        constructor(selector) {
            this.selector = selector;
            this.selectedItems = new globals_1.Set();
            this.data = [];
        }
        tryAdd(value) {
            const selected = this.selector(value);
            const sizeBefore = this.selectedItems.size;
            (0, globals_1.safeAdd)(this.selectedItems, selected);
            if (sizeBefore !== this.selectedItems.size) {
                (0, globals_1.safePush)(this.data, value);
                return true;
            }
            return false;
        }
        size() {
            return this.data.length;
        }
        getData() {
            return this.data;
        }
    }
    exports.SameValueZeroSet = SameValueZeroSet;

    },{"../../../utils/globals":201}],50:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shrinkBigInt = void 0;
    const Stream_1 = require("../../../stream/Stream");
    const Value_1 = require("../../../check/arbitrary/definition/Value");
    const globals_1 = require("../../../utils/globals");
    function halveBigInt(n) {
        return n / (0, globals_1.BigInt)(2);
    }
    function shrinkBigInt(current, target, tryTargetAsap) {
        const realGap = current - target;
        function* shrinkDecr() {
            let previous = tryTargetAsap ? undefined : target;
            const gap = tryTargetAsap ? realGap : halveBigInt(realGap);
            for (let toremove = gap; toremove > 0; toremove = halveBigInt(toremove)) {
                const next = current - toremove;
                yield new Value_1.Value(next, previous);
                previous = next;
            }
        }
        function* shrinkIncr() {
            let previous = tryTargetAsap ? undefined : target;
            const gap = tryTargetAsap ? realGap : halveBigInt(realGap);
            for (let toremove = gap; toremove < 0; toremove = halveBigInt(toremove)) {
                const next = current - toremove;
                yield new Value_1.Value(next, previous);
                previous = next;
            }
        }
        return realGap > 0 ? (0, Stream_1.stream)(shrinkDecr()) : (0, Stream_1.stream)(shrinkIncr());
    }
    exports.shrinkBigInt = shrinkBigInt;

    },{"../../../check/arbitrary/definition/Value":163,"../../../stream/Stream":198,"../../../utils/globals":201}],51:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shrinkInteger = void 0;
    const Value_1 = require("../../../check/arbitrary/definition/Value");
    const Stream_1 = require("../../../stream/Stream");
    const safeMathCeil = Math.ceil;
    const safeMathFloor = Math.floor;
    function halvePosInteger(n) {
        return safeMathFloor(n / 2);
    }
    function halveNegInteger(n) {
        return safeMathCeil(n / 2);
    }
    function shrinkInteger(current, target, tryTargetAsap) {
        const realGap = current - target;
        function* shrinkDecr() {
            let previous = tryTargetAsap ? undefined : target;
            const gap = tryTargetAsap ? realGap : halvePosInteger(realGap);
            for (let toremove = gap; toremove > 0; toremove = halvePosInteger(toremove)) {
                const next = toremove === realGap ? target : current - toremove;
                yield new Value_1.Value(next, previous);
                previous = next;
            }
        }
        function* shrinkIncr() {
            let previous = tryTargetAsap ? undefined : target;
            const gap = tryTargetAsap ? realGap : halveNegInteger(realGap);
            for (let toremove = gap; toremove < 0; toremove = halveNegInteger(toremove)) {
                const next = toremove === realGap ? target : current - toremove;
                yield new Value_1.Value(next, previous);
                previous = next;
            }
        }
        return realGap > 0 ? (0, Stream_1.stream)(shrinkDecr()) : (0, Stream_1.stream)(shrinkIncr());
    }
    exports.shrinkInteger = shrinkInteger;

    },{"../../../check/arbitrary/definition/Value":163,"../../../stream/Stream":198}],52:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSlicesForString = void 0;
    const globals_1 = require("../../../utils/globals");
    const dangerousStrings = [
        '__defineGetter__',
        '__defineSetter__',
        '__lookupGetter__',
        '__lookupSetter__',
        '__proto__',
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
        'apply',
        'arguments',
        'bind',
        'call',
        'caller',
        'length',
        'name',
        'prototype',
        'key',
        'ref',
    ];
    function computeCandidateString(dangerous, charArbitrary, stringSplitter) {
        let candidate;
        try {
            candidate = stringSplitter(dangerous);
        }
        catch (err) {
            return undefined;
        }
        for (const entry of candidate) {
            if (!charArbitrary.canShrinkWithoutContext(entry)) {
                return undefined;
            }
        }
        return candidate;
    }
    function createSlicesForString(charArbitrary, stringSplitter) {
        const slicesForString = [];
        for (const dangerous of dangerousStrings) {
            const candidate = computeCandidateString(dangerous, charArbitrary, stringSplitter);
            if (candidate !== undefined) {
                (0, globals_1.safePush)(slicesForString, candidate);
            }
        }
        return slicesForString;
    }
    exports.createSlicesForString = createSlicesForString;

    },{"../../../utils/globals":201}],53:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StrictlyEqualSet = void 0;
    const globals_1 = require("../../../utils/globals");
    const safeNumberIsNaN = Number.isNaN;
    class StrictlyEqualSet {
        constructor(selector) {
            this.selector = selector;
            this.selectedItemsExceptNaN = new globals_1.Set();
            this.data = [];
        }
        tryAdd(value) {
            const selected = this.selector(value);
            if (safeNumberIsNaN(selected)) {
                (0, globals_1.safePush)(this.data, value);
                return true;
            }
            const sizeBefore = this.selectedItemsExceptNaN.size;
            (0, globals_1.safeAdd)(this.selectedItemsExceptNaN, selected);
            if (sizeBefore !== this.selectedItemsExceptNaN.size) {
                (0, globals_1.safePush)(this.data, value);
                return true;
            }
            return false;
        }
        size() {
            return this.data.length;
        }
        getData() {
            return this.data;
        }
    }
    exports.StrictlyEqualSet = StrictlyEqualSet;

    },{"../../../utils/globals":201}],54:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeForMultilineComments = exports.escapeForTemplateString = void 0;
    function escapeForTemplateString(originalText) {
        return originalText.replace(/([$`\\])/g, '\\$1').replace(/\r/g, '\\r');
    }
    exports.escapeForTemplateString = escapeForTemplateString;
    function escapeForMultilineComments(originalText) {
        return originalText.replace(/\*\//g, '*\\/');
    }
    exports.escapeForMultilineComments = escapeForMultilineComments;

    },{}],55:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyFlagsOnChars = exports.computeFlagsFromChars = exports.computeTogglePositions = exports.computeNextFlags = exports.countToggledBits = void 0;
    const globals_1 = require("../../../utils/globals");
    function countToggledBits(n) {
        let count = 0;
        while (n > (0, globals_1.BigInt)(0)) {
            if (n & (0, globals_1.BigInt)(1))
                ++count;
            n >>= (0, globals_1.BigInt)(1);
        }
        return count;
    }
    exports.countToggledBits = countToggledBits;
    function computeNextFlags(flags, nextSize) {
        const allowedMask = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(nextSize)) - (0, globals_1.BigInt)(1);
        const preservedFlags = flags & allowedMask;
        let numMissingFlags = countToggledBits(flags - preservedFlags);
        let nFlags = preservedFlags;
        for (let mask = (0, globals_1.BigInt)(1); mask <= allowedMask && numMissingFlags !== 0; mask <<= (0, globals_1.BigInt)(1)) {
            if (!(nFlags & mask)) {
                nFlags |= mask;
                --numMissingFlags;
            }
        }
        return nFlags;
    }
    exports.computeNextFlags = computeNextFlags;
    function computeTogglePositions(chars, toggleCase) {
        const positions = [];
        for (let idx = chars.length - 1; idx !== -1; --idx) {
            if (toggleCase(chars[idx]) !== chars[idx])
                (0, globals_1.safePush)(positions, idx);
        }
        return positions;
    }
    exports.computeTogglePositions = computeTogglePositions;
    function computeFlagsFromChars(untoggledChars, toggledChars, togglePositions) {
        let flags = (0, globals_1.BigInt)(0);
        for (let idx = 0, mask = (0, globals_1.BigInt)(1); idx !== togglePositions.length; ++idx, mask <<= (0, globals_1.BigInt)(1)) {
            if (untoggledChars[togglePositions[idx]] !== toggledChars[togglePositions[idx]]) {
                flags |= mask;
            }
        }
        return flags;
    }
    exports.computeFlagsFromChars = computeFlagsFromChars;
    function applyFlagsOnChars(chars, flags, togglePositions, toggleCase) {
        for (let idx = 0, mask = (0, globals_1.BigInt)(1); idx !== togglePositions.length; ++idx, mask <<= (0, globals_1.BigInt)(1)) {
            if (flags & mask)
                chars[togglePositions[idx]] = toggleCase(chars[togglePositions[idx]]);
        }
    }
    exports.applyFlagsOnChars = applyFlagsOnChars;

    },{"../../../utils/globals":201}],56:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopSlicedGenerator = void 0;
    class NoopSlicedGenerator {
        constructor(arb, mrng, biasFactor) {
            this.arb = arb;
            this.mrng = mrng;
            this.biasFactor = biasFactor;
        }
        attemptExact() {
            return;
        }
        next() {
            return this.arb.generate(this.mrng, this.biasFactor);
        }
    }
    exports.NoopSlicedGenerator = NoopSlicedGenerator;

    },{}],57:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SchedulerImplem = void 0;
    const TextEscaper_1 = require("../helpers/TextEscaper");
    const symbols_1 = require("../../../check/symbols");
    const stringify_1 = require("../../../utils/stringify");
    class SchedulerImplem {
        constructor(act, taskSelector) {
            this.act = act;
            this.taskSelector = taskSelector;
            this.lastTaskId = 0;
            this.sourceTaskSelector = taskSelector.clone();
            this.scheduledTasks = [];
            this.triggeredTasks = [];
            this.scheduledWatchers = [];
        }
        static buildLog(reportItem) {
            return `[task\${${reportItem.taskId}}] ${reportItem.label.length !== 0 ? `${reportItem.schedulingType}::${reportItem.label}` : reportItem.schedulingType} ${reportItem.status}${reportItem.outputValue !== undefined ? ` with value ${(0, TextEscaper_1.escapeForTemplateString)(reportItem.outputValue)}` : ''}`;
        }
        log(schedulingType, taskId, label, metadata, status, data) {
            this.triggeredTasks.push({
                status,
                schedulingType,
                taskId,
                label,
                metadata,
                outputValue: data !== undefined ? (0, stringify_1.stringify)(data) : undefined,
            });
        }
        scheduleInternal(schedulingType, label, task, metadata, thenTaskToBeAwaited) {
            let trigger = null;
            const taskId = ++this.lastTaskId;
            const scheduledPromise = new Promise((resolve, reject) => {
                trigger = () => {
                    (thenTaskToBeAwaited ? task.then(() => thenTaskToBeAwaited()) : task).then((data) => {
                        this.log(schedulingType, taskId, label, metadata, 'resolved', data);
                        return resolve(data);
                    }, (err) => {
                        this.log(schedulingType, taskId, label, metadata, 'rejected', err);
                        return reject(err);
                    });
                };
            });
            this.scheduledTasks.push({
                original: task,
                scheduled: scheduledPromise,
                trigger: trigger,
                schedulingType,
                taskId,
                label,
                metadata,
            });
            if (this.scheduledWatchers.length !== 0) {
                this.scheduledWatchers[0]();
            }
            return scheduledPromise;
        }
        schedule(task, label, metadata) {
            return this.scheduleInternal('promise', label || '', task, metadata);
        }
        scheduleFunction(asyncFunction) {
            return (...args) => this.scheduleInternal('function', `${asyncFunction.name}(${args.map(stringify_1.stringify).join(',')})`, asyncFunction(...args), undefined);
        }
        scheduleSequence(sequenceBuilders) {
            const status = { done: false, faulty: false };
            const dummyResolvedPromise = { then: (f) => f() };
            let resolveSequenceTask = () => { };
            const sequenceTask = new Promise((resolve) => (resolveSequenceTask = resolve));
            sequenceBuilders
                .reduce((previouslyScheduled, item) => {
                const [builder, label, metadata] = typeof item === 'function' ? [item, item.name, undefined] : [item.builder, item.label, item.metadata];
                return previouslyScheduled.then(() => {
                    const scheduled = this.scheduleInternal('sequence', label, dummyResolvedPromise, metadata, () => builder());
                    scheduled.catch(() => {
                        status.faulty = true;
                        resolveSequenceTask();
                    });
                    return scheduled;
                });
            }, dummyResolvedPromise)
                .then(() => {
                status.done = true;
                resolveSequenceTask();
            }, () => {
            });
            return Object.assign(status, {
                task: Promise.resolve(sequenceTask).then(() => {
                    return { done: status.done, faulty: status.faulty };
                }),
            });
        }
        count() {
            return this.scheduledTasks.length;
        }
        async internalWaitOne() {
            if (this.scheduledTasks.length === 0) {
                throw new Error('No task scheduled');
            }
            const taskIndex = this.taskSelector.nextTaskIndex(this.scheduledTasks);
            const [scheduledTask] = this.scheduledTasks.splice(taskIndex, 1);
            scheduledTask.trigger();
            try {
                await scheduledTask.scheduled;
            }
            catch (_err) {
            }
        }
        async waitOne() {
            await this.act(async () => await this.internalWaitOne());
        }
        async waitAll() {
            while (this.scheduledTasks.length > 0) {
                await this.waitOne();
            }
        }
        async waitFor(unscheduledTask) {
            let taskResolved = false;
            let awaiterPromise = null;
            const awaiter = async () => {
                while (!taskResolved && this.scheduledTasks.length > 0) {
                    await this.waitOne();
                }
                awaiterPromise = null;
            };
            const handleNotified = () => {
                if (awaiterPromise !== null) {
                    return;
                }
                awaiterPromise = Promise.resolve().then(awaiter);
            };
            const clearAndReplaceWatcher = () => {
                const handleNotifiedIndex = this.scheduledWatchers.indexOf(handleNotified);
                if (handleNotifiedIndex !== -1) {
                    this.scheduledWatchers.splice(handleNotifiedIndex, 1);
                }
                if (handleNotifiedIndex === 0 && this.scheduledWatchers.length !== 0) {
                    this.scheduledWatchers[0]();
                }
            };
            const rewrappedTask = unscheduledTask.then((ret) => {
                taskResolved = true;
                if (awaiterPromise === null) {
                    clearAndReplaceWatcher();
                    return ret;
                }
                return awaiterPromise.then(() => {
                    clearAndReplaceWatcher();
                    return ret;
                });
            }, (err) => {
                taskResolved = true;
                if (awaiterPromise === null) {
                    clearAndReplaceWatcher();
                    throw err;
                }
                return awaiterPromise.then(() => {
                    clearAndReplaceWatcher();
                    throw err;
                });
            });
            if (this.scheduledTasks.length > 0 && this.scheduledWatchers.length === 0) {
                handleNotified();
            }
            this.scheduledWatchers.push(handleNotified);
            return rewrappedTask;
        }
        report() {
            return [
                ...this.triggeredTasks,
                ...this.scheduledTasks.map((t) => ({
                    status: 'pending',
                    schedulingType: t.schedulingType,
                    taskId: t.taskId,
                    label: t.label,
                    metadata: t.metadata,
                })),
            ];
        }
        toString() {
            return ('schedulerFor()`\n' +
                this.report()
                    .map(SchedulerImplem.buildLog)
                    .map((log) => `-> ${log}`)
                    .join('\n') +
                '`');
        }
        [symbols_1.cloneMethod]() {
            return new SchedulerImplem(this.act, this.sourceTaskSelector);
        }
    }
    exports.SchedulerImplem = SchedulerImplem;

    },{"../../../check/symbols":193,"../../../utils/stringify":203,"../helpers/TextEscaper":54}],58:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SlicedBasedGenerator = void 0;
    const Value_1 = require("../../../check/arbitrary/definition/Value");
    const globals_1 = require("../../../utils/globals");
    const safeMathMin = Math.min;
    const safeMathMax = Math.max;
    class SlicedBasedGenerator {
        constructor(arb, mrng, slices, biasFactor) {
            this.arb = arb;
            this.mrng = mrng;
            this.slices = slices;
            this.biasFactor = biasFactor;
            this.activeSliceIndex = 0;
            this.nextIndexInSlice = 0;
            this.lastIndexInSlice = -1;
        }
        attemptExact(targetLength) {
            if (targetLength !== 0 && this.mrng.nextInt(1, this.biasFactor) === 1) {
                const eligibleIndices = [];
                for (let index = 0; index !== this.slices.length; ++index) {
                    const slice = this.slices[index];
                    if (slice.length === targetLength) {
                        (0, globals_1.safePush)(eligibleIndices, index);
                    }
                }
                if (eligibleIndices.length === 0) {
                    return;
                }
                this.activeSliceIndex = eligibleIndices[this.mrng.nextInt(0, eligibleIndices.length - 1)];
                this.nextIndexInSlice = 0;
                this.lastIndexInSlice = targetLength - 1;
            }
        }
        next() {
            if (this.nextIndexInSlice <= this.lastIndexInSlice) {
                return new Value_1.Value(this.slices[this.activeSliceIndex][this.nextIndexInSlice++], undefined);
            }
            if (this.mrng.nextInt(1, this.biasFactor) !== 1) {
                return this.arb.generate(this.mrng, this.biasFactor);
            }
            this.activeSliceIndex = this.mrng.nextInt(0, this.slices.length - 1);
            const slice = this.slices[this.activeSliceIndex];
            if (this.mrng.nextInt(1, this.biasFactor) !== 1) {
                this.nextIndexInSlice = 1;
                this.lastIndexInSlice = slice.length - 1;
                return new Value_1.Value(slice[0], undefined);
            }
            const rangeBoundaryA = this.mrng.nextInt(0, slice.length - 1);
            const rangeBoundaryB = this.mrng.nextInt(0, slice.length - 1);
            this.nextIndexInSlice = safeMathMin(rangeBoundaryA, rangeBoundaryB);
            this.lastIndexInSlice = safeMathMax(rangeBoundaryA, rangeBoundaryB);
            return new Value_1.Value(slice[this.nextIndexInSlice++], undefined);
        }
    }
    exports.SlicedBasedGenerator = SlicedBasedGenerator;

    },{"../../../check/arbitrary/definition/Value":163,"../../../utils/globals":201}],59:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.arrayToMapUnmapper = exports.arrayToMapMapper = void 0;
    function arrayToMapMapper(data) {
        return new Map(data);
    }
    exports.arrayToMapMapper = arrayToMapMapper;
    function arrayToMapUnmapper(value) {
        if (typeof value !== 'object' || value === null) {
            throw new Error('Incompatible instance received: should be a non-null object');
        }
        if (!('constructor' in value) || value.constructor !== Map) {
            throw new Error('Incompatible instance received: should be of exact type Map');
        }
        return Array.from(value);
    }
    exports.arrayToMapUnmapper = arrayToMapUnmapper;

    },{}],60:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.arrayToSetUnmapper = exports.arrayToSetMapper = void 0;
    function arrayToSetMapper(data) {
        return new Set(data);
    }
    exports.arrayToSetMapper = arrayToSetMapper;
    function arrayToSetUnmapper(value) {
        if (typeof value !== 'object' || value === null) {
            throw new Error('Incompatible instance received: should be a non-null object');
        }
        if (!('constructor' in value) || value.constructor !== Set) {
            throw new Error('Incompatible instance received: should be of exact type Set');
        }
        return Array.from(value);
    }
    exports.arrayToSetUnmapper = arrayToSetUnmapper;

    },{}],61:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.charsToStringUnmapper = exports.charsToStringMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function charsToStringMapper(tab) {
        return (0, globals_1.safeJoin)(tab, '');
    }
    exports.charsToStringMapper = charsToStringMapper;
    function charsToStringUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Cannot unmap the passed value');
        }
        return (0, globals_1.safeSplit)(value, '');
    }
    exports.charsToStringUnmapper = charsToStringUnmapper;

    },{"../../../utils/globals":201}],62:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.codePointsToStringUnmapper = exports.codePointsToStringMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function codePointsToStringMapper(tab) {
        return (0, globals_1.safeJoin)(tab, '');
    }
    exports.codePointsToStringMapper = codePointsToStringMapper;
    function codePointsToStringUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Cannot unmap the passed value');
        }
        return [...value];
    }
    exports.codePointsToStringUnmapper = codePointsToStringUnmapper;

    },{"../../../utils/globals":201}],63:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noTrailingUnmapper = exports.noTrailingMapper = exports.singleTrailingUnmapper = exports.singleTrailingMapper = exports.multiTrailingUnmapperOne = exports.multiTrailingMapperOne = exports.multiTrailingUnmapper = exports.multiTrailingMapper = exports.onlyTrailingUnmapper = exports.onlyTrailingMapper = exports.fullySpecifiedUnmapper = exports.fullySpecifiedMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function readBh(value) {
        if (value.length === 0)
            return [];
        else
            return (0, globals_1.safeSplit)(value, ':');
    }
    function extractEhAndL(value) {
        const valueSplits = (0, globals_1.safeSplit)(value, ':');
        if (valueSplits.length >= 2 && valueSplits[valueSplits.length - 1].length <= 4) {
            return [
                (0, globals_1.safeSlice)(valueSplits, 0, valueSplits.length - 2),
                `${valueSplits[valueSplits.length - 2]}:${valueSplits[valueSplits.length - 1]}`,
            ];
        }
        return [(0, globals_1.safeSlice)(valueSplits, 0, valueSplits.length - 1), valueSplits[valueSplits.length - 1]];
    }
    function fullySpecifiedMapper(data) {
        return `${(0, globals_1.safeJoin)(data[0], ':')}:${data[1]}`;
    }
    exports.fullySpecifiedMapper = fullySpecifiedMapper;
    function fullySpecifiedUnmapper(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid type');
        return extractEhAndL(value);
    }
    exports.fullySpecifiedUnmapper = fullySpecifiedUnmapper;
    function onlyTrailingMapper(data) {
        return `::${(0, globals_1.safeJoin)(data[0], ':')}:${data[1]}`;
    }
    exports.onlyTrailingMapper = onlyTrailingMapper;
    function onlyTrailingUnmapper(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid type');
        if (!(0, globals_1.safeStartsWith)(value, '::'))
            throw new Error('Invalid value');
        return extractEhAndL((0, globals_1.safeSubstring)(value, 2));
    }
    exports.onlyTrailingUnmapper = onlyTrailingUnmapper;
    function multiTrailingMapper(data) {
        return `${(0, globals_1.safeJoin)(data[0], ':')}::${(0, globals_1.safeJoin)(data[1], ':')}:${data[2]}`;
    }
    exports.multiTrailingMapper = multiTrailingMapper;
    function multiTrailingUnmapper(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid type');
        const [bhString, trailingString] = (0, globals_1.safeSplit)(value, '::', 2);
        const [eh, l] = extractEhAndL(trailingString);
        return [readBh(bhString), eh, l];
    }
    exports.multiTrailingUnmapper = multiTrailingUnmapper;
    function multiTrailingMapperOne(data) {
        return multiTrailingMapper([data[0], [data[1]], data[2]]);
    }
    exports.multiTrailingMapperOne = multiTrailingMapperOne;
    function multiTrailingUnmapperOne(value) {
        const out = multiTrailingUnmapper(value);
        return [out[0], (0, globals_1.safeJoin)(out[1], ':'), out[2]];
    }
    exports.multiTrailingUnmapperOne = multiTrailingUnmapperOne;
    function singleTrailingMapper(data) {
        return `${(0, globals_1.safeJoin)(data[0], ':')}::${data[1]}`;
    }
    exports.singleTrailingMapper = singleTrailingMapper;
    function singleTrailingUnmapper(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid type');
        const [bhString, trailing] = (0, globals_1.safeSplit)(value, '::', 2);
        return [readBh(bhString), trailing];
    }
    exports.singleTrailingUnmapper = singleTrailingUnmapper;
    function noTrailingMapper(data) {
        return `${(0, globals_1.safeJoin)(data[0], ':')}::`;
    }
    exports.noTrailingMapper = noTrailingMapper;
    function noTrailingUnmapper(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid type');
        if (!(0, globals_1.safeEndsWith)(value, '::'))
            throw new Error('Invalid value');
        return [readBh((0, globals_1.safeSubstring)(value, 0, value.length - 2))];
    }
    exports.noTrailingUnmapper = noTrailingUnmapper;

    },{"../../../utils/globals":201}],64:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indexToCharStringUnmapper = exports.indexToCharStringMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    exports.indexToCharStringMapper = String.fromCodePoint;
    function indexToCharStringUnmapper(c) {
        if (typeof c !== 'string') {
            throw new Error('Cannot unmap non-string');
        }
        if (c.length === 0 || c.length > 2) {
            throw new Error('Cannot unmap string with more or less than one character');
        }
        const c1 = (0, globals_1.safeCharCodeAt)(c, 0);
        if (c.length === 1) {
            return c1;
        }
        const c2 = (0, globals_1.safeCharCodeAt)(c, 1);
        if (c1 < 0xd800 || c1 > 0xdbff || c2 < 0xdc00 || c2 > 0xdfff) {
            throw new Error('Cannot unmap invalid surrogate pairs');
        }
        return c.codePointAt(0);
    }
    exports.indexToCharStringUnmapper = indexToCharStringUnmapper;

    },{"../../../utils/globals":201}],65:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indexToMappedConstantUnmapperFor = exports.indexToMappedConstantMapperFor = void 0;
    function indexToMappedConstantMapperFor(entries) {
        return function indexToMappedConstantMapper(choiceIndex) {
            let idx = -1;
            let numSkips = 0;
            while (choiceIndex >= numSkips) {
                numSkips += entries[++idx].num;
            }
            return entries[idx].build(choiceIndex - numSkips + entries[idx].num);
        };
    }
    exports.indexToMappedConstantMapperFor = indexToMappedConstantMapperFor;
    function buildReverseMapping(entries) {
        const reverseMapping = { mapping: new Map(), negativeZeroIndex: undefined };
        let choiceIndex = 0;
        for (let entryIdx = 0; entryIdx !== entries.length; ++entryIdx) {
            const entry = entries[entryIdx];
            for (let idxInEntry = 0; idxInEntry !== entry.num; ++idxInEntry) {
                const value = entry.build(idxInEntry);
                if (value === 0 && 1 / value === Number.NEGATIVE_INFINITY) {
                    reverseMapping.negativeZeroIndex = choiceIndex;
                }
                else {
                    reverseMapping.mapping.set(value, choiceIndex);
                }
                ++choiceIndex;
            }
        }
        return reverseMapping;
    }
    function indexToMappedConstantUnmapperFor(entries) {
        let reverseMapping = null;
        return function indexToMappedConstantUnmapper(value) {
            if (reverseMapping === null) {
                reverseMapping = buildReverseMapping(entries);
            }
            const choiceIndex = Object.is(value, -0) ? reverseMapping.negativeZeroIndex : reverseMapping.mapping.get(value);
            if (choiceIndex === undefined) {
                throw new Error('Unknown value encountered cannot be built using this mapToConstant');
            }
            return choiceIndex;
        };
    }
    exports.indexToMappedConstantUnmapperFor = indexToMappedConstantUnmapperFor;

    },{}],66:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indexToPrintableIndexUnmapper = exports.indexToPrintableIndexMapper = void 0;
    function indexToPrintableIndexMapper(v) {
        if (v < 95)
            return v + 0x20;
        if (v <= 0x7e)
            return v - 95;
        return v;
    }
    exports.indexToPrintableIndexMapper = indexToPrintableIndexMapper;
    function indexToPrintableIndexUnmapper(v) {
        if (v >= 0x20 && v <= 0x7e)
            return v - 0x20;
        if (v >= 0 && v <= 0x1f)
            return v + 95;
        return v;
    }
    exports.indexToPrintableIndexUnmapper = indexToPrintableIndexUnmapper;

    },{}],67:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keyValuePairsToObjectUnmapper = exports.keyValuePairsToObjectMapper = void 0;
    function keyValuePairsToObjectMapper(items) {
        const obj = {};
        for (const keyValue of items) {
            Object.defineProperty(obj, keyValue[0], {
                enumerable: true,
                configurable: true,
                writable: true,
                value: keyValue[1],
            });
        }
        return obj;
    }
    exports.keyValuePairsToObjectMapper = keyValuePairsToObjectMapper;
    function buildInvalidPropertyNameFilter(obj) {
        return function invalidPropertyNameFilter(key) {
            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
            return (descriptor === undefined ||
                !descriptor.configurable ||
                !descriptor.enumerable ||
                !descriptor.writable ||
                descriptor.get !== undefined ||
                descriptor.set !== undefined);
        };
    }
    function keyValuePairsToObjectUnmapper(value) {
        if (typeof value !== 'object' || value === null) {
            throw new Error('Incompatible instance received: should be a non-null object');
        }
        if (!('constructor' in value) || value.constructor !== Object) {
            throw new Error('Incompatible instance received: should be of exact type Object');
        }
        if (Object.getOwnPropertySymbols(value).length > 0) {
            throw new Error('Incompatible instance received: should contain symbols');
        }
        if (Object.getOwnPropertyNames(value).find(buildInvalidPropertyNameFilter(value)) !== undefined) {
            throw new Error('Incompatible instance received: should contain only c/e/w properties without get/set');
        }
        return Object.entries(value);
    }
    exports.keyValuePairsToObjectUnmapper = keyValuePairsToObjectUnmapper;

    },{}],68:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.natToStringifiedNatUnmapper = exports.tryParseStringifiedNat = exports.natToStringifiedNatMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    const safeNumberParseInt = Number.parseInt;
    function natToStringifiedNatMapper(options) {
        const [style, v] = options;
        switch (style) {
            case 'oct':
                return `0${(0, globals_1.safeNumberToString)(v, 8)}`;
            case 'hex':
                return `0x${(0, globals_1.safeNumberToString)(v, 16)}`;
            case 'dec':
            default:
                return `${v}`;
        }
    }
    exports.natToStringifiedNatMapper = natToStringifiedNatMapper;
    function tryParseStringifiedNat(stringValue, radix) {
        const parsedNat = safeNumberParseInt(stringValue, radix);
        if ((0, globals_1.safeNumberToString)(parsedNat, radix) !== stringValue) {
            throw new Error('Invalid value');
        }
        return parsedNat;
    }
    exports.tryParseStringifiedNat = tryParseStringifiedNat;
    function natToStringifiedNatUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid type');
        }
        if (value.length >= 2 && value[0] === '0') {
            if (value[1] === 'x') {
                return ['hex', tryParseStringifiedNat((0, globals_1.safeSubstring)(value, 2), 16)];
            }
            return ['oct', tryParseStringifiedNat((0, globals_1.safeSubstring)(value, 1), 8)];
        }
        return ['dec', tryParseStringifiedNat(value, 10)];
    }
    exports.natToStringifiedNatUnmapper = natToStringifiedNatUnmapper;

    },{"../../../utils/globals":201}],69:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numberToPaddedEightUnmapper = exports.numberToPaddedEightMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function numberToPaddedEightMapper(n) {
        return (0, globals_1.safePadStart)((0, globals_1.safeNumberToString)(n, 16), 8, '0');
    }
    exports.numberToPaddedEightMapper = numberToPaddedEightMapper;
    function numberToPaddedEightUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        if (value.length !== 8) {
            throw new Error('Unsupported value: invalid length');
        }
        const n = parseInt(value, 16);
        if (value !== numberToPaddedEightMapper(n)) {
            throw new Error('Unsupported value: invalid content');
        }
        return n;
    }
    exports.numberToPaddedEightUnmapper = numberToPaddedEightUnmapper;

    },{"../../../utils/globals":201}],70:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectToPrototypeLessUnmapper = exports.objectToPrototypeLessMapper = void 0;
    function objectToPrototypeLessMapper(o) {
        return Object.assign(Object.create(null), o);
    }
    exports.objectToPrototypeLessMapper = objectToPrototypeLessMapper;
    function objectToPrototypeLessUnmapper(value) {
        if (typeof value !== 'object' || value === null) {
            throw new Error('Incompatible instance received: should be a non-null object');
        }
        if ('__proto__' in value) {
            throw new Error('Incompatible instance received: should not have any __proto__');
        }
        return Object.assign({}, value);
    }
    exports.objectToPrototypeLessUnmapper = objectToPrototypeLessUnmapper;

    },{}],71:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.paddedEightsToUuidUnmapper = exports.paddedEightsToUuidMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function paddedEightsToUuidMapper(t) {
        return `${t[0]}-${(0, globals_1.safeSubstring)(t[1], 4)}-${(0, globals_1.safeSubstring)(t[1], 0, 4)}-${(0, globals_1.safeSubstring)(t[2], 0, 4)}-${(0, globals_1.safeSubstring)(t[2], 4)}${t[3]}`;
    }
    exports.paddedEightsToUuidMapper = paddedEightsToUuidMapper;
    const UuidRegex = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/;
    function paddedEightsToUuidUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        const m = UuidRegex.exec(value);
        if (m === null) {
            throw new Error('Unsupported type');
        }
        return [m[1], m[3] + m[2], m[4] + (0, globals_1.safeSubstring)(m[5], 0, 4), (0, globals_1.safeSubstring)(m[5], 4)];
    }
    exports.paddedEightsToUuidUnmapper = paddedEightsToUuidUnmapper;

    },{"../../../utils/globals":201}],72:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.partsToUrlUnmapper = exports.partsToUrlMapper = void 0;
    function partsToUrlMapper(data) {
        const [scheme, authority, path] = data;
        const query = data[3] === null ? '' : `?${data[3]}`;
        const fragments = data[4] === null ? '' : `#${data[4]}`;
        return `${scheme}://${authority}${path}${query}${fragments}`;
    }
    exports.partsToUrlMapper = partsToUrlMapper;
    const UrlSplitRegex = /^([[A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)([^?#]*)(\?[A-Za-z0-9\-._~!$&'()*+,;=:@/?%]*)?(#[A-Za-z0-9\-._~!$&'()*+,;=:@/?%]*)?$/;
    function partsToUrlUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Incompatible value received: type');
        }
        const m = UrlSplitRegex.exec(value);
        if (m === null) {
            throw new Error('Incompatible value received');
        }
        const scheme = m[1];
        const authority = m[2];
        const path = m[3];
        const query = m[4];
        const fragments = m[5];
        return [
            scheme,
            authority,
            path,
            query !== undefined ? query.substring(1) : null,
            fragments !== undefined ? fragments.substring(1) : null,
        ];
    }
    exports.partsToUrlUnmapper = partsToUrlUnmapper;

    },{}],73:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.patternsToStringUnmapperFor = exports.patternsToStringMapper = void 0;
    const MaxLengthFromMinLength_1 = require("../helpers/MaxLengthFromMinLength");
    const globals_1 = require("../../../utils/globals");
    function patternsToStringMapper(tab) {
        return (0, globals_1.safeJoin)(tab, '');
    }
    exports.patternsToStringMapper = patternsToStringMapper;
    function patternsToStringUnmapperFor(patternsArb, constraints) {
        return function patternsToStringUnmapper(value) {
            if (typeof value !== 'string') {
                throw new Error('Unsupported value');
            }
            const minLength = constraints.minLength !== undefined ? constraints.minLength : 0;
            const maxLength = constraints.maxLength !== undefined ? constraints.maxLength : MaxLengthFromMinLength_1.MaxLengthUpperBound;
            if (value.length === 0) {
                if (minLength > 0) {
                    throw new Error('Unable to unmap received string');
                }
                return [];
            }
            const stack = [{ endIndexChunks: 0, nextStartIndex: 1, chunks: [] }];
            while (stack.length > 0) {
                const last = (0, globals_1.safePop)(stack);
                for (let index = last.nextStartIndex; index <= value.length; ++index) {
                    const chunk = (0, globals_1.safeSubstring)(value, last.endIndexChunks, index);
                    if (patternsArb.canShrinkWithoutContext(chunk)) {
                        const newChunks = [...last.chunks, chunk];
                        if (index === value.length) {
                            if (newChunks.length < minLength || newChunks.length > maxLength) {
                                break;
                            }
                            return newChunks;
                        }
                        (0, globals_1.safePush)(stack, { endIndexChunks: last.endIndexChunks, nextStartIndex: index + 1, chunks: last.chunks });
                        (0, globals_1.safePush)(stack, { endIndexChunks: index, nextStartIndex: index + 1, chunks: newChunks });
                        break;
                    }
                }
            }
            throw new Error('Unable to unmap received string');
        };
    }
    exports.patternsToStringUnmapperFor = patternsToStringUnmapperFor;

    },{"../../../utils/globals":201,"../helpers/MaxLengthFromMinLength":45}],74:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.segmentsToPathUnmapper = exports.segmentsToPathMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function segmentsToPathMapper(segments) {
        return (0, globals_1.safeJoin)((0, globals_1.safeMap)(segments, (v) => `/${v}`), '');
    }
    exports.segmentsToPathMapper = segmentsToPathMapper;
    function segmentsToPathUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Incompatible value received: type');
        }
        if (value.length !== 0 && value[0] !== '/') {
            throw new Error('Incompatible value received: start');
        }
        return (0, globals_1.safeSplice)((0, globals_1.safeSplit)(value, '/'), 1);
    }
    exports.segmentsToPathUnmapper = segmentsToPathUnmapper;

    },{"../../../utils/globals":201}],75:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringToBase64Unmapper = exports.stringToBase64Mapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function stringToBase64Mapper(s) {
        switch (s.length % 4) {
            case 0:
                return s;
            case 3:
                return `${s}=`;
            case 2:
                return `${s}==`;
            default:
                return (0, globals_1.safeSubstring)(s, 1);
        }
    }
    exports.stringToBase64Mapper = stringToBase64Mapper;
    function stringToBase64Unmapper(value) {
        if (typeof value !== 'string' || value.length % 4 !== 0) {
            throw new Error('Invalid string received');
        }
        const lastTrailingIndex = value.indexOf('=');
        if (lastTrailingIndex === -1) {
            return value;
        }
        const numTrailings = value.length - lastTrailingIndex;
        if (numTrailings > 2) {
            throw new Error('Cannot unmap the passed value');
        }
        return (0, globals_1.safeSubstring)(value, 0, lastTrailingIndex);
    }
    exports.stringToBase64Unmapper = stringToBase64Unmapper;

    },{"../../../utils/globals":201}],76:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeToDateUnmapper = exports.timeToDateMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function timeToDateMapper(time) {
        return new globals_1.Date(time);
    }
    exports.timeToDateMapper = timeToDateMapper;
    function timeToDateUnmapper(value) {
        if (!(value instanceof globals_1.Date) || value.constructor !== globals_1.Date) {
            throw new globals_1.Error('Not a valid value for date unmapper');
        }
        return (0, globals_1.safeGetTime)(value);
    }
    exports.timeToDateUnmapper = timeToDateUnmapper;

    },{"../../../utils/globals":201}],77:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unboxedToBoxedUnmapper = exports.unboxedToBoxedMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function unboxedToBoxedMapper(value) {
        switch (typeof value) {
            case 'boolean':
                return new globals_1.Boolean(value);
            case 'number':
                return new globals_1.Number(value);
            case 'string':
                return new globals_1.String(value);
            default:
                return value;
        }
    }
    exports.unboxedToBoxedMapper = unboxedToBoxedMapper;
    function unboxedToBoxedUnmapper(value) {
        if (typeof value !== 'object' || value === null || !('constructor' in value)) {
            return value;
        }
        return value.constructor === globals_1.Boolean || value.constructor === globals_1.Number || value.constructor === globals_1.String
            ?
                value.valueOf()
            : value;
    }
    exports.unboxedToBoxedUnmapper = unboxedToBoxedUnmapper;

    },{"../../../utils/globals":201}],78:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildValuesAndSeparateKeysToObjectUnmapper = exports.buildValuesAndSeparateKeysToObjectMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    const safeObjectDefineProperty = Object.defineProperty;
    const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const safeObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
    const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
    function buildValuesAndSeparateKeysToObjectMapper(keys, noKeyValue) {
        return function valuesAndSeparateKeysToObjectMapper(gs) {
            const obj = {};
            for (let idx = 0; idx !== keys.length; ++idx) {
                const valueWrapper = gs[idx];
                if (valueWrapper !== noKeyValue) {
                    safeObjectDefineProperty(obj, keys[idx], {
                        value: valueWrapper,
                        configurable: true,
                        enumerable: true,
                        writable: true,
                    });
                }
            }
            return obj;
        };
    }
    exports.buildValuesAndSeparateKeysToObjectMapper = buildValuesAndSeparateKeysToObjectMapper;
    function buildValuesAndSeparateKeysToObjectUnmapper(keys, noKeyValue) {
        return function valuesAndSeparateKeysToObjectUnmapper(value) {
            if (typeof value !== 'object' || value === null) {
                throw new Error('Incompatible instance received: should be a non-null object');
            }
            if (!('constructor' in value) || value.constructor !== Object) {
                throw new Error('Incompatible instance received: should be of exact type Object');
            }
            let extractedPropertiesCount = 0;
            const extractedValues = [];
            for (let idx = 0; idx !== keys.length; ++idx) {
                const descriptor = safeObjectGetOwnPropertyDescriptor(value, keys[idx]);
                if (descriptor !== undefined) {
                    if (!descriptor.configurable || !descriptor.enumerable || !descriptor.writable) {
                        throw new Error('Incompatible instance received: should contain only c/e/w properties');
                    }
                    if (descriptor.get !== undefined || descriptor.set !== undefined) {
                        throw new Error('Incompatible instance received: should contain only no get/set properties');
                    }
                    ++extractedPropertiesCount;
                    (0, globals_1.safePush)(extractedValues, descriptor.value);
                }
                else {
                    (0, globals_1.safePush)(extractedValues, noKeyValue);
                }
            }
            const namePropertiesCount = safeObjectGetOwnPropertyNames(value).length;
            const symbolPropertiesCount = safeObjectGetOwnPropertySymbols(value).length;
            if (extractedPropertiesCount !== namePropertiesCount + symbolPropertiesCount) {
                throw new Error('Incompatible instance received: should not contain extra properties');
            }
            return extractedValues;
        };
    }
    exports.buildValuesAndSeparateKeysToObjectUnmapper = buildValuesAndSeparateKeysToObjectUnmapper;

    },{"../../../utils/globals":201}],79:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sentencesToParagraphUnmapper = exports.sentencesToParagraphMapper = exports.wordsToSentenceUnmapperFor = exports.wordsToSentenceMapper = exports.wordsToJoinedStringUnmapperFor = exports.wordsToJoinedStringMapper = void 0;
    const globals_1 = require("../../../utils/globals");
    function wordsToJoinedStringMapper(words) {
        return (0, globals_1.safeJoin)((0, globals_1.safeMap)(words, (w) => (w[w.length - 1] === ',' ? (0, globals_1.safeSubstring)(w, 0, w.length - 1) : w)), ' ');
    }
    exports.wordsToJoinedStringMapper = wordsToJoinedStringMapper;
    function wordsToJoinedStringUnmapperFor(wordsArbitrary) {
        return function wordsToJoinedStringUnmapper(value) {
            if (typeof value !== 'string') {
                throw new Error('Unsupported type');
            }
            const words = [];
            for (const candidate of (0, globals_1.safeSplit)(value, ' ')) {
                if (wordsArbitrary.canShrinkWithoutContext(candidate))
                    (0, globals_1.safePush)(words, candidate);
                else if (wordsArbitrary.canShrinkWithoutContext(candidate + ','))
                    (0, globals_1.safePush)(words, candidate + ',');
                else
                    throw new Error('Unsupported word');
            }
            return words;
        };
    }
    exports.wordsToJoinedStringUnmapperFor = wordsToJoinedStringUnmapperFor;
    function wordsToSentenceMapper(words) {
        let sentence = (0, globals_1.safeJoin)(words, ' ');
        if (sentence[sentence.length - 1] === ',') {
            sentence = (0, globals_1.safeSubstring)(sentence, 0, sentence.length - 1);
        }
        return (0, globals_1.safeToUpperCase)(sentence[0]) + (0, globals_1.safeSubstring)(sentence, 1) + '.';
    }
    exports.wordsToSentenceMapper = wordsToSentenceMapper;
    function wordsToSentenceUnmapperFor(wordsArbitrary) {
        return function wordsToSentenceUnmapper(value) {
            if (typeof value !== 'string') {
                throw new Error('Unsupported type');
            }
            if (value.length < 2 ||
                value[value.length - 1] !== '.' ||
                value[value.length - 2] === ',' ||
                (0, globals_1.safeToUpperCase)((0, globals_1.safeToLowerCase)(value[0])) !== value[0]) {
                throw new Error('Unsupported value');
            }
            const adaptedValue = (0, globals_1.safeToLowerCase)(value[0]) + (0, globals_1.safeSubstring)(value, 1, value.length - 1);
            const words = [];
            const candidates = (0, globals_1.safeSplit)(adaptedValue, ' ');
            for (let idx = 0; idx !== candidates.length; ++idx) {
                const candidate = candidates[idx];
                if (wordsArbitrary.canShrinkWithoutContext(candidate))
                    (0, globals_1.safePush)(words, candidate);
                else if (idx === candidates.length - 1 && wordsArbitrary.canShrinkWithoutContext(candidate + ','))
                    (0, globals_1.safePush)(words, candidate + ',');
                else
                    throw new Error('Unsupported word');
            }
            return words;
        };
    }
    exports.wordsToSentenceUnmapperFor = wordsToSentenceUnmapperFor;
    function sentencesToParagraphMapper(sentences) {
        return (0, globals_1.safeJoin)(sentences, ' ');
    }
    exports.sentencesToParagraphMapper = sentencesToParagraphMapper;
    function sentencesToParagraphUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        const sentences = (0, globals_1.safeSplit)(value, '. ');
        for (let idx = 0; idx < sentences.length - 1; ++idx) {
            sentences[idx] += '.';
        }
        return sentences;
    }
    exports.sentencesToParagraphUnmapper = sentencesToParagraphUnmapper;

    },{"../../../utils/globals":201}],80:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.anything = void 0;
    const AnyArbitraryBuilder_1 = require("./_internals/builders/AnyArbitraryBuilder");
    const QualifiedObjectConstraints_1 = require("./_internals/helpers/QualifiedObjectConstraints");
    function anything(constraints) {
        return (0, AnyArbitraryBuilder_1.anyArbitraryBuilder)((0, QualifiedObjectConstraints_1.toQualifiedObjectConstraints)(constraints));
    }
    exports.anything = anything;

    },{"./_internals/builders/AnyArbitraryBuilder":21,"./_internals/helpers/QualifiedObjectConstraints":47}],81:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.array = void 0;
    const ArrayArbitrary_1 = require("./_internals/ArrayArbitrary");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    function array(arb, constraints = {}) {
        const size = constraints.size;
        const minLength = constraints.minLength || 0;
        const maxLengthOrUnset = constraints.maxLength;
        const depthIdentifier = constraints.depthIdentifier;
        const maxLength = maxLengthOrUnset !== undefined ? maxLengthOrUnset : MaxLengthFromMinLength_1.MaxLengthUpperBound;
        const specifiedMaxLength = maxLengthOrUnset !== undefined;
        const maxGeneratedLength = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, minLength, maxLength, specifiedMaxLength);
        const customSlices = constraints.experimentalCustomSlices || [];
        return new ArrayArbitrary_1.ArrayArbitrary(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, undefined, customSlices);
    }
    exports.array = array;

    },{"./_internals/ArrayArbitrary":6,"./_internals/helpers/MaxLengthFromMinLength":45}],82:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ascii = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    const IndexToPrintableIndex_1 = require("./_internals/mappers/IndexToPrintableIndex");
    function ascii() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0x00, 0x7f, IndexToPrintableIndex_1.indexToPrintableIndexMapper, IndexToPrintableIndex_1.indexToPrintableIndexUnmapper);
    }
    exports.ascii = ascii;

    },{"./_internals/builders/CharacterArbitraryBuilder":23,"./_internals/mappers/IndexToPrintableIndex":66}],83:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asciiString = void 0;
    const array_1 = require("./array");
    const ascii_1 = require("./ascii");
    const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function asciiString(constraints = {}) {
        const charArbitrary = (0, ascii_1.ascii)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
    }
    exports.asciiString = asciiString;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CodePointsToString":62,"./array":81,"./ascii":82}],84:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.base64 = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    function base64Mapper(v) {
        if (v < 26)
            return v + 65;
        if (v < 52)
            return v + 97 - 26;
        if (v < 62)
            return v + 48 - 52;
        return v === 62 ? 43 : 47;
    }
    function base64Unmapper(v) {
        if (v >= 65 && v <= 90)
            return v - 65;
        if (v >= 97 && v <= 122)
            return v - 97 + 26;
        if (v >= 48 && v <= 57)
            return v - 48 + 52;
        return v === 43 ? 62 : v === 47 ? 63 : -1;
    }
    function base64() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0, 63, base64Mapper, base64Unmapper);
    }
    exports.base64 = base64;

    },{"./_internals/builders/CharacterArbitraryBuilder":23}],85:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.base64String = void 0;
    const array_1 = require("./array");
    const base64_1 = require("./base64");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
    const StringToBase64_1 = require("./_internals/mappers/StringToBase64");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    function base64String(constraints = {}) {
        const { minLength: unscaledMinLength = 0, maxLength: unscaledMaxLength = MaxLengthFromMinLength_1.MaxLengthUpperBound, size } = constraints;
        const minLength = unscaledMinLength + 3 - ((unscaledMinLength + 3) % 4);
        const maxLength = unscaledMaxLength - (unscaledMaxLength % 4);
        const requestedSize = constraints.maxLength === undefined && size === undefined ? '=' : size;
        if (minLength > maxLength)
            throw new Error('Minimal length should be inferior or equal to maximal length');
        if (minLength % 4 !== 0)
            throw new Error('Minimal length of base64 strings must be a multiple of 4');
        if (maxLength % 4 !== 0)
            throw new Error('Maximal length of base64 strings must be a multiple of 4');
        const charArbitrary = (0, base64_1.base64)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
        const enrichedConstraints = {
            minLength,
            maxLength,
            size: requestedSize,
            experimentalCustomSlices,
        };
        return (0, array_1.array)(charArbitrary, enrichedConstraints)
            .map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper)
            .map(StringToBase64_1.stringToBase64Mapper, StringToBase64_1.stringToBase64Unmapper);
    }
    exports.base64String = base64String;

    },{"./_internals/helpers/MaxLengthFromMinLength":45,"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CodePointsToString":62,"./_internals/mappers/StringToBase64":75,"./array":81,"./base64":84}],86:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigInt = void 0;
    const globals_1 = require("../utils/globals");
    const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
    function buildCompleteBigIntConstraints(constraints) {
        const DefaultPow = 256;
        const DefaultMin = (0, globals_1.BigInt)(-1) << (0, globals_1.BigInt)(DefaultPow - 1);
        const DefaultMax = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(DefaultPow - 1)) - (0, globals_1.BigInt)(1);
        const min = constraints.min;
        const max = constraints.max;
        return {
            min: min !== undefined ? min : DefaultMin - (max !== undefined && max < (0, globals_1.BigInt)(0) ? max * max : (0, globals_1.BigInt)(0)),
            max: max !== undefined ? max : DefaultMax + (min !== undefined && min > (0, globals_1.BigInt)(0) ? min * min : (0, globals_1.BigInt)(0)),
        };
    }
    function extractBigIntConstraints(args) {
        if (args[0] === undefined) {
            return {};
        }
        if (args[1] === undefined) {
            const constraints = args[0];
            return constraints;
        }
        return { min: args[0], max: args[1] };
    }
    function bigInt(...args) {
        const constraints = buildCompleteBigIntConstraints(extractBigIntConstraints(args));
        if (constraints.min > constraints.max) {
            throw new Error('fc.bigInt expects max to be greater than or equal to min');
        }
        return new BigIntArbitrary_1.BigIntArbitrary(constraints.min, constraints.max);
    }
    exports.bigInt = bigInt;

    },{"../utils/globals":201,"./_internals/BigIntArbitrary":8}],87:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigInt64Array = void 0;
    const globals_1 = require("../utils/globals");
    const bigInt_1 = require("./bigInt");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function bigInt64Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, (0, globals_1.BigInt)('-9223372036854775808'), (0, globals_1.BigInt)('9223372036854775807'), globals_1.BigInt64Array, bigInt_1.bigInt);
    }
    exports.bigInt64Array = bigInt64Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./bigInt":86}],88:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigIntN = void 0;
    const globals_1 = require("../utils/globals");
    const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
    function bigIntN(n) {
        if (n < 1) {
            throw new Error('fc.bigIntN expects requested number of bits to be superior or equal to 1');
        }
        const min = (0, globals_1.BigInt)(-1) << (0, globals_1.BigInt)(n - 1);
        const max = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(n - 1)) - (0, globals_1.BigInt)(1);
        return new BigIntArbitrary_1.BigIntArbitrary(min, max);
    }
    exports.bigIntN = bigIntN;

    },{"../utils/globals":201,"./_internals/BigIntArbitrary":8}],89:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigUint = void 0;
    const globals_1 = require("../utils/globals");
    const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
    function computeDefaultMax() {
        return ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(256)) - (0, globals_1.BigInt)(1);
    }
    function bigUint(constraints) {
        const requestedMax = typeof constraints === 'object' ? constraints.max : constraints;
        const max = requestedMax !== undefined ? requestedMax : computeDefaultMax();
        if (max < 0) {
            throw new Error('fc.bigUint expects max to be greater than or equal to zero');
        }
        return new BigIntArbitrary_1.BigIntArbitrary((0, globals_1.BigInt)(0), max);
    }
    exports.bigUint = bigUint;

    },{"../utils/globals":201,"./_internals/BigIntArbitrary":8}],90:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigUint64Array = void 0;
    const globals_1 = require("../utils/globals");
    const bigInt_1 = require("./bigInt");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function bigUint64Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, (0, globals_1.BigInt)(0), (0, globals_1.BigInt)('18446744073709551615'), globals_1.BigUint64Array, bigInt_1.bigInt);
    }
    exports.bigUint64Array = bigUint64Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./bigInt":86}],91:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigUintN = void 0;
    const globals_1 = require("../utils/globals");
    const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
    function bigUintN(n) {
        if (n < 0) {
            throw new Error('fc.bigUintN expects requested number of bits to be superior or equal to 0');
        }
        const min = (0, globals_1.BigInt)(0);
        const max = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(n)) - (0, globals_1.BigInt)(1);
        return new BigIntArbitrary_1.BigIntArbitrary(min, max);
    }
    exports.bigUintN = bigUintN;

    },{"../utils/globals":201,"./_internals/BigIntArbitrary":8}],92:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = void 0;
    const integer_1 = require("./integer");
    function booleanMapper(v) {
        return v === 1;
    }
    function booleanUnmapper(v) {
        if (typeof v !== 'boolean')
            throw new Error('Unsupported input type');
        return v === true ? 1 : 0;
    }
    function boolean() {
        return (0, integer_1.integer)({ min: 0, max: 1 }).map(booleanMapper, booleanUnmapper).noBias();
    }
    exports.boolean = boolean;

    },{"./integer":120}],93:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.char = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    function identity(v) {
        return v;
    }
    function char() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0x20, 0x7e, identity, identity);
    }
    exports.char = char;

    },{"./_internals/builders/CharacterArbitraryBuilder":23}],94:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.char16bits = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    const IndexToPrintableIndex_1 = require("./_internals/mappers/IndexToPrintableIndex");
    function char16bits() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0x0000, 0xffff, IndexToPrintableIndex_1.indexToPrintableIndexMapper, IndexToPrintableIndex_1.indexToPrintableIndexUnmapper);
    }
    exports.char16bits = char16bits;

    },{"./_internals/builders/CharacterArbitraryBuilder":23,"./_internals/mappers/IndexToPrintableIndex":66}],95:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clone = void 0;
    const CloneArbitrary_1 = require("./_internals/CloneArbitrary");
    function clone(arb, numValues) {
        return new CloneArbitrary_1.CloneArbitrary(arb, numValues);
    }
    exports.clone = clone;

    },{"./_internals/CloneArbitrary":9}],96:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.commands = void 0;
    const CommandsArbitrary_1 = require("./_internals/CommandsArbitrary");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    function commands(commandArbs, constraints = {}) {
        const { size, maxCommands = MaxLengthFromMinLength_1.MaxLengthUpperBound, disableReplayLog = false, replayPath = null } = constraints;
        const specifiedMaxCommands = constraints.maxCommands !== undefined;
        const maxGeneratedCommands = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, 0, maxCommands, specifiedMaxCommands);
        return new CommandsArbitrary_1.CommandsArbitrary(commandArbs, maxGeneratedCommands, maxCommands, replayPath, disableReplayLog);
    }
    exports.commands = commands;

    },{"./_internals/CommandsArbitrary":10,"./_internals/helpers/MaxLengthFromMinLength":45}],97:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compareBooleanFunc = void 0;
    const CompareFunctionArbitraryBuilder_1 = require("./_internals/builders/CompareFunctionArbitraryBuilder");
    const safeObjectAssign = Object.assign;
    function compareBooleanFunc() {
        return (0, CompareFunctionArbitraryBuilder_1.buildCompareFunctionArbitrary)(safeObjectAssign((hA, hB) => hA < hB, {
            toString() {
                return '(hA, hB) => hA < hB';
            },
        }));
    }
    exports.compareBooleanFunc = compareBooleanFunc;

    },{"./_internals/builders/CompareFunctionArbitraryBuilder":25}],98:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compareFunc = void 0;
    const CompareFunctionArbitraryBuilder_1 = require("./_internals/builders/CompareFunctionArbitraryBuilder");
    const safeObjectAssign = Object.assign;
    function compareFunc() {
        return (0, CompareFunctionArbitraryBuilder_1.buildCompareFunctionArbitrary)(safeObjectAssign((hA, hB) => hA - hB, {
            toString() {
                return '(hA, hB) => hA - hB';
            },
        }));
    }
    exports.compareFunc = compareFunc;

    },{"./_internals/builders/CompareFunctionArbitraryBuilder":25}],99:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constant = void 0;
    const ConstantArbitrary_1 = require("./_internals/ConstantArbitrary");
    function constant(value) {
        return new ConstantArbitrary_1.ConstantArbitrary([value]);
    }
    exports.constant = constant;

    },{"./_internals/ConstantArbitrary":11}],100:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constantFrom = void 0;
    const ConstantArbitrary_1 = require("./_internals/ConstantArbitrary");
    function constantFrom(...values) {
        if (values.length === 0) {
            throw new Error('fc.constantFrom expects at least one parameter');
        }
        return new ConstantArbitrary_1.ConstantArbitrary(values);
    }
    exports.constantFrom = constantFrom;

    },{"./_internals/ConstantArbitrary":11}],101:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.context = void 0;
    const symbols_1 = require("../check/symbols");
    const constant_1 = require("./constant");
    class ContextImplem {
        constructor() {
            this.receivedLogs = [];
        }
        log(data) {
            this.receivedLogs.push(data);
        }
        size() {
            return this.receivedLogs.length;
        }
        toString() {
            return JSON.stringify({ logs: this.receivedLogs });
        }
        [symbols_1.cloneMethod]() {
            return new ContextImplem();
        }
    }
    function context() {
        return (0, constant_1.constant)(new ContextImplem());
    }
    exports.context = context;

    },{"../check/symbols":193,"./constant":99}],102:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.date = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TimeToDate_1 = require("./_internals/mappers/TimeToDate");
    const safeNumberIsNaN = Number.isNaN;
    function date(constraints) {
        const intMin = constraints && constraints.min !== undefined ? (0, globals_1.safeGetTime)(constraints.min) : -8640000000000000;
        const intMax = constraints && constraints.max !== undefined ? (0, globals_1.safeGetTime)(constraints.max) : 8640000000000000;
        if (safeNumberIsNaN(intMin))
            throw new Error('fc.date min must be valid instance of Date');
        if (safeNumberIsNaN(intMax))
            throw new Error('fc.date max must be valid instance of Date');
        if (intMin > intMax)
            throw new Error('fc.date max must be greater or equal to min');
        return (0, integer_1.integer)({ min: intMin, max: intMax }).map(TimeToDate_1.timeToDateMapper, TimeToDate_1.timeToDateUnmapper);
    }
    exports.date = date;

    },{"../utils/globals":201,"./_internals/mappers/TimeToDate":76,"./integer":120}],103:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dictionary = void 0;
    const tuple_1 = require("./tuple");
    const uniqueArray_1 = require("./uniqueArray");
    const KeyValuePairsToObject_1 = require("./_internals/mappers/KeyValuePairsToObject");
    function dictionaryKeyExtractor(entry) {
        return entry[0];
    }
    function dictionary(keyArb, valueArb, constraints = {}) {
        return (0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)(keyArb, valueArb), {
            minLength: constraints.minKeys,
            maxLength: constraints.maxKeys,
            size: constraints.size,
            selector: dictionaryKeyExtractor,
        }).map(KeyValuePairsToObject_1.keyValuePairsToObjectMapper, KeyValuePairsToObject_1.keyValuePairsToObjectUnmapper);
    }
    exports.dictionary = dictionary;

    },{"./_internals/mappers/KeyValuePairsToObject":67,"./tuple":145,"./uniqueArray":154}],104:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.domain = void 0;
    const array_1 = require("./array");
    const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
    const option_1 = require("./option");
    const stringOf_1 = require("./stringOf");
    const tuple_1 = require("./tuple");
    const InvalidSubdomainLabelFiIter_1 = require("./_internals/helpers/InvalidSubdomainLabelFiIter");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    const AdapterArbitrary_1 = require("./_internals/AdapterArbitrary");
    const globals_1 = require("../utils/globals");
    function toSubdomainLabelMapper([f, d]) {
        return d === null ? f : `${f}${d[0]}${d[1]}`;
    }
    function toSubdomainLabelUnmapper(value) {
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error('Unsupported');
        }
        if (value.length === 1) {
            return [value[0], null];
        }
        return [value[0], [(0, globals_1.safeSubstring)(value, 1, value.length - 1), value[value.length - 1]]];
    }
    function subdomainLabel(size) {
        const alphaNumericArb = (0, CharacterRangeArbitraryBuilder_1.buildLowerAlphaNumericArbitrary)([]);
        const alphaNumericHyphenArb = (0, CharacterRangeArbitraryBuilder_1.buildLowerAlphaNumericArbitrary)(['-']);
        return (0, tuple_1.tuple)(alphaNumericArb, (0, option_1.option)((0, tuple_1.tuple)((0, stringOf_1.stringOf)(alphaNumericHyphenArb, { size, maxLength: 61 }), alphaNumericArb)))
            .map(toSubdomainLabelMapper, toSubdomainLabelUnmapper)
            .filter(InvalidSubdomainLabelFiIter_1.filterInvalidSubdomainLabel);
    }
    function labelsMapper(elements) {
        return `${(0, globals_1.safeJoin)(elements[0], '.')}.${elements[1]}`;
    }
    function labelsUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        const lastDotIndex = value.lastIndexOf('.');
        return [(0, globals_1.safeSplit)((0, globals_1.safeSubstring)(value, 0, lastDotIndex), '.'), (0, globals_1.safeSubstring)(value, lastDotIndex + 1)];
    }
    function labelsAdapter(labels) {
        const [subDomains, suffix] = labels;
        let lengthNotIncludingIndex = suffix.length;
        for (let index = 0; index !== subDomains.length; ++index) {
            lengthNotIncludingIndex += 1 + subDomains[index].length;
            if (lengthNotIncludingIndex > 255) {
                return { adapted: true, value: [(0, globals_1.safeSlice)(subDomains, 0, index), suffix] };
            }
        }
        return { adapted: false, value: labels };
    }
    function domain(constraints = {}) {
        const resolvedSize = (0, MaxLengthFromMinLength_1.resolveSize)(constraints.size);
        const resolvedSizeMinusOne = (0, MaxLengthFromMinLength_1.relativeSizeToSize)('-1', resolvedSize);
        const alphaNumericArb = (0, CharacterRangeArbitraryBuilder_1.buildLowerAlphaArbitrary)([]);
        const publicSuffixArb = (0, stringOf_1.stringOf)(alphaNumericArb, { minLength: 2, maxLength: 63, size: resolvedSizeMinusOne });
        return ((0, AdapterArbitrary_1.adapter)((0, tuple_1.tuple)((0, array_1.array)(subdomainLabel(resolvedSize), { size: resolvedSizeMinusOne, minLength: 1, maxLength: 127 }), publicSuffixArb), labelsAdapter).map(labelsMapper, labelsUnmapper));
    }
    exports.domain = domain;

    },{"../utils/globals":201,"./_internals/AdapterArbitrary":4,"./_internals/builders/CharacterRangeArbitraryBuilder":24,"./_internals/helpers/InvalidSubdomainLabelFiIter":42,"./_internals/helpers/MaxLengthFromMinLength":45,"./array":81,"./option":136,"./stringOf":143,"./tuple":145}],105:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.double = void 0;
    const ArrayInt64_1 = require("./_internals/helpers/ArrayInt64");
    const ArrayInt64Arbitrary_1 = require("./_internals/ArrayInt64Arbitrary");
    const DoubleHelpers_1 = require("./_internals/helpers/DoubleHelpers");
    const safeNumberIsNaN = Number.isNaN;
    const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
    const safePositiveInfinity = Number.POSITIVE_INFINITY;
    const safeMaxValue = Number.MAX_VALUE;
    const safeNaN = Number.NaN;
    function safeDoubleToIndex(d, constraintsLabel) {
        if (safeNumberIsNaN(d)) {
            throw new Error('fc.double constraints.' + constraintsLabel + ' must be a 32-bit float');
        }
        return (0, DoubleHelpers_1.doubleToIndex)(d);
    }
    function unmapperDoubleToIndex(value) {
        if (typeof value !== 'number')
            throw new Error('Unsupported type');
        return (0, DoubleHelpers_1.doubleToIndex)(value);
    }
    function double(constraints = {}) {
        const { noDefaultInfinity = false, noNaN = false, min = noDefaultInfinity ? -safeMaxValue : safeNegativeInfinity, max = noDefaultInfinity ? safeMaxValue : safePositiveInfinity, } = constraints;
        const minIndex = safeDoubleToIndex(min, 'min');
        const maxIndex = safeDoubleToIndex(max, 'max');
        if ((0, ArrayInt64_1.isStrictlySmaller64)(maxIndex, minIndex)) {
            throw new Error('fc.double constraints.min must be smaller or equal to constraints.max');
        }
        if (noNaN) {
            return (0, ArrayInt64Arbitrary_1.arrayInt64)(minIndex, maxIndex).map(DoubleHelpers_1.indexToDouble, unmapperDoubleToIndex);
        }
        const positiveMaxIdx = (0, ArrayInt64_1.isStrictlyPositive64)(maxIndex);
        const minIndexWithNaN = positiveMaxIdx ? minIndex : (0, ArrayInt64_1.substract64)(minIndex, ArrayInt64_1.Unit64);
        const maxIndexWithNaN = positiveMaxIdx ? (0, ArrayInt64_1.add64)(maxIndex, ArrayInt64_1.Unit64) : maxIndex;
        return (0, ArrayInt64Arbitrary_1.arrayInt64)(minIndexWithNaN, maxIndexWithNaN).map((index) => {
            if ((0, ArrayInt64_1.isStrictlySmaller64)(maxIndex, index) || (0, ArrayInt64_1.isStrictlySmaller64)(index, minIndex))
                return safeNaN;
            else
                return (0, DoubleHelpers_1.indexToDouble)(index);
        }, (value) => {
            if (typeof value !== 'number')
                throw new Error('Unsupported type');
            if (safeNumberIsNaN(value))
                return !(0, ArrayInt64_1.isEqual64)(maxIndex, maxIndexWithNaN) ? maxIndexWithNaN : minIndexWithNaN;
            return (0, DoubleHelpers_1.doubleToIndex)(value);
        });
    }
    exports.double = double;

    },{"./_internals/ArrayInt64Arbitrary":7,"./_internals/helpers/ArrayInt64":33,"./_internals/helpers/DoubleHelpers":39}],106:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.emailAddress = void 0;
    const array_1 = require("./array");
    const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
    const domain_1 = require("./domain");
    const stringOf_1 = require("./stringOf");
    const tuple_1 = require("./tuple");
    const AdapterArbitrary_1 = require("./_internals/AdapterArbitrary");
    const globals_1 = require("../utils/globals");
    function dotAdapter(a) {
        let currentLength = a[0].length;
        for (let index = 1; index !== a.length; ++index) {
            currentLength += 1 + a[index].length;
            if (currentLength > 64) {
                return { adapted: true, value: (0, globals_1.safeSlice)(a, 0, index) };
            }
        }
        return { adapted: false, value: a };
    }
    function dotMapper(a) {
        return (0, globals_1.safeJoin)(a, '.');
    }
    function dotUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported');
        }
        return (0, globals_1.safeSplit)(value, '.');
    }
    function atMapper(data) {
        return `${data[0]}@${data[1]}`;
    }
    function atUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported');
        }
        return (0, globals_1.safeSplit)(value, '@', 2);
    }
    function emailAddress(constraints = {}) {
        const others = ['!', '#', '$', '%', '&', "'", '*', '+', '-', '/', '=', '?', '^', '_', '`', '{', '|', '}', '~'];
        const atextArb = (0, CharacterRangeArbitraryBuilder_1.buildLowerAlphaNumericArbitrary)(others);
        const localPartArb = (0, AdapterArbitrary_1.adapter)((0, array_1.array)((0, stringOf_1.stringOf)(atextArb, {
            minLength: 1,
            maxLength: 64,
            size: constraints.size,
        }), { minLength: 1, maxLength: 32, size: constraints.size }), dotAdapter).map(dotMapper, dotUnmapper);
        return (0, tuple_1.tuple)(localPartArb, (0, domain_1.domain)({ size: constraints.size })).map(atMapper, atUnmapper);
    }
    exports.emailAddress = emailAddress;

    },{"../utils/globals":201,"./_internals/AdapterArbitrary":4,"./_internals/builders/CharacterRangeArbitraryBuilder":24,"./array":81,"./domain":104,"./stringOf":143,"./tuple":145}],107:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.falsy = void 0;
    const globals_1 = require("../utils/globals");
    const constantFrom_1 = require("./constantFrom");
    function falsy(constraints) {
        if (!constraints || !constraints.withBigInt) {
            return (0, constantFrom_1.constantFrom)(false, null, undefined, 0, '', NaN);
        }
        return (0, constantFrom_1.constantFrom)(false, null, undefined, 0, '', NaN, (0, globals_1.BigInt)(0));
    }
    exports.falsy = falsy;

    },{"../utils/globals":201,"./constantFrom":100}],108:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.float = void 0;
    const integer_1 = require("./integer");
    const FloatHelpers_1 = require("./_internals/helpers/FloatHelpers");
    const safeNumberIsFinite = Number.isFinite;
    const safeNumberIsInteger = Number.isInteger;
    const safeNumberIsNaN = Number.isNaN;
    const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
    const safePositiveInfinity = Number.POSITIVE_INFINITY;
    const safeNaN = Number.NaN;
    function safeFloatToIndex(f, constraintsLabel) {
        const conversionTrick = 'you can convert any double to a 32-bit float by using `new Float32Array([myDouble])[0]`';
        const errorMessage = 'fc.float constraints.' + constraintsLabel + ' must be a 32-bit float - ' + conversionTrick;
        if (safeNumberIsNaN(f) || (safeNumberIsFinite(f) && (f < -FloatHelpers_1.MAX_VALUE_32 || f > FloatHelpers_1.MAX_VALUE_32))) {
            throw new Error(errorMessage);
        }
        const index = (0, FloatHelpers_1.floatToIndex)(f);
        if (!safeNumberIsInteger(index)) {
            throw new Error(errorMessage);
        }
        return index;
    }
    function unmapperFloatToIndex(value) {
        if (typeof value !== 'number')
            throw new Error('Unsupported type');
        return (0, FloatHelpers_1.floatToIndex)(value);
    }
    function float(constraints = {}) {
        const { noDefaultInfinity = false, noNaN = false, min = noDefaultInfinity ? -FloatHelpers_1.MAX_VALUE_32 : safeNegativeInfinity, max = noDefaultInfinity ? FloatHelpers_1.MAX_VALUE_32 : safePositiveInfinity, } = constraints;
        const minIndex = safeFloatToIndex(min, 'min');
        const maxIndex = safeFloatToIndex(max, 'max');
        if (minIndex > maxIndex) {
            throw new Error('fc.float constraints.min must be smaller or equal to constraints.max');
        }
        if (noNaN) {
            return (0, integer_1.integer)({ min: minIndex, max: maxIndex }).map(FloatHelpers_1.indexToFloat, unmapperFloatToIndex);
        }
        const minIndexWithNaN = maxIndex > 0 ? minIndex : minIndex - 1;
        const maxIndexWithNaN = maxIndex > 0 ? maxIndex + 1 : maxIndex;
        return (0, integer_1.integer)({ min: minIndexWithNaN, max: maxIndexWithNaN }).map((index) => {
            if (index > maxIndex || index < minIndex)
                return safeNaN;
            else
                return (0, FloatHelpers_1.indexToFloat)(index);
        }, (value) => {
            if (typeof value !== 'number')
                throw new Error('Unsupported type');
            if (safeNumberIsNaN(value))
                return maxIndex !== maxIndexWithNaN ? maxIndexWithNaN : minIndexWithNaN;
            return (0, FloatHelpers_1.floatToIndex)(value);
        });
    }
    exports.float = float;

    },{"./_internals/helpers/FloatHelpers":41,"./integer":120}],109:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.float32Array = void 0;
    const float_1 = require("./float");
    const array_1 = require("./array");
    const globals_1 = require("../utils/globals");
    function toTypedMapper(data) {
        return globals_1.Float32Array.from(data);
    }
    function fromTypedUnmapper(value) {
        if (!(value instanceof globals_1.Float32Array))
            throw new Error('Unexpected type');
        return [...value];
    }
    function float32Array(constraints = {}) {
        return (0, array_1.array)((0, float_1.float)(constraints), constraints).map(toTypedMapper, fromTypedUnmapper);
    }
    exports.float32Array = float32Array;

    },{"../utils/globals":201,"./array":81,"./float":108}],110:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.float64Array = void 0;
    const double_1 = require("./double");
    const array_1 = require("./array");
    const globals_1 = require("../utils/globals");
    function toTypedMapper(data) {
        return globals_1.Float64Array.from(data);
    }
    function fromTypedUnmapper(value) {
        if (!(value instanceof globals_1.Float64Array))
            throw new Error('Unexpected type');
        return [...value];
    }
    function float64Array(constraints = {}) {
        return (0, array_1.array)((0, double_1.double)(constraints), constraints).map(toTypedMapper, fromTypedUnmapper);
    }
    exports.float64Array = float64Array;

    },{"../utils/globals":201,"./array":81,"./double":105}],111:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fullUnicode = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    const IndexToPrintableIndex_1 = require("./_internals/mappers/IndexToPrintableIndex");
    const gapSize = 0xdfff + 1 - 0xd800;
    function unicodeMapper(v) {
        if (v < 0xd800)
            return (0, IndexToPrintableIndex_1.indexToPrintableIndexMapper)(v);
        return v + gapSize;
    }
    function unicodeUnmapper(v) {
        if (v < 0xd800)
            return (0, IndexToPrintableIndex_1.indexToPrintableIndexUnmapper)(v);
        if (v <= 0xdfff)
            return -1;
        return v - gapSize;
    }
    function fullUnicode() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0x0000, 0x10ffff - gapSize, unicodeMapper, unicodeUnmapper);
    }
    exports.fullUnicode = fullUnicode;

    },{"./_internals/builders/CharacterArbitraryBuilder":23,"./_internals/mappers/IndexToPrintableIndex":66}],112:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fullUnicodeString = void 0;
    const array_1 = require("./array");
    const fullUnicode_1 = require("./fullUnicode");
    const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function fullUnicodeString(constraints = {}) {
        const charArbitrary = (0, fullUnicode_1.fullUnicode)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
    }
    exports.fullUnicodeString = fullUnicodeString;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CodePointsToString":62,"./array":81,"./fullUnicode":111}],113:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.func = void 0;
    const hash_1 = require("../utils/hash");
    const stringify_1 = require("../utils/stringify");
    const symbols_1 = require("../check/symbols");
    const array_1 = require("./array");
    const integer_1 = require("./integer");
    const tuple_1 = require("./tuple");
    const TextEscaper_1 = require("./_internals/helpers/TextEscaper");
    const globals_1 = require("../utils/globals");
    const safeObjectDefineProperties = Object.defineProperties;
    const safeObjectKeys = Object.keys;
    function func(arb) {
        return (0, tuple_1.tuple)((0, array_1.array)(arb, { minLength: 1 }), (0, integer_1.integer)().noShrink()).map(([outs, seed]) => {
            const producer = () => {
                const recorded = {};
                const f = (...args) => {
                    const repr = (0, stringify_1.stringify)(args);
                    const val = outs[(0, hash_1.hash)(`${seed}${repr}`) % outs.length];
                    recorded[repr] = val;
                    return (0, symbols_1.hasCloneMethod)(val) ? val[symbols_1.cloneMethod]() : val;
                };
                function prettyPrint(stringifiedOuts) {
                    const seenValues = (0, globals_1.safeMap)((0, globals_1.safeMap)((0, globals_1.safeSort)(safeObjectKeys(recorded)), (k) => `${k} => ${(0, stringify_1.stringify)(recorded[k])}`), (line) => `/* ${(0, TextEscaper_1.escapeForMultilineComments)(line)} */`);
                    return `function(...args) {
      // With hash and stringify coming from fast-check${seenValues.length !== 0 ? `\n  ${seenValues.join('\n  ')}` : ''}
      const outs = ${stringifiedOuts};
      return outs[hash('${seed}' + stringify(args)) % outs.length];
    }`;
                }
                return safeObjectDefineProperties(f, {
                    toString: { value: () => prettyPrint((0, stringify_1.stringify)(outs)) },
                    [stringify_1.toStringMethod]: { value: () => prettyPrint((0, stringify_1.stringify)(outs)) },
                    [stringify_1.asyncToStringMethod]: { value: async () => prettyPrint(await (0, stringify_1.asyncStringify)(outs)) },
                    [symbols_1.cloneMethod]: { value: producer, configurable: true },
                });
            };
            return producer();
        });
    }
    exports.func = func;

    },{"../check/symbols":193,"../utils/globals":201,"../utils/hash":202,"../utils/stringify":203,"./_internals/helpers/TextEscaper":54,"./array":81,"./integer":120,"./tuple":145}],114:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hexa = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    function hexaMapper(v) {
        return v < 10
            ? v + 48
            : v + 97 - 10;
    }
    function hexaUnmapper(v) {
        return v < 58
            ? v - 48
            : v >= 97 && v < 103
                ? v - 97 + 10
                : -1;
    }
    function hexa() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0, 15, hexaMapper, hexaUnmapper);
    }
    exports.hexa = hexa;

    },{"./_internals/builders/CharacterArbitraryBuilder":23}],115:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hexaString = void 0;
    const array_1 = require("./array");
    const hexa_1 = require("./hexa");
    const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function hexaString(constraints = {}) {
        const charArbitrary = (0, hexa_1.hexa)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
    }
    exports.hexaString = hexaString;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CodePointsToString":62,"./array":81,"./hexa":114}],116:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.infiniteStream = void 0;
    const StreamArbitrary_1 = require("./_internals/StreamArbitrary");
    function infiniteStream(arb) {
        return new StreamArbitrary_1.StreamArbitrary(arb);
    }
    exports.infiniteStream = infiniteStream;

    },{"./_internals/StreamArbitrary":17}],117:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.int16Array = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function int16Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, -32768, 32767, globals_1.Int16Array, integer_1.integer);
    }
    exports.int16Array = int16Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],118:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.int32Array = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function int32Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, -0x80000000, 0x7fffffff, globals_1.Int32Array, integer_1.integer);
    }
    exports.int32Array = int32Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],119:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.int8Array = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function int8Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, -128, 127, globals_1.Int8Array, integer_1.integer);
    }
    exports.int8Array = int8Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],120:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.integer = void 0;
    const IntegerArbitrary_1 = require("./_internals/IntegerArbitrary");
    const safeNumberIsInteger = Number.isInteger;
    function buildCompleteIntegerConstraints(constraints) {
        const min = constraints.min !== undefined ? constraints.min : -0x80000000;
        const max = constraints.max !== undefined ? constraints.max : 0x7fffffff;
        return { min, max };
    }
    function integer(constraints = {}) {
        const fullConstraints = buildCompleteIntegerConstraints(constraints);
        if (fullConstraints.min > fullConstraints.max) {
            throw new Error('fc.integer maximum value should be equal or greater than the minimum one');
        }
        if (!safeNumberIsInteger(fullConstraints.min)) {
            throw new Error('fc.integer minimum value should be an integer');
        }
        if (!safeNumberIsInteger(fullConstraints.max)) {
            throw new Error('fc.integer maximum value should be an integer');
        }
        return new IntegerArbitrary_1.IntegerArbitrary(fullConstraints.min, fullConstraints.max);
    }
    exports.integer = integer;

    },{"./_internals/IntegerArbitrary":13}],121:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ipV4 = void 0;
    const globals_1 = require("../utils/globals");
    const nat_1 = require("./nat");
    const tuple_1 = require("./tuple");
    const NatToStringifiedNat_1 = require("./_internals/mappers/NatToStringifiedNat");
    function dotJoinerMapper(data) {
        return (0, globals_1.safeJoin)(data, '.');
    }
    function dotJoinerUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid type');
        }
        return (0, globals_1.safeMap)((0, globals_1.safeSplit)(value, '.'), (v) => (0, NatToStringifiedNat_1.tryParseStringifiedNat)(v, 10));
    }
    function ipV4() {
        return (0, tuple_1.tuple)((0, nat_1.nat)(255), (0, nat_1.nat)(255), (0, nat_1.nat)(255), (0, nat_1.nat)(255)).map(dotJoinerMapper, dotJoinerUnmapper);
    }
    exports.ipV4 = ipV4;

    },{"../utils/globals":201,"./_internals/mappers/NatToStringifiedNat":68,"./nat":133,"./tuple":145}],122:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ipV4Extended = void 0;
    const globals_1 = require("../utils/globals");
    const oneof_1 = require("./oneof");
    const tuple_1 = require("./tuple");
    const StringifiedNatArbitraryBuilder_1 = require("./_internals/builders/StringifiedNatArbitraryBuilder");
    function dotJoinerMapper(data) {
        return (0, globals_1.safeJoin)(data, '.');
    }
    function dotJoinerUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid type');
        }
        return (0, globals_1.safeSplit)(value, '.');
    }
    function ipV4Extended() {
        return (0, oneof_1.oneof)((0, tuple_1.tuple)((0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255)).map(dotJoinerMapper, dotJoinerUnmapper), (0, tuple_1.tuple)((0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(65535)).map(dotJoinerMapper, dotJoinerUnmapper), (0, tuple_1.tuple)((0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(16777215)).map(dotJoinerMapper, dotJoinerUnmapper), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(4294967295));
    }
    exports.ipV4Extended = ipV4Extended;

    },{"../utils/globals":201,"./_internals/builders/StringifiedNatArbitraryBuilder":29,"./oneof":135,"./tuple":145}],123:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ipV6 = void 0;
    const array_1 = require("./array");
    const oneof_1 = require("./oneof");
    const hexaString_1 = require("./hexaString");
    const tuple_1 = require("./tuple");
    const ipV4_1 = require("./ipV4");
    const EntitiesToIPv6_1 = require("./_internals/mappers/EntitiesToIPv6");
    function h16sTol32Mapper([a, b]) {
        return `${a}:${b}`;
    }
    function h16sTol32Unmapper(value) {
        if (typeof value !== 'string')
            throw new Error('Invalid type');
        if (!value.includes(':'))
            throw new Error('Invalid value');
        return value.split(':', 2);
    }
    function ipV6() {
        const h16Arb = (0, hexaString_1.hexaString)({ minLength: 1, maxLength: 4, size: 'max' });
        const ls32Arb = (0, oneof_1.oneof)((0, tuple_1.tuple)(h16Arb, h16Arb).map(h16sTol32Mapper, h16sTol32Unmapper), (0, ipV4_1.ipV4)());
        return (0, oneof_1.oneof)((0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 6, maxLength: 6, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.fullySpecifiedMapper, EntitiesToIPv6_1.fullySpecifiedUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 5, maxLength: 5, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.onlyTrailingMapper, EntitiesToIPv6_1.onlyTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 1, size: 'max' }), (0, array_1.array)(h16Arb, { minLength: 4, maxLength: 4, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapper, EntitiesToIPv6_1.multiTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 2, size: 'max' }), (0, array_1.array)(h16Arb, { minLength: 3, maxLength: 3, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapper, EntitiesToIPv6_1.multiTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 3, size: 'max' }), (0, array_1.array)(h16Arb, { minLength: 2, maxLength: 2, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapper, EntitiesToIPv6_1.multiTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 4, size: 'max' }), h16Arb, ls32Arb).map(EntitiesToIPv6_1.multiTrailingMapperOne, EntitiesToIPv6_1.multiTrailingUnmapperOne), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 5, size: 'max' }), ls32Arb).map(EntitiesToIPv6_1.singleTrailingMapper, EntitiesToIPv6_1.singleTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 6, size: 'max' }), h16Arb).map(EntitiesToIPv6_1.singleTrailingMapper, EntitiesToIPv6_1.singleTrailingUnmapper), (0, tuple_1.tuple)((0, array_1.array)(h16Arb, { minLength: 0, maxLength: 7, size: 'max' })).map(EntitiesToIPv6_1.noTrailingMapper, EntitiesToIPv6_1.noTrailingUnmapper));
    }
    exports.ipV6 = ipV6;

    },{"./_internals/mappers/EntitiesToIPv6":63,"./array":81,"./hexaString":115,"./ipV4":121,"./oneof":135,"./tuple":145}],124:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.json = void 0;
    const jsonValue_1 = require("./jsonValue");
    function json(constraints = {}) {
        const arb = (0, jsonValue_1.jsonValue)(constraints);
        return arb.map(JSON.stringify);
    }
    exports.json = json;

    },{"./jsonValue":125}],125:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jsonValue = void 0;
    const string_1 = require("./string");
    const JsonConstraintsBuilder_1 = require("./_internals/helpers/JsonConstraintsBuilder");
    const anything_1 = require("./anything");
    function jsonValue(constraints = {}) {
        return (0, anything_1.anything)((0, JsonConstraintsBuilder_1.jsonConstraintsBuilder)((0, string_1.string)(), constraints));
    }
    exports.jsonValue = jsonValue;

    },{"./_internals/helpers/JsonConstraintsBuilder":44,"./anything":80,"./string":141}],126:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.letrec = void 0;
    const LazyArbitrary_1 = require("./_internals/LazyArbitrary");
    const globals_1 = require("../utils/globals");
    const safeObjectCreate = Object.create;
    function letrec(builder) {
        const lazyArbs = safeObjectCreate(null);
        const tie = (key) => {
            if (!(0, globals_1.safeHasOwnProperty)(lazyArbs, key)) {
                lazyArbs[key] = new LazyArbitrary_1.LazyArbitrary(String(key));
            }
            return lazyArbs[key];
        };
        const strictArbs = builder(tie);
        for (const key in strictArbs) {
            if (!(0, globals_1.safeHasOwnProperty)(strictArbs, key)) {
                continue;
            }
            const lazyAtKey = lazyArbs[key];
            const lazyArb = lazyAtKey !== undefined ? lazyAtKey : new LazyArbitrary_1.LazyArbitrary(key);
            lazyArb.underlying = strictArbs[key];
            lazyArbs[key] = lazyArb;
        }
        return strictArbs;
    }
    exports.letrec = letrec;

    },{"../utils/globals":201,"./_internals/LazyArbitrary":14}],127:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lorem = void 0;
    const array_1 = require("./array");
    const constant_1 = require("./constant");
    const oneof_1 = require("./oneof");
    const WordsToLorem_1 = require("./_internals/mappers/WordsToLorem");
    const h = (v, w) => {
        return { arbitrary: (0, constant_1.constant)(v), weight: w };
    };
    function loremWord() {
        return (0, oneof_1.oneof)(h('non', 6), h('adipiscing', 5), h('ligula', 5), h('enim', 5), h('pellentesque', 5), h('in', 5), h('augue', 5), h('et', 5), h('nulla', 5), h('lorem', 4), h('sit', 4), h('sed', 4), h('diam', 4), h('fermentum', 4), h('ut', 4), h('eu', 4), h('aliquam', 4), h('mauris', 4), h('vitae', 4), h('felis', 4), h('ipsum', 3), h('dolor', 3), h('amet,', 3), h('elit', 3), h('euismod', 3), h('mi', 3), h('orci', 3), h('erat', 3), h('praesent', 3), h('egestas', 3), h('leo', 3), h('vel', 3), h('sapien', 3), h('integer', 3), h('curabitur', 3), h('convallis', 3), h('purus', 3), h('risus', 2), h('suspendisse', 2), h('lectus', 2), h('nec,', 2), h('ultricies', 2), h('sed,', 2), h('cras', 2), h('elementum', 2), h('ultrices', 2), h('maecenas', 2), h('massa,', 2), h('varius', 2), h('a,', 2), h('semper', 2), h('proin', 2), h('nec', 2), h('nisl', 2), h('amet', 2), h('duis', 2), h('congue', 2), h('libero', 2), h('vestibulum', 2), h('pede', 2), h('blandit', 2), h('sodales', 2), h('ante', 2), h('nibh', 2), h('ac', 2), h('aenean', 2), h('massa', 2), h('suscipit', 2), h('sollicitudin', 2), h('fusce', 2), h('tempus', 2), h('aliquam,', 2), h('nunc', 2), h('ullamcorper', 2), h('rhoncus', 2), h('metus', 2), h('faucibus,', 2), h('justo', 2), h('magna', 2), h('at', 2), h('tincidunt', 2), h('consectetur', 1), h('tortor,', 1), h('dignissim', 1), h('congue,', 1), h('non,', 1), h('porttitor,', 1), h('nonummy', 1), h('molestie,', 1), h('est', 1), h('eleifend', 1), h('mi,', 1), h('arcu', 1), h('scelerisque', 1), h('vitae,', 1), h('consequat', 1), h('in,', 1), h('pretium', 1), h('volutpat', 1), h('pharetra', 1), h('tempor', 1), h('bibendum', 1), h('odio', 1), h('dui', 1), h('primis', 1), h('faucibus', 1), h('luctus', 1), h('posuere', 1), h('cubilia', 1), h('curae,', 1), h('hendrerit', 1), h('velit', 1), h('mauris,', 1), h('gravida', 1), h('ornare', 1), h('ut,', 1), h('pulvinar', 1), h('varius,', 1), h('turpis', 1), h('nibh,', 1), h('eros', 1), h('id', 1), h('aliquet', 1), h('quis', 1), h('lobortis', 1), h('consectetuer', 1), h('morbi', 1), h('vehicula', 1), h('tortor', 1), h('tellus,', 1), h('id,', 1), h('eu,', 1), h('quam', 1), h('feugiat,', 1), h('posuere,', 1), h('iaculis', 1), h('lectus,', 1), h('tristique', 1), h('mollis,', 1), h('nisl,', 1), h('vulputate', 1), h('sem', 1), h('vivamus', 1), h('placerat', 1), h('imperdiet', 1), h('cursus', 1), h('rutrum', 1), h('iaculis,', 1), h('augue,', 1), h('lacus', 1));
    }
    function lorem(constraints = {}) {
        const { maxCount, mode = 'words', size } = constraints;
        if (maxCount !== undefined && maxCount < 1) {
            throw new Error(`lorem has to produce at least one word/sentence`);
        }
        const wordArbitrary = loremWord();
        if (mode === 'sentences') {
            const sentence = (0, array_1.array)(wordArbitrary, { minLength: 1, size: 'small' }).map(WordsToLorem_1.wordsToSentenceMapper, (0, WordsToLorem_1.wordsToSentenceUnmapperFor)(wordArbitrary));
            return (0, array_1.array)(sentence, { minLength: 1, maxLength: maxCount, size }).map(WordsToLorem_1.sentencesToParagraphMapper, WordsToLorem_1.sentencesToParagraphUnmapper);
        }
        else {
            return (0, array_1.array)(wordArbitrary, { minLength: 1, maxLength: maxCount, size }).map(WordsToLorem_1.wordsToJoinedStringMapper, (0, WordsToLorem_1.wordsToJoinedStringUnmapperFor)(wordArbitrary));
        }
    }
    exports.lorem = lorem;

    },{"./_internals/mappers/WordsToLorem":79,"./array":81,"./constant":99,"./oneof":135}],128:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapToConstant = void 0;
    const nat_1 = require("./nat");
    const IndexToMappedConstant_1 = require("./_internals/mappers/IndexToMappedConstant");
    function computeNumChoices(options) {
        if (options.length === 0)
            throw new Error(`fc.mapToConstant expects at least one option`);
        let numChoices = 0;
        for (let idx = 0; idx !== options.length; ++idx) {
            if (options[idx].num < 0)
                throw new Error(`fc.mapToConstant expects all options to have a number of entries greater or equal to zero`);
            numChoices += options[idx].num;
        }
        if (numChoices === 0)
            throw new Error(`fc.mapToConstant expects at least one choice among options`);
        return numChoices;
    }
    function mapToConstant(...entries) {
        const numChoices = computeNumChoices(entries);
        return (0, nat_1.nat)({ max: numChoices - 1 }).map((0, IndexToMappedConstant_1.indexToMappedConstantMapperFor)(entries), (0, IndexToMappedConstant_1.indexToMappedConstantUnmapperFor)(entries));
    }
    exports.mapToConstant = mapToConstant;

    },{"./_internals/mappers/IndexToMappedConstant":65,"./nat":133}],129:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.maxSafeInteger = void 0;
    const IntegerArbitrary_1 = require("./_internals/IntegerArbitrary");
    const safeMinSafeInteger = Number.MIN_SAFE_INTEGER;
    const safeMaxSafeInteger = Number.MAX_SAFE_INTEGER;
    function maxSafeInteger() {
        return new IntegerArbitrary_1.IntegerArbitrary(safeMinSafeInteger, safeMaxSafeInteger);
    }
    exports.maxSafeInteger = maxSafeInteger;

    },{"./_internals/IntegerArbitrary":13}],130:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.maxSafeNat = void 0;
    const IntegerArbitrary_1 = require("./_internals/IntegerArbitrary");
    const safeMaxSafeInteger = Number.MAX_SAFE_INTEGER;
    function maxSafeNat() {
        return new IntegerArbitrary_1.IntegerArbitrary(0, safeMaxSafeInteger);
    }
    exports.maxSafeNat = maxSafeNat;

    },{"./_internals/IntegerArbitrary":13}],131:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memo = void 0;
    const globals_1 = require("../utils/globals");
    let contextRemainingDepth = 10;
    function memo(builder) {
        const previous = {};
        return ((maxDepth) => {
            const n = maxDepth !== undefined ? maxDepth : contextRemainingDepth;
            if (!(0, globals_1.safeHasOwnProperty)(previous, n)) {
                const prev = contextRemainingDepth;
                contextRemainingDepth = n - 1;
                previous[n] = builder(n);
                contextRemainingDepth = prev;
            }
            return previous[n];
        });
    }
    exports.memo = memo;

    },{"../utils/globals":201}],132:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mixedCase = void 0;
    const globals_1 = require("../utils/globals");
    const MixedCaseArbitrary_1 = require("./_internals/MixedCaseArbitrary");
    function defaultToggleCase(rawChar) {
        const upper = (0, globals_1.safeToUpperCase)(rawChar);
        if (upper !== rawChar)
            return upper;
        return (0, globals_1.safeToLowerCase)(rawChar);
    }
    function mixedCase(stringArb, constraints) {
        if (typeof globals_1.BigInt === 'undefined') {
            throw new globals_1.Error(`mixedCase requires BigInt support`);
        }
        const toggleCase = (constraints && constraints.toggleCase) || defaultToggleCase;
        const untoggleAll = constraints && constraints.untoggleAll;
        return new MixedCaseArbitrary_1.MixedCaseArbitrary(stringArb, toggleCase, untoggleAll);
    }
    exports.mixedCase = mixedCase;

    },{"../utils/globals":201,"./_internals/MixedCaseArbitrary":15}],133:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nat = void 0;
    const IntegerArbitrary_1 = require("./_internals/IntegerArbitrary");
    const safeNumberIsInteger = Number.isInteger;
    function nat(arg) {
        const max = typeof arg === 'number' ? arg : arg && arg.max !== undefined ? arg.max : 0x7fffffff;
        if (max < 0) {
            throw new Error('fc.nat value should be greater than or equal to 0');
        }
        if (!safeNumberIsInteger(max)) {
            throw new Error('fc.nat maximum value should be an integer');
        }
        return new IntegerArbitrary_1.IntegerArbitrary(0, max);
    }
    exports.nat = nat;

    },{"./_internals/IntegerArbitrary":13}],134:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.object = void 0;
    const dictionary_1 = require("./dictionary");
    const AnyArbitraryBuilder_1 = require("./_internals/builders/AnyArbitraryBuilder");
    const QualifiedObjectConstraints_1 = require("./_internals/helpers/QualifiedObjectConstraints");
    function objectInternal(constraints) {
        return (0, dictionary_1.dictionary)(constraints.key, (0, AnyArbitraryBuilder_1.anyArbitraryBuilder)(constraints), {
            maxKeys: constraints.maxKeys,
            size: constraints.size,
        });
    }
    function object(constraints) {
        return objectInternal((0, QualifiedObjectConstraints_1.toQualifiedObjectConstraints)(constraints));
    }
    exports.object = object;

    },{"./_internals/builders/AnyArbitraryBuilder":21,"./_internals/helpers/QualifiedObjectConstraints":47,"./dictionary":103}],135:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oneof = void 0;
    const Arbitrary_1 = require("../check/arbitrary/definition/Arbitrary");
    const globals_1 = require("../utils/globals");
    const FrequencyArbitrary_1 = require("./_internals/FrequencyArbitrary");
    function isOneOfContraints(param) {
        return (param != null &&
            typeof param === 'object' &&
            !('generate' in param) &&
            !('arbitrary' in param) &&
            !('weight' in param));
    }
    function toWeightedArbitrary(maybeWeightedArbitrary) {
        if ((0, Arbitrary_1.isArbitrary)(maybeWeightedArbitrary)) {
            return { arbitrary: maybeWeightedArbitrary, weight: 1 };
        }
        return maybeWeightedArbitrary;
    }
    function oneof(...args) {
        const constraints = args[0];
        if (isOneOfContraints(constraints)) {
            const weightedArbs = (0, globals_1.safeMap)((0, globals_1.safeSlice)(args, 1), toWeightedArbitrary);
            return FrequencyArbitrary_1.FrequencyArbitrary.from(weightedArbs, constraints, 'fc.oneof');
        }
        const weightedArbs = (0, globals_1.safeMap)(args, toWeightedArbitrary);
        return FrequencyArbitrary_1.FrequencyArbitrary.from(weightedArbs, {}, 'fc.oneof');
    }
    exports.oneof = oneof;

    },{"../check/arbitrary/definition/Arbitrary":162,"../utils/globals":201,"./_internals/FrequencyArbitrary":12}],136:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.option = void 0;
    const constant_1 = require("./constant");
    const FrequencyArbitrary_1 = require("./_internals/FrequencyArbitrary");
    const globals_1 = require("../utils/globals");
    function option(arb, constraints = {}) {
        const freq = constraints.freq == null ? 5 : constraints.freq;
        const nilValue = (0, globals_1.safeHasOwnProperty)(constraints, 'nil') ? constraints.nil : null;
        const nilArb = (0, constant_1.constant)(nilValue);
        const weightedArbs = [
            { arbitrary: nilArb, weight: 1, fallbackValue: { default: nilValue } },
            { arbitrary: arb, weight: freq },
        ];
        const frequencyConstraints = {
            withCrossShrink: true,
            depthSize: constraints.depthSize,
            maxDepth: constraints.maxDepth,
            depthIdentifier: constraints.depthIdentifier,
        };
        return FrequencyArbitrary_1.FrequencyArbitrary.from(weightedArbs, frequencyConstraints, 'fc.option');
    }
    exports.option = option;

    },{"../utils/globals":201,"./_internals/FrequencyArbitrary":12,"./constant":99}],137:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.record = void 0;
    const PartialRecordArbitraryBuilder_1 = require("./_internals/builders/PartialRecordArbitraryBuilder");
    function record(recordModel, constraints) {
        if (constraints == null) {
            return (0, PartialRecordArbitraryBuilder_1.buildPartialRecordArbitrary)(recordModel, undefined);
        }
        if ('withDeletedKeys' in constraints && 'requiredKeys' in constraints) {
            throw new Error(`requiredKeys and withDeletedKeys cannot be used together in fc.record`);
        }
        const requireDeletedKeys = ('requiredKeys' in constraints && constraints.requiredKeys !== undefined) ||
            ('withDeletedKeys' in constraints && !!constraints.withDeletedKeys);
        if (!requireDeletedKeys) {
            return (0, PartialRecordArbitraryBuilder_1.buildPartialRecordArbitrary)(recordModel, undefined);
        }
        const requiredKeys = ('requiredKeys' in constraints ? constraints.requiredKeys : undefined) || [];
        for (let idx = 0; idx !== requiredKeys.length; ++idx) {
            const descriptor = Object.getOwnPropertyDescriptor(recordModel, requiredKeys[idx]);
            if (descriptor === undefined) {
                throw new Error(`requiredKeys cannot reference keys that have not been defined in recordModel`);
            }
            if (!descriptor.enumerable) {
                throw new Error(`requiredKeys cannot reference keys that have are enumerable in recordModel`);
            }
        }
        return (0, PartialRecordArbitraryBuilder_1.buildPartialRecordArbitrary)(recordModel, requiredKeys);
    }
    exports.record = record;

    },{"./_internals/builders/PartialRecordArbitraryBuilder":27}],138:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.schedulerFor = exports.scheduler = void 0;
    const BuildSchedulerFor_1 = require("./_internals/helpers/BuildSchedulerFor");
    const SchedulerArbitrary_1 = require("./_internals/SchedulerArbitrary");
    function scheduler(constraints) {
        const { act = (f) => f() } = constraints || {};
        return new SchedulerArbitrary_1.SchedulerArbitrary(act);
    }
    exports.scheduler = scheduler;
    function schedulerFor(customOrderingOrConstraints, constraintsOrUndefined) {
        const { act = (f) => f() } = Array.isArray(customOrderingOrConstraints)
            ? constraintsOrUndefined || {}
            : customOrderingOrConstraints || {};
        if (Array.isArray(customOrderingOrConstraints)) {
            return (0, BuildSchedulerFor_1.buildSchedulerFor)(act, customOrderingOrConstraints);
        }
        return function (_strs, ...ordering) {
            return (0, BuildSchedulerFor_1.buildSchedulerFor)(act, ordering);
        };
    }
    exports.schedulerFor = schedulerFor;

    },{"./_internals/SchedulerArbitrary":16,"./_internals/helpers/BuildSchedulerFor":35}],139:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shuffledSubarray = void 0;
    const SubarrayArbitrary_1 = require("./_internals/SubarrayArbitrary");
    function shuffledSubarray(originalArray, constraints = {}) {
        const { minLength = 0, maxLength = originalArray.length } = constraints;
        return new SubarrayArbitrary_1.SubarrayArbitrary(originalArray, false, minLength, maxLength);
    }
    exports.shuffledSubarray = shuffledSubarray;

    },{"./_internals/SubarrayArbitrary":18}],140:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sparseArray = void 0;
    const globals_1 = require("../utils/globals");
    const tuple_1 = require("./tuple");
    const uniqueArray_1 = require("./uniqueArray");
    const RestrictedIntegerArbitraryBuilder_1 = require("./_internals/builders/RestrictedIntegerArbitraryBuilder");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    const safeMathMin = Math.min;
    const safeMathMax = Math.max;
    const safeArrayIsArray = globals_1.Array.isArray;
    const safeObjectEntries = Object.entries;
    function extractMaxIndex(indexesAndValues) {
        let maxIndex = -1;
        for (let index = 0; index !== indexesAndValues.length; ++index) {
            maxIndex = safeMathMax(maxIndex, indexesAndValues[index][0]);
        }
        return maxIndex;
    }
    function arrayFromItems(length, indexesAndValues) {
        const array = (0, globals_1.Array)(length);
        for (let index = 0; index !== indexesAndValues.length; ++index) {
            const it = indexesAndValues[index];
            if (it[0] < length)
                array[it[0]] = it[1];
        }
        return array;
    }
    function sparseArray(arb, constraints = {}) {
        const { size, minNumElements = 0, maxLength = MaxLengthFromMinLength_1.MaxLengthUpperBound, maxNumElements = maxLength, noTrailingHole, depthIdentifier, } = constraints;
        const maxGeneratedNumElements = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, minNumElements, maxNumElements, constraints.maxNumElements !== undefined);
        const maxGeneratedLength = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, maxGeneratedNumElements, maxLength, constraints.maxLength !== undefined);
        if (minNumElements > maxLength) {
            throw new Error(`The minimal number of non-hole elements cannot be higher than the maximal length of the array`);
        }
        if (minNumElements > maxNumElements) {
            throw new Error(`The minimal number of non-hole elements cannot be higher than the maximal number of non-holes`);
        }
        const resultedMaxNumElements = safeMathMin(maxNumElements, maxLength);
        const resultedSizeMaxNumElements = constraints.maxNumElements !== undefined || size !== undefined ? size : '=';
        const maxGeneratedIndexAuthorized = safeMathMax(maxGeneratedLength - 1, 0);
        const maxIndexAuthorized = safeMathMax(maxLength - 1, 0);
        const sparseArrayNoTrailingHole = (0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)((0, RestrictedIntegerArbitraryBuilder_1.restrictedIntegerArbitraryBuilder)(0, maxGeneratedIndexAuthorized, maxIndexAuthorized), arb), {
            size: resultedSizeMaxNumElements,
            minLength: minNumElements,
            maxLength: resultedMaxNumElements,
            selector: (item) => item[0],
            depthIdentifier,
        }).map((items) => {
            const lastIndex = extractMaxIndex(items);
            return arrayFromItems(lastIndex + 1, items);
        }, (value) => {
            if (!safeArrayIsArray(value)) {
                throw new Error('Not supported entry type');
            }
            if (noTrailingHole && value.length !== 0 && !(value.length - 1 in value)) {
                throw new Error('No trailing hole');
            }
            return (0, globals_1.safeMap)(safeObjectEntries(value), (entry) => [Number(entry[0]), entry[1]]);
        });
        if (noTrailingHole || maxLength === minNumElements) {
            return sparseArrayNoTrailingHole;
        }
        return (0, tuple_1.tuple)(sparseArrayNoTrailingHole, (0, RestrictedIntegerArbitraryBuilder_1.restrictedIntegerArbitraryBuilder)(minNumElements, maxGeneratedLength, maxLength)).map((data) => {
            const sparse = data[0];
            const targetLength = data[1];
            if (sparse.length >= targetLength) {
                return sparse;
            }
            const longerSparse = (0, globals_1.safeSlice)(sparse);
            longerSparse.length = targetLength;
            return longerSparse;
        }, (value) => {
            if (!safeArrayIsArray(value)) {
                throw new Error('Not supported entry type');
            }
            return [value, value.length];
        });
    }
    exports.sparseArray = sparseArray;

    },{"../utils/globals":201,"./_internals/builders/RestrictedIntegerArbitraryBuilder":28,"./_internals/helpers/MaxLengthFromMinLength":45,"./tuple":145,"./uniqueArray":154}],141:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = void 0;
    const array_1 = require("./array");
    const char_1 = require("./char");
    const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function string(constraints = {}) {
        const charArbitrary = (0, char_1.char)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
    }
    exports.string = string;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CodePointsToString":62,"./array":81,"./char":93}],142:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string16bits = void 0;
    const array_1 = require("./array");
    const char16bits_1 = require("./char16bits");
    const CharsToString_1 = require("./_internals/mappers/CharsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function string16bits(constraints = {}) {
        const charArbitrary = (0, char16bits_1.char16bits)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CharsToString_1.charsToStringUnmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CharsToString_1.charsToStringMapper, CharsToString_1.charsToStringUnmapper);
    }
    exports.string16bits = string16bits;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CharsToString":61,"./array":81,"./char16bits":94}],143:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringOf = void 0;
    const array_1 = require("./array");
    const PatternsToString_1 = require("./_internals/mappers/PatternsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function stringOf(charArb, constraints = {}) {
        const unmapper = (0, PatternsToString_1.patternsToStringUnmapperFor)(charArb, constraints);
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArb, unmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArb, enrichedConstraints).map(PatternsToString_1.patternsToStringMapper, unmapper);
    }
    exports.stringOf = stringOf;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/PatternsToString":73,"./array":81}],144:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subarray = void 0;
    const SubarrayArbitrary_1 = require("./_internals/SubarrayArbitrary");
    function subarray(originalArray, constraints = {}) {
        const { minLength = 0, maxLength = originalArray.length } = constraints;
        return new SubarrayArbitrary_1.SubarrayArbitrary(originalArray, true, minLength, maxLength);
    }
    exports.subarray = subarray;

    },{"./_internals/SubarrayArbitrary":18}],145:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tuple = void 0;
    const TupleArbitrary_1 = require("./_internals/TupleArbitrary");
    function tuple(...arbs) {
        return new TupleArbitrary_1.TupleArbitrary(arbs);
    }
    exports.tuple = tuple;

    },{"./_internals/TupleArbitrary":19}],146:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint16Array = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function uint16Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, 0, 65535, globals_1.Uint16Array, integer_1.integer);
    }
    exports.uint16Array = uint16Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],147:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint32Array = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function uint32Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, 0, 0xffffffff, globals_1.Uint32Array, integer_1.integer);
    }
    exports.uint32Array = uint32Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],148:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint8Array = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function uint8Array(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, 0, 255, globals_1.Uint8Array, integer_1.integer);
    }
    exports.uint8Array = uint8Array;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],149:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uint8ClampedArray = void 0;
    const globals_1 = require("../utils/globals");
    const integer_1 = require("./integer");
    const TypedIntArrayArbitraryBuilder_1 = require("./_internals/builders/TypedIntArrayArbitraryBuilder");
    function uint8ClampedArray(constraints = {}) {
        return (0, TypedIntArrayArbitraryBuilder_1.typedIntArrayArbitraryArbitraryBuilder)(constraints, 0, 255, globals_1.Uint8ClampedArray, integer_1.integer);
    }
    exports.uint8ClampedArray = uint8ClampedArray;

    },{"../utils/globals":201,"./_internals/builders/TypedIntArrayArbitraryBuilder":30,"./integer":120}],150:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unicode = void 0;
    const CharacterArbitraryBuilder_1 = require("./_internals/builders/CharacterArbitraryBuilder");
    const IndexToPrintableIndex_1 = require("./_internals/mappers/IndexToPrintableIndex");
    const gapSize = 0xdfff + 1 - 0xd800;
    function unicodeMapper(v) {
        if (v < 0xd800)
            return (0, IndexToPrintableIndex_1.indexToPrintableIndexMapper)(v);
        return v + gapSize;
    }
    function unicodeUnmapper(v) {
        if (v < 0xd800)
            return (0, IndexToPrintableIndex_1.indexToPrintableIndexUnmapper)(v);
        if (v <= 0xdfff)
            return -1;
        return v - gapSize;
    }
    function unicode() {
        return (0, CharacterArbitraryBuilder_1.buildCharacterArbitrary)(0x0000, 0xffff - gapSize, unicodeMapper, unicodeUnmapper);
    }
    exports.unicode = unicode;

    },{"./_internals/builders/CharacterArbitraryBuilder":23,"./_internals/mappers/IndexToPrintableIndex":66}],151:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unicodeJson = void 0;
    const unicodeJsonValue_1 = require("./unicodeJsonValue");
    function unicodeJson(constraints = {}) {
        const arb = (0, unicodeJsonValue_1.unicodeJsonValue)(constraints);
        return arb.map(JSON.stringify);
    }
    exports.unicodeJson = unicodeJson;

    },{"./unicodeJsonValue":152}],152:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unicodeJsonValue = void 0;
    const unicodeString_1 = require("./unicodeString");
    const JsonConstraintsBuilder_1 = require("./_internals/helpers/JsonConstraintsBuilder");
    const anything_1 = require("./anything");
    function unicodeJsonValue(constraints = {}) {
        return (0, anything_1.anything)((0, JsonConstraintsBuilder_1.jsonConstraintsBuilder)((0, unicodeString_1.unicodeString)(), constraints));
    }
    exports.unicodeJsonValue = unicodeJsonValue;

    },{"./_internals/helpers/JsonConstraintsBuilder":44,"./anything":80,"./unicodeString":153}],153:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unicodeString = void 0;
    const array_1 = require("./array");
    const unicode_1 = require("./unicode");
    const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
    const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
    const safeObjectAssign = Object.assign;
    function unicodeString(constraints = {}) {
        const charArbitrary = (0, unicode_1.unicode)();
        const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
        const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
            experimentalCustomSlices,
        });
        return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
    }
    exports.unicodeString = unicodeString;

    },{"./_internals/helpers/SlicesForStringBuilder":52,"./_internals/mappers/CodePointsToString":62,"./array":81,"./unicode":150}],154:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uniqueArray = void 0;
    const ArrayArbitrary_1 = require("./_internals/ArrayArbitrary");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    const CustomEqualSet_1 = require("./_internals/helpers/CustomEqualSet");
    const StrictlyEqualSet_1 = require("./_internals/helpers/StrictlyEqualSet");
    const SameValueSet_1 = require("./_internals/helpers/SameValueSet");
    const SameValueZeroSet_1 = require("./_internals/helpers/SameValueZeroSet");
    function buildUniqueArraySetBuilder(constraints) {
        if (typeof constraints.comparator === 'function') {
            if (constraints.selector === undefined) {
                const comparator = constraints.comparator;
                const isEqualForBuilder = (nextA, nextB) => comparator(nextA.value_, nextB.value_);
                return () => new CustomEqualSet_1.CustomEqualSet(isEqualForBuilder);
            }
            const comparator = constraints.comparator;
            const selector = constraints.selector;
            const refinedSelector = (next) => selector(next.value_);
            const isEqualForBuilder = (nextA, nextB) => comparator(refinedSelector(nextA), refinedSelector(nextB));
            return () => new CustomEqualSet_1.CustomEqualSet(isEqualForBuilder);
        }
        const selector = constraints.selector || ((v) => v);
        const refinedSelector = (next) => selector(next.value_);
        switch (constraints.comparator) {
            case 'IsStrictlyEqual':
                return () => new StrictlyEqualSet_1.StrictlyEqualSet(refinedSelector);
            case 'SameValueZero':
                return () => new SameValueZeroSet_1.SameValueZeroSet(refinedSelector);
            case 'SameValue':
            case undefined:
                return () => new SameValueSet_1.SameValueSet(refinedSelector);
        }
    }
    function uniqueArray(arb, constraints = {}) {
        const minLength = constraints.minLength !== undefined ? constraints.minLength : 0;
        const maxLength = constraints.maxLength !== undefined ? constraints.maxLength : MaxLengthFromMinLength_1.MaxLengthUpperBound;
        const maxGeneratedLength = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(constraints.size, minLength, maxLength, constraints.maxLength !== undefined);
        const depthIdentifier = constraints.depthIdentifier;
        const setBuilder = buildUniqueArraySetBuilder(constraints);
        const arrayArb = new ArrayArbitrary_1.ArrayArbitrary(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, setBuilder, []);
        if (minLength === 0)
            return arrayArb;
        return arrayArb.filter((tab) => tab.length >= minLength);
    }
    exports.uniqueArray = uniqueArray;

    },{"./_internals/ArrayArbitrary":6,"./_internals/helpers/CustomEqualSet":37,"./_internals/helpers/MaxLengthFromMinLength":45,"./_internals/helpers/SameValueSet":48,"./_internals/helpers/SameValueZeroSet":49,"./_internals/helpers/StrictlyEqualSet":53}],155:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uuid = void 0;
    const tuple_1 = require("./tuple");
    const PaddedNumberArbitraryBuilder_1 = require("./_internals/builders/PaddedNumberArbitraryBuilder");
    const PaddedEightsToUuid_1 = require("./_internals/mappers/PaddedEightsToUuid");
    function uuid() {
        const padded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0, 0xffffffff);
        const secondPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0x10000000, 0x5fffffff);
        const thirdPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0x80000000, 0xbfffffff);
        return (0, tuple_1.tuple)(padded, secondPadded, thirdPadded, padded).map(PaddedEightsToUuid_1.paddedEightsToUuidMapper, PaddedEightsToUuid_1.paddedEightsToUuidUnmapper);
    }
    exports.uuid = uuid;

    },{"./_internals/builders/PaddedNumberArbitraryBuilder":26,"./_internals/mappers/PaddedEightsToUuid":71,"./tuple":145}],156:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uuidV = void 0;
    const tuple_1 = require("./tuple");
    const PaddedNumberArbitraryBuilder_1 = require("./_internals/builders/PaddedNumberArbitraryBuilder");
    const PaddedEightsToUuid_1 = require("./_internals/mappers/PaddedEightsToUuid");
    function uuidV(versionNumber) {
        const padded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0, 0xffffffff);
        const offsetSecond = versionNumber * 0x10000000;
        const secondPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(offsetSecond, offsetSecond + 0x0fffffff);
        const thirdPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0x80000000, 0xbfffffff);
        return (0, tuple_1.tuple)(padded, secondPadded, thirdPadded, padded).map(PaddedEightsToUuid_1.paddedEightsToUuidMapper, PaddedEightsToUuid_1.paddedEightsToUuidUnmapper);
    }
    exports.uuidV = uuidV;

    },{"./_internals/builders/PaddedNumberArbitraryBuilder":26,"./_internals/mappers/PaddedEightsToUuid":71,"./tuple":145}],157:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webAuthority = void 0;
    const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
    const constant_1 = require("./constant");
    const domain_1 = require("./domain");
    const ipV4_1 = require("./ipV4");
    const ipV4Extended_1 = require("./ipV4Extended");
    const ipV6_1 = require("./ipV6");
    const nat_1 = require("./nat");
    const oneof_1 = require("./oneof");
    const option_1 = require("./option");
    const stringOf_1 = require("./stringOf");
    const tuple_1 = require("./tuple");
    function hostUserInfo(size) {
        const others = ['-', '.', '_', '~', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ':'];
        return (0, stringOf_1.stringOf)((0, CharacterRangeArbitraryBuilder_1.buildAlphaNumericPercentArbitrary)(others), { size });
    }
    function userHostPortMapper([u, h, p]) {
        return (u === null ? '' : `${u}@`) + h + (p === null ? '' : `:${p}`);
    }
    function userHostPortUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported');
        }
        const atPosition = value.indexOf('@');
        const user = atPosition !== -1 ? value.substring(0, atPosition) : null;
        const portRegex = /:(\d+)$/;
        const m = portRegex.exec(value);
        const port = m !== null ? Number(m[1]) : null;
        const host = m !== null ? value.substring(atPosition + 1, value.length - m[1].length - 1) : value.substring(atPosition + 1);
        return [user, host, port];
    }
    function bracketedMapper(s) {
        return `[${s}]`;
    }
    function bracketedUnmapper(value) {
        if (typeof value !== 'string' || value[0] !== '[' || value[value.length - 1] !== ']') {
            throw new Error('Unsupported');
        }
        return value.substring(1, value.length - 1);
    }
    function webAuthority(constraints) {
        const c = constraints || {};
        const size = c.size;
        const hostnameArbs = [
            (0, domain_1.domain)({ size }),
            ...(c.withIPv4 === true ? [(0, ipV4_1.ipV4)()] : []),
            ...(c.withIPv6 === true ? [(0, ipV6_1.ipV6)().map(bracketedMapper, bracketedUnmapper)] : []),
            ...(c.withIPv4Extended === true ? [(0, ipV4Extended_1.ipV4Extended)()] : []),
        ];
        return (0, tuple_1.tuple)(c.withUserInfo === true ? (0, option_1.option)(hostUserInfo(size)) : (0, constant_1.constant)(null), (0, oneof_1.oneof)(...hostnameArbs), c.withPort === true ? (0, option_1.option)((0, nat_1.nat)(65535)) : (0, constant_1.constant)(null)).map(userHostPortMapper, userHostPortUnmapper);
    }
    exports.webAuthority = webAuthority;

    },{"./_internals/builders/CharacterRangeArbitraryBuilder":24,"./constant":99,"./domain":104,"./ipV4":121,"./ipV4Extended":122,"./ipV6":123,"./nat":133,"./oneof":135,"./option":136,"./stringOf":143,"./tuple":145}],158:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webFragments = void 0;
    const UriQueryOrFragmentArbitraryBuilder_1 = require("./_internals/builders/UriQueryOrFragmentArbitraryBuilder");
    function webFragments(constraints = {}) {
        return (0, UriQueryOrFragmentArbitraryBuilder_1.buildUriQueryOrFragmentArbitrary)(constraints.size);
    }
    exports.webFragments = webFragments;

    },{"./_internals/builders/UriQueryOrFragmentArbitraryBuilder":32}],159:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webQueryParameters = void 0;
    const UriQueryOrFragmentArbitraryBuilder_1 = require("./_internals/builders/UriQueryOrFragmentArbitraryBuilder");
    function webQueryParameters(constraints = {}) {
        return (0, UriQueryOrFragmentArbitraryBuilder_1.buildUriQueryOrFragmentArbitrary)(constraints.size);
    }
    exports.webQueryParameters = webQueryParameters;

    },{"./_internals/builders/UriQueryOrFragmentArbitraryBuilder":32}],160:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webSegment = void 0;
    const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
    const stringOf_1 = require("./stringOf");
    function webSegment(constraints = {}) {
        const others = ['-', '.', '_', '~', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ':', '@'];
        return (0, stringOf_1.stringOf)((0, CharacterRangeArbitraryBuilder_1.buildAlphaNumericPercentArbitrary)(others), { size: constraints.size });
    }
    exports.webSegment = webSegment;

    },{"./_internals/builders/CharacterRangeArbitraryBuilder":24,"./stringOf":143}],161:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webUrl = void 0;
    const constantFrom_1 = require("./constantFrom");
    const constant_1 = require("./constant");
    const option_1 = require("./option");
    const tuple_1 = require("./tuple");
    const webQueryParameters_1 = require("./webQueryParameters");
    const webFragments_1 = require("./webFragments");
    const webAuthority_1 = require("./webAuthority");
    const PartsToUrl_1 = require("./_internals/mappers/PartsToUrl");
    const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
    const UriPathArbitraryBuilder_1 = require("./_internals/builders/UriPathArbitraryBuilder");
    const safeObjectAssign = Object.assign;
    function webUrl(constraints) {
        const c = constraints || {};
        const resolvedSize = (0, MaxLengthFromMinLength_1.resolveSize)(c.size);
        const resolvedAuthoritySettingsSize = c.authoritySettings !== undefined && c.authoritySettings.size !== undefined
            ? (0, MaxLengthFromMinLength_1.relativeSizeToSize)(c.authoritySettings.size, resolvedSize)
            : resolvedSize;
        const resolvedAuthoritySettings = safeObjectAssign(safeObjectAssign({}, c.authoritySettings), {
            size: resolvedAuthoritySettingsSize,
        });
        const validSchemes = c.validSchemes || ['http', 'https'];
        const schemeArb = (0, constantFrom_1.constantFrom)(...validSchemes);
        const authorityArb = (0, webAuthority_1.webAuthority)(resolvedAuthoritySettings);
        const pathArb = (0, UriPathArbitraryBuilder_1.buildUriPathArbitrary)(resolvedSize);
        return (0, tuple_1.tuple)(schemeArb, authorityArb, pathArb, c.withQueryParameters === true ? (0, option_1.option)((0, webQueryParameters_1.webQueryParameters)({ size: resolvedSize })) : (0, constant_1.constant)(null), c.withFragments === true ? (0, option_1.option)((0, webFragments_1.webFragments)({ size: resolvedSize })) : (0, constant_1.constant)(null)).map(PartsToUrl_1.partsToUrlMapper, PartsToUrl_1.partsToUrlUnmapper);
    }
    exports.webUrl = webUrl;

    },{"./_internals/builders/UriPathArbitraryBuilder":31,"./_internals/helpers/MaxLengthFromMinLength":45,"./_internals/mappers/PartsToUrl":72,"./constant":99,"./constantFrom":100,"./option":136,"./tuple":145,"./webAuthority":157,"./webFragments":158,"./webQueryParameters":159}],162:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertIsArbitrary = exports.isArbitrary = exports.Arbitrary = void 0;
    const Stream_1 = require("../../../stream/Stream");
    const symbols_1 = require("../../symbols");
    const Value_1 = require("./Value");
    const safeObjectAssign = Object.assign;
    class Arbitrary {
        filter(refinement) {
            return new FilterArbitrary(this, refinement);
        }
        map(mapper, unmapper) {
            return new MapArbitrary(this, mapper, unmapper);
        }
        chain(chainer) {
            return new ChainArbitrary(this, chainer);
        }
        noShrink() {
            return new NoShrinkArbitrary(this);
        }
        noBias() {
            return new NoBiasArbitrary(this);
        }
    }
    exports.Arbitrary = Arbitrary;
    class ChainArbitrary extends Arbitrary {
        constructor(arb, chainer) {
            super();
            this.arb = arb;
            this.chainer = chainer;
        }
        generate(mrng, biasFactor) {
            const clonedMrng = mrng.clone();
            const src = this.arb.generate(mrng, biasFactor);
            return this.valueChainer(src, mrng, clonedMrng, biasFactor);
        }
        canShrinkWithoutContext(value) {
            return false;
        }
        shrink(value, context) {
            if (this.isSafeContext(context)) {
                return (!context.stoppedForOriginal
                    ? this.arb
                        .shrink(context.originalValue, context.originalContext)
                        .map((v) => this.valueChainer(v, context.clonedMrng.clone(), context.clonedMrng, context.originalBias))
                    : Stream_1.Stream.nil()).join(context.chainedArbitrary.shrink(value, context.chainedContext).map((dst) => {
                    const newContext = safeObjectAssign(safeObjectAssign({}, context), {
                        chainedContext: dst.context,
                        stoppedForOriginal: true,
                    });
                    return new Value_1.Value(dst.value_, newContext);
                }));
            }
            return Stream_1.Stream.nil();
        }
        valueChainer(v, generateMrng, clonedMrng, biasFactor) {
            const chainedArbitrary = this.chainer(v.value_);
            const dst = chainedArbitrary.generate(generateMrng, biasFactor);
            const context = {
                originalBias: biasFactor,
                originalValue: v.value_,
                originalContext: v.context,
                stoppedForOriginal: false,
                chainedArbitrary,
                chainedContext: dst.context,
                clonedMrng,
            };
            return new Value_1.Value(dst.value_, context);
        }
        isSafeContext(context) {
            return (context != null &&
                typeof context === 'object' &&
                'originalBias' in context &&
                'originalValue' in context &&
                'originalContext' in context &&
                'stoppedForOriginal' in context &&
                'chainedArbitrary' in context &&
                'chainedContext' in context &&
                'clonedMrng' in context);
        }
    }
    class MapArbitrary extends Arbitrary {
        constructor(arb, mapper, unmapper) {
            super();
            this.arb = arb;
            this.mapper = mapper;
            this.unmapper = unmapper;
            this.bindValueMapper = (v) => this.valueMapper(v);
        }
        generate(mrng, biasFactor) {
            const g = this.arb.generate(mrng, biasFactor);
            return this.valueMapper(g);
        }
        canShrinkWithoutContext(value) {
            if (this.unmapper !== undefined) {
                try {
                    const unmapped = this.unmapper(value);
                    return this.arb.canShrinkWithoutContext(unmapped);
                }
                catch (_err) {
                    return false;
                }
            }
            return false;
        }
        shrink(value, context) {
            if (this.isSafeContext(context)) {
                return this.arb.shrink(context.originalValue, context.originalContext).map(this.bindValueMapper);
            }
            if (this.unmapper !== undefined) {
                const unmapped = this.unmapper(value);
                return this.arb.shrink(unmapped, undefined).map(this.bindValueMapper);
            }
            return Stream_1.Stream.nil();
        }
        mapperWithCloneIfNeeded(v) {
            const sourceValue = v.value;
            const mappedValue = this.mapper(sourceValue);
            if (v.hasToBeCloned &&
                ((typeof mappedValue === 'object' && mappedValue !== null) || typeof mappedValue === 'function') &&
                Object.isExtensible(mappedValue) &&
                !(0, symbols_1.hasCloneMethod)(mappedValue)) {
                Object.defineProperty(mappedValue, symbols_1.cloneMethod, { get: () => () => this.mapperWithCloneIfNeeded(v)[0] });
            }
            return [mappedValue, sourceValue];
        }
        valueMapper(v) {
            const [mappedValue, sourceValue] = this.mapperWithCloneIfNeeded(v);
            const context = { originalValue: sourceValue, originalContext: v.context };
            return new Value_1.Value(mappedValue, context);
        }
        isSafeContext(context) {
            return (context != null &&
                typeof context === 'object' &&
                'originalValue' in context &&
                'originalContext' in context);
        }
    }
    class FilterArbitrary extends Arbitrary {
        constructor(arb, refinement) {
            super();
            this.arb = arb;
            this.refinement = refinement;
            this.bindRefinementOnValue = (v) => this.refinementOnValue(v);
        }
        generate(mrng, biasFactor) {
            while (true) {
                const g = this.arb.generate(mrng, biasFactor);
                if (this.refinementOnValue(g)) {
                    return g;
                }
            }
        }
        canShrinkWithoutContext(value) {
            return this.arb.canShrinkWithoutContext(value) && this.refinement(value);
        }
        shrink(value, context) {
            return this.arb.shrink(value, context).filter(this.bindRefinementOnValue);
        }
        refinementOnValue(v) {
            return this.refinement(v.value);
        }
    }
    class NoShrinkArbitrary extends Arbitrary {
        constructor(arb) {
            super();
            this.arb = arb;
        }
        generate(mrng, biasFactor) {
            return this.arb.generate(mrng, biasFactor);
        }
        canShrinkWithoutContext(value) {
            return this.arb.canShrinkWithoutContext(value);
        }
        shrink(_value, _context) {
            return Stream_1.Stream.nil();
        }
        noShrink() {
            return this;
        }
    }
    class NoBiasArbitrary extends Arbitrary {
        constructor(arb) {
            super();
            this.arb = arb;
        }
        generate(mrng, _biasFactor) {
            return this.arb.generate(mrng, undefined);
        }
        canShrinkWithoutContext(value) {
            return this.arb.canShrinkWithoutContext(value);
        }
        shrink(value, context) {
            return this.arb.shrink(value, context);
        }
        noBias() {
            return this;
        }
    }
    function isArbitrary(instance) {
        return (typeof instance === 'object' &&
            instance !== null &&
            'generate' in instance &&
            'shrink' in instance &&
            'canShrinkWithoutContext' in instance);
    }
    exports.isArbitrary = isArbitrary;
    function assertIsArbitrary(instance) {
        if (!isArbitrary(instance)) {
            throw new Error('Unexpected value received: not an instance of Arbitrary');
        }
    }
    exports.assertIsArbitrary = assertIsArbitrary;

    },{"../../../stream/Stream":198,"../../symbols":193,"./Value":163}],163:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = void 0;
    const symbols_1 = require("../../symbols");
    const safeObjectDefineProperty = Object.defineProperty;
    class Value {
        constructor(value_, context, customGetValue = undefined) {
            this.value_ = value_;
            this.context = context;
            this.hasToBeCloned = customGetValue !== undefined || (0, symbols_1.hasCloneMethod)(value_);
            this.readOnce = false;
            if (this.hasToBeCloned) {
                safeObjectDefineProperty(this, 'value', { get: customGetValue !== undefined ? customGetValue : this.getValue });
            }
            else {
                this.value = value_;
            }
        }
        getValue() {
            if (this.hasToBeCloned) {
                if (!this.readOnce) {
                    this.readOnce = true;
                    return this.value_;
                }
                return this.value_[symbols_1.cloneMethod]();
            }
            return this.value_;
        }
    }
    exports.Value = Value;

    },{"../../symbols":193}],164:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduledModelRun = exports.asyncModelRun = exports.modelRun = void 0;
    const ScheduledCommand_1 = require("./commands/ScheduledCommand");
    const genericModelRun = (s, cmds, initialValue, runCmd, then) => {
        return s.then((o) => {
            const { model, real } = o;
            let state = initialValue;
            for (const c of cmds) {
                state = then(state, () => {
                    return runCmd(c, model, real);
                });
            }
            return state;
        });
    };
    const internalModelRun = (s, cmds) => {
        const then = (_p, c) => c();
        const setupProducer = {
            then: (fun) => {
                fun(s());
                return undefined;
            },
        };
        const runSync = (cmd, m, r) => {
            if (cmd.check(m))
                cmd.run(m, r);
            return undefined;
        };
        return genericModelRun(setupProducer, cmds, undefined, runSync, then);
    };
    const isAsyncSetup = (s) => {
        return typeof s.then === 'function';
    };
    const internalAsyncModelRun = async (s, cmds, defaultPromise = Promise.resolve()) => {
        const then = (p, c) => p.then(c);
        const setupProducer = {
            then: (fun) => {
                const out = s();
                if (isAsyncSetup(out))
                    return out.then(fun);
                else
                    return fun(out);
            },
        };
        const runAsync = async (cmd, m, r) => {
            if (await cmd.check(m))
                await cmd.run(m, r);
        };
        return await genericModelRun(setupProducer, cmds, defaultPromise, runAsync, then);
    };
    function modelRun(s, cmds) {
        internalModelRun(s, cmds);
    }
    exports.modelRun = modelRun;
    async function asyncModelRun(s, cmds) {
        await internalAsyncModelRun(s, cmds);
    }
    exports.asyncModelRun = asyncModelRun;
    async function scheduledModelRun(scheduler, s, cmds) {
        const scheduledCommands = (0, ScheduledCommand_1.scheduleCommands)(scheduler, cmds);
        const out = internalAsyncModelRun(s, scheduledCommands, scheduler.schedule(Promise.resolve(), 'startModel'));
        await scheduler.waitAll();
        await out;
    }
    exports.scheduledModelRun = scheduledModelRun;

    },{"./commands/ScheduledCommand":168}],165:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplayPath = void 0;
    class ReplayPath {
        static parse(replayPathStr) {
            const [serializedCount, serializedChanges] = replayPathStr.split(':');
            const counts = this.parseCounts(serializedCount);
            const changes = this.parseChanges(serializedChanges);
            return this.parseOccurences(counts, changes);
        }
        static stringify(replayPath) {
            const occurences = this.countOccurences(replayPath);
            const serializedCount = this.stringifyCounts(occurences);
            const serializedChanges = this.stringifyChanges(occurences);
            return `${serializedCount}:${serializedChanges}`;
        }
        static intToB64(n) {
            if (n < 26)
                return String.fromCharCode(n + 65);
            if (n < 52)
                return String.fromCharCode(n + 97 - 26);
            if (n < 62)
                return String.fromCharCode(n + 48 - 52);
            return String.fromCharCode(n === 62 ? 43 : 47);
        }
        static b64ToInt(c) {
            if (c >= 'a')
                return c.charCodeAt(0) - 97 + 26;
            if (c >= 'A')
                return c.charCodeAt(0) - 65;
            if (c >= '0')
                return c.charCodeAt(0) - 48 + 52;
            return c === '+' ? 62 : 63;
        }
        static countOccurences(replayPath) {
            return replayPath.reduce((counts, cur) => {
                if (counts.length === 0 || counts[counts.length - 1].count === 64 || counts[counts.length - 1].value !== cur)
                    counts.push({ value: cur, count: 1 });
                else
                    counts[counts.length - 1].count += 1;
                return counts;
            }, []);
        }
        static parseOccurences(counts, changes) {
            const replayPath = [];
            for (let idx = 0; idx !== counts.length; ++idx) {
                const count = counts[idx];
                const value = changes[idx];
                for (let num = 0; num !== count; ++num)
                    replayPath.push(value);
            }
            return replayPath;
        }
        static stringifyChanges(occurences) {
            let serializedChanges = '';
            for (let idx = 0; idx < occurences.length; idx += 6) {
                const changesInt = occurences
                    .slice(idx, idx + 6)
                    .reduceRight((prev, cur) => prev * 2 + (cur.value ? 1 : 0), 0);
                serializedChanges += this.intToB64(changesInt);
            }
            return serializedChanges;
        }
        static parseChanges(serializedChanges) {
            const changesInt = serializedChanges.split('').map((c) => this.b64ToInt(c));
            const changes = [];
            for (let idx = 0; idx !== changesInt.length; ++idx) {
                let current = changesInt[idx];
                for (let n = 0; n !== 6; ++n, current >>= 1) {
                    changes.push(current % 2 === 1);
                }
            }
            return changes;
        }
        static stringifyCounts(occurences) {
            return occurences.map(({ count }) => this.intToB64(count - 1)).join('');
        }
        static parseCounts(serializedCount) {
            return serializedCount.split('').map((c) => this.b64ToInt(c) + 1);
        }
    }
    exports.ReplayPath = ReplayPath;

    },{}],166:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandWrapper = void 0;
    const stringify_1 = require("../../../utils/stringify");
    const symbols_1 = require("../../symbols");
    class CommandWrapper {
        constructor(cmd) {
            this.cmd = cmd;
            this.hasRan = false;
            if ((0, stringify_1.hasToStringMethod)(cmd)) {
                const method = cmd[stringify_1.toStringMethod];
                this[stringify_1.toStringMethod] = function toStringMethod() {
                    return method.call(cmd);
                };
            }
            if ((0, stringify_1.hasAsyncToStringMethod)(cmd)) {
                const method = cmd[stringify_1.asyncToStringMethod];
                this[stringify_1.asyncToStringMethod] = function asyncToStringMethod() {
                    return method.call(cmd);
                };
            }
        }
        check(m) {
            return this.cmd.check(m);
        }
        run(m, r) {
            this.hasRan = true;
            return this.cmd.run(m, r);
        }
        clone() {
            if ((0, symbols_1.hasCloneMethod)(this.cmd))
                return new CommandWrapper(this.cmd[symbols_1.cloneMethod]());
            return new CommandWrapper(this.cmd);
        }
        toString() {
            return this.cmd.toString();
        }
    }
    exports.CommandWrapper = CommandWrapper;

    },{"../../../utils/stringify":203,"../../symbols":193}],167:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandsIterable = void 0;
    const symbols_1 = require("../../symbols");
    class CommandsIterable {
        constructor(commands, metadataForReplay) {
            this.commands = commands;
            this.metadataForReplay = metadataForReplay;
        }
        [Symbol.iterator]() {
            return this.commands[Symbol.iterator]();
        }
        [symbols_1.cloneMethod]() {
            return new CommandsIterable(this.commands.map((c) => c.clone()), this.metadataForReplay);
        }
        toString() {
            const serializedCommands = this.commands
                .filter((c) => c.hasRan)
                .map((c) => c.toString())
                .join(',');
            const metadata = this.metadataForReplay();
            return metadata.length !== 0 ? `${serializedCommands} /*${metadata}*/` : serializedCommands;
        }
    }
    exports.CommandsIterable = CommandsIterable;

    },{"../../symbols":193}],168:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleCommands = exports.ScheduledCommand = void 0;
    class ScheduledCommand {
        constructor(s, cmd) {
            this.s = s;
            this.cmd = cmd;
        }
        async check(m) {
            let error = null;
            let checkPassed = false;
            const status = await this.s.scheduleSequence([
                {
                    label: `check@${this.cmd.toString()}`,
                    builder: async () => {
                        try {
                            checkPassed = await Promise.resolve(this.cmd.check(m));
                        }
                        catch (err) {
                            error = err;
                            throw err;
                        }
                    },
                },
            ]).task;
            if (status.faulty) {
                throw error;
            }
            return checkPassed;
        }
        async run(m, r) {
            let error = null;
            const status = await this.s.scheduleSequence([
                {
                    label: `run@${this.cmd.toString()}`,
                    builder: async () => {
                        try {
                            await this.cmd.run(m, r);
                        }
                        catch (err) {
                            error = err;
                            throw err;
                        }
                    },
                },
            ]).task;
            if (status.faulty) {
                throw error;
            }
        }
    }
    exports.ScheduledCommand = ScheduledCommand;
    const scheduleCommands = function* (s, cmds) {
        for (const cmd of cmds) {
            yield new ScheduledCommand(s, cmd);
        }
    };
    exports.scheduleCommands = scheduleCommands;

    },{}],169:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pre = void 0;
    const PreconditionFailure_1 = require("./PreconditionFailure");
    function pre(expectTruthy) {
        if (!expectTruthy) {
            throw new PreconditionFailure_1.PreconditionFailure();
        }
    }
    exports.pre = pre;

    },{"./PreconditionFailure":170}],170:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PreconditionFailure = void 0;
    class PreconditionFailure extends Error {
        constructor(interruptExecution = false) {
            super();
            this.interruptExecution = interruptExecution;
            this.footprint = PreconditionFailure.SharedFootPrint;
        }
        static isFailure(err) {
            return err != null && err.footprint === PreconditionFailure.SharedFootPrint;
        }
    }
    exports.PreconditionFailure = PreconditionFailure;
    PreconditionFailure.SharedFootPrint = Symbol('fast-check/PreconditionFailure');

    },{}],171:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncProperty = void 0;
    const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
    const IRawProperty_1 = require("./IRawProperty");
    const GlobalParameters_1 = require("../runner/configuration/GlobalParameters");
    const Stream_1 = require("../../stream/Stream");
    const NoUndefinedAsContext_1 = require("../../arbitrary/_internals/helpers/NoUndefinedAsContext");
    const globals_1 = require("../../utils/globals");
    class AsyncProperty {
        constructor(arb, predicate) {
            this.arb = arb;
            this.predicate = predicate;
            const { asyncBeforeEach, asyncAfterEach, beforeEach, afterEach } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
            if (asyncBeforeEach !== undefined && beforeEach !== undefined) {
                throw Error('Global "asyncBeforeEach" and "beforeEach" parameters can\'t be set at the same time when running async properties');
            }
            if (asyncAfterEach !== undefined && afterEach !== undefined) {
                throw Error('Global "asyncAfterEach" and "afterEach" parameters can\'t be set at the same time when running async properties');
            }
            this.beforeEachHook = asyncBeforeEach || beforeEach || AsyncProperty.dummyHook;
            this.afterEachHook = asyncAfterEach || afterEach || AsyncProperty.dummyHook;
        }
        isAsync() {
            return true;
        }
        generate(mrng, runId) {
            const value = this.arb.generate(mrng, runId != null ? (0, IRawProperty_1.runIdToFrequency)(runId) : undefined);
            return (0, NoUndefinedAsContext_1.noUndefinedAsContext)(value);
        }
        shrink(value) {
            if (value.context === undefined && !this.arb.canShrinkWithoutContext(value.value_)) {
                return Stream_1.Stream.nil();
            }
            const safeContext = value.context !== NoUndefinedAsContext_1.UndefinedContextPlaceholder ? value.context : undefined;
            return this.arb.shrink(value.value_, safeContext).map(NoUndefinedAsContext_1.noUndefinedAsContext);
        }
        async run(v) {
            await this.beforeEachHook();
            try {
                const output = await this.predicate(v);
                return output == null || output === true
                    ? null
                    : { error: undefined, errorMessage: 'Property failed by returning false' };
            }
            catch (err) {
                if (PreconditionFailure_1.PreconditionFailure.isFailure(err))
                    return err;
                if (err instanceof Error && err.stack) {
                    return { error: err, errorMessage: `${err}\n\nStack trace: ${err.stack}` };
                }
                return { error: err, errorMessage: (0, globals_1.String)(err) };
            }
            finally {
                await this.afterEachHook();
            }
        }
        beforeEach(hookFunction) {
            const previousBeforeEachHook = this.beforeEachHook;
            this.beforeEachHook = () => hookFunction(previousBeforeEachHook);
            return this;
        }
        afterEach(hookFunction) {
            const previousAfterEachHook = this.afterEachHook;
            this.afterEachHook = () => hookFunction(previousAfterEachHook);
            return this;
        }
    }
    exports.AsyncProperty = AsyncProperty;
    AsyncProperty.dummyHook = () => { };

    },{"../../arbitrary/_internals/helpers/NoUndefinedAsContext":46,"../../stream/Stream":198,"../../utils/globals":201,"../precondition/PreconditionFailure":170,"../runner/configuration/GlobalParameters":186,"./IRawProperty":173}],172:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asyncProperty = void 0;
    const Arbitrary_1 = require("../arbitrary/definition/Arbitrary");
    const tuple_1 = require("../../arbitrary/tuple");
    const AsyncProperty_generic_1 = require("./AsyncProperty.generic");
    const AlwaysShrinkableArbitrary_1 = require("../../arbitrary/_internals/AlwaysShrinkableArbitrary");
    const globals_1 = require("../../utils/globals");
    function asyncProperty(...args) {
        if (args.length < 2) {
            throw new Error('asyncProperty expects at least two parameters');
        }
        const arbs = (0, globals_1.safeSlice)(args, 0, args.length - 1);
        const p = args[args.length - 1];
        (0, globals_1.safeForEach)(arbs, Arbitrary_1.assertIsArbitrary);
        const mappedArbs = (0, globals_1.safeMap)(arbs, (arb) => new AlwaysShrinkableArbitrary_1.AlwaysShrinkableArbitrary(arb));
        return new AsyncProperty_generic_1.AsyncProperty((0, tuple_1.tuple)(...mappedArbs), (t) => p(...t));
    }
    exports.asyncProperty = asyncProperty;

    },{"../../arbitrary/_internals/AlwaysShrinkableArbitrary":5,"../../arbitrary/tuple":145,"../../utils/globals":201,"../arbitrary/definition/Arbitrary":162,"./AsyncProperty.generic":171}],173:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.runIdToFrequency = void 0;
    const safeMathFloor = Math.floor;
    const safeMathLog = Math.log;
    const runIdToFrequency = (runId) => 2 + safeMathFloor(safeMathLog(runId + 1) / safeMathLog(10));
    exports.runIdToFrequency = runIdToFrequency;

    },{}],174:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IgnoreEqualValuesProperty = void 0;
    const stringify_1 = require("../../utils/stringify");
    const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
    function fromSyncCached(cachedValue) {
        return cachedValue === null ? new PreconditionFailure_1.PreconditionFailure() : cachedValue;
    }
    function fromCached(...data) {
        if (data[1])
            return data[0].then(fromSyncCached);
        return fromSyncCached(data[0]);
    }
    function fromCachedUnsafe(cachedValue, isAsync) {
        return fromCached(cachedValue, isAsync);
    }
    class IgnoreEqualValuesProperty {
        constructor(property, skipRuns) {
            this.property = property;
            this.skipRuns = skipRuns;
            this.coveredCases = new Map();
        }
        isAsync() {
            return this.property.isAsync();
        }
        generate(mrng, runId) {
            return this.property.generate(mrng, runId);
        }
        shrink(value) {
            return this.property.shrink(value);
        }
        run(v) {
            const stringifiedValue = (0, stringify_1.stringify)(v);
            if (this.coveredCases.has(stringifiedValue)) {
                const lastOutput = this.coveredCases.get(stringifiedValue);
                if (!this.skipRuns) {
                    return lastOutput;
                }
                return fromCachedUnsafe(lastOutput, this.property.isAsync());
            }
            const out = this.property.run(v);
            this.coveredCases.set(stringifiedValue, out);
            return out;
        }
    }
    exports.IgnoreEqualValuesProperty = IgnoreEqualValuesProperty;

    },{"../../utils/stringify":203,"../precondition/PreconditionFailure":170}],175:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Property = void 0;
    const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
    const IRawProperty_1 = require("./IRawProperty");
    const GlobalParameters_1 = require("../runner/configuration/GlobalParameters");
    const Stream_1 = require("../../stream/Stream");
    const NoUndefinedAsContext_1 = require("../../arbitrary/_internals/helpers/NoUndefinedAsContext");
    const globals_1 = require("../../utils/globals");
    class Property {
        constructor(arb, predicate) {
            this.arb = arb;
            this.predicate = predicate;
            const { beforeEach = Property.dummyHook, afterEach = Property.dummyHook, asyncBeforeEach, asyncAfterEach, } = (0, GlobalParameters_1.readConfigureGlobal)() || {};
            if (asyncBeforeEach !== undefined) {
                throw Error('"asyncBeforeEach" can\'t be set when running synchronous properties');
            }
            if (asyncAfterEach !== undefined) {
                throw Error('"asyncAfterEach" can\'t be set when running synchronous properties');
            }
            this.beforeEachHook = beforeEach;
            this.afterEachHook = afterEach;
        }
        isAsync() {
            return false;
        }
        generate(mrng, runId) {
            const value = this.arb.generate(mrng, runId != null ? (0, IRawProperty_1.runIdToFrequency)(runId) : undefined);
            return (0, NoUndefinedAsContext_1.noUndefinedAsContext)(value);
        }
        shrink(value) {
            if (value.context === undefined && !this.arb.canShrinkWithoutContext(value.value_)) {
                return Stream_1.Stream.nil();
            }
            const safeContext = value.context !== NoUndefinedAsContext_1.UndefinedContextPlaceholder ? value.context : undefined;
            return this.arb.shrink(value.value_, safeContext).map(NoUndefinedAsContext_1.noUndefinedAsContext);
        }
        run(v) {
            this.beforeEachHook();
            try {
                const output = this.predicate(v);
                return output == null || output === true
                    ? null
                    : { error: undefined, errorMessage: 'Property failed by returning false' };
            }
            catch (err) {
                if (PreconditionFailure_1.PreconditionFailure.isFailure(err))
                    return err;
                if (err instanceof Error && err.stack) {
                    return { error: err, errorMessage: `${err}\n\nStack trace: ${err.stack}` };
                }
                return { error: err, errorMessage: (0, globals_1.String)(err) };
            }
            finally {
                this.afterEachHook();
            }
        }
        beforeEach(hookFunction) {
            const previousBeforeEachHook = this.beforeEachHook;
            this.beforeEachHook = () => hookFunction(previousBeforeEachHook);
            return this;
        }
        afterEach(hookFunction) {
            const previousAfterEachHook = this.afterEachHook;
            this.afterEachHook = () => hookFunction(previousAfterEachHook);
            return this;
        }
    }
    exports.Property = Property;
    Property.dummyHook = () => { };

    },{"../../arbitrary/_internals/helpers/NoUndefinedAsContext":46,"../../stream/Stream":198,"../../utils/globals":201,"../precondition/PreconditionFailure":170,"../runner/configuration/GlobalParameters":186,"./IRawProperty":173}],176:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.property = void 0;
    const Arbitrary_1 = require("../arbitrary/definition/Arbitrary");
    const tuple_1 = require("../../arbitrary/tuple");
    const Property_generic_1 = require("./Property.generic");
    const AlwaysShrinkableArbitrary_1 = require("../../arbitrary/_internals/AlwaysShrinkableArbitrary");
    const globals_1 = require("../../utils/globals");
    function property(...args) {
        if (args.length < 2) {
            throw new Error('property expects at least two parameters');
        }
        const arbs = (0, globals_1.safeSlice)(args, 0, args.length - 1);
        const p = args[args.length - 1];
        (0, globals_1.safeForEach)(arbs, Arbitrary_1.assertIsArbitrary);
        const mappedArbs = (0, globals_1.safeMap)(arbs, (arb) => new AlwaysShrinkableArbitrary_1.AlwaysShrinkableArbitrary(arb));
        return new Property_generic_1.Property((0, tuple_1.tuple)(...mappedArbs), (t) => p(...t));
    }
    exports.property = property;

    },{"../../arbitrary/_internals/AlwaysShrinkableArbitrary":5,"../../arbitrary/tuple":145,"../../utils/globals":201,"../arbitrary/definition/Arbitrary":162,"./Property.generic":175}],177:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SkipAfterProperty = void 0;
    const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
    class SkipAfterProperty {
        constructor(property, getTime, timeLimit, interruptExecution) {
            this.property = property;
            this.getTime = getTime;
            this.interruptExecution = interruptExecution;
            this.skipAfterTime = this.getTime() + timeLimit;
        }
        isAsync() {
            return this.property.isAsync();
        }
        generate(mrng, runId) {
            return this.property.generate(mrng, runId);
        }
        shrink(value) {
            return this.property.shrink(value);
        }
        run(v) {
            if (this.getTime() >= this.skipAfterTime) {
                const preconditionFailure = new PreconditionFailure_1.PreconditionFailure(this.interruptExecution);
                if (this.isAsync()) {
                    return Promise.resolve(preconditionFailure);
                }
                else {
                    return preconditionFailure;
                }
            }
            return this.property.run(v);
        }
    }
    exports.SkipAfterProperty = SkipAfterProperty;

    },{"../precondition/PreconditionFailure":170}],178:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeoutProperty = void 0;
    const timeoutAfter = (timeMs) => {
        let timeoutHandle = null;
        const promise = new Promise((resolve) => {
            timeoutHandle = setTimeout(() => {
                resolve({ error: undefined, errorMessage: `Property timeout: exceeded limit of ${timeMs} milliseconds` });
            }, timeMs);
        });
        return {
            clear: () => clearTimeout(timeoutHandle),
            promise,
        };
    };
    class TimeoutProperty {
        constructor(property, timeMs) {
            this.property = property;
            this.timeMs = timeMs;
        }
        isAsync() {
            return true;
        }
        generate(mrng, runId) {
            return this.property.generate(mrng, runId);
        }
        shrink(value) {
            return this.property.shrink(value);
        }
        async run(v) {
            const t = timeoutAfter(this.timeMs);
            const propRun = Promise.race([this.property.run(v), t.promise]);
            propRun.then(t.clear, t.clear);
            return propRun;
        }
    }
    exports.TimeoutProperty = TimeoutProperty;

    },{}],179:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnbiasedProperty = void 0;
    class UnbiasedProperty {
        constructor(property) {
            this.property = property;
        }
        isAsync() {
            return this.property.isAsync();
        }
        generate(mrng, _runId) {
            return this.property.generate(mrng, undefined);
        }
        shrink(value) {
            return this.property.shrink(value);
        }
        run(v) {
            return this.property.run(v);
        }
    }
    exports.UnbiasedProperty = UnbiasedProperty;

    },{}],180:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorateProperty = void 0;
    const SkipAfterProperty_1 = require("../property/SkipAfterProperty");
    const TimeoutProperty_1 = require("../property/TimeoutProperty");
    const UnbiasedProperty_1 = require("../property/UnbiasedProperty");
    const IgnoreEqualValuesProperty_1 = require("../property/IgnoreEqualValuesProperty");
    const safeDateNow = Date.now;
    function decorateProperty(rawProperty, qParams) {
        let prop = rawProperty;
        if (rawProperty.isAsync() && qParams.timeout != null) {
            prop = new TimeoutProperty_1.TimeoutProperty(prop, qParams.timeout);
        }
        if (qParams.unbiased) {
            prop = new UnbiasedProperty_1.UnbiasedProperty(prop);
        }
        if (qParams.skipAllAfterTimeLimit != null) {
            prop = new SkipAfterProperty_1.SkipAfterProperty(prop, safeDateNow, qParams.skipAllAfterTimeLimit, false);
        }
        if (qParams.interruptAfterTimeLimit != null) {
            prop = new SkipAfterProperty_1.SkipAfterProperty(prop, safeDateNow, qParams.interruptAfterTimeLimit, true);
        }
        if (qParams.skipEqualValues) {
            prop = new IgnoreEqualValuesProperty_1.IgnoreEqualValuesProperty(prop, true);
        }
        if (qParams.ignoreEqualValues) {
            prop = new IgnoreEqualValuesProperty_1.IgnoreEqualValuesProperty(prop, false);
        }
        return prop;
    }
    exports.decorateProperty = decorateProperty;

    },{"../property/IgnoreEqualValuesProperty":174,"../property/SkipAfterProperty":177,"../property/TimeoutProperty":178,"../property/UnbiasedProperty":179}],181:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assert = exports.check = void 0;
    const Stream_1 = require("../../stream/Stream");
    const GlobalParameters_1 = require("./configuration/GlobalParameters");
    const QualifiedParameters_1 = require("./configuration/QualifiedParameters");
    const DecorateProperty_1 = require("./DecorateProperty");
    const RunnerIterator_1 = require("./RunnerIterator");
    const SourceValuesIterator_1 = require("./SourceValuesIterator");
    const Tosser_1 = require("./Tosser");
    const PathWalker_1 = require("./utils/PathWalker");
    const RunDetailsFormatter_1 = require("./utils/RunDetailsFormatter");
    const safeObjectAssign = Object.assign;
    function runIt(property, shrink, sourceValues, verbose, interruptedAsFailure) {
        const runner = new RunnerIterator_1.RunnerIterator(sourceValues, shrink, verbose, interruptedAsFailure);
        for (const v of runner) {
            const out = property.run(v);
            runner.handleResult(out);
        }
        return runner.runExecution;
    }
    async function asyncRunIt(property, shrink, sourceValues, verbose, interruptedAsFailure) {
        const runner = new RunnerIterator_1.RunnerIterator(sourceValues, shrink, verbose, interruptedAsFailure);
        for (const v of runner) {
            const out = await property.run(v);
            runner.handleResult(out);
        }
        return runner.runExecution;
    }
    function runnerPathWalker(valueProducers, shrink, path) {
        const pathPoints = path.split(':');
        const pathStream = (0, Stream_1.stream)(valueProducers)
            .drop(pathPoints.length > 0 ? +pathPoints[0] : 0)
            .map((producer) => producer());
        const adaptedPath = ['0', ...pathPoints.slice(1)].join(':');
        return (0, Stream_1.stream)((0, PathWalker_1.pathWalk)(adaptedPath, pathStream, shrink)).map((v) => () => v);
    }
    function buildInitialValues(valueProducers, shrink, qParams) {
        if (qParams.path.length === 0) {
            return (0, Stream_1.stream)(valueProducers);
        }
        return runnerPathWalker(valueProducers, shrink, qParams.path);
    }
    function check(rawProperty, params) {
        if (rawProperty == null || rawProperty.generate == null)
            throw new Error('Invalid property encountered, please use a valid property');
        if (rawProperty.run == null)
            throw new Error('Invalid property encountered, please use a valid property not an arbitrary');
        const qParams = QualifiedParameters_1.QualifiedParameters.read(safeObjectAssign(safeObjectAssign({}, (0, GlobalParameters_1.readConfigureGlobal)()), params));
        if (qParams.reporter !== null && qParams.asyncReporter !== null)
            throw new Error('Invalid parameters encountered, reporter and asyncReporter cannot be specified together');
        if (qParams.asyncReporter !== null && !rawProperty.isAsync())
            throw new Error('Invalid parameters encountered, only asyncProperty can be used when asyncReporter specified');
        const property = (0, DecorateProperty_1.decorateProperty)(rawProperty, qParams);
        const generator = (0, Tosser_1.toss)(property, qParams.seed, qParams.randomType, qParams.examples);
        const maxInitialIterations = qParams.path.length === 0 || qParams.path.indexOf(':') === -1 ? qParams.numRuns : -1;
        const maxSkips = qParams.numRuns * qParams.maxSkipsPerRun;
        const shrink = (...args) => property.shrink(...args);
        const initialValues = buildInitialValues(generator, shrink, qParams);
        const sourceValues = new SourceValuesIterator_1.SourceValuesIterator(initialValues, maxInitialIterations, maxSkips);
        const finalShrink = !qParams.endOnFailure ? shrink : Stream_1.Stream.nil;
        return property.isAsync()
            ? asyncRunIt(property, finalShrink, sourceValues, qParams.verbose, qParams.markInterruptAsFailure).then((e) => e.toRunDetails(qParams.seed, qParams.path, maxSkips, qParams))
            : runIt(property, finalShrink, sourceValues, qParams.verbose, qParams.markInterruptAsFailure).toRunDetails(qParams.seed, qParams.path, maxSkips, qParams);
    }
    exports.check = check;
    function assert(property, params) {
        const out = check(property, params);
        if (property.isAsync())
            return out.then(RunDetailsFormatter_1.asyncReportRunDetails);
        else
            (0, RunDetailsFormatter_1.reportRunDetails)(out);
    }
    exports.assert = assert;

    },{"../../stream/Stream":198,"./DecorateProperty":180,"./RunnerIterator":182,"./SourceValuesIterator":184,"./Tosser":185,"./configuration/GlobalParameters":186,"./configuration/QualifiedParameters":187,"./utils/PathWalker":191,"./utils/RunDetailsFormatter":192}],182:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RunnerIterator = void 0;
    const PreconditionFailure_1 = require("../precondition/PreconditionFailure");
    const RunExecution_1 = require("./reporter/RunExecution");
    class RunnerIterator {
        constructor(sourceValues, shrink, verbose, interruptedAsFailure) {
            this.sourceValues = sourceValues;
            this.shrink = shrink;
            this.runExecution = new RunExecution_1.RunExecution(verbose, interruptedAsFailure);
            this.currentIdx = -1;
            this.nextValues = sourceValues;
        }
        [Symbol.iterator]() {
            return this;
        }
        next() {
            const nextValue = this.nextValues.next();
            if (nextValue.done || this.runExecution.interrupted) {
                return { done: true, value: undefined };
            }
            this.currentValue = nextValue.value;
            ++this.currentIdx;
            return { done: false, value: nextValue.value.value_ };
        }
        handleResult(result) {
            if (result != null && typeof result === 'object' && !PreconditionFailure_1.PreconditionFailure.isFailure(result)) {
                this.runExecution.fail(this.currentValue.value_, this.currentIdx, result);
                this.currentIdx = -1;
                this.nextValues = this.shrink(this.currentValue);
            }
            else if (result != null) {
                if (!result.interruptExecution) {
                    this.runExecution.skip(this.currentValue.value_);
                    this.sourceValues.skippedOne();
                }
                else {
                    this.runExecution.interrupt();
                }
            }
            else {
                this.runExecution.success(this.currentValue.value_);
            }
        }
    }
    exports.RunnerIterator = RunnerIterator;

    },{"../precondition/PreconditionFailure":170,"./reporter/RunExecution":190}],183:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statistics = exports.sample = void 0;
    const Stream_1 = require("../../stream/Stream");
    const Property_generic_1 = require("../property/Property.generic");
    const UnbiasedProperty_1 = require("../property/UnbiasedProperty");
    const GlobalParameters_1 = require("./configuration/GlobalParameters");
    const QualifiedParameters_1 = require("./configuration/QualifiedParameters");
    const Tosser_1 = require("./Tosser");
    const PathWalker_1 = require("./utils/PathWalker");
    function toProperty(generator, qParams) {
        const prop = !Object.prototype.hasOwnProperty.call(generator, 'isAsync')
            ? new Property_generic_1.Property(generator, () => true)
            : generator;
        return qParams.unbiased === true ? new UnbiasedProperty_1.UnbiasedProperty(prop) : prop;
    }
    function streamSample(generator, params) {
        const extendedParams = typeof params === 'number'
            ? Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), { numRuns: params }) : Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), params);
        const qParams = QualifiedParameters_1.QualifiedParameters.read(extendedParams);
        const nextProperty = toProperty(generator, qParams);
        const shrink = nextProperty.shrink.bind(nextProperty);
        const tossedValues = (0, Stream_1.stream)((0, Tosser_1.toss)(nextProperty, qParams.seed, qParams.randomType, qParams.examples));
        if (qParams.path.length === 0) {
            return tossedValues.take(qParams.numRuns).map((s) => s().value_);
        }
        return (0, Stream_1.stream)((0, PathWalker_1.pathWalk)(qParams.path, tossedValues.map((s) => s()), shrink))
            .take(qParams.numRuns)
            .map((s) => s.value_);
    }
    function sample(generator, params) {
        return [...streamSample(generator, params)];
    }
    exports.sample = sample;
    function round2(n) {
        return (Math.round(n * 100) / 100).toFixed(2);
    }
    function statistics(generator, classify, params) {
        const extendedParams = typeof params === 'number'
            ? Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), { numRuns: params }) : Object.assign(Object.assign({}, (0, GlobalParameters_1.readConfigureGlobal)()), params);
        const qParams = QualifiedParameters_1.QualifiedParameters.read(extendedParams);
        const recorded = {};
        for (const g of streamSample(generator, params)) {
            const out = classify(g);
            const categories = Array.isArray(out) ? out : [out];
            for (const c of categories) {
                recorded[c] = (recorded[c] || 0) + 1;
            }
        }
        const data = Object.entries(recorded)
            .sort((a, b) => b[1] - a[1])
            .map((i) => [i[0], `${round2((i[1] * 100.0) / qParams.numRuns)}%`]);
        const longestName = data.map((i) => i[0].length).reduce((p, c) => Math.max(p, c), 0);
        const longestPercent = data.map((i) => i[1].length).reduce((p, c) => Math.max(p, c), 0);
        for (const item of data) {
            qParams.logger(`${item[0].padEnd(longestName, '.')}..${item[1].padStart(longestPercent, '.')}`);
        }
    }
    exports.statistics = statistics;

    },{"../../stream/Stream":198,"../property/Property.generic":175,"../property/UnbiasedProperty":179,"./Tosser":185,"./configuration/GlobalParameters":186,"./configuration/QualifiedParameters":187,"./utils/PathWalker":191}],184:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SourceValuesIterator = void 0;
    class SourceValuesIterator {
        constructor(initialValues, maxInitialIterations, remainingSkips) {
            this.initialValues = initialValues;
            this.maxInitialIterations = maxInitialIterations;
            this.remainingSkips = remainingSkips;
        }
        [Symbol.iterator]() {
            return this;
        }
        next() {
            if (--this.maxInitialIterations !== -1 && this.remainingSkips >= 0) {
                const n = this.initialValues.next();
                if (!n.done)
                    return { value: n.value(), done: false };
            }
            return { value: undefined, done: true };
        }
        skippedOne() {
            --this.remainingSkips;
            ++this.maxInitialIterations;
        }
    }
    exports.SourceValuesIterator = SourceValuesIterator;

    },{}],185:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toss = void 0;
    const pure_rand_1 = require("pure-rand");
    const Random_1 = require("../../random/generator/Random");
    const Value_1 = require("../arbitrary/definition/Value");
    const globals_1 = require("../../utils/globals");
    function lazyGenerate(generator, rng, idx) {
        return () => generator.generate(new Random_1.Random(rng), idx);
    }
    function* toss(generator, seed, random, examples) {
        yield* (0, globals_1.safeMap)(examples, (e) => () => new Value_1.Value(e, undefined));
        let idx = 0;
        let rng = random(seed);
        for (;;) {
            rng = rng.jump ? rng.jump() : (0, pure_rand_1.skipN)(rng, 42);
            yield lazyGenerate(generator, rng, idx++);
        }
    }
    exports.toss = toss;

    },{"../../random/generator/Random":196,"../../utils/globals":201,"../arbitrary/definition/Value":163,"pure-rand":220}],186:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetConfigureGlobal = exports.readConfigureGlobal = exports.configureGlobal = void 0;
    let globalParameters = {};
    function configureGlobal(parameters) {
        globalParameters = parameters;
    }
    exports.configureGlobal = configureGlobal;
    function readConfigureGlobal() {
        return globalParameters;
    }
    exports.readConfigureGlobal = readConfigureGlobal;
    function resetConfigureGlobal() {
        globalParameters = {};
    }
    exports.resetConfigureGlobal = resetConfigureGlobal;

    },{}],187:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QualifiedParameters = void 0;
    const pure_rand_1 = require("pure-rand");
    const VerbosityLevel_1 = require("./VerbosityLevel");
    const safeDateNow = Date.now;
    const safeMathRandom = Math.random;
    class QualifiedParameters {
        constructor(op) {
            const p = op || {};
            this.seed = QualifiedParameters.readSeed(p);
            this.randomType = QualifiedParameters.readRandomType(p);
            this.numRuns = QualifiedParameters.readNumRuns(p);
            this.verbose = QualifiedParameters.readVerbose(p);
            this.maxSkipsPerRun = QualifiedParameters.readOrDefault(p, 'maxSkipsPerRun', 100);
            this.timeout = QualifiedParameters.readOrDefault(p, 'timeout', null);
            this.skipAllAfterTimeLimit = QualifiedParameters.readOrDefault(p, 'skipAllAfterTimeLimit', null);
            this.interruptAfterTimeLimit = QualifiedParameters.readOrDefault(p, 'interruptAfterTimeLimit', null);
            this.markInterruptAsFailure = QualifiedParameters.readBoolean(p, 'markInterruptAsFailure');
            this.skipEqualValues = QualifiedParameters.readBoolean(p, 'skipEqualValues');
            this.ignoreEqualValues = QualifiedParameters.readBoolean(p, 'ignoreEqualValues');
            this.logger = QualifiedParameters.readOrDefault(p, 'logger', (v) => {
                console.log(v);
            });
            this.path = QualifiedParameters.readOrDefault(p, 'path', '');
            this.unbiased = QualifiedParameters.readBoolean(p, 'unbiased');
            this.examples = QualifiedParameters.readOrDefault(p, 'examples', []);
            this.endOnFailure = QualifiedParameters.readBoolean(p, 'endOnFailure');
            this.reporter = QualifiedParameters.readOrDefault(p, 'reporter', null);
            this.asyncReporter = QualifiedParameters.readOrDefault(p, 'asyncReporter', null);
        }
        toParameters() {
            const orUndefined = (value) => (value !== null ? value : undefined);
            return {
                seed: this.seed,
                randomType: this.randomType,
                numRuns: this.numRuns,
                maxSkipsPerRun: this.maxSkipsPerRun,
                timeout: orUndefined(this.timeout),
                skipAllAfterTimeLimit: orUndefined(this.skipAllAfterTimeLimit),
                interruptAfterTimeLimit: orUndefined(this.interruptAfterTimeLimit),
                markInterruptAsFailure: this.markInterruptAsFailure,
                skipEqualValues: this.skipEqualValues,
                ignoreEqualValues: this.ignoreEqualValues,
                path: this.path,
                logger: this.logger,
                unbiased: this.unbiased,
                verbose: this.verbose,
                examples: this.examples,
                endOnFailure: this.endOnFailure,
                reporter: orUndefined(this.reporter),
                asyncReporter: orUndefined(this.asyncReporter),
            };
        }
        static read(op) {
            return new QualifiedParameters(op);
        }
    }
    exports.QualifiedParameters = QualifiedParameters;
    QualifiedParameters.readSeed = (p) => {
        if (p.seed == null)
            return safeDateNow() ^ (safeMathRandom() * 0x100000000);
        const seed32 = p.seed | 0;
        if (p.seed === seed32)
            return seed32;
        const gap = p.seed - seed32;
        return seed32 ^ (gap * 0x100000000);
    };
    QualifiedParameters.readRandomType = (p) => {
        if (p.randomType == null)
            return pure_rand_1.default.xorshift128plus;
        if (typeof p.randomType === 'string') {
            switch (p.randomType) {
                case 'mersenne':
                    return pure_rand_1.default.mersenne;
                case 'congruential':
                    return pure_rand_1.default.congruential;
                case 'congruential32':
                    return pure_rand_1.default.congruential32;
                case 'xorshift128plus':
                    return pure_rand_1.default.xorshift128plus;
                case 'xoroshiro128plus':
                    return pure_rand_1.default.xoroshiro128plus;
                default:
                    throw new Error(`Invalid random specified: '${p.randomType}'`);
            }
        }
        return p.randomType;
    };
    QualifiedParameters.readNumRuns = (p) => {
        const defaultValue = 100;
        if (p.numRuns != null)
            return p.numRuns;
        if (p.num_runs != null)
            return p.num_runs;
        return defaultValue;
    };
    QualifiedParameters.readVerbose = (p) => {
        if (p.verbose == null)
            return VerbosityLevel_1.VerbosityLevel.None;
        if (typeof p.verbose === 'boolean') {
            return p.verbose === true ? VerbosityLevel_1.VerbosityLevel.Verbose : VerbosityLevel_1.VerbosityLevel.None;
        }
        if (p.verbose <= VerbosityLevel_1.VerbosityLevel.None) {
            return VerbosityLevel_1.VerbosityLevel.None;
        }
        if (p.verbose >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
            return VerbosityLevel_1.VerbosityLevel.VeryVerbose;
        }
        return p.verbose | 0;
    };
    QualifiedParameters.readBoolean = (p, key) => p[key] === true;
    QualifiedParameters.readOrDefault = (p, key, defaultValue) => {
        const value = p[key];
        return value != null ? value : defaultValue;
    };

    },{"./VerbosityLevel":188,"pure-rand":220}],188:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VerbosityLevel = void 0;
    var VerbosityLevel;
    (function (VerbosityLevel) {
        VerbosityLevel[VerbosityLevel["None"] = 0] = "None";
        VerbosityLevel[VerbosityLevel["Verbose"] = 1] = "Verbose";
        VerbosityLevel[VerbosityLevel["VeryVerbose"] = 2] = "VeryVerbose";
    })(VerbosityLevel = exports.VerbosityLevel || (exports.VerbosityLevel = {}));

    },{}],189:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExecutionStatus = void 0;
    var ExecutionStatus;
    (function (ExecutionStatus) {
        ExecutionStatus[ExecutionStatus["Success"] = 0] = "Success";
        ExecutionStatus[ExecutionStatus["Skipped"] = -1] = "Skipped";
        ExecutionStatus[ExecutionStatus["Failure"] = 1] = "Failure";
    })(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));

    },{}],190:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RunExecution = void 0;
    const VerbosityLevel_1 = require("../configuration/VerbosityLevel");
    const ExecutionStatus_1 = require("./ExecutionStatus");
    const globals_1 = require("../../../utils/globals");
    class RunExecution {
        constructor(verbosity, interruptedAsFailure) {
            this.verbosity = verbosity;
            this.interruptedAsFailure = interruptedAsFailure;
            this.isSuccess = () => this.pathToFailure == null;
            this.firstFailure = () => (this.pathToFailure ? +(0, globals_1.safeSplit)(this.pathToFailure, ':')[0] : -1);
            this.numShrinks = () => (this.pathToFailure ? (0, globals_1.safeSplit)(this.pathToFailure, ':').length - 1 : 0);
            this.rootExecutionTrees = [];
            this.currentLevelExecutionTrees = this.rootExecutionTrees;
            this.failure = null;
            this.numSkips = 0;
            this.numSuccesses = 0;
            this.interrupted = false;
        }
        appendExecutionTree(status, value) {
            const currentTree = { status, value, children: [] };
            this.currentLevelExecutionTrees.push(currentTree);
            return currentTree;
        }
        fail(value, id, failure) {
            if (this.verbosity >= VerbosityLevel_1.VerbosityLevel.Verbose) {
                const currentTree = this.appendExecutionTree(ExecutionStatus_1.ExecutionStatus.Failure, value);
                this.currentLevelExecutionTrees = currentTree.children;
            }
            if (this.pathToFailure == null)
                this.pathToFailure = `${id}`;
            else
                this.pathToFailure += `:${id}`;
            this.value = value;
            this.failure = failure;
        }
        skip(value) {
            if (this.verbosity >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
                this.appendExecutionTree(ExecutionStatus_1.ExecutionStatus.Skipped, value);
            }
            if (this.pathToFailure == null) {
                ++this.numSkips;
            }
        }
        success(value) {
            if (this.verbosity >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
                this.appendExecutionTree(ExecutionStatus_1.ExecutionStatus.Success, value);
            }
            if (this.pathToFailure == null) {
                ++this.numSuccesses;
            }
        }
        interrupt() {
            this.interrupted = true;
        }
        extractFailures() {
            if (this.isSuccess()) {
                return [];
            }
            const failures = [];
            let cursor = this.rootExecutionTrees;
            while (cursor.length > 0 && cursor[cursor.length - 1].status === ExecutionStatus_1.ExecutionStatus.Failure) {
                const failureTree = cursor[cursor.length - 1];
                failures.push(failureTree.value);
                cursor = failureTree.children;
            }
            return failures;
        }
        toRunDetails(seed, basePath, maxSkips, qParams) {
            if (!this.isSuccess()) {
                return {
                    failed: true,
                    interrupted: this.interrupted,
                    numRuns: this.firstFailure() + 1 - this.numSkips,
                    numSkips: this.numSkips,
                    numShrinks: this.numShrinks(),
                    seed,
                    counterexample: this.value,
                    counterexamplePath: RunExecution.mergePaths(basePath, this.pathToFailure),
                    error: this.failure.errorMessage,
                    errorInstance: this.failure.error,
                    failures: this.extractFailures(),
                    executionSummary: this.rootExecutionTrees,
                    verbose: this.verbosity,
                    runConfiguration: qParams.toParameters(),
                };
            }
            const failed = this.numSkips > maxSkips || (this.interrupted && this.interruptedAsFailure);
            return {
                failed,
                interrupted: this.interrupted,
                numRuns: this.numSuccesses,
                numSkips: this.numSkips,
                numShrinks: 0,
                seed,
                counterexample: null,
                counterexamplePath: null,
                error: null,
                errorInstance: null,
                failures: [],
                executionSummary: this.rootExecutionTrees,
                verbose: this.verbosity,
                runConfiguration: qParams.toParameters(),
            };
        }
    }
    exports.RunExecution = RunExecution;
    RunExecution.mergePaths = (offsetPath, path) => {
        if (offsetPath.length === 0)
            return path;
        const offsetItems = offsetPath.split(':');
        const remainingItems = path.split(':');
        const middle = +offsetItems[offsetItems.length - 1] + +remainingItems[0];
        return [...offsetItems.slice(0, offsetItems.length - 1), `${middle}`, ...remainingItems.slice(1)].join(':');
    };

    },{"../../../utils/globals":201,"../configuration/VerbosityLevel":188,"./ExecutionStatus":189}],191:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathWalk = void 0;
    const Stream_1 = require("../../../stream/Stream");
    function pathWalk(path, initialValues, shrink) {
        let values = (0, Stream_1.stream)(initialValues);
        const segments = path.split(':').map((text) => +text);
        if (segments.length === 0)
            return values;
        if (!segments.every((v) => !Number.isNaN(v))) {
            throw new Error(`Unable to replay, got invalid path=${path}`);
        }
        values = values.drop(segments[0]);
        for (const s of segments.slice(1)) {
            const valueToShrink = values.getNthOrLast(0);
            if (valueToShrink == null) {
                throw new Error(`Unable to replay, got wrong path=${path}`);
            }
            values = shrink(valueToShrink).drop(s);
        }
        return values;
    }
    exports.pathWalk = pathWalk;

    },{"../../../stream/Stream":198}],192:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asyncDefaultReportMessage = exports.defaultReportMessage = exports.asyncReportRunDetails = exports.reportRunDetails = void 0;
    const globals_1 = require("../../../utils/globals");
    const stringify_1 = require("../../../utils/stringify");
    const VerbosityLevel_1 = require("../configuration/VerbosityLevel");
    const ExecutionStatus_1 = require("../reporter/ExecutionStatus");
    function formatHints(hints) {
        if (hints.length === 1) {
            return `Hint: ${hints[0]}`;
        }
        return hints.map((h, idx) => `Hint (${idx + 1}): ${h}`).join('\n');
    }
    function formatFailures(failures, stringifyOne) {
        return `Encountered failures were:\n- ${failures.map(stringifyOne).join('\n- ')}`;
    }
    function formatExecutionSummary(executionTrees, stringifyOne) {
        const summaryLines = [];
        const remainingTreesAndDepth = [];
        for (const tree of executionTrees.slice().reverse()) {
            remainingTreesAndDepth.push({ depth: 1, tree });
        }
        while (remainingTreesAndDepth.length !== 0) {
            const currentTreeAndDepth = remainingTreesAndDepth.pop();
            const currentTree = currentTreeAndDepth.tree;
            const currentDepth = currentTreeAndDepth.depth;
            const statusIcon = currentTree.status === ExecutionStatus_1.ExecutionStatus.Success
                ? '\x1b[32m\u221A\x1b[0m'
                : currentTree.status === ExecutionStatus_1.ExecutionStatus.Failure
                    ? '\x1b[31m\xD7\x1b[0m'
                    : '\x1b[33m!\x1b[0m';
            const leftPadding = Array(currentDepth).join('. ');
            summaryLines.push(`${leftPadding}${statusIcon} ${stringifyOne(currentTree.value)}`);
            for (const tree of currentTree.children.slice().reverse()) {
                remainingTreesAndDepth.push({ depth: currentDepth + 1, tree });
            }
        }
        return `Execution summary:\n${summaryLines.join('\n')}`;
    }
    function preFormatTooManySkipped(out, stringifyOne) {
        const message = `Failed to run property, too many pre-condition failures encountered\n{ seed: ${out.seed} }\n\nRan ${out.numRuns} time(s)\nSkipped ${out.numSkips} time(s)`;
        let details = null;
        const hints = [
            'Try to reduce the number of rejected values by combining map, flatMap and built-in arbitraries',
            'Increase failure tolerance by setting maxSkipsPerRun to an higher value',
        ];
        if (out.verbose >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
            details = formatExecutionSummary(out.executionSummary, stringifyOne);
        }
        else {
            (0, globals_1.safePush)(hints, 'Enable verbose mode at level VeryVerbose in order to check all generated values and their associated status');
        }
        return { message, details, hints };
    }
    function preFormatFailure(out, stringifyOne) {
        const message = `Property failed after ${out.numRuns} tests\n{ seed: ${out.seed}, path: "${out.counterexamplePath}", endOnFailure: true }\nCounterexample: ${stringifyOne(out.counterexample)}\nShrunk ${out.numShrinks} time(s)\nGot error: ${out.error}`;
        let details = null;
        const hints = [];
        if (out.verbose >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
            details = formatExecutionSummary(out.executionSummary, stringifyOne);
        }
        else if (out.verbose === VerbosityLevel_1.VerbosityLevel.Verbose) {
            details = formatFailures(out.failures, stringifyOne);
        }
        else {
            (0, globals_1.safePush)(hints, 'Enable verbose mode in order to have the list of all failing values encountered during the run');
        }
        return { message, details, hints };
    }
    function preFormatEarlyInterrupted(out, stringifyOne) {
        const message = `Property interrupted after ${out.numRuns} tests\n{ seed: ${out.seed} }`;
        let details = null;
        const hints = [];
        if (out.verbose >= VerbosityLevel_1.VerbosityLevel.VeryVerbose) {
            details = formatExecutionSummary(out.executionSummary, stringifyOne);
        }
        else {
            (0, globals_1.safePush)(hints, 'Enable verbose mode at level VeryVerbose in order to check all generated values and their associated status');
        }
        return { message, details, hints };
    }
    function defaultReportMessageInternal(out, stringifyOne) {
        if (!out.failed)
            return;
        const { message, details, hints } = out.counterexamplePath === null
            ? out.interrupted
                ? preFormatEarlyInterrupted(out, stringifyOne)
                : preFormatTooManySkipped(out, stringifyOne)
            : preFormatFailure(out, stringifyOne);
        let errorMessage = message;
        if (details != null)
            errorMessage += `\n\n${details}`;
        if (hints.length > 0)
            errorMessage += `\n\n${formatHints(hints)}`;
        return errorMessage;
    }
    function defaultReportMessage(out) {
        return defaultReportMessageInternal(out, stringify_1.stringify);
    }
    exports.defaultReportMessage = defaultReportMessage;
    async function asyncDefaultReportMessage(out) {
        const pendingStringifieds = [];
        function stringifyOne(value) {
            const stringified = (0, stringify_1.possiblyAsyncStringify)(value);
            if (typeof stringified === 'string') {
                return stringified;
            }
            pendingStringifieds.push(Promise.all([value, stringified]));
            return '\u2026';
        }
        const firstTryMessage = defaultReportMessageInternal(out, stringifyOne);
        if (pendingStringifieds.length === 0) {
            return firstTryMessage;
        }
        const registeredValues = new Map(await Promise.all(pendingStringifieds));
        function stringifySecond(value) {
            const asyncStringifiedIfRegistered = registeredValues.get(value);
            if (asyncStringifiedIfRegistered !== undefined) {
                return asyncStringifiedIfRegistered;
            }
            return (0, stringify_1.stringify)(value);
        }
        return defaultReportMessageInternal(out, stringifySecond);
    }
    exports.asyncDefaultReportMessage = asyncDefaultReportMessage;
    function throwIfFailed(out) {
        if (!out.failed)
            return;
        throw new globals_1.Error(defaultReportMessage(out));
    }
    async function asyncThrowIfFailed(out) {
        if (!out.failed)
            return;
        throw new globals_1.Error(await asyncDefaultReportMessage(out));
    }
    function reportRunDetails(out) {
        if (out.runConfiguration.asyncReporter)
            return out.runConfiguration.asyncReporter(out);
        else if (out.runConfiguration.reporter)
            return out.runConfiguration.reporter(out);
        else
            return throwIfFailed(out);
    }
    exports.reportRunDetails = reportRunDetails;
    async function asyncReportRunDetails(out) {
        if (out.runConfiguration.asyncReporter)
            return out.runConfiguration.asyncReporter(out);
        else if (out.runConfiguration.reporter)
            return out.runConfiguration.reporter(out);
        else
            return asyncThrowIfFailed(out);
    }
    exports.asyncReportRunDetails = asyncReportRunDetails;

    },{"../../../utils/globals":201,"../../../utils/stringify":203,"../configuration/VerbosityLevel":188,"../reporter/ExecutionStatus":189}],193:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cloneIfNeeded = exports.hasCloneMethod = exports.cloneMethod = void 0;
    exports.cloneMethod = Symbol('fast-check/cloneMethod');
    function hasCloneMethod(instance) {
        return (instance !== null &&
            (typeof instance === 'object' || typeof instance === 'function') &&
            exports.cloneMethod in instance &&
            typeof instance[exports.cloneMethod] === 'function');
    }
    exports.hasCloneMethod = hasCloneMethod;
    function cloneIfNeeded(instance) {
        return hasCloneMethod(instance) ? instance[exports.cloneMethod]() : instance;
    }
    exports.cloneIfNeeded = cloneIfNeeded;

    },{}],194:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sparseArray = exports.array = exports.subarray = exports.shuffledSubarray = exports.clone = exports.oneof = exports.option = exports.mapToConstant = exports.constantFrom = exports.constant = exports.lorem = exports.base64String = exports.hexaString = exports.fullUnicodeString = exports.unicodeString = exports.stringOf = exports.string16bits = exports.asciiString = exports.string = exports.mixedCase = exports.base64 = exports.hexa = exports.fullUnicode = exports.unicode = exports.char16bits = exports.ascii = exports.char = exports.bigUint = exports.bigInt = exports.bigUintN = exports.bigIntN = exports.maxSafeNat = exports.maxSafeInteger = exports.nat = exports.integer = exports.double = exports.float = exports.falsy = exports.boolean = exports.asyncProperty = exports.property = exports.PreconditionFailure = exports.pre = exports.assert = exports.check = exports.statistics = exports.sample = exports.__commitHash = exports.__version = exports.__type = void 0;
    exports.cloneMethod = exports.Value = exports.Arbitrary = exports.schedulerFor = exports.scheduler = exports.commands = exports.scheduledModelRun = exports.modelRun = exports.asyncModelRun = exports.bigUint64Array = exports.bigInt64Array = exports.float64Array = exports.float32Array = exports.uint32Array = exports.int32Array = exports.uint16Array = exports.int16Array = exports.uint8ClampedArray = exports.uint8Array = exports.int8Array = exports.uuidV = exports.uuid = exports.emailAddress = exports.webUrl = exports.webQueryParameters = exports.webFragments = exports.webSegment = exports.webAuthority = exports.domain = exports.ipV6 = exports.ipV4Extended = exports.ipV4 = exports.date = exports.context = exports.func = exports.compareFunc = exports.compareBooleanFunc = exports.memo = exports.letrec = exports.unicodeJsonValue = exports.unicodeJson = exports.jsonValue = exports.json = exports.object = exports.anything = exports.dictionary = exports.record = exports.tuple = exports.uniqueArray = exports.infiniteStream = void 0;
    exports.createDepthIdentifier = exports.stream = exports.Stream = exports.Random = exports.ExecutionStatus = exports.resetConfigureGlobal = exports.readConfigureGlobal = exports.configureGlobal = exports.VerbosityLevel = exports.hash = exports.asyncDefaultReportMessage = exports.defaultReportMessage = exports.asyncStringify = exports.stringify = exports.getDepthContextFor = exports.hasAsyncToStringMethod = exports.asyncToStringMethod = exports.hasToStringMethod = exports.toStringMethod = exports.hasCloneMethod = exports.cloneIfNeeded = void 0;
    const Pre_1 = require("./check/precondition/Pre");
    Object.defineProperty(exports, "pre", { enumerable: true, get: function () { return Pre_1.pre; } });
    const AsyncProperty_1 = require("./check/property/AsyncProperty");
    Object.defineProperty(exports, "asyncProperty", { enumerable: true, get: function () { return AsyncProperty_1.asyncProperty; } });
    const Property_1 = require("./check/property/Property");
    Object.defineProperty(exports, "property", { enumerable: true, get: function () { return Property_1.property; } });
    const Runner_1 = require("./check/runner/Runner");
    Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return Runner_1.assert; } });
    Object.defineProperty(exports, "check", { enumerable: true, get: function () { return Runner_1.check; } });
    const Sampler_1 = require("./check/runner/Sampler");
    Object.defineProperty(exports, "sample", { enumerable: true, get: function () { return Sampler_1.sample; } });
    Object.defineProperty(exports, "statistics", { enumerable: true, get: function () { return Sampler_1.statistics; } });
    const array_1 = require("./arbitrary/array");
    Object.defineProperty(exports, "array", { enumerable: true, get: function () { return array_1.array; } });
    const bigInt_1 = require("./arbitrary/bigInt");
    Object.defineProperty(exports, "bigInt", { enumerable: true, get: function () { return bigInt_1.bigInt; } });
    const bigIntN_1 = require("./arbitrary/bigIntN");
    Object.defineProperty(exports, "bigIntN", { enumerable: true, get: function () { return bigIntN_1.bigIntN; } });
    const bigUint_1 = require("./arbitrary/bigUint");
    Object.defineProperty(exports, "bigUint", { enumerable: true, get: function () { return bigUint_1.bigUint; } });
    const bigUintN_1 = require("./arbitrary/bigUintN");
    Object.defineProperty(exports, "bigUintN", { enumerable: true, get: function () { return bigUintN_1.bigUintN; } });
    const boolean_1 = require("./arbitrary/boolean");
    Object.defineProperty(exports, "boolean", { enumerable: true, get: function () { return boolean_1.boolean; } });
    const falsy_1 = require("./arbitrary/falsy");
    Object.defineProperty(exports, "falsy", { enumerable: true, get: function () { return falsy_1.falsy; } });
    const ascii_1 = require("./arbitrary/ascii");
    Object.defineProperty(exports, "ascii", { enumerable: true, get: function () { return ascii_1.ascii; } });
    const base64_1 = require("./arbitrary/base64");
    Object.defineProperty(exports, "base64", { enumerable: true, get: function () { return base64_1.base64; } });
    const char_1 = require("./arbitrary/char");
    Object.defineProperty(exports, "char", { enumerable: true, get: function () { return char_1.char; } });
    const char16bits_1 = require("./arbitrary/char16bits");
    Object.defineProperty(exports, "char16bits", { enumerable: true, get: function () { return char16bits_1.char16bits; } });
    const fullUnicode_1 = require("./arbitrary/fullUnicode");
    Object.defineProperty(exports, "fullUnicode", { enumerable: true, get: function () { return fullUnicode_1.fullUnicode; } });
    const hexa_1 = require("./arbitrary/hexa");
    Object.defineProperty(exports, "hexa", { enumerable: true, get: function () { return hexa_1.hexa; } });
    const unicode_1 = require("./arbitrary/unicode");
    Object.defineProperty(exports, "unicode", { enumerable: true, get: function () { return unicode_1.unicode; } });
    const constant_1 = require("./arbitrary/constant");
    Object.defineProperty(exports, "constant", { enumerable: true, get: function () { return constant_1.constant; } });
    const constantFrom_1 = require("./arbitrary/constantFrom");
    Object.defineProperty(exports, "constantFrom", { enumerable: true, get: function () { return constantFrom_1.constantFrom; } });
    const context_1 = require("./arbitrary/context");
    Object.defineProperty(exports, "context", { enumerable: true, get: function () { return context_1.context; } });
    const date_1 = require("./arbitrary/date");
    Object.defineProperty(exports, "date", { enumerable: true, get: function () { return date_1.date; } });
    const clone_1 = require("./arbitrary/clone");
    Object.defineProperty(exports, "clone", { enumerable: true, get: function () { return clone_1.clone; } });
    const dictionary_1 = require("./arbitrary/dictionary");
    Object.defineProperty(exports, "dictionary", { enumerable: true, get: function () { return dictionary_1.dictionary; } });
    const emailAddress_1 = require("./arbitrary/emailAddress");
    Object.defineProperty(exports, "emailAddress", { enumerable: true, get: function () { return emailAddress_1.emailAddress; } });
    const double_1 = require("./arbitrary/double");
    Object.defineProperty(exports, "double", { enumerable: true, get: function () { return double_1.double; } });
    const float_1 = require("./arbitrary/float");
    Object.defineProperty(exports, "float", { enumerable: true, get: function () { return float_1.float; } });
    const compareBooleanFunc_1 = require("./arbitrary/compareBooleanFunc");
    Object.defineProperty(exports, "compareBooleanFunc", { enumerable: true, get: function () { return compareBooleanFunc_1.compareBooleanFunc; } });
    const compareFunc_1 = require("./arbitrary/compareFunc");
    Object.defineProperty(exports, "compareFunc", { enumerable: true, get: function () { return compareFunc_1.compareFunc; } });
    const func_1 = require("./arbitrary/func");
    Object.defineProperty(exports, "func", { enumerable: true, get: function () { return func_1.func; } });
    const domain_1 = require("./arbitrary/domain");
    Object.defineProperty(exports, "domain", { enumerable: true, get: function () { return domain_1.domain; } });
    const integer_1 = require("./arbitrary/integer");
    Object.defineProperty(exports, "integer", { enumerable: true, get: function () { return integer_1.integer; } });
    const maxSafeInteger_1 = require("./arbitrary/maxSafeInteger");
    Object.defineProperty(exports, "maxSafeInteger", { enumerable: true, get: function () { return maxSafeInteger_1.maxSafeInteger; } });
    const maxSafeNat_1 = require("./arbitrary/maxSafeNat");
    Object.defineProperty(exports, "maxSafeNat", { enumerable: true, get: function () { return maxSafeNat_1.maxSafeNat; } });
    const nat_1 = require("./arbitrary/nat");
    Object.defineProperty(exports, "nat", { enumerable: true, get: function () { return nat_1.nat; } });
    const ipV4_1 = require("./arbitrary/ipV4");
    Object.defineProperty(exports, "ipV4", { enumerable: true, get: function () { return ipV4_1.ipV4; } });
    const ipV4Extended_1 = require("./arbitrary/ipV4Extended");
    Object.defineProperty(exports, "ipV4Extended", { enumerable: true, get: function () { return ipV4Extended_1.ipV4Extended; } });
    const ipV6_1 = require("./arbitrary/ipV6");
    Object.defineProperty(exports, "ipV6", { enumerable: true, get: function () { return ipV6_1.ipV6; } });
    const letrec_1 = require("./arbitrary/letrec");
    Object.defineProperty(exports, "letrec", { enumerable: true, get: function () { return letrec_1.letrec; } });
    const lorem_1 = require("./arbitrary/lorem");
    Object.defineProperty(exports, "lorem", { enumerable: true, get: function () { return lorem_1.lorem; } });
    const mapToConstant_1 = require("./arbitrary/mapToConstant");
    Object.defineProperty(exports, "mapToConstant", { enumerable: true, get: function () { return mapToConstant_1.mapToConstant; } });
    const memo_1 = require("./arbitrary/memo");
    Object.defineProperty(exports, "memo", { enumerable: true, get: function () { return memo_1.memo; } });
    const mixedCase_1 = require("./arbitrary/mixedCase");
    Object.defineProperty(exports, "mixedCase", { enumerable: true, get: function () { return mixedCase_1.mixedCase; } });
    const object_1 = require("./arbitrary/object");
    Object.defineProperty(exports, "object", { enumerable: true, get: function () { return object_1.object; } });
    const json_1 = require("./arbitrary/json");
    Object.defineProperty(exports, "json", { enumerable: true, get: function () { return json_1.json; } });
    const anything_1 = require("./arbitrary/anything");
    Object.defineProperty(exports, "anything", { enumerable: true, get: function () { return anything_1.anything; } });
    const unicodeJsonValue_1 = require("./arbitrary/unicodeJsonValue");
    Object.defineProperty(exports, "unicodeJsonValue", { enumerable: true, get: function () { return unicodeJsonValue_1.unicodeJsonValue; } });
    const jsonValue_1 = require("./arbitrary/jsonValue");
    Object.defineProperty(exports, "jsonValue", { enumerable: true, get: function () { return jsonValue_1.jsonValue; } });
    const unicodeJson_1 = require("./arbitrary/unicodeJson");
    Object.defineProperty(exports, "unicodeJson", { enumerable: true, get: function () { return unicodeJson_1.unicodeJson; } });
    const oneof_1 = require("./arbitrary/oneof");
    Object.defineProperty(exports, "oneof", { enumerable: true, get: function () { return oneof_1.oneof; } });
    const option_1 = require("./arbitrary/option");
    Object.defineProperty(exports, "option", { enumerable: true, get: function () { return option_1.option; } });
    const record_1 = require("./arbitrary/record");
    Object.defineProperty(exports, "record", { enumerable: true, get: function () { return record_1.record; } });
    const uniqueArray_1 = require("./arbitrary/uniqueArray");
    Object.defineProperty(exports, "uniqueArray", { enumerable: true, get: function () { return uniqueArray_1.uniqueArray; } });
    const infiniteStream_1 = require("./arbitrary/infiniteStream");
    Object.defineProperty(exports, "infiniteStream", { enumerable: true, get: function () { return infiniteStream_1.infiniteStream; } });
    const asciiString_1 = require("./arbitrary/asciiString");
    Object.defineProperty(exports, "asciiString", { enumerable: true, get: function () { return asciiString_1.asciiString; } });
    const base64String_1 = require("./arbitrary/base64String");
    Object.defineProperty(exports, "base64String", { enumerable: true, get: function () { return base64String_1.base64String; } });
    const fullUnicodeString_1 = require("./arbitrary/fullUnicodeString");
    Object.defineProperty(exports, "fullUnicodeString", { enumerable: true, get: function () { return fullUnicodeString_1.fullUnicodeString; } });
    const hexaString_1 = require("./arbitrary/hexaString");
    Object.defineProperty(exports, "hexaString", { enumerable: true, get: function () { return hexaString_1.hexaString; } });
    const string_1 = require("./arbitrary/string");
    Object.defineProperty(exports, "string", { enumerable: true, get: function () { return string_1.string; } });
    const string16bits_1 = require("./arbitrary/string16bits");
    Object.defineProperty(exports, "string16bits", { enumerable: true, get: function () { return string16bits_1.string16bits; } });
    const stringOf_1 = require("./arbitrary/stringOf");
    Object.defineProperty(exports, "stringOf", { enumerable: true, get: function () { return stringOf_1.stringOf; } });
    const unicodeString_1 = require("./arbitrary/unicodeString");
    Object.defineProperty(exports, "unicodeString", { enumerable: true, get: function () { return unicodeString_1.unicodeString; } });
    const subarray_1 = require("./arbitrary/subarray");
    Object.defineProperty(exports, "subarray", { enumerable: true, get: function () { return subarray_1.subarray; } });
    const shuffledSubarray_1 = require("./arbitrary/shuffledSubarray");
    Object.defineProperty(exports, "shuffledSubarray", { enumerable: true, get: function () { return shuffledSubarray_1.shuffledSubarray; } });
    const tuple_1 = require("./arbitrary/tuple");
    Object.defineProperty(exports, "tuple", { enumerable: true, get: function () { return tuple_1.tuple; } });
    const uuid_1 = require("./arbitrary/uuid");
    Object.defineProperty(exports, "uuid", { enumerable: true, get: function () { return uuid_1.uuid; } });
    const uuidV_1 = require("./arbitrary/uuidV");
    Object.defineProperty(exports, "uuidV", { enumerable: true, get: function () { return uuidV_1.uuidV; } });
    const webAuthority_1 = require("./arbitrary/webAuthority");
    Object.defineProperty(exports, "webAuthority", { enumerable: true, get: function () { return webAuthority_1.webAuthority; } });
    const webFragments_1 = require("./arbitrary/webFragments");
    Object.defineProperty(exports, "webFragments", { enumerable: true, get: function () { return webFragments_1.webFragments; } });
    const webQueryParameters_1 = require("./arbitrary/webQueryParameters");
    Object.defineProperty(exports, "webQueryParameters", { enumerable: true, get: function () { return webQueryParameters_1.webQueryParameters; } });
    const webSegment_1 = require("./arbitrary/webSegment");
    Object.defineProperty(exports, "webSegment", { enumerable: true, get: function () { return webSegment_1.webSegment; } });
    const webUrl_1 = require("./arbitrary/webUrl");
    Object.defineProperty(exports, "webUrl", { enumerable: true, get: function () { return webUrl_1.webUrl; } });
    const commands_1 = require("./arbitrary/commands");
    Object.defineProperty(exports, "commands", { enumerable: true, get: function () { return commands_1.commands; } });
    const ModelRunner_1 = require("./check/model/ModelRunner");
    Object.defineProperty(exports, "asyncModelRun", { enumerable: true, get: function () { return ModelRunner_1.asyncModelRun; } });
    Object.defineProperty(exports, "modelRun", { enumerable: true, get: function () { return ModelRunner_1.modelRun; } });
    Object.defineProperty(exports, "scheduledModelRun", { enumerable: true, get: function () { return ModelRunner_1.scheduledModelRun; } });
    const Random_1 = require("./random/generator/Random");
    Object.defineProperty(exports, "Random", { enumerable: true, get: function () { return Random_1.Random; } });
    const GlobalParameters_1 = require("./check/runner/configuration/GlobalParameters");
    Object.defineProperty(exports, "configureGlobal", { enumerable: true, get: function () { return GlobalParameters_1.configureGlobal; } });
    Object.defineProperty(exports, "readConfigureGlobal", { enumerable: true, get: function () { return GlobalParameters_1.readConfigureGlobal; } });
    Object.defineProperty(exports, "resetConfigureGlobal", { enumerable: true, get: function () { return GlobalParameters_1.resetConfigureGlobal; } });
    const VerbosityLevel_1 = require("./check/runner/configuration/VerbosityLevel");
    Object.defineProperty(exports, "VerbosityLevel", { enumerable: true, get: function () { return VerbosityLevel_1.VerbosityLevel; } });
    const ExecutionStatus_1 = require("./check/runner/reporter/ExecutionStatus");
    Object.defineProperty(exports, "ExecutionStatus", { enumerable: true, get: function () { return ExecutionStatus_1.ExecutionStatus; } });
    const symbols_1 = require("./check/symbols");
    Object.defineProperty(exports, "cloneMethod", { enumerable: true, get: function () { return symbols_1.cloneMethod; } });
    Object.defineProperty(exports, "cloneIfNeeded", { enumerable: true, get: function () { return symbols_1.cloneIfNeeded; } });
    Object.defineProperty(exports, "hasCloneMethod", { enumerable: true, get: function () { return symbols_1.hasCloneMethod; } });
    const Stream_1 = require("./stream/Stream");
    Object.defineProperty(exports, "Stream", { enumerable: true, get: function () { return Stream_1.Stream; } });
    Object.defineProperty(exports, "stream", { enumerable: true, get: function () { return Stream_1.stream; } });
    const hash_1 = require("./utils/hash");
    Object.defineProperty(exports, "hash", { enumerable: true, get: function () { return hash_1.hash; } });
    const stringify_1 = require("./utils/stringify");
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return stringify_1.stringify; } });
    Object.defineProperty(exports, "asyncStringify", { enumerable: true, get: function () { return stringify_1.asyncStringify; } });
    Object.defineProperty(exports, "toStringMethod", { enumerable: true, get: function () { return stringify_1.toStringMethod; } });
    Object.defineProperty(exports, "hasToStringMethod", { enumerable: true, get: function () { return stringify_1.hasToStringMethod; } });
    Object.defineProperty(exports, "asyncToStringMethod", { enumerable: true, get: function () { return stringify_1.asyncToStringMethod; } });
    Object.defineProperty(exports, "hasAsyncToStringMethod", { enumerable: true, get: function () { return stringify_1.hasAsyncToStringMethod; } });
    const scheduler_1 = require("./arbitrary/scheduler");
    Object.defineProperty(exports, "scheduler", { enumerable: true, get: function () { return scheduler_1.scheduler; } });
    Object.defineProperty(exports, "schedulerFor", { enumerable: true, get: function () { return scheduler_1.schedulerFor; } });
    const RunDetailsFormatter_1 = require("./check/runner/utils/RunDetailsFormatter");
    Object.defineProperty(exports, "defaultReportMessage", { enumerable: true, get: function () { return RunDetailsFormatter_1.defaultReportMessage; } });
    Object.defineProperty(exports, "asyncDefaultReportMessage", { enumerable: true, get: function () { return RunDetailsFormatter_1.asyncDefaultReportMessage; } });
    const PreconditionFailure_1 = require("./check/precondition/PreconditionFailure");
    Object.defineProperty(exports, "PreconditionFailure", { enumerable: true, get: function () { return PreconditionFailure_1.PreconditionFailure; } });
    const int8Array_1 = require("./arbitrary/int8Array");
    Object.defineProperty(exports, "int8Array", { enumerable: true, get: function () { return int8Array_1.int8Array; } });
    const int16Array_1 = require("./arbitrary/int16Array");
    Object.defineProperty(exports, "int16Array", { enumerable: true, get: function () { return int16Array_1.int16Array; } });
    const int32Array_1 = require("./arbitrary/int32Array");
    Object.defineProperty(exports, "int32Array", { enumerable: true, get: function () { return int32Array_1.int32Array; } });
    const uint8Array_1 = require("./arbitrary/uint8Array");
    Object.defineProperty(exports, "uint8Array", { enumerable: true, get: function () { return uint8Array_1.uint8Array; } });
    const uint8ClampedArray_1 = require("./arbitrary/uint8ClampedArray");
    Object.defineProperty(exports, "uint8ClampedArray", { enumerable: true, get: function () { return uint8ClampedArray_1.uint8ClampedArray; } });
    const uint16Array_1 = require("./arbitrary/uint16Array");
    Object.defineProperty(exports, "uint16Array", { enumerable: true, get: function () { return uint16Array_1.uint16Array; } });
    const uint32Array_1 = require("./arbitrary/uint32Array");
    Object.defineProperty(exports, "uint32Array", { enumerable: true, get: function () { return uint32Array_1.uint32Array; } });
    const float32Array_1 = require("./arbitrary/float32Array");
    Object.defineProperty(exports, "float32Array", { enumerable: true, get: function () { return float32Array_1.float32Array; } });
    const float64Array_1 = require("./arbitrary/float64Array");
    Object.defineProperty(exports, "float64Array", { enumerable: true, get: function () { return float64Array_1.float64Array; } });
    const sparseArray_1 = require("./arbitrary/sparseArray");
    Object.defineProperty(exports, "sparseArray", { enumerable: true, get: function () { return sparseArray_1.sparseArray; } });
    const Arbitrary_1 = require("./check/arbitrary/definition/Arbitrary");
    Object.defineProperty(exports, "Arbitrary", { enumerable: true, get: function () { return Arbitrary_1.Arbitrary; } });
    const Value_1 = require("./check/arbitrary/definition/Value");
    Object.defineProperty(exports, "Value", { enumerable: true, get: function () { return Value_1.Value; } });
    const DepthContext_1 = require("./arbitrary/_internals/helpers/DepthContext");
    Object.defineProperty(exports, "createDepthIdentifier", { enumerable: true, get: function () { return DepthContext_1.createDepthIdentifier; } });
    Object.defineProperty(exports, "getDepthContextFor", { enumerable: true, get: function () { return DepthContext_1.getDepthContextFor; } });
    const bigInt64Array_1 = require("./arbitrary/bigInt64Array");
    Object.defineProperty(exports, "bigInt64Array", { enumerable: true, get: function () { return bigInt64Array_1.bigInt64Array; } });
    const bigUint64Array_1 = require("./arbitrary/bigUint64Array");
    Object.defineProperty(exports, "bigUint64Array", { enumerable: true, get: function () { return bigUint64Array_1.bigUint64Array; } });
    const __type = 'commonjs';
    exports.__type = __type;
    const __version = '3.1.4';
    exports.__version = __version;
    const __commitHash = 'd55f25ed8eeb39fc763fa5a06952b55ac3c0162a';
    exports.__commitHash = __commitHash;

    },{"./arbitrary/_internals/helpers/DepthContext":38,"./arbitrary/anything":80,"./arbitrary/array":81,"./arbitrary/ascii":82,"./arbitrary/asciiString":83,"./arbitrary/base64":84,"./arbitrary/base64String":85,"./arbitrary/bigInt":86,"./arbitrary/bigInt64Array":87,"./arbitrary/bigIntN":88,"./arbitrary/bigUint":89,"./arbitrary/bigUint64Array":90,"./arbitrary/bigUintN":91,"./arbitrary/boolean":92,"./arbitrary/char":93,"./arbitrary/char16bits":94,"./arbitrary/clone":95,"./arbitrary/commands":96,"./arbitrary/compareBooleanFunc":97,"./arbitrary/compareFunc":98,"./arbitrary/constant":99,"./arbitrary/constantFrom":100,"./arbitrary/context":101,"./arbitrary/date":102,"./arbitrary/dictionary":103,"./arbitrary/domain":104,"./arbitrary/double":105,"./arbitrary/emailAddress":106,"./arbitrary/falsy":107,"./arbitrary/float":108,"./arbitrary/float32Array":109,"./arbitrary/float64Array":110,"./arbitrary/fullUnicode":111,"./arbitrary/fullUnicodeString":112,"./arbitrary/func":113,"./arbitrary/hexa":114,"./arbitrary/hexaString":115,"./arbitrary/infiniteStream":116,"./arbitrary/int16Array":117,"./arbitrary/int32Array":118,"./arbitrary/int8Array":119,"./arbitrary/integer":120,"./arbitrary/ipV4":121,"./arbitrary/ipV4Extended":122,"./arbitrary/ipV6":123,"./arbitrary/json":124,"./arbitrary/jsonValue":125,"./arbitrary/letrec":126,"./arbitrary/lorem":127,"./arbitrary/mapToConstant":128,"./arbitrary/maxSafeInteger":129,"./arbitrary/maxSafeNat":130,"./arbitrary/memo":131,"./arbitrary/mixedCase":132,"./arbitrary/nat":133,"./arbitrary/object":134,"./arbitrary/oneof":135,"./arbitrary/option":136,"./arbitrary/record":137,"./arbitrary/scheduler":138,"./arbitrary/shuffledSubarray":139,"./arbitrary/sparseArray":140,"./arbitrary/string":141,"./arbitrary/string16bits":142,"./arbitrary/stringOf":143,"./arbitrary/subarray":144,"./arbitrary/tuple":145,"./arbitrary/uint16Array":146,"./arbitrary/uint32Array":147,"./arbitrary/uint8Array":148,"./arbitrary/uint8ClampedArray":149,"./arbitrary/unicode":150,"./arbitrary/unicodeJson":151,"./arbitrary/unicodeJsonValue":152,"./arbitrary/unicodeString":153,"./arbitrary/uniqueArray":154,"./arbitrary/uuid":155,"./arbitrary/uuidV":156,"./arbitrary/webAuthority":157,"./arbitrary/webFragments":158,"./arbitrary/webQueryParameters":159,"./arbitrary/webSegment":160,"./arbitrary/webUrl":161,"./check/arbitrary/definition/Arbitrary":162,"./check/arbitrary/definition/Value":163,"./check/model/ModelRunner":164,"./check/precondition/Pre":169,"./check/precondition/PreconditionFailure":170,"./check/property/AsyncProperty":172,"./check/property/Property":176,"./check/runner/Runner":181,"./check/runner/Sampler":183,"./check/runner/configuration/GlobalParameters":186,"./check/runner/configuration/VerbosityLevel":188,"./check/runner/reporter/ExecutionStatus":189,"./check/runner/utils/RunDetailsFormatter":192,"./check/symbols":193,"./random/generator/Random":196,"./stream/Stream":198,"./utils/hash":202,"./utils/stringify":203}],195:[function(require,module,exports){
    "use strict";
    var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __exportStar = (this && this.__exportStar) || function(m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const fc = require("./fast-check-default");
    exports.default = fc;
    __exportStar(require("./fast-check-default"), exports);

    },{"./fast-check-default":194}],196:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Random = void 0;
    const pure_rand_1 = require("pure-rand");
    class Random {
        constructor(sourceRng) {
            this.internalRng = sourceRng.clone();
        }
        clone() {
            return new Random(this.internalRng);
        }
        next(bits) {
            return (0, pure_rand_1.unsafeUniformIntDistribution)(0, (1 << bits) - 1, this.internalRng);
        }
        nextBoolean() {
            return (0, pure_rand_1.unsafeUniformIntDistribution)(0, 1, this.internalRng) == 1;
        }
        nextInt(min, max) {
            return (0, pure_rand_1.unsafeUniformIntDistribution)(min == null ? Random.MIN_INT : min, max == null ? Random.MAX_INT : max, this.internalRng);
        }
        nextBigInt(min, max) {
            return (0, pure_rand_1.unsafeUniformBigIntDistribution)(min, max, this.internalRng);
        }
        nextArrayInt(min, max) {
            return (0, pure_rand_1.unsafeUniformArrayIntDistribution)(min, max, this.internalRng);
        }
        nextDouble() {
            const a = this.next(26);
            const b = this.next(27);
            return (a * Random.DBL_FACTOR + b) * Random.DBL_DIVISOR;
        }
    }
    exports.Random = Random;
    Random.MIN_INT = 0x80000000 | 0;
    Random.MAX_INT = 0x7fffffff | 0;
    Random.DBL_FACTOR = Math.pow(2, 27);
    Random.DBL_DIVISOR = Math.pow(2, -53);

    },{"pure-rand":220}],197:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeLazy = void 0;
    class LazyIterableIterator {
        constructor(producer) {
            this.producer = producer;
        }
        [Symbol.iterator]() {
            if (this.it === undefined) {
                this.it = this.producer();
            }
            return this.it;
        }
        next() {
            if (this.it === undefined) {
                this.it = this.producer();
            }
            return this.it.next();
        }
    }
    function makeLazy(producer) {
        return new LazyIterableIterator(producer);
    }
    exports.makeLazy = makeLazy;

    },{}],198:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stream = exports.Stream = void 0;
    const StreamHelpers_1 = require("./StreamHelpers");
    const safeSymbolIterator = Symbol.iterator;
    class Stream {
        constructor(g) {
            this.g = g;
        }
        static nil() {
            return new Stream((0, StreamHelpers_1.nilHelper)());
        }
        static of(...elements) {
            return new Stream(elements[safeSymbolIterator]());
        }
        next() {
            return this.g.next();
        }
        [safeSymbolIterator]() {
            return this.g;
        }
        map(f) {
            return new Stream((0, StreamHelpers_1.mapHelper)(this.g, f));
        }
        flatMap(f) {
            return new Stream((0, StreamHelpers_1.flatMapHelper)(this.g, f));
        }
        dropWhile(f) {
            let foundEligible = false;
            function* helper(v) {
                if (foundEligible || !f(v)) {
                    foundEligible = true;
                    yield v;
                }
            }
            return this.flatMap(helper);
        }
        drop(n) {
            let idx = 0;
            function helper() {
                return idx++ < n;
            }
            return this.dropWhile(helper);
        }
        takeWhile(f) {
            return new Stream((0, StreamHelpers_1.takeWhileHelper)(this.g, f));
        }
        take(n) {
            return new Stream((0, StreamHelpers_1.takeNHelper)(this.g, n));
        }
        filter(f) {
            return new Stream((0, StreamHelpers_1.filterHelper)(this.g, f));
        }
        every(f) {
            for (const v of this.g) {
                if (!f(v)) {
                    return false;
                }
            }
            return true;
        }
        has(f) {
            for (const v of this.g) {
                if (f(v)) {
                    return [true, v];
                }
            }
            return [false, null];
        }
        join(...others) {
            return new Stream((0, StreamHelpers_1.joinHelper)(this.g, others));
        }
        getNthOrLast(nth) {
            let remaining = nth;
            let last = null;
            for (const v of this.g) {
                if (remaining-- === 0)
                    return v;
                last = v;
            }
            return last;
        }
    }
    exports.Stream = Stream;
    function stream(g) {
        return new Stream(g);
    }
    exports.stream = stream;

    },{"./StreamHelpers":199}],199:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinHelper = exports.takeWhileHelper = exports.takeNHelper = exports.filterHelper = exports.flatMapHelper = exports.mapHelper = exports.nilHelper = void 0;
    class Nil {
        [Symbol.iterator]() {
            return this;
        }
        next(value) {
            return { value, done: true };
        }
    }
    Nil.nil = new Nil();
    function nilHelper() {
        return Nil.nil;
    }
    exports.nilHelper = nilHelper;
    function* mapHelper(g, f) {
        for (const v of g) {
            yield f(v);
        }
    }
    exports.mapHelper = mapHelper;
    function* flatMapHelper(g, f) {
        for (const v of g) {
            yield* f(v);
        }
    }
    exports.flatMapHelper = flatMapHelper;
    function* filterHelper(g, f) {
        for (const v of g) {
            if (f(v)) {
                yield v;
            }
        }
    }
    exports.filterHelper = filterHelper;
    function* takeNHelper(g, n) {
        for (let i = 0; i < n; ++i) {
            const cur = g.next();
            if (cur.done) {
                break;
            }
            yield cur.value;
        }
    }
    exports.takeNHelper = takeNHelper;
    function* takeWhileHelper(g, f) {
        let cur = g.next();
        while (!cur.done && f(cur.value)) {
            yield cur.value;
            cur = g.next();
        }
    }
    exports.takeWhileHelper = takeWhileHelper;
    function* joinHelper(g, others) {
        for (let cur = g.next(); !cur.done; cur = g.next()) {
            yield cur.value;
        }
        for (const s of others) {
            for (let cur = s.next(); !cur.done; cur = s.next()) {
                yield cur.value;
            }
        }
    }
    exports.joinHelper = joinHelper;

    },{}],200:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeApply = void 0;
    const untouchedApply = Function.prototype.apply;
    const ApplySymbol = Symbol('apply');
    function safeExtractApply(f) {
        try {
            return f.apply;
        }
        catch (err) {
            return undefined;
        }
    }
    function safeApplyHacky(f, instance, args) {
        const ff = f;
        ff[ApplySymbol] = untouchedApply;
        const out = ff[ApplySymbol](instance, args);
        delete ff[ApplySymbol];
        return out;
    }
    function safeApply(f, instance, args) {
        if (safeExtractApply(f) === untouchedApply) {
            return f.apply(instance, args);
        }
        return safeApplyHacky(f, instance, args);
    }
    exports.safeApply = safeApply;

    },{}],201:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeToString = exports.safeHasOwnProperty = exports.safeNumberToString = exports.safeCharCodeAt = exports.safePadStart = exports.safeToUpperCase = exports.safeToLowerCase = exports.safeSubstring = exports.safeEndsWith = exports.safeStartsWith = exports.safeSplit = exports.safeAdd = exports.safeToISOString = exports.safeGetTime = exports.safeSort = exports.safeSlice = exports.safeSplice = exports.safePop = exports.safePush = exports.safeFilter = exports.safeMap = exports.safeJoin = exports.safeIndexOf = exports.safeForEach = exports.encodeURIComponent = exports.Uint32Array = exports.Uint16Array = exports.Uint8ClampedArray = exports.Uint8Array = exports.Set = exports.String = exports.Number = exports.Int32Array = exports.Int16Array = exports.Int8Array = exports.Float64Array = exports.Float32Array = exports.Error = exports.Date = exports.Boolean = exports.BigUint64Array = exports.BigInt64Array = exports.BigInt = exports.Array = void 0;
    const apply_1 = require("./apply");
    const SArray = typeof Array !== 'undefined' ? Array : undefined;
    exports.Array = SArray;
    const SBigInt = typeof BigInt !== 'undefined' ? BigInt : undefined;
    exports.BigInt = SBigInt;
    const SBigInt64Array = typeof BigInt64Array !== 'undefined' ? BigInt64Array : undefined;
    exports.BigInt64Array = SBigInt64Array;
    const SBigUint64Array = typeof BigUint64Array !== 'undefined' ? BigUint64Array : undefined;
    exports.BigUint64Array = SBigUint64Array;
    const SBoolean = typeof Boolean !== 'undefined' ? Boolean : undefined;
    exports.Boolean = SBoolean;
    const SDate = typeof Date !== 'undefined' ? Date : undefined;
    exports.Date = SDate;
    const SError = typeof Error !== 'undefined' ? Error : undefined;
    exports.Error = SError;
    const SFloat32Array = typeof Float32Array !== 'undefined' ? Float32Array : undefined;
    exports.Float32Array = SFloat32Array;
    const SFloat64Array = typeof Float64Array !== 'undefined' ? Float64Array : undefined;
    exports.Float64Array = SFloat64Array;
    const SInt8Array = typeof Int8Array !== 'undefined' ? Int8Array : undefined;
    exports.Int8Array = SInt8Array;
    const SInt16Array = typeof Int16Array !== 'undefined' ? Int16Array : undefined;
    exports.Int16Array = SInt16Array;
    const SInt32Array = typeof Int32Array !== 'undefined' ? Int32Array : undefined;
    exports.Int32Array = SInt32Array;
    const SNumber = typeof Number !== 'undefined' ? Number : undefined;
    exports.Number = SNumber;
    const SString = typeof String !== 'undefined' ? String : undefined;
    exports.String = SString;
    const SSet = typeof Set !== 'undefined' ? Set : undefined;
    exports.Set = SSet;
    const SUint8Array = typeof Uint8Array !== 'undefined' ? Uint8Array : undefined;
    exports.Uint8Array = SUint8Array;
    const SUint8ClampedArray = typeof Uint8ClampedArray !== 'undefined' ? Uint8ClampedArray : undefined;
    exports.Uint8ClampedArray = SUint8ClampedArray;
    const SUint16Array = typeof Uint16Array !== 'undefined' ? Uint16Array : undefined;
    exports.Uint16Array = SUint16Array;
    const SUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : undefined;
    exports.Uint32Array = SUint32Array;
    const SencodeURIComponent = typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined;
    exports.encodeURIComponent = SencodeURIComponent;
    const untouchedForEach = Array.prototype.forEach;
    const untouchedIndexOf = Array.prototype.indexOf;
    const untouchedJoin = Array.prototype.join;
    const untouchedMap = Array.prototype.map;
    const untouchedFilter = Array.prototype.filter;
    const untouchedPush = Array.prototype.push;
    const untouchedPop = Array.prototype.pop;
    const untouchedSplice = Array.prototype.splice;
    const untouchedSlice = Array.prototype.slice;
    const untouchedSort = Array.prototype.sort;
    function extractForEach(instance) {
        try {
            return instance.forEach;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractIndexOf(instance) {
        try {
            return instance.indexOf;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractJoin(instance) {
        try {
            return instance.join;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractMap(instance) {
        try {
            return instance.map;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractFilter(instance) {
        try {
            return instance.filter;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractPush(instance) {
        try {
            return instance.push;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractPop(instance) {
        try {
            return instance.pop;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractSplice(instance) {
        try {
            return instance.splice;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractSlice(instance) {
        try {
            return instance.slice;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractSort(instance) {
        try {
            return instance.sort;
        }
        catch (err) {
            return undefined;
        }
    }
    function safeForEach(instance, fn) {
        if (extractForEach(instance) === untouchedForEach) {
            return instance.forEach(fn);
        }
        return (0, apply_1.safeApply)(untouchedForEach, instance, [fn]);
    }
    exports.safeForEach = safeForEach;
    function safeIndexOf(instance, ...args) {
        if (extractIndexOf(instance) === untouchedIndexOf) {
            return instance.indexOf(...args);
        }
        return (0, apply_1.safeApply)(untouchedIndexOf, instance, args);
    }
    exports.safeIndexOf = safeIndexOf;
    function safeJoin(instance, ...args) {
        if (extractJoin(instance) === untouchedJoin) {
            return instance.join(...args);
        }
        return (0, apply_1.safeApply)(untouchedJoin, instance, args);
    }
    exports.safeJoin = safeJoin;
    function safeMap(instance, fn) {
        if (extractMap(instance) === untouchedMap) {
            return instance.map(fn);
        }
        return (0, apply_1.safeApply)(untouchedMap, instance, [fn]);
    }
    exports.safeMap = safeMap;
    function safeFilter(instance, predicate) {
        if (extractFilter(instance) === untouchedFilter) {
            return instance.filter(predicate);
        }
        return (0, apply_1.safeApply)(untouchedFilter, instance, [predicate]);
    }
    exports.safeFilter = safeFilter;
    function safePush(instance, ...args) {
        if (extractPush(instance) === untouchedPush) {
            return instance.push(...args);
        }
        return (0, apply_1.safeApply)(untouchedPush, instance, args);
    }
    exports.safePush = safePush;
    function safePop(instance) {
        if (extractPop(instance) === untouchedPop) {
            return instance.pop();
        }
        return (0, apply_1.safeApply)(untouchedPop, instance, []);
    }
    exports.safePop = safePop;
    function safeSplice(instance, ...args) {
        if (extractSplice(instance) === untouchedSplice) {
            return instance.splice(...args);
        }
        return (0, apply_1.safeApply)(untouchedSplice, instance, args);
    }
    exports.safeSplice = safeSplice;
    function safeSlice(instance, ...args) {
        if (extractSlice(instance) === untouchedSlice) {
            return instance.slice(...args);
        }
        return (0, apply_1.safeApply)(untouchedSlice, instance, args);
    }
    exports.safeSlice = safeSlice;
    function safeSort(instance, ...args) {
        if (extractSort(instance) === untouchedSort) {
            return instance.sort(...args);
        }
        return (0, apply_1.safeApply)(untouchedSort, instance, args);
    }
    exports.safeSort = safeSort;
    const untouchedGetTime = Date.prototype.getTime;
    const untouchedToISOString = Date.prototype.toISOString;
    function extractGetTime(instance) {
        try {
            return instance.getTime;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractToISOString(instance) {
        try {
            return instance.toISOString;
        }
        catch (err) {
            return undefined;
        }
    }
    function safeGetTime(instance) {
        if (extractGetTime(instance) === untouchedGetTime) {
            return instance.getTime();
        }
        return (0, apply_1.safeApply)(untouchedGetTime, instance, []);
    }
    exports.safeGetTime = safeGetTime;
    function safeToISOString(instance) {
        if (extractToISOString(instance) === untouchedToISOString) {
            return instance.toISOString();
        }
        return (0, apply_1.safeApply)(untouchedToISOString, instance, []);
    }
    exports.safeToISOString = safeToISOString;
    const untouchedAdd = Set.prototype.add;
    function extractAdd(instance) {
        try {
            return instance.add;
        }
        catch (err) {
            return undefined;
        }
    }
    function safeAdd(instance, value) {
        if (extractAdd(instance) === untouchedAdd) {
            return instance.add(value);
        }
        return (0, apply_1.safeApply)(untouchedAdd, instance, [value]);
    }
    exports.safeAdd = safeAdd;
    const untouchedSplit = String.prototype.split;
    const untouchedStartsWith = String.prototype.startsWith;
    const untouchedEndsWith = String.prototype.endsWith;
    const untouchedSubstring = String.prototype.substring;
    const untouchedToLowerCase = String.prototype.toLowerCase;
    const untouchedToUpperCase = String.prototype.toUpperCase;
    const untouchedPadStart = String.prototype.padStart;
    const untouchedCharCodeAt = String.prototype.charCodeAt;
    function extractSplit(instance) {
        try {
            return instance.split;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractStartsWith(instance) {
        try {
            return instance.startsWith;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractEndsWith(instance) {
        try {
            return instance.endsWith;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractSubstring(instance) {
        try {
            return instance.substring;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractToLowerCase(instance) {
        try {
            return instance.toLowerCase;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractToUpperCase(instance) {
        try {
            return instance.toUpperCase;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractPadStart(instance) {
        try {
            return instance.padStart;
        }
        catch (err) {
            return undefined;
        }
    }
    function extractCharCodeAt(instance) {
        try {
            return instance.charCodeAt;
        }
        catch (err) {
            return undefined;
        }
    }
    function safeSplit(instance, ...args) {
        if (extractSplit(instance) === untouchedSplit) {
            return instance.split(...args);
        }
        return (0, apply_1.safeApply)(untouchedSplit, instance, args);
    }
    exports.safeSplit = safeSplit;
    function safeStartsWith(instance, ...args) {
        if (extractStartsWith(instance) === untouchedStartsWith) {
            return instance.startsWith(...args);
        }
        return (0, apply_1.safeApply)(untouchedStartsWith, instance, args);
    }
    exports.safeStartsWith = safeStartsWith;
    function safeEndsWith(instance, ...args) {
        if (extractEndsWith(instance) === untouchedEndsWith) {
            return instance.endsWith(...args);
        }
        return (0, apply_1.safeApply)(untouchedEndsWith, instance, args);
    }
    exports.safeEndsWith = safeEndsWith;
    function safeSubstring(instance, ...args) {
        if (extractSubstring(instance) === untouchedSubstring) {
            return instance.substring(...args);
        }
        return (0, apply_1.safeApply)(untouchedSubstring, instance, args);
    }
    exports.safeSubstring = safeSubstring;
    function safeToLowerCase(instance) {
        if (extractToLowerCase(instance) === untouchedToLowerCase) {
            return instance.toLowerCase();
        }
        return (0, apply_1.safeApply)(untouchedToLowerCase, instance, []);
    }
    exports.safeToLowerCase = safeToLowerCase;
    function safeToUpperCase(instance) {
        if (extractToUpperCase(instance) === untouchedToUpperCase) {
            return instance.toUpperCase();
        }
        return (0, apply_1.safeApply)(untouchedToUpperCase, instance, []);
    }
    exports.safeToUpperCase = safeToUpperCase;
    function safePadStart(instance, ...args) {
        if (extractPadStart(instance) === untouchedPadStart) {
            return instance.padStart(...args);
        }
        return (0, apply_1.safeApply)(untouchedPadStart, instance, args);
    }
    exports.safePadStart = safePadStart;
    function safeCharCodeAt(instance, index) {
        if (extractCharCodeAt(instance) === untouchedCharCodeAt) {
            return instance.charCodeAt(index);
        }
        return (0, apply_1.safeApply)(untouchedCharCodeAt, instance, [index]);
    }
    exports.safeCharCodeAt = safeCharCodeAt;
    const untouchedNumberToString = Number.prototype.toString;
    function extractNumberToString(instance) {
        try {
            return instance.toString;
        }
        catch (err) {
            return undefined;
        }
    }
    function safeNumberToString(instance, ...args) {
        if (extractNumberToString(instance) === untouchedNumberToString) {
            return instance.toString(...args);
        }
        return (0, apply_1.safeApply)(untouchedNumberToString, instance, args);
    }
    exports.safeNumberToString = safeNumberToString;
    const untouchedHasOwnProperty = Object.prototype.hasOwnProperty;
    const untouchedToString = Object.prototype.toString;
    function safeHasOwnProperty(instance, v) {
        return (0, apply_1.safeApply)(untouchedHasOwnProperty, instance, [v]);
    }
    exports.safeHasOwnProperty = safeHasOwnProperty;
    function safeToString(instance) {
        return (0, apply_1.safeApply)(untouchedToString, instance, []);
    }
    exports.safeToString = safeToString;

    },{"./apply":200}],202:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hash = void 0;
    const globals_1 = require("./globals");
    const crc32Table = [
        0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832,
        0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2,
        0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a,
        0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172,
        0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3,
        0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423,
        0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab,
        0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433,
        0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4,
        0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950,
        0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074,
        0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0,
        0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525,
        0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81,
        0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615,
        0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1,
        0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76,
        0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e,
        0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6,
        0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236,
        0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7,
        0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f,
        0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7,
        0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777,
        0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278,
        0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc,
        0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330,
        0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94,
        0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d,
    ];
    function hash(repr) {
        let crc = 0xffffffff;
        for (let idx = 0; idx < repr.length; ++idx) {
            const c = (0, globals_1.safeCharCodeAt)(repr, idx);
            if (c < 0x80) {
                crc = crc32Table[(crc & 0xff) ^ c] ^ (crc >> 8);
            }
            else if (c < 0x800) {
                crc = crc32Table[(crc & 0xff) ^ (192 | ((c >> 6) & 31))] ^ (crc >> 8);
                crc = crc32Table[(crc & 0xff) ^ (128 | (c & 63))] ^ (crc >> 8);
            }
            else if (c >= 0xd800 && c < 0xe000) {
                const cNext = (0, globals_1.safeCharCodeAt)(repr, ++idx);
                if (c >= 0xdc00 || cNext < 0xdc00 || cNext > 0xdfff || Number.isNaN(cNext)) {
                    idx -= 1;
                    crc = crc32Table[(crc & 0xff) ^ 0xef] ^ (crc >> 8);
                    crc = crc32Table[(crc & 0xff) ^ 0xbf] ^ (crc >> 8);
                    crc = crc32Table[(crc & 0xff) ^ 0xbd] ^ (crc >> 8);
                }
                else {
                    const c1 = (c & 1023) + 64;
                    const c2 = cNext & 1023;
                    crc = crc32Table[(crc & 0xff) ^ (240 | ((c1 >> 8) & 7))] ^ (crc >> 8);
                    crc = crc32Table[(crc & 0xff) ^ (128 | ((c1 >> 2) & 63))] ^ (crc >> 8);
                    crc = crc32Table[(crc & 0xff) ^ (128 | ((c2 >> 6) & 15) | ((c1 & 3) << 4))] ^ (crc >> 8);
                    crc = crc32Table[(crc & 0xff) ^ (128 | (c2 & 63))] ^ (crc >> 8);
                }
            }
            else {
                crc = crc32Table[(crc & 0xff) ^ (224 | ((c >> 12) & 15))] ^ (crc >> 8);
                crc = crc32Table[(crc & 0xff) ^ (128 | ((c >> 6) & 63))] ^ (crc >> 8);
                crc = crc32Table[(crc & 0xff) ^ (128 | (c & 63))] ^ (crc >> 8);
            }
        }
        return (crc | 0) + 0x80000000;
    }
    exports.hash = hash;

    },{"./globals":201}],203:[function(require,module,exports){
    (function (Buffer){(function (){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asyncStringify = exports.possiblyAsyncStringify = exports.stringify = exports.stringifyInternal = exports.hasAsyncToStringMethod = exports.asyncToStringMethod = exports.hasToStringMethod = exports.toStringMethod = void 0;
    const globals_1 = require("./globals");
    const safeArrayFrom = Array.from;
    const safeBufferIsBuffer = typeof Buffer !== 'undefined' ? Buffer.isBuffer : undefined;
    const safeJsonStringify = JSON.stringify;
    const safeNumberIsNaN = Number.isNaN;
    const safeObjectKeys = Object.keys;
    const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
    const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const safeObjectGetPrototypeOf = Object.getPrototypeOf;
    const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
    const safePositiveInfinity = Number.POSITIVE_INFINITY;
    exports.toStringMethod = Symbol('fast-check/toStringMethod');
    function hasToStringMethod(instance) {
        return (instance !== null &&
            (typeof instance === 'object' || typeof instance === 'function') &&
            exports.toStringMethod in instance &&
            typeof instance[exports.toStringMethod] === 'function');
    }
    exports.hasToStringMethod = hasToStringMethod;
    exports.asyncToStringMethod = Symbol('fast-check/asyncToStringMethod');
    function hasAsyncToStringMethod(instance) {
        return (instance !== null &&
            (typeof instance === 'object' || typeof instance === 'function') &&
            exports.asyncToStringMethod in instance &&
            typeof instance[exports.asyncToStringMethod] === 'function');
    }
    exports.hasAsyncToStringMethod = hasAsyncToStringMethod;
    const findSymbolNameRegex = /^Symbol\((.*)\)$/;
    function getSymbolDescription(s) {
        if (s.description !== undefined)
            return s.description;
        const m = findSymbolNameRegex.exec((0, globals_1.String)(s));
        return m && m[1].length ? m[1] : null;
    }
    function stringifyNumber(numValue) {
        switch (numValue) {
            case 0:
                return 1 / numValue === safeNegativeInfinity ? '-0' : '0';
            case safeNegativeInfinity:
                return 'Number.NEGATIVE_INFINITY';
            case safePositiveInfinity:
                return 'Number.POSITIVE_INFINITY';
            default:
                return numValue === numValue ? (0, globals_1.String)(numValue) : 'Number.NaN';
        }
    }
    function isSparseArray(arr) {
        let previousNumberedIndex = -1;
        for (const index in arr) {
            const numberedIndex = Number(index);
            if (numberedIndex !== previousNumberedIndex + 1)
                return true;
            previousNumberedIndex = numberedIndex;
        }
        return previousNumberedIndex + 1 !== arr.length;
    }
    function stringifyInternal(value, previousValues, getAsyncContent) {
        const currentValues = [...previousValues, value];
        if (typeof value === 'object') {
            if ((0, globals_1.safeIndexOf)(previousValues, value) !== -1) {
                return '[cyclic]';
            }
        }
        if (hasAsyncToStringMethod(value)) {
            const content = getAsyncContent(value);
            if (content.state === 'fulfilled') {
                return content.value;
            }
        }
        if (hasToStringMethod(value)) {
            try {
                return value[exports.toStringMethod]();
            }
            catch (err) {
            }
        }
        switch ((0, globals_1.safeToString)(value)) {
            case '[object Array]': {
                const arr = value;
                if (arr.length >= 50 && isSparseArray(arr)) {
                    const assignments = [];
                    for (const index in arr) {
                        if (!safeNumberIsNaN(Number(index)))
                            (0, globals_1.safePush)(assignments, `${index}:${stringifyInternal(arr[index], currentValues, getAsyncContent)}`);
                    }
                    return assignments.length !== 0
                        ? `Object.assign(Array(${arr.length}),{${(0, globals_1.safeJoin)(assignments, ',')}})`
                        : `Array(${arr.length})`;
                }
                const stringifiedArray = (0, globals_1.safeJoin)((0, globals_1.safeMap)(arr, (v) => stringifyInternal(v, currentValues, getAsyncContent)), ',');
                return arr.length === 0 || arr.length - 1 in arr ? `[${stringifiedArray}]` : `[${stringifiedArray},]`;
            }
            case '[object BigInt]':
                return `${value}n`;
            case '[object Boolean]': {
                const unboxedToString = value == true ? 'true' : 'false';
                return typeof value === 'boolean' ? unboxedToString : `new Boolean(${unboxedToString})`;
            }
            case '[object Date]': {
                const d = value;
                return safeNumberIsNaN((0, globals_1.safeGetTime)(d)) ? `new Date(NaN)` : `new Date(${safeJsonStringify((0, globals_1.safeToISOString)(d))})`;
            }
            case '[object Map]':
                return `new Map(${stringifyInternal(Array.from(value), currentValues, getAsyncContent)})`;
            case '[object Null]':
                return `null`;
            case '[object Number]':
                return typeof value === 'number' ? stringifyNumber(value) : `new Number(${stringifyNumber(Number(value))})`;
            case '[object Object]': {
                try {
                    const toStringAccessor = value.toString;
                    if (typeof toStringAccessor === 'function' && toStringAccessor !== Object.prototype.toString) {
                        return value.toString();
                    }
                }
                catch (err) {
                    return '[object Object]';
                }
                const mapper = (k) => `${k === '__proto__'
                    ? '["__proto__"]'
                    : typeof k === 'symbol'
                        ? `[${stringifyInternal(k, currentValues, getAsyncContent)}]`
                        : safeJsonStringify(k)}:${stringifyInternal(value[k], currentValues, getAsyncContent)}`;
                const stringifiedProperties = [
                    ...(0, globals_1.safeMap)(safeObjectKeys(value), mapper),
                    ...(0, globals_1.safeMap)((0, globals_1.safeFilter)(safeObjectGetOwnPropertySymbols(value), (s) => {
                        const descriptor = safeObjectGetOwnPropertyDescriptor(value, s);
                        return descriptor && descriptor.enumerable;
                    }), mapper),
                ];
                const rawRepr = '{' + (0, globals_1.safeJoin)(stringifiedProperties, ',') + '}';
                if (safeObjectGetPrototypeOf(value) === null) {
                    return rawRepr === '{}' ? 'Object.create(null)' : `Object.assign(Object.create(null),${rawRepr})`;
                }
                return rawRepr;
            }
            case '[object Set]':
                return `new Set(${stringifyInternal(Array.from(value), currentValues, getAsyncContent)})`;
            case '[object String]':
                return typeof value === 'string' ? safeJsonStringify(value) : `new String(${safeJsonStringify(value)})`;
            case '[object Symbol]': {
                const s = value;
                if (Symbol.keyFor(s) !== undefined) {
                    return `Symbol.for(${safeJsonStringify(Symbol.keyFor(s))})`;
                }
                const desc = getSymbolDescription(s);
                if (desc === null) {
                    return 'Symbol()';
                }
                const knownSymbol = desc.startsWith('Symbol.') && Symbol[desc.substring(7)];
                return s === knownSymbol ? desc : `Symbol(${safeJsonStringify(desc)})`;
            }
            case '[object Promise]': {
                const promiseContent = getAsyncContent(value);
                switch (promiseContent.state) {
                    case 'fulfilled':
                        return `Promise.resolve(${stringifyInternal(promiseContent.value, currentValues, getAsyncContent)})`;
                    case 'rejected':
                        return `Promise.reject(${stringifyInternal(promiseContent.value, currentValues, getAsyncContent)})`;
                    case 'pending':
                        return `new Promise(() => {/*pending*/})`;
                    case 'unknown':
                    default:
                        return `new Promise(() => {/*unknown*/})`;
                }
            }
            case '[object Error]':
                if (value instanceof Error) {
                    return `new Error(${stringifyInternal(value.message, currentValues, getAsyncContent)})`;
                }
                break;
            case '[object Undefined]':
                return `undefined`;
            case '[object Int8Array]':
            case '[object Uint8Array]':
            case '[object Uint8ClampedArray]':
            case '[object Int16Array]':
            case '[object Uint16Array]':
            case '[object Int32Array]':
            case '[object Uint32Array]':
            case '[object Float32Array]':
            case '[object Float64Array]':
            case '[object BigInt64Array]':
            case '[object BigUint64Array]': {
                if (typeof safeBufferIsBuffer === 'function' && safeBufferIsBuffer(value)) {
                    return `Buffer.from(${stringifyInternal(safeArrayFrom(value.values()), currentValues, getAsyncContent)})`;
                }
                const valuePrototype = safeObjectGetPrototypeOf(value);
                const className = valuePrototype && valuePrototype.constructor && valuePrototype.constructor.name;
                if (typeof className === 'string') {
                    const typedArray = value;
                    const valuesFromTypedArr = typedArray.values();
                    return `${className}.from(${stringifyInternal(safeArrayFrom(valuesFromTypedArr), currentValues, getAsyncContent)})`;
                }
                break;
            }
        }
        try {
            return value.toString();
        }
        catch (_a) {
            return (0, globals_1.safeToString)(value);
        }
    }
    exports.stringifyInternal = stringifyInternal;
    function stringify(value) {
        return stringifyInternal(value, [], () => ({ state: 'unknown', value: undefined }));
    }
    exports.stringify = stringify;
    function possiblyAsyncStringify(value) {
        const stillPendingMarker = Symbol();
        const pendingPromisesForCache = [];
        const cache = new Map();
        function createDelay0() {
            let handleId = null;
            const cancel = () => {
                if (handleId !== null) {
                    clearTimeout(handleId);
                }
            };
            const delay = new Promise((resolve) => {
                handleId = setTimeout(() => {
                    handleId = null;
                    resolve(stillPendingMarker);
                }, 0);
            });
            return { delay, cancel };
        }
        const unknownState = { state: 'unknown', value: undefined };
        const getAsyncContent = function getAsyncContent(data) {
            const cacheKey = data;
            if (cache.has(cacheKey)) {
                return cache.get(cacheKey);
            }
            const delay0 = createDelay0();
            const p = exports.asyncToStringMethod in data
                ? Promise.resolve().then(() => data[exports.asyncToStringMethod]())
                : data;
            p.catch(() => { });
            pendingPromisesForCache.push(Promise.race([p, delay0.delay]).then((successValue) => {
                if (successValue === stillPendingMarker)
                    cache.set(cacheKey, { state: 'pending', value: undefined });
                else
                    cache.set(cacheKey, { state: 'fulfilled', value: successValue });
                delay0.cancel();
            }, (errorValue) => {
                cache.set(cacheKey, { state: 'rejected', value: errorValue });
                delay0.cancel();
            }));
            cache.set(cacheKey, unknownState);
            return unknownState;
        };
        function loop() {
            const stringifiedValue = stringifyInternal(value, [], getAsyncContent);
            if (pendingPromisesForCache.length === 0) {
                return stringifiedValue;
            }
            return Promise.all(pendingPromisesForCache.splice(0)).then(loop);
        }
        return loop();
    }
    exports.possiblyAsyncStringify = possiblyAsyncStringify;
    async function asyncStringify(value) {
        return Promise.resolve(possiblyAsyncStringify(value));
    }
    exports.asyncStringify = asyncStringify;

    }).call(this)}).call(this,require("buffer").Buffer)
    },{"./globals":201,"buffer":3}],204:[function(require,module,exports){
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var nBits = -7
      var i = isLE ? (nBytes - 1) : 0
      var d = isLE ? -1 : 1
      var s = buffer[offset + i]

      i += d

      e = s & ((1 << (-nBits)) - 1)
      s >>= (-nBits)
      nBits += eLen
      for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1)
      e >>= (-nBits)
      nBits += mLen
      for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen)
        e = e - eBias
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
      var i = isLE ? 0 : (nBytes - 1)
      var d = isLE ? 1 : -1
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

      value = Math.abs(value)

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0
        e = eMax
      } else {
        e = Math.floor(Math.log(value) / Math.LN2)
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--
          c *= 2
        }
        if (e + eBias >= 1) {
          value += rt / c
        } else {
          value += rt * Math.pow(2, 1 - eBias)
        }
        if (value * c >= 2) {
          e++
          c /= 2
        }

        if (e + eBias >= eMax) {
          m = 0
          e = eMax
        } else if (e + eBias >= 1) {
          m = ((value * c) - 1) * Math.pow(2, mLen)
          e = e + eBias
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
          e = 0
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m
      eLen += mLen
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128
    }

    },{}],205:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.uniformArrayIntDistribution = void 0;
    var UnsafeUniformArrayIntDistribution_1 = require("./UnsafeUniformArrayIntDistribution");
    function uniformArrayIntDistribution(from, to, rng) {
        if (rng != null) {
            var nextRng = rng.clone();
            return [(0, UnsafeUniformArrayIntDistribution_1.unsafeUniformArrayIntDistribution)(from, to, nextRng), nextRng];
        }
        return function (rng) {
            var nextRng = rng.clone();
            return [(0, UnsafeUniformArrayIntDistribution_1.unsafeUniformArrayIntDistribution)(from, to, nextRng), nextRng];
        };
    }
    exports.uniformArrayIntDistribution = uniformArrayIntDistribution;

    },{"./UnsafeUniformArrayIntDistribution":208}],206:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.uniformBigIntDistribution = void 0;
    var UnsafeUniformBigIntDistribution_1 = require("./UnsafeUniformBigIntDistribution");
    function uniformBigIntDistribution(from, to, rng) {
        if (rng != null) {
            var nextRng = rng.clone();
            return [(0, UnsafeUniformBigIntDistribution_1.unsafeUniformBigIntDistribution)(from, to, nextRng), nextRng];
        }
        return function (rng) {
            var nextRng = rng.clone();
            return [(0, UnsafeUniformBigIntDistribution_1.unsafeUniformBigIntDistribution)(from, to, nextRng), nextRng];
        };
    }
    exports.uniformBigIntDistribution = uniformBigIntDistribution;

    },{"./UnsafeUniformBigIntDistribution":209}],207:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.uniformIntDistribution = void 0;
    var UnsafeUniformIntDistribution_1 = require("./UnsafeUniformIntDistribution");
    function uniformIntDistribution(from, to, rng) {
        if (rng != null) {
            var nextRng = rng.clone();
            return [(0, UnsafeUniformIntDistribution_1.unsafeUniformIntDistribution)(from, to, nextRng), nextRng];
        }
        return function (rng) {
            var nextRng = rng.clone();
            return [(0, UnsafeUniformIntDistribution_1.unsafeUniformIntDistribution)(from, to, nextRng), nextRng];
        };
    }
    exports.uniformIntDistribution = uniformIntDistribution;

    },{"./UnsafeUniformIntDistribution":210}],208:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.unsafeUniformArrayIntDistribution = void 0;
    var ArrayInt_1 = require("./internals/ArrayInt");
    var UnsafeUniformArrayIntDistributionInternal_1 = require("./internals/UnsafeUniformArrayIntDistributionInternal");
    function unsafeUniformArrayIntDistribution(from, to, rng) {
        var rangeSize = (0, ArrayInt_1.trimArrayIntInplace)((0, ArrayInt_1.addOneToPositiveArrayInt)((0, ArrayInt_1.substractArrayIntToNew)(to, from)));
        var emptyArrayIntData = rangeSize.data.slice(0);
        var g = (0, UnsafeUniformArrayIntDistributionInternal_1.unsafeUniformArrayIntDistributionInternal)(emptyArrayIntData, rangeSize.data, rng);
        return (0, ArrayInt_1.trimArrayIntInplace)((0, ArrayInt_1.addArrayIntToNew)({ sign: 1, data: g }, from));
    }
    exports.unsafeUniformArrayIntDistribution = unsafeUniformArrayIntDistribution;

    },{"./internals/ArrayInt":211,"./internals/UnsafeUniformArrayIntDistributionInternal":212}],209:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.unsafeUniformBigIntDistribution = void 0;
    var SBigInt = typeof BigInt !== 'undefined' ? BigInt : undefined;
    function unsafeUniformBigIntDistribution(from, to, rng) {
        var diff = to - from + SBigInt(1);
        var MinRng = SBigInt(rng.min());
        var NumValues = SBigInt(rng.max() - rng.min() + 1);
        var FinalNumValues = NumValues;
        var NumIterations = SBigInt(1);
        while (FinalNumValues < diff) {
            FinalNumValues *= NumValues;
            ++NumIterations;
        }
        var MaxAcceptedRandom = FinalNumValues - (FinalNumValues % diff);
        while (true) {
            var value = SBigInt(0);
            for (var num = SBigInt(0); num !== NumIterations; ++num) {
                var out = rng.unsafeNext();
                value = NumValues * value + (SBigInt(out) - MinRng);
            }
            if (value < MaxAcceptedRandom) {
                var inDiff = value % diff;
                return inDiff + from;
            }
        }
    }
    exports.unsafeUniformBigIntDistribution = unsafeUniformBigIntDistribution;

    },{}],210:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.unsafeUniformIntDistribution = void 0;
    var UnsafeUniformIntDistributionInternal_1 = require("./internals/UnsafeUniformIntDistributionInternal");
    var ArrayInt_1 = require("./internals/ArrayInt");
    var UnsafeUniformArrayIntDistributionInternal_1 = require("./internals/UnsafeUniformArrayIntDistributionInternal");
    var safeNumberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
    var sharedA = { sign: 1, data: [0, 0] };
    var sharedB = { sign: 1, data: [0, 0] };
    var sharedC = { sign: 1, data: [0, 0] };
    var sharedData = [0, 0];
    function uniformLargeIntInternal(from, to, rangeSize, rng) {
        var rangeSizeArrayIntValue = rangeSize <= safeNumberMaxSafeInteger
            ? (0, ArrayInt_1.fromNumberToArrayInt64)(sharedC, rangeSize)
            : (0, ArrayInt_1.substractArrayInt64)(sharedC, (0, ArrayInt_1.fromNumberToArrayInt64)(sharedA, to), (0, ArrayInt_1.fromNumberToArrayInt64)(sharedB, from));
        if (rangeSizeArrayIntValue.data[1] === 0xffffffff) {
            rangeSizeArrayIntValue.data[0] += 1;
            rangeSizeArrayIntValue.data[1] = 0;
        }
        else {
            rangeSizeArrayIntValue.data[1] += 1;
        }
        (0, UnsafeUniformArrayIntDistributionInternal_1.unsafeUniformArrayIntDistributionInternal)(sharedData, rangeSizeArrayIntValue.data, rng);
        return sharedData[0] * 0x100000000 + sharedData[1] + from;
    }
    function unsafeUniformIntDistribution(from, to, rng) {
        var rangeSize = to - from;
        if (rangeSize <= 0xffffffff) {
            var g = (0, UnsafeUniformIntDistributionInternal_1.unsafeUniformIntDistributionInternal)(rangeSize + 1, rng);
            return g + from;
        }
        return uniformLargeIntInternal(from, to, rangeSize, rng);
    }
    exports.unsafeUniformIntDistribution = unsafeUniformIntDistribution;

    },{"./internals/ArrayInt":211,"./internals/UnsafeUniformArrayIntDistributionInternal":212,"./internals/UnsafeUniformIntDistributionInternal":213}],211:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.substractArrayInt64 = exports.fromNumberToArrayInt64 = exports.trimArrayIntInplace = exports.substractArrayIntToNew = exports.addOneToPositiveArrayInt = exports.addArrayIntToNew = void 0;
    function addArrayIntToNew(arrayIntA, arrayIntB) {
        if (arrayIntA.sign !== arrayIntB.sign) {
            return substractArrayIntToNew(arrayIntA, { sign: -arrayIntB.sign, data: arrayIntB.data });
        }
        var data = [];
        var reminder = 0;
        var dataA = arrayIntA.data;
        var dataB = arrayIntB.data;
        for (var indexA = dataA.length - 1, indexB = dataB.length - 1; indexA >= 0 || indexB >= 0; --indexA, --indexB) {
            var vA = indexA >= 0 ? dataA[indexA] : 0;
            var vB = indexB >= 0 ? dataB[indexB] : 0;
            var current = vA + vB + reminder;
            data.push(current >>> 0);
            reminder = ~~(current / 0x100000000);
        }
        if (reminder !== 0) {
            data.push(reminder);
        }
        return { sign: arrayIntA.sign, data: data.reverse() };
    }
    exports.addArrayIntToNew = addArrayIntToNew;
    function addOneToPositiveArrayInt(arrayInt) {
        arrayInt.sign = 1;
        var data = arrayInt.data;
        for (var index = data.length - 1; index >= 0; --index) {
            if (data[index] === 0xffffffff) {
                data[index] = 0;
            }
            else {
                data[index] += 1;
                return arrayInt;
            }
        }
        data.unshift(1);
        return arrayInt;
    }
    exports.addOneToPositiveArrayInt = addOneToPositiveArrayInt;
    function isStrictlySmaller(dataA, dataB) {
        var maxLength = Math.max(dataA.length, dataB.length);
        for (var index = 0; index < maxLength; ++index) {
            var indexA = index + dataA.length - maxLength;
            var indexB = index + dataB.length - maxLength;
            var vA = indexA >= 0 ? dataA[indexA] : 0;
            var vB = indexB >= 0 ? dataB[indexB] : 0;
            if (vA < vB)
                return true;
            if (vA > vB)
                return false;
        }
        return false;
    }
    function substractArrayIntToNew(arrayIntA, arrayIntB) {
        if (arrayIntA.sign !== arrayIntB.sign) {
            return addArrayIntToNew(arrayIntA, { sign: -arrayIntB.sign, data: arrayIntB.data });
        }
        var dataA = arrayIntA.data;
        var dataB = arrayIntB.data;
        if (isStrictlySmaller(dataA, dataB)) {
            var out = substractArrayIntToNew(arrayIntB, arrayIntA);
            out.sign = -out.sign;
            return out;
        }
        var data = [];
        var reminder = 0;
        for (var indexA = dataA.length - 1, indexB = dataB.length - 1; indexA >= 0 || indexB >= 0; --indexA, --indexB) {
            var vA = indexA >= 0 ? dataA[indexA] : 0;
            var vB = indexB >= 0 ? dataB[indexB] : 0;
            var current = vA - vB - reminder;
            data.push(current >>> 0);
            reminder = current < 0 ? 1 : 0;
        }
        return { sign: arrayIntA.sign, data: data.reverse() };
    }
    exports.substractArrayIntToNew = substractArrayIntToNew;
    function trimArrayIntInplace(arrayInt) {
        var data = arrayInt.data;
        var firstNonZero = 0;
        for (; firstNonZero !== data.length && data[firstNonZero] === 0; ++firstNonZero) { }
        if (firstNonZero === data.length) {
            arrayInt.sign = 1;
            arrayInt.data = [0];
            return arrayInt;
        }
        data.splice(0, firstNonZero);
        return arrayInt;
    }
    exports.trimArrayIntInplace = trimArrayIntInplace;
    function fromNumberToArrayInt64(out, n) {
        if (n < 0) {
            var posN = -n;
            out.sign = -1;
            out.data[0] = ~~(posN / 0x100000000);
            out.data[1] = posN >>> 0;
        }
        else {
            out.sign = 1;
            out.data[0] = ~~(n / 0x100000000);
            out.data[1] = n >>> 0;
        }
        return out;
    }
    exports.fromNumberToArrayInt64 = fromNumberToArrayInt64;
    function substractArrayInt64(out, arrayIntA, arrayIntB) {
        var lowA = arrayIntA.data[1];
        var highA = arrayIntA.data[0];
        var signA = arrayIntA.sign;
        var lowB = arrayIntB.data[1];
        var highB = arrayIntB.data[0];
        var signB = arrayIntB.sign;
        out.sign = 1;
        if (signA === 1 && signB === -1) {
            var low_1 = lowA + lowB;
            var high = highA + highB + (low_1 > 0xffffffff ? 1 : 0);
            out.data[0] = high >>> 0;
            out.data[1] = low_1 >>> 0;
            return out;
        }
        var lowFirst = lowA;
        var highFirst = highA;
        var lowSecond = lowB;
        var highSecond = highB;
        if (signA === -1) {
            lowFirst = lowB;
            highFirst = highB;
            lowSecond = lowA;
            highSecond = highA;
        }
        var reminderLow = 0;
        var low = lowFirst - lowSecond;
        if (low < 0) {
            reminderLow = 1;
            low = low >>> 0;
        }
        out.data[0] = highFirst - highSecond - reminderLow;
        out.data[1] = low;
        return out;
    }
    exports.substractArrayInt64 = substractArrayInt64;

    },{}],212:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.unsafeUniformArrayIntDistributionInternal = void 0;
    var UnsafeUniformIntDistributionInternal_1 = require("./UnsafeUniformIntDistributionInternal");
    function unsafeUniformArrayIntDistributionInternal(out, rangeSize, rng) {
        var rangeLength = rangeSize.length;
        while (true) {
            for (var index = 0; index !== rangeLength; ++index) {
                var indexRangeSize = index === 0 ? rangeSize[0] + 1 : 0x100000000;
                var g = (0, UnsafeUniformIntDistributionInternal_1.unsafeUniformIntDistributionInternal)(indexRangeSize, rng);
                out[index] = g;
            }
            for (var index = 0; index !== rangeLength; ++index) {
                var current = out[index];
                var currentInRange = rangeSize[index];
                if (current < currentInRange) {
                    return out;
                }
                else if (current > currentInRange) {
                    break;
                }
            }
        }
    }
    exports.unsafeUniformArrayIntDistributionInternal = unsafeUniformArrayIntDistributionInternal;

    },{"./UnsafeUniformIntDistributionInternal":213}],213:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.unsafeUniformIntDistributionInternal = void 0;
    function unsafeUniformIntDistributionInternal(rangeSize, rng) {
        var MinRng = rng.min();
        var NumValues = rng.max() - rng.min() + 1;
        if (rangeSize <= NumValues) {
            var nrng_1 = rng;
            var MaxAllowed = NumValues - (NumValues % rangeSize);
            while (true) {
                var out = nrng_1.unsafeNext();
                var deltaV = out - MinRng;
                if (deltaV < MaxAllowed) {
                    return deltaV % rangeSize;
                }
            }
        }
        var FinalNumValues = NumValues * NumValues;
        var NumIterations = 2;
        while (FinalNumValues < rangeSize) {
            FinalNumValues *= NumValues;
            ++NumIterations;
        }
        var MaxAcceptedRandom = rangeSize * Math.floor((1 * FinalNumValues) / rangeSize);
        var nrng = rng;
        while (true) {
            var value = 0;
            for (var num = 0; num !== NumIterations; ++num) {
                var out = nrng.unsafeNext();
                value = NumValues * value + (out - MinRng);
            }
            if (value < MaxAcceptedRandom) {
                var inDiff = value - rangeSize * Math.floor((1 * value) / rangeSize);
                return inDiff;
            }
        }
    }
    exports.unsafeUniformIntDistributionInternal = unsafeUniformIntDistributionInternal;

    },{}],214:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.congruential32 = exports.congruential = void 0;
    var MULTIPLIER = 0x000343fd;
    var INCREMENT = 0x00269ec3;
    var MASK = 0xffffffff;
    var MASK_2 = (1 << 31) - 1;
    var computeNextSeed = function (seed) {
        return (seed * MULTIPLIER + INCREMENT) & MASK;
    };
    var computeValueFromNextSeed = function (nextseed) {
        return (nextseed & MASK_2) >> 16;
    };
    var LinearCongruential = (function () {
        function LinearCongruential(seed) {
            this.seed = seed;
        }
        LinearCongruential.prototype.min = function () {
            return LinearCongruential.min;
        };
        LinearCongruential.prototype.max = function () {
            return LinearCongruential.max;
        };
        LinearCongruential.prototype.clone = function () {
            return new LinearCongruential(this.seed);
        };
        LinearCongruential.prototype.next = function () {
            var nextRng = new LinearCongruential(this.seed);
            var out = nextRng.unsafeNext();
            return [out, nextRng];
        };
        LinearCongruential.prototype.unsafeNext = function () {
            this.seed = computeNextSeed(this.seed);
            return computeValueFromNextSeed(this.seed);
        };
        LinearCongruential.min = 0;
        LinearCongruential.max = Math.pow(2, 15) - 1;
        return LinearCongruential;
    }());
    var LinearCongruential32 = (function () {
        function LinearCongruential32(seed) {
            this.seed = seed;
        }
        LinearCongruential32.prototype.min = function () {
            return LinearCongruential32.min;
        };
        LinearCongruential32.prototype.max = function () {
            return LinearCongruential32.max;
        };
        LinearCongruential32.prototype.clone = function () {
            return new LinearCongruential32(this.seed);
        };
        LinearCongruential32.prototype.next = function () {
            var nextRng = new LinearCongruential32(this.seed);
            var out = nextRng.unsafeNext();
            return [out, nextRng];
        };
        LinearCongruential32.prototype.unsafeNext = function () {
            var s1 = computeNextSeed(this.seed);
            var v1 = computeValueFromNextSeed(s1);
            var s2 = computeNextSeed(s1);
            var v2 = computeValueFromNextSeed(s2);
            this.seed = computeNextSeed(s2);
            var v3 = computeValueFromNextSeed(this.seed);
            var vnext = v3 + ((v2 + (v1 << 15)) << 15);
            return ((vnext + 0x80000000) | 0) + 0x80000000;
        };
        LinearCongruential32.min = 0;
        LinearCongruential32.max = 0xffffffff;
        return LinearCongruential32;
    }());
    var congruential = function (seed) {
        return new LinearCongruential(seed);
    };
    exports.congruential = congruential;
    var congruential32 = function (seed) {
        return new LinearCongruential32(seed);
    };
    exports.congruential32 = congruential32;

    },{}],215:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    var MersenneTwister = (function () {
        function MersenneTwister(states, index) {
            this.states = states;
            this.index = index;
        }
        MersenneTwister.twist = function (prev) {
            var mt = prev.slice();
            for (var idx = 0; idx !== MersenneTwister.N - MersenneTwister.M; ++idx) {
                var y_1 = (mt[idx] & MersenneTwister.MASK_UPPER) + (mt[idx + 1] & MersenneTwister.MASK_LOWER);
                mt[idx] = mt[idx + MersenneTwister.M] ^ (y_1 >>> 1) ^ (-(y_1 & 1) & MersenneTwister.A);
            }
            for (var idx = MersenneTwister.N - MersenneTwister.M; idx !== MersenneTwister.N - 1; ++idx) {
                var y_2 = (mt[idx] & MersenneTwister.MASK_UPPER) + (mt[idx + 1] & MersenneTwister.MASK_LOWER);
                mt[idx] = mt[idx + MersenneTwister.M - MersenneTwister.N] ^ (y_2 >>> 1) ^ (-(y_2 & 1) & MersenneTwister.A);
            }
            var y = (mt[MersenneTwister.N - 1] & MersenneTwister.MASK_UPPER) + (mt[0] & MersenneTwister.MASK_LOWER);
            mt[MersenneTwister.N - 1] = mt[MersenneTwister.M - 1] ^ (y >>> 1) ^ (-(y & 1) & MersenneTwister.A);
            return mt;
        };
        MersenneTwister.seeded = function (seed) {
            var out = Array(MersenneTwister.N);
            out[0] = seed;
            for (var idx = 1; idx !== MersenneTwister.N; ++idx) {
                var xored = out[idx - 1] ^ (out[idx - 1] >>> 30);
                out[idx] = (Math.imul(MersenneTwister.F, xored) + idx) | 0;
            }
            return out;
        };
        MersenneTwister.from = function (seed) {
            return new MersenneTwister(MersenneTwister.twist(MersenneTwister.seeded(seed)), 0);
        };
        MersenneTwister.prototype.min = function () {
            return MersenneTwister.min;
        };
        MersenneTwister.prototype.max = function () {
            return MersenneTwister.max;
        };
        MersenneTwister.prototype.clone = function () {
            return new MersenneTwister(this.states, this.index);
        };
        MersenneTwister.prototype.next = function () {
            var nextRng = new MersenneTwister(this.states, this.index);
            var out = nextRng.unsafeNext();
            return [out, nextRng];
        };
        MersenneTwister.prototype.unsafeNext = function () {
            var y = this.states[this.index];
            y ^= this.states[this.index] >>> MersenneTwister.U;
            y ^= (y << MersenneTwister.S) & MersenneTwister.B;
            y ^= (y << MersenneTwister.T) & MersenneTwister.C;
            y ^= y >>> MersenneTwister.L;
            if (++this.index >= MersenneTwister.N) {
                this.states = MersenneTwister.twist(this.states);
                this.index = 0;
            }
            return y >>> 0;
        };
        MersenneTwister.min = 0;
        MersenneTwister.max = 0xffffffff;
        MersenneTwister.N = 624;
        MersenneTwister.M = 397;
        MersenneTwister.R = 31;
        MersenneTwister.A = 0x9908b0df;
        MersenneTwister.F = 1812433253;
        MersenneTwister.U = 11;
        MersenneTwister.S = 7;
        MersenneTwister.B = 0x9d2c5680;
        MersenneTwister.T = 15;
        MersenneTwister.C = 0xefc60000;
        MersenneTwister.L = 18;
        MersenneTwister.MASK_LOWER = Math.pow(2, MersenneTwister.R) - 1;
        MersenneTwister.MASK_UPPER = Math.pow(2, MersenneTwister.R);
        return MersenneTwister;
    }());
    function default_1(seed) {
        return MersenneTwister.from(seed);
    }
    exports["default"] = default_1;

    },{}],216:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.skipN = exports.unsafeSkipN = exports.generateN = exports.unsafeGenerateN = void 0;
    function unsafeGenerateN(rng, num) {
        var out = [];
        for (var idx = 0; idx != num; ++idx) {
            out.push(rng.unsafeNext());
        }
        return out;
    }
    exports.unsafeGenerateN = unsafeGenerateN;
    function generateN(rng, num) {
        var nextRng = rng.clone();
        var out = unsafeGenerateN(nextRng, num);
        return [out, nextRng];
    }
    exports.generateN = generateN;
    function unsafeSkipN(rng, num) {
        for (var idx = 0; idx != num; ++idx) {
            rng.unsafeNext();
        }
    }
    exports.unsafeSkipN = unsafeSkipN;
    function skipN(rng, num) {
        var nextRng = rng.clone();
        unsafeSkipN(nextRng, num);
        return nextRng;
    }
    exports.skipN = skipN;

    },{}],217:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.xorshift128plus = void 0;
    var XorShift128Plus = (function () {
        function XorShift128Plus(s01, s00, s11, s10) {
            this.s01 = s01;
            this.s00 = s00;
            this.s11 = s11;
            this.s10 = s10;
        }
        XorShift128Plus.prototype.min = function () {
            return -0x80000000;
        };
        XorShift128Plus.prototype.max = function () {
            return 0x7fffffff;
        };
        XorShift128Plus.prototype.clone = function () {
            return new XorShift128Plus(this.s01, this.s00, this.s11, this.s10);
        };
        XorShift128Plus.prototype.next = function () {
            var nextRng = new XorShift128Plus(this.s01, this.s00, this.s11, this.s10);
            var out = nextRng.unsafeNext();
            return [out, nextRng];
        };
        XorShift128Plus.prototype.unsafeNext = function () {
            var a0 = this.s00 ^ (this.s00 << 23);
            var a1 = this.s01 ^ ((this.s01 << 23) | (this.s00 >>> 9));
            var b0 = a0 ^ this.s10 ^ ((a0 >>> 18) | (a1 << 14)) ^ ((this.s10 >>> 5) | (this.s11 << 27));
            var b1 = a1 ^ this.s11 ^ (a1 >>> 18) ^ (this.s11 >>> 5);
            var out = (this.s00 + this.s10) | 0;
            this.s01 = this.s11;
            this.s00 = this.s10;
            this.s11 = b1;
            this.s10 = b0;
            return out;
        };
        XorShift128Plus.prototype.jump = function () {
            var nextRng = new XorShift128Plus(this.s01, this.s00, this.s11, this.s10);
            nextRng.unsafeJump();
            return nextRng;
        };
        XorShift128Plus.prototype.unsafeJump = function () {
            var ns01 = 0;
            var ns00 = 0;
            var ns11 = 0;
            var ns10 = 0;
            var jump = [0x635d2dff, 0x8a5cd789, 0x5c472f96, 0x121fd215];
            for (var i = 0; i !== 4; ++i) {
                for (var mask = 1; mask; mask <<= 1) {
                    if (jump[i] & mask) {
                        ns01 ^= this.s01;
                        ns00 ^= this.s00;
                        ns11 ^= this.s11;
                        ns10 ^= this.s10;
                    }
                    this.unsafeNext();
                }
            }
            this.s01 = ns01;
            this.s00 = ns00;
            this.s11 = ns11;
            this.s10 = ns10;
        };
        return XorShift128Plus;
    }());
    var xorshift128plus = function (seed) {
        return new XorShift128Plus(-1, ~seed, seed | 0, 0);
    };
    exports.xorshift128plus = xorshift128plus;

    },{}],218:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.xoroshiro128plus = void 0;
    var XoroShiro128Plus = (function () {
        function XoroShiro128Plus(s01, s00, s11, s10) {
            this.s01 = s01;
            this.s00 = s00;
            this.s11 = s11;
            this.s10 = s10;
        }
        XoroShiro128Plus.prototype.min = function () {
            return -0x80000000;
        };
        XoroShiro128Plus.prototype.max = function () {
            return 0x7fffffff;
        };
        XoroShiro128Plus.prototype.clone = function () {
            return new XoroShiro128Plus(this.s01, this.s00, this.s11, this.s10);
        };
        XoroShiro128Plus.prototype.next = function () {
            var nextRng = new XoroShiro128Plus(this.s01, this.s00, this.s11, this.s10);
            var out = nextRng.unsafeNext();
            return [out, nextRng];
        };
        XoroShiro128Plus.prototype.unsafeNext = function () {
            var out = (this.s00 + this.s10) | 0;
            var a0 = this.s10 ^ this.s00;
            var a1 = this.s11 ^ this.s01;
            var s00 = this.s00;
            var s01 = this.s01;
            this.s00 = (s00 << 24) ^ (s01 >>> 8) ^ a0 ^ (a0 << 16);
            this.s01 = (s01 << 24) ^ (s00 >>> 8) ^ a1 ^ ((a1 << 16) | (a0 >>> 16));
            this.s10 = (a1 << 5) ^ (a0 >>> 27);
            this.s11 = (a0 << 5) ^ (a1 >>> 27);
            return out;
        };
        XoroShiro128Plus.prototype.jump = function () {
            var nextRng = new XoroShiro128Plus(this.s01, this.s00, this.s11, this.s10);
            nextRng.unsafeJump();
            return nextRng;
        };
        XoroShiro128Plus.prototype.unsafeJump = function () {
            var ns01 = 0;
            var ns00 = 0;
            var ns11 = 0;
            var ns10 = 0;
            var jump = [0xd8f554a5, 0xdf900294, 0x4b3201fc, 0x170865df];
            for (var i = 0; i !== 4; ++i) {
                for (var mask = 1; mask; mask <<= 1) {
                    if (jump[i] & mask) {
                        ns01 ^= this.s01;
                        ns00 ^= this.s00;
                        ns11 ^= this.s11;
                        ns10 ^= this.s10;
                    }
                    this.unsafeNext();
                }
            }
            this.s01 = ns01;
            this.s00 = ns00;
            this.s11 = ns11;
            this.s10 = ns10;
        };
        return XoroShiro128Plus;
    }());
    var xoroshiro128plus = function (seed) {
        return new XoroShiro128Plus(-1, ~seed, seed | 0, 0);
    };
    exports.xoroshiro128plus = xoroshiro128plus;

    },{}],219:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    exports.unsafeUniformIntDistribution = exports.unsafeUniformBigIntDistribution = exports.unsafeUniformArrayIntDistribution = exports.uniformIntDistribution = exports.uniformBigIntDistribution = exports.uniformArrayIntDistribution = exports.xoroshiro128plus = exports.xorshift128plus = exports.mersenne = exports.congruential32 = exports.congruential = exports.unsafeSkipN = exports.unsafeGenerateN = exports.skipN = exports.generateN = exports.__commitHash = exports.__version = exports.__type = void 0;
    var RandomGenerator_1 = require("./generator/RandomGenerator");
    exports.generateN = RandomGenerator_1.generateN;
    exports.skipN = RandomGenerator_1.skipN;
    exports.unsafeGenerateN = RandomGenerator_1.unsafeGenerateN;
    exports.unsafeSkipN = RandomGenerator_1.unsafeSkipN;
    var LinearCongruential_1 = require("./generator/LinearCongruential");
    exports.congruential = LinearCongruential_1.congruential;
    exports.congruential32 = LinearCongruential_1.congruential32;
    var MersenneTwister_1 = require("./generator/MersenneTwister");
    exports.mersenne = MersenneTwister_1["default"];
    var XorShift_1 = require("./generator/XorShift");
    exports.xorshift128plus = XorShift_1.xorshift128plus;
    var XoroShiro_1 = require("./generator/XoroShiro");
    exports.xoroshiro128plus = XoroShiro_1.xoroshiro128plus;
    var UniformArrayIntDistribution_1 = require("./distribution/UniformArrayIntDistribution");
    exports.uniformArrayIntDistribution = UniformArrayIntDistribution_1.uniformArrayIntDistribution;
    var UniformBigIntDistribution_1 = require("./distribution/UniformBigIntDistribution");
    exports.uniformBigIntDistribution = UniformBigIntDistribution_1.uniformBigIntDistribution;
    var UniformIntDistribution_1 = require("./distribution/UniformIntDistribution");
    exports.uniformIntDistribution = UniformIntDistribution_1.uniformIntDistribution;
    var UnsafeUniformArrayIntDistribution_1 = require("./distribution/UnsafeUniformArrayIntDistribution");
    exports.unsafeUniformArrayIntDistribution = UnsafeUniformArrayIntDistribution_1.unsafeUniformArrayIntDistribution;
    var UnsafeUniformBigIntDistribution_1 = require("./distribution/UnsafeUniformBigIntDistribution");
    exports.unsafeUniformBigIntDistribution = UnsafeUniformBigIntDistribution_1.unsafeUniformBigIntDistribution;
    var UnsafeUniformIntDistribution_1 = require("./distribution/UnsafeUniformIntDistribution");
    exports.unsafeUniformIntDistribution = UnsafeUniformIntDistribution_1.unsafeUniformIntDistribution;
    var __type = 'commonjs';
    exports.__type = __type;
    var __version = '5.0.3';
    exports.__version = __version;
    var __commitHash = 'f95aa1f9a3f4c9f9820eb2e7a2d94bbc2d3b78c1';
    exports.__commitHash = __commitHash;

    },{"./distribution/UniformArrayIntDistribution":205,"./distribution/UniformBigIntDistribution":206,"./distribution/UniformIntDistribution":207,"./distribution/UnsafeUniformArrayIntDistribution":208,"./distribution/UnsafeUniformBigIntDistribution":209,"./distribution/UnsafeUniformIntDistribution":210,"./generator/LinearCongruential":214,"./generator/MersenneTwister":215,"./generator/RandomGenerator":216,"./generator/XorShift":217,"./generator/XoroShiro":218}],220:[function(require,module,exports){
    "use strict";
    var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __exportStar = (this && this.__exportStar) || function(m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    };
    exports.__esModule = true;
    var prand = require("./pure-rand-default");
    exports["default"] = prand;
    __exportStar(require("./pure-rand-default"), exports);

    },{"./pure-rand-default":219}]},{},[1]);
    