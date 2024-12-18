import {
  __commonJS
} from "./chunk-PZQZAEDH.js";

// node_modules/collect.js/dist/methods/symbol.iterator.js
var require_symbol_iterator = __commonJS({
  "node_modules/collect.js/dist/methods/symbol.iterator.js"(exports, module) {
    "use strict";
    module.exports = function SymbolIterator() {
      var _this = this;
      var index = -1;
      return {
        next: function next() {
          index += 1;
          return {
            value: _this.items[index],
            done: index >= _this.items.length
          };
        }
      };
    };
  }
});

// node_modules/collect.js/dist/methods/all.js
var require_all = __commonJS({
  "node_modules/collect.js/dist/methods/all.js"(exports, module) {
    "use strict";
    module.exports = function all() {
      return this.items;
    };
  }
});

// node_modules/collect.js/dist/helpers/is.js
var require_is = __commonJS({
  "node_modules/collect.js/dist/helpers/is.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = {
      /**
       * @returns {boolean}
       */
      isArray: function isArray(item) {
        return Array.isArray(item);
      },
      /**
       * @returns {boolean}
       */
      isObject: function isObject(item) {
        return _typeof(item) === "object" && Array.isArray(item) === false && item !== null;
      },
      /**
       * @returns {boolean}
       */
      isFunction: function isFunction(item) {
        return typeof item === "function";
      }
    };
  }
});

// node_modules/collect.js/dist/methods/average.js
var require_average = __commonJS({
  "node_modules/collect.js/dist/methods/average.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function average(key) {
      if (key === void 0) {
        return this.sum() / this.items.length;
      }
      if (isFunction(key)) {
        return new this.constructor(this.items).sum(key) / this.items.length;
      }
      return new this.constructor(this.items).pluck(key).sum() / this.items.length;
    };
  }
});

// node_modules/collect.js/dist/methods/avg.js
var require_avg = __commonJS({
  "node_modules/collect.js/dist/methods/avg.js"(exports, module) {
    "use strict";
    var average = require_average();
    module.exports = average;
  }
});

// node_modules/collect.js/dist/methods/chunk.js
var require_chunk = __commonJS({
  "node_modules/collect.js/dist/methods/chunk.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = function chunk(size) {
      var _this = this;
      var chunks = [];
      var index = 0;
      if (Array.isArray(this.items)) {
        do {
          var items = this.items.slice(index, index + size);
          var collection = new this.constructor(items);
          chunks.push(collection);
          index += size;
        } while (index < this.items.length);
      } else if (_typeof(this.items) === "object") {
        var keys = Object.keys(this.items);
        var _loop = function _loop2() {
          var keysOfChunk = keys.slice(index, index + size);
          var collection2 = new _this.constructor({});
          keysOfChunk.forEach(function(key) {
            return collection2.put(key, _this.items[key]);
          });
          chunks.push(collection2);
          index += size;
        };
        do {
          _loop();
        } while (index < keys.length);
      } else {
        chunks.push(new this.constructor([this.items]));
      }
      return new this.constructor(chunks);
    };
  }
});

// node_modules/collect.js/dist/methods/collapse.js
var require_collapse = __commonJS({
  "node_modules/collect.js/dist/methods/collapse.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function collapse() {
      var _ref;
      return new this.constructor((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));
    };
  }
});

// node_modules/collect.js/dist/methods/combine.js
var require_combine = __commonJS({
  "node_modules/collect.js/dist/methods/combine.js"(exports, module) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = function combine(array) {
      var _this = this;
      var values = array;
      if (values instanceof this.constructor) {
        values = array.all();
      }
      var collection = {};
      if (Array.isArray(this.items) && Array.isArray(values)) {
        this.items.forEach(function(key, iterator) {
          collection[key] = values[iterator];
        });
      } else if (_typeof(this.items) === "object" && _typeof(values) === "object") {
        Object.keys(this.items).forEach(function(key, index) {
          collection[_this.items[key]] = values[Object.keys(values)[index]];
        });
      } else if (Array.isArray(this.items)) {
        collection[this.items[0]] = values;
      } else if (typeof this.items === "string" && Array.isArray(values)) {
        var _values = values;
        var _values2 = _slicedToArray(_values, 1);
        collection[this.items] = _values2[0];
      } else if (typeof this.items === "string") {
        collection[this.items] = values;
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/helpers/clone.js
var require_clone = __commonJS({
  "node_modules/collect.js/dist/helpers/clone.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function clone(items) {
      var cloned;
      if (Array.isArray(items)) {
        var _cloned;
        cloned = [];
        (_cloned = cloned).push.apply(_cloned, _toConsumableArray(items));
      } else {
        cloned = {};
        Object.keys(items).forEach(function(prop) {
          cloned[prop] = items[prop];
        });
      }
      return cloned;
    };
  }
});

// node_modules/collect.js/dist/methods/concat.js
var require_concat = __commonJS({
  "node_modules/collect.js/dist/methods/concat.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var clone = require_clone();
    module.exports = function concat(collectionOrArrayOrObject) {
      var list = collectionOrArrayOrObject;
      if (collectionOrArrayOrObject instanceof this.constructor) {
        list = collectionOrArrayOrObject.all();
      } else if (_typeof(collectionOrArrayOrObject) === "object") {
        list = [];
        Object.keys(collectionOrArrayOrObject).forEach(function(property) {
          list.push(collectionOrArrayOrObject[property]);
        });
      }
      var collection = clone(this.items);
      list.forEach(function(item) {
        if (_typeof(item) === "object") {
          Object.keys(item).forEach(function(key) {
            return collection.push(item[key]);
          });
        } else {
          collection.push(item);
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/helpers/values.js
var require_values = __commonJS({
  "node_modules/collect.js/dist/helpers/values.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function values(items) {
      var valuesArray = [];
      if (Array.isArray(items)) {
        valuesArray.push.apply(valuesArray, _toConsumableArray(items));
      } else if (items.constructor.name === "Collection") {
        valuesArray.push.apply(valuesArray, _toConsumableArray(items.all()));
      } else {
        Object.keys(items).forEach(function(prop) {
          return valuesArray.push(items[prop]);
        });
      }
      return valuesArray;
    };
  }
});

// node_modules/collect.js/dist/methods/contains.js
var require_contains = __commonJS({
  "node_modules/collect.js/dist/methods/contains.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var values = require_values();
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function contains(key, value) {
      if (value !== void 0) {
        if (Array.isArray(this.items)) {
          return this.items.filter(function(items) {
            return items[key] !== void 0 && items[key] === value;
          }).length > 0;
        }
        return this.items[key] !== void 0 && this.items[key] === value;
      }
      if (isFunction(key)) {
        return this.items.filter(function(item, index) {
          return key(item, index);
        }).length > 0;
      }
      if (Array.isArray(this.items)) {
        return this.items.indexOf(key) !== -1;
      }
      var keysAndValues = values(this.items);
      keysAndValues.push.apply(keysAndValues, _toConsumableArray(Object.keys(this.items)));
      return keysAndValues.indexOf(key) !== -1;
    };
  }
});

// node_modules/collect.js/dist/methods/containsOneItem.js
var require_containsOneItem = __commonJS({
  "node_modules/collect.js/dist/methods/containsOneItem.js"(exports, module) {
    "use strict";
    module.exports = function containsOneItem() {
      return this.count() === 1;
    };
  }
});

// node_modules/collect.js/dist/methods/count.js
var require_count = __commonJS({
  "node_modules/collect.js/dist/methods/count.js"(exports, module) {
    "use strict";
    module.exports = function count() {
      var arrayLength = 0;
      if (Array.isArray(this.items)) {
        arrayLength = this.items.length;
      }
      return Math.max(Object.keys(this.items).length, arrayLength);
    };
  }
});

// node_modules/collect.js/dist/methods/countBy.js
var require_countBy = __commonJS({
  "node_modules/collect.js/dist/methods/countBy.js"(exports, module) {
    "use strict";
    module.exports = function countBy() {
      var fn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(value) {
        return value;
      };
      return new this.constructor(this.items).groupBy(fn).map(function(value) {
        return value.count();
      });
    };
  }
});

// node_modules/collect.js/dist/methods/crossJoin.js
var require_crossJoin = __commonJS({
  "node_modules/collect.js/dist/methods/crossJoin.js"(exports, module) {
    "use strict";
    module.exports = function crossJoin() {
      function join(collection, constructor, args) {
        var current = args[0];
        if (current instanceof constructor) {
          current = current.all();
        }
        var rest = args.slice(1);
        var last = !rest.length;
        var result = [];
        for (var i = 0; i < current.length; i += 1) {
          var collectionCopy = collection.slice();
          collectionCopy.push(current[i]);
          if (last) {
            result.push(collectionCopy);
          } else {
            result = result.concat(join(collectionCopy, constructor, rest));
          }
        }
        return result;
      }
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      return new this.constructor(join([], this.constructor, [].concat([this.items], values)));
    };
  }
});

// node_modules/collect.js/dist/methods/dd.js
var require_dd = __commonJS({
  "node_modules/collect.js/dist/methods/dd.js"(exports, module) {
    "use strict";
    module.exports = function dd() {
      this.dump();
      if (typeof process !== "undefined") {
        process.exit(1);
      }
    };
  }
});

// node_modules/collect.js/dist/methods/diff.js
var require_diff = __commonJS({
  "node_modules/collect.js/dist/methods/diff.js"(exports, module) {
    "use strict";
    module.exports = function diff(values) {
      var valuesToDiff;
      if (values instanceof this.constructor) {
        valuesToDiff = values.all();
      } else {
        valuesToDiff = values;
      }
      var collection = this.items.filter(function(item) {
        return valuesToDiff.indexOf(item) === -1;
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/diffAssoc.js
var require_diffAssoc = __commonJS({
  "node_modules/collect.js/dist/methods/diffAssoc.js"(exports, module) {
    "use strict";
    module.exports = function diffAssoc(values) {
      var _this = this;
      var diffValues = values;
      if (values instanceof this.constructor) {
        diffValues = values.all();
      }
      var collection = {};
      Object.keys(this.items).forEach(function(key) {
        if (diffValues[key] === void 0 || diffValues[key] !== _this.items[key]) {
          collection[key] = _this.items[key];
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/diffKeys.js
var require_diffKeys = __commonJS({
  "node_modules/collect.js/dist/methods/diffKeys.js"(exports, module) {
    "use strict";
    module.exports = function diffKeys(object) {
      var objectToDiff;
      if (object instanceof this.constructor) {
        objectToDiff = object.all();
      } else {
        objectToDiff = object;
      }
      var objectKeys = Object.keys(objectToDiff);
      var remainingKeys = Object.keys(this.items).filter(function(item) {
        return objectKeys.indexOf(item) === -1;
      });
      return new this.constructor(this.items).only(remainingKeys);
    };
  }
});

// node_modules/collect.js/dist/methods/diffUsing.js
var require_diffUsing = __commonJS({
  "node_modules/collect.js/dist/methods/diffUsing.js"(exports, module) {
    "use strict";
    module.exports = function diffUsing(values, callback) {
      var collection = this.items.filter(function(item) {
        return !(values && values.some(function(otherItem) {
          return callback(item, otherItem) === 0;
        }));
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/doesntContain.js
var require_doesntContain = __commonJS({
  "node_modules/collect.js/dist/methods/doesntContain.js"(exports, module) {
    "use strict";
    module.exports = function contains(key, value) {
      return !this.contains(key, value);
    };
  }
});

// node_modules/collect.js/dist/methods/dump.js
var require_dump = __commonJS({
  "node_modules/collect.js/dist/methods/dump.js"(exports, module) {
    "use strict";
    module.exports = function dump() {
      console.log(this);
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/duplicates.js
var require_duplicates = __commonJS({
  "node_modules/collect.js/dist/methods/duplicates.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = function duplicates() {
      var _this = this;
      var occuredValues = [];
      var duplicateValues = {};
      var stringifiedValue = function stringifiedValue2(value) {
        if (Array.isArray(value) || _typeof(value) === "object") {
          return JSON.stringify(value);
        }
        return value;
      };
      if (Array.isArray(this.items)) {
        this.items.forEach(function(value, index) {
          var valueAsString = stringifiedValue(value);
          if (occuredValues.indexOf(valueAsString) === -1) {
            occuredValues.push(valueAsString);
          } else {
            duplicateValues[index] = value;
          }
        });
      } else if (_typeof(this.items) === "object") {
        Object.keys(this.items).forEach(function(key) {
          var valueAsString = stringifiedValue(_this.items[key]);
          if (occuredValues.indexOf(valueAsString) === -1) {
            occuredValues.push(valueAsString);
          } else {
            duplicateValues[key] = _this.items[key];
          }
        });
      }
      return new this.constructor(duplicateValues);
    };
  }
});

// node_modules/collect.js/dist/methods/each.js
var require_each = __commonJS({
  "node_modules/collect.js/dist/methods/each.js"(exports, module) {
    "use strict";
    module.exports = function each(fn) {
      var stop = false;
      if (Array.isArray(this.items)) {
        var length = this.items.length;
        for (var index = 0; index < length && !stop; index += 1) {
          stop = fn(this.items[index], index, this.items) === false;
        }
      } else {
        var keys = Object.keys(this.items);
        var _length = keys.length;
        for (var _index = 0; _index < _length && !stop; _index += 1) {
          var key = keys[_index];
          stop = fn(this.items[key], key, this.items) === false;
        }
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/eachSpread.js
var require_eachSpread = __commonJS({
  "node_modules/collect.js/dist/methods/eachSpread.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function eachSpread(fn) {
      this.each(function(values, key) {
        fn.apply(void 0, _toConsumableArray(values).concat([key]));
      });
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/every.js
var require_every = __commonJS({
  "node_modules/collect.js/dist/methods/every.js"(exports, module) {
    "use strict";
    var values = require_values();
    module.exports = function every(fn) {
      var items = values(this.items);
      return items.every(fn);
    };
  }
});

// node_modules/collect.js/dist/helpers/variadic.js
var require_variadic = __commonJS({
  "node_modules/collect.js/dist/helpers/variadic.js"(exports, module) {
    "use strict";
    module.exports = function variadic(args) {
      if (Array.isArray(args[0])) {
        return args[0];
      }
      return args;
    };
  }
});

// node_modules/collect.js/dist/methods/except.js
var require_except = __commonJS({
  "node_modules/collect.js/dist/methods/except.js"(exports, module) {
    "use strict";
    var variadic = require_variadic();
    module.exports = function except() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var properties = variadic(args);
      if (Array.isArray(this.items)) {
        var _collection = this.items.filter(function(item) {
          return properties.indexOf(item) === -1;
        });
        return new this.constructor(_collection);
      }
      var collection = {};
      Object.keys(this.items).forEach(function(property) {
        if (properties.indexOf(property) === -1) {
          collection[property] = _this.items[property];
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/filter.js
var require_filter = __commonJS({
  "node_modules/collect.js/dist/methods/filter.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function falsyValue(item) {
      if (Array.isArray(item)) {
        if (item.length) {
          return false;
        }
      } else if (item !== void 0 && item !== null && _typeof(item) === "object") {
        if (Object.keys(item).length) {
          return false;
        }
      } else if (item) {
        return false;
      }
      return true;
    }
    function filterObject(func, items) {
      var result = {};
      Object.keys(items).forEach(function(key) {
        if (func) {
          if (func(items[key], key)) {
            result[key] = items[key];
          }
        } else if (!falsyValue(items[key])) {
          result[key] = items[key];
        }
      });
      return result;
    }
    function filterArray(func, items) {
      if (func) {
        return items.filter(func);
      }
      var result = [];
      for (var i = 0; i < items.length; i += 1) {
        var item = items[i];
        if (!falsyValue(item)) {
          result.push(item);
        }
      }
      return result;
    }
    module.exports = function filter(fn) {
      var func = fn || false;
      var filteredItems = null;
      if (Array.isArray(this.items)) {
        filteredItems = filterArray(func, this.items);
      } else {
        filteredItems = filterObject(func, this.items);
      }
      return new this.constructor(filteredItems);
    };
  }
});

// node_modules/collect.js/dist/methods/first.js
var require_first = __commonJS({
  "node_modules/collect.js/dist/methods/first.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function first(fn, defaultValue) {
      if (isFunction(fn)) {
        var keys = Object.keys(this.items);
        for (var i = 0; i < keys.length; i += 1) {
          var key = keys[i];
          var item = this.items[key];
          if (fn(item, key)) {
            return item;
          }
        }
        if (isFunction(defaultValue)) {
          return defaultValue();
        }
        return defaultValue;
      }
      if (Array.isArray(this.items) && this.items.length || Object.keys(this.items).length) {
        if (Array.isArray(this.items)) {
          return this.items[0];
        }
        var firstKey = Object.keys(this.items)[0];
        return this.items[firstKey];
      }
      if (isFunction(defaultValue)) {
        return defaultValue();
      }
      return defaultValue;
    };
  }
});

// node_modules/collect.js/dist/methods/firstOrFail.js
var require_firstOrFail = __commonJS({
  "node_modules/collect.js/dist/methods/firstOrFail.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function firstOrFail(key, operator, value) {
      if (isFunction(key)) {
        return this.first(key, function() {
          throw new Error("Item not found.");
        });
      }
      var collection = this.where(key, operator, value);
      if (collection.isEmpty()) {
        throw new Error("Item not found.");
      }
      return collection.first();
    };
  }
});

// node_modules/collect.js/dist/methods/firstWhere.js
var require_firstWhere = __commonJS({
  "node_modules/collect.js/dist/methods/firstWhere.js"(exports, module) {
    "use strict";
    module.exports = function firstWhere(key, operator, value) {
      return this.where(key, operator, value).first() || null;
    };
  }
});

// node_modules/collect.js/dist/methods/flatMap.js
var require_flatMap = __commonJS({
  "node_modules/collect.js/dist/methods/flatMap.js"(exports, module) {
    "use strict";
    module.exports = function flatMap(fn) {
      return this.map(fn).collapse();
    };
  }
});

// node_modules/collect.js/dist/methods/flatten.js
var require_flatten = __commonJS({
  "node_modules/collect.js/dist/methods/flatten.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    module.exports = function flatten(depth) {
      var flattenDepth = depth || Infinity;
      var fullyFlattened = false;
      var collection = [];
      var flat = function flat2(items) {
        collection = [];
        if (isArray(items)) {
          items.forEach(function(item) {
            if (isArray(item)) {
              collection = collection.concat(item);
            } else if (isObject(item)) {
              Object.keys(item).forEach(function(property) {
                collection = collection.concat(item[property]);
              });
            } else {
              collection.push(item);
            }
          });
        } else {
          Object.keys(items).forEach(function(property) {
            if (isArray(items[property])) {
              collection = collection.concat(items[property]);
            } else if (isObject(items[property])) {
              Object.keys(items[property]).forEach(function(prop) {
                collection = collection.concat(items[property][prop]);
              });
            } else {
              collection.push(items[property]);
            }
          });
        }
        fullyFlattened = collection.filter(function(item) {
          return isObject(item);
        });
        fullyFlattened = fullyFlattened.length === 0;
        flattenDepth -= 1;
      };
      flat(this.items);
      while (!fullyFlattened && flattenDepth > 0) {
        flat(collection);
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/flip.js
var require_flip = __commonJS({
  "node_modules/collect.js/dist/methods/flip.js"(exports, module) {
    "use strict";
    module.exports = function flip() {
      var _this = this;
      var collection = {};
      if (Array.isArray(this.items)) {
        Object.keys(this.items).forEach(function(key) {
          collection[_this.items[key]] = Number(key);
        });
      } else {
        Object.keys(this.items).forEach(function(key) {
          collection[_this.items[key]] = key;
        });
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/forPage.js
var require_forPage = __commonJS({
  "node_modules/collect.js/dist/methods/forPage.js"(exports, module) {
    "use strict";
    module.exports = function forPage(page, chunk) {
      var _this = this;
      var collection = {};
      if (Array.isArray(this.items)) {
        collection = this.items.slice(page * chunk - chunk, page * chunk);
      } else {
        Object.keys(this.items).slice(page * chunk - chunk, page * chunk).forEach(function(key) {
          collection[key] = _this.items[key];
        });
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/forget.js
var require_forget = __commonJS({
  "node_modules/collect.js/dist/methods/forget.js"(exports, module) {
    "use strict";
    module.exports = function forget(key) {
      if (Array.isArray(this.items)) {
        this.items.splice(key, 1);
      } else {
        delete this.items[key];
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/get.js
var require_get = __commonJS({
  "node_modules/collect.js/dist/methods/get.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (this.items[key] !== void 0) {
        return this.items[key];
      }
      if (isFunction(defaultValue)) {
        return defaultValue();
      }
      if (defaultValue !== null) {
        return defaultValue;
      }
      return null;
    };
  }
});

// node_modules/collect.js/dist/helpers/nestedValue.js
var require_nestedValue = __commonJS({
  "node_modules/collect.js/dist/helpers/nestedValue.js"(exports, module) {
    "use strict";
    module.exports = function nestedValue(mainObject, key) {
      try {
        return key.split(".").reduce(function(obj, property) {
          return obj[property];
        }, mainObject);
      } catch (err) {
        return mainObject;
      }
    };
  }
});

// node_modules/collect.js/dist/methods/groupBy.js
var require_groupBy = __commonJS({
  "node_modules/collect.js/dist/methods/groupBy.js"(exports, module) {
    "use strict";
    var nestedValue = require_nestedValue();
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function groupBy(key) {
      var _this = this;
      var collection = {};
      this.items.forEach(function(item, index) {
        var resolvedKey;
        if (isFunction(key)) {
          resolvedKey = key(item, index);
        } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {
          resolvedKey = nestedValue(item, key);
        } else {
          resolvedKey = "";
        }
        if (collection[resolvedKey] === void 0) {
          collection[resolvedKey] = new _this.constructor([]);
        }
        collection[resolvedKey].push(item);
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/has.js
var require_has = __commonJS({
  "node_modules/collect.js/dist/methods/has.js"(exports, module) {
    "use strict";
    var variadic = require_variadic();
    module.exports = function has() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var properties = variadic(args);
      return properties.filter(function(key) {
        return Object.hasOwnProperty.call(_this.items, key);
      }).length === properties.length;
    };
  }
});

// node_modules/collect.js/dist/methods/implode.js
var require_implode = __commonJS({
  "node_modules/collect.js/dist/methods/implode.js"(exports, module) {
    "use strict";
    module.exports = function implode(key, glue) {
      if (glue === void 0) {
        return this.items.join(key);
      }
      return new this.constructor(this.items).pluck(key).all().join(glue);
    };
  }
});

// node_modules/collect.js/dist/methods/intersect.js
var require_intersect = __commonJS({
  "node_modules/collect.js/dist/methods/intersect.js"(exports, module) {
    "use strict";
    module.exports = function intersect(values) {
      var intersectValues = values;
      if (values instanceof this.constructor) {
        intersectValues = values.all();
      }
      var collection = this.items.filter(function(item) {
        return intersectValues.indexOf(item) !== -1;
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/intersectByKeys.js
var require_intersectByKeys = __commonJS({
  "node_modules/collect.js/dist/methods/intersectByKeys.js"(exports, module) {
    "use strict";
    module.exports = function intersectByKeys(values) {
      var _this = this;
      var intersectKeys = Object.keys(values);
      if (values instanceof this.constructor) {
        intersectKeys = Object.keys(values.all());
      }
      var collection = {};
      Object.keys(this.items).forEach(function(key) {
        if (intersectKeys.indexOf(key) !== -1) {
          collection[key] = _this.items[key];
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/collect.js/dist/methods/isEmpty.js"(exports, module) {
    "use strict";
    module.exports = function isEmpty() {
      if (Array.isArray(this.items)) {
        return !this.items.length;
      }
      return !Object.keys(this.items).length;
    };
  }
});

// node_modules/collect.js/dist/methods/isNotEmpty.js
var require_isNotEmpty = __commonJS({
  "node_modules/collect.js/dist/methods/isNotEmpty.js"(exports, module) {
    "use strict";
    module.exports = function isNotEmpty() {
      return !this.isEmpty();
    };
  }
});

// node_modules/collect.js/dist/methods/join.js
var require_join = __commonJS({
  "node_modules/collect.js/dist/methods/join.js"(exports, module) {
    "use strict";
    module.exports = function join(glue, finalGlue) {
      var collection = this.values();
      if (finalGlue === void 0) {
        return collection.implode(glue);
      }
      var count = collection.count();
      if (count === 0) {
        return "";
      }
      if (count === 1) {
        return collection.last();
      }
      var finalItem = collection.pop();
      return collection.implode(glue) + finalGlue + finalItem;
    };
  }
});

// node_modules/collect.js/dist/methods/keyBy.js
var require_keyBy = __commonJS({
  "node_modules/collect.js/dist/methods/keyBy.js"(exports, module) {
    "use strict";
    var nestedValue = require_nestedValue();
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function keyBy(key) {
      var collection = {};
      if (isFunction(key)) {
        this.items.forEach(function(item) {
          collection[key(item)] = item;
        });
      } else {
        this.items.forEach(function(item) {
          var keyValue = nestedValue(item, key);
          collection[keyValue || ""] = item;
        });
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/keys.js
var require_keys = __commonJS({
  "node_modules/collect.js/dist/methods/keys.js"(exports, module) {
    "use strict";
    module.exports = function keys() {
      var collection = Object.keys(this.items);
      if (Array.isArray(this.items)) {
        collection = collection.map(Number);
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/last.js
var require_last = __commonJS({
  "node_modules/collect.js/dist/methods/last.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function last(fn, defaultValue) {
      var items = this.items;
      if (isFunction(fn)) {
        items = this.filter(fn).all();
      }
      if (Array.isArray(items) && !items.length || !Object.keys(items).length) {
        if (isFunction(defaultValue)) {
          return defaultValue();
        }
        return defaultValue;
      }
      if (Array.isArray(items)) {
        return items[items.length - 1];
      }
      var keys = Object.keys(items);
      return items[keys[keys.length - 1]];
    };
  }
});

// node_modules/collect.js/dist/methods/macro.js
var require_macro = __commonJS({
  "node_modules/collect.js/dist/methods/macro.js"(exports, module) {
    "use strict";
    module.exports = function macro(name, fn) {
      this.constructor.prototype[name] = fn;
    };
  }
});

// node_modules/collect.js/dist/methods/make.js
var require_make = __commonJS({
  "node_modules/collect.js/dist/methods/make.js"(exports, module) {
    "use strict";
    module.exports = function make() {
      var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return new this.constructor(items);
    };
  }
});

// node_modules/collect.js/dist/methods/map.js
var require_map = __commonJS({
  "node_modules/collect.js/dist/methods/map.js"(exports, module) {
    "use strict";
    module.exports = function map(fn) {
      var _this = this;
      if (Array.isArray(this.items)) {
        return new this.constructor(this.items.map(fn));
      }
      var collection = {};
      Object.keys(this.items).forEach(function(key) {
        collection[key] = fn(_this.items[key], key);
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/mapSpread.js
var require_mapSpread = __commonJS({
  "node_modules/collect.js/dist/methods/mapSpread.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function mapSpread(fn) {
      return this.map(function(values, key) {
        return fn.apply(void 0, _toConsumableArray(values).concat([key]));
      });
    };
  }
});

// node_modules/collect.js/dist/methods/mapToDictionary.js
var require_mapToDictionary = __commonJS({
  "node_modules/collect.js/dist/methods/mapToDictionary.js"(exports, module) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    module.exports = function mapToDictionary(fn) {
      var collection = {};
      this.items.forEach(function(item, k) {
        var _fn = fn(item, k), _fn2 = _slicedToArray(_fn, 2), key = _fn2[0], value = _fn2[1];
        if (collection[key] === void 0) {
          collection[key] = [value];
        } else {
          collection[key].push(value);
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/mapInto.js
var require_mapInto = __commonJS({
  "node_modules/collect.js/dist/methods/mapInto.js"(exports, module) {
    "use strict";
    module.exports = function mapInto(ClassName) {
      return this.map(function(value, key) {
        return new ClassName(value, key);
      });
    };
  }
});

// node_modules/collect.js/dist/methods/mapToGroups.js
var require_mapToGroups = __commonJS({
  "node_modules/collect.js/dist/methods/mapToGroups.js"(exports, module) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    module.exports = function mapToGroups(fn) {
      var collection = {};
      this.items.forEach(function(item, key) {
        var _fn = fn(item, key), _fn2 = _slicedToArray(_fn, 2), keyed = _fn2[0], value = _fn2[1];
        if (collection[keyed] === void 0) {
          collection[keyed] = [value];
        } else {
          collection[keyed].push(value);
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/mapWithKeys.js
var require_mapWithKeys = __commonJS({
  "node_modules/collect.js/dist/methods/mapWithKeys.js"(exports, module) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    module.exports = function mapWithKeys(fn) {
      var _this = this;
      var collection = {};
      if (Array.isArray(this.items)) {
        this.items.forEach(function(item, index) {
          var _fn = fn(item, index), _fn2 = _slicedToArray(_fn, 2), keyed = _fn2[0], value = _fn2[1];
          collection[keyed] = value;
        });
      } else {
        Object.keys(this.items).forEach(function(key) {
          var _fn3 = fn(_this.items[key], key), _fn4 = _slicedToArray(_fn3, 2), keyed = _fn4[0], value = _fn4[1];
          collection[keyed] = value;
        });
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/max.js
var require_max = __commonJS({
  "node_modules/collect.js/dist/methods/max.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function max(key) {
      if (typeof key === "string") {
        var filtered = this.items.filter(function(item) {
          return item[key] !== void 0;
        });
        return Math.max.apply(Math, _toConsumableArray(filtered.map(function(item) {
          return item[key];
        })));
      }
      return Math.max.apply(Math, _toConsumableArray(this.items));
    };
  }
});

// node_modules/collect.js/dist/methods/median.js
var require_median = __commonJS({
  "node_modules/collect.js/dist/methods/median.js"(exports, module) {
    "use strict";
    module.exports = function median(key) {
      var length = this.items.length;
      if (key === void 0) {
        if (length % 2 === 0) {
          return (this.items[length / 2 - 1] + this.items[length / 2]) / 2;
        }
        return this.items[Math.floor(length / 2)];
      }
      if (length % 2 === 0) {
        return (this.items[length / 2 - 1][key] + this.items[length / 2][key]) / 2;
      }
      return this.items[Math.floor(length / 2)][key];
    };
  }
});

// node_modules/collect.js/dist/methods/merge.js
var require_merge = __commonJS({
  "node_modules/collect.js/dist/methods/merge.js"(exports, module) {
    "use strict";
    module.exports = function merge(value) {
      var arrayOrObject = value;
      if (typeof arrayOrObject === "string") {
        arrayOrObject = [arrayOrObject];
      }
      if (Array.isArray(this.items) && Array.isArray(arrayOrObject)) {
        return new this.constructor(this.items.concat(arrayOrObject));
      }
      var collection = JSON.parse(JSON.stringify(this.items));
      Object.keys(arrayOrObject).forEach(function(key) {
        collection[key] = arrayOrObject[key];
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/mergeRecursive.js
var require_mergeRecursive = __commonJS({
  "node_modules/collect.js/dist/methods/mergeRecursive.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = function mergeRecursive(items) {
      var merge = function merge2(target, source) {
        var merged = {};
        var mergedKeys = Object.keys(_objectSpread(_objectSpread({}, target), source));
        mergedKeys.forEach(function(key) {
          if (target[key] === void 0 && source[key] !== void 0) {
            merged[key] = source[key];
          } else if (target[key] !== void 0 && source[key] === void 0) {
            merged[key] = target[key];
          } else if (target[key] !== void 0 && source[key] !== void 0) {
            if (target[key] === source[key]) {
              merged[key] = target[key];
            } else if (!Array.isArray(target[key]) && _typeof(target[key]) === "object" && !Array.isArray(source[key]) && _typeof(source[key]) === "object") {
              merged[key] = merge2(target[key], source[key]);
            } else {
              merged[key] = [].concat(target[key], source[key]);
            }
          }
        });
        return merged;
      };
      if (!items) {
        return this;
      }
      if (items.constructor.name === "Collection") {
        return new this.constructor(merge(this.items, items.all()));
      }
      return new this.constructor(merge(this.items, items));
    };
  }
});

// node_modules/collect.js/dist/methods/min.js
var require_min = __commonJS({
  "node_modules/collect.js/dist/methods/min.js"(exports, module) {
    "use strict";
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = function min(key) {
      if (key !== void 0) {
        var filtered = this.items.filter(function(item) {
          return item[key] !== void 0;
        });
        return Math.min.apply(Math, _toConsumableArray(filtered.map(function(item) {
          return item[key];
        })));
      }
      return Math.min.apply(Math, _toConsumableArray(this.items));
    };
  }
});

// node_modules/collect.js/dist/methods/mode.js
var require_mode = __commonJS({
  "node_modules/collect.js/dist/methods/mode.js"(exports, module) {
    "use strict";
    module.exports = function mode(key) {
      var values = [];
      var highestCount = 1;
      if (!this.items.length) {
        return null;
      }
      this.items.forEach(function(item) {
        var tempValues = values.filter(function(value) {
          if (key !== void 0) {
            return value.key === item[key];
          }
          return value.key === item;
        });
        if (!tempValues.length) {
          if (key !== void 0) {
            values.push({
              key: item[key],
              count: 1
            });
          } else {
            values.push({
              key: item,
              count: 1
            });
          }
        } else {
          tempValues[0].count += 1;
          var count = tempValues[0].count;
          if (count > highestCount) {
            highestCount = count;
          }
        }
      });
      return values.filter(function(value) {
        return value.count === highestCount;
      }).map(function(value) {
        return value.key;
      });
    };
  }
});

// node_modules/collect.js/dist/methods/nth.js
var require_nth = __commonJS({
  "node_modules/collect.js/dist/methods/nth.js"(exports, module) {
    "use strict";
    var values = require_values();
    module.exports = function nth(n) {
      var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var items = values(this.items);
      var collection = items.slice(offset).filter(function(item, index) {
        return index % n === 0;
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/only.js
var require_only = __commonJS({
  "node_modules/collect.js/dist/methods/only.js"(exports, module) {
    "use strict";
    var variadic = require_variadic();
    module.exports = function only() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var properties = variadic(args);
      if (Array.isArray(this.items)) {
        var _collection = this.items.filter(function(item) {
          return properties.indexOf(item) !== -1;
        });
        return new this.constructor(_collection);
      }
      var collection = {};
      Object.keys(this.items).forEach(function(prop) {
        if (properties.indexOf(prop) !== -1) {
          collection[prop] = _this.items[prop];
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/pad.js
var require_pad = __commonJS({
  "node_modules/collect.js/dist/methods/pad.js"(exports, module) {
    "use strict";
    var clone = require_clone();
    module.exports = function pad(size, value) {
      var abs = Math.abs(size);
      var count = this.count();
      if (abs <= count) {
        return this;
      }
      var diff = abs - count;
      var items = clone(this.items);
      var isArray = Array.isArray(this.items);
      var prepend = size < 0;
      for (var iterator = 0; iterator < diff; ) {
        if (!isArray) {
          if (items[iterator] !== void 0) {
            diff += 1;
          } else {
            items[iterator] = value;
          }
        } else if (prepend) {
          items.unshift(value);
        } else {
          items.push(value);
        }
        iterator += 1;
      }
      return new this.constructor(items);
    };
  }
});

// node_modules/collect.js/dist/methods/partition.js
var require_partition = __commonJS({
  "node_modules/collect.js/dist/methods/partition.js"(exports, module) {
    "use strict";
    module.exports = function partition(fn) {
      var _this = this;
      var arrays;
      if (Array.isArray(this.items)) {
        arrays = [new this.constructor([]), new this.constructor([])];
        this.items.forEach(function(item) {
          if (fn(item) === true) {
            arrays[0].push(item);
          } else {
            arrays[1].push(item);
          }
        });
      } else {
        arrays = [new this.constructor({}), new this.constructor({})];
        Object.keys(this.items).forEach(function(prop) {
          var value = _this.items[prop];
          if (fn(value) === true) {
            arrays[0].put(prop, value);
          } else {
            arrays[1].put(prop, value);
          }
        });
      }
      return new this.constructor(arrays);
    };
  }
});

// node_modules/collect.js/dist/methods/pipe.js
var require_pipe = __commonJS({
  "node_modules/collect.js/dist/methods/pipe.js"(exports, module) {
    "use strict";
    module.exports = function pipe(fn) {
      return fn(this);
    };
  }
});

// node_modules/collect.js/dist/methods/pluck.js
var require_pluck = __commonJS({
  "node_modules/collect.js/dist/methods/pluck.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var nestedValue = require_nestedValue();
    var buildKeyPathMap = function buildKeyPathMap2(items) {
      var keyPaths = {};
      items.forEach(function(item, index) {
        function buildKeyPath(val, keyPath) {
          if (isObject(val)) {
            Object.keys(val).forEach(function(prop) {
              buildKeyPath(val[prop], "".concat(keyPath, ".").concat(prop));
            });
          } else if (isArray(val)) {
            val.forEach(function(v, i) {
              buildKeyPath(v, "".concat(keyPath, ".").concat(i));
            });
          }
          keyPaths[keyPath] = val;
        }
        buildKeyPath(item, index);
      });
      return keyPaths;
    };
    module.exports = function pluck(value, key) {
      if (value.indexOf("*") !== -1) {
        var keyPathMap = buildKeyPathMap(this.items);
        var keyMatches = [];
        if (key !== void 0) {
          var keyRegex = new RegExp("0.".concat(key), "g");
          var keyNumberOfLevels = "0.".concat(key).split(".").length;
          Object.keys(keyPathMap).forEach(function(k) {
            var matchingKey = k.match(keyRegex);
            if (matchingKey) {
              var match = matchingKey[0];
              if (match.split(".").length === keyNumberOfLevels) {
                keyMatches.push(keyPathMap[match]);
              }
            }
          });
        }
        var valueMatches = [];
        var valueRegex = new RegExp("0.".concat(value), "g");
        var valueNumberOfLevels = "0.".concat(value).split(".").length;
        Object.keys(keyPathMap).forEach(function(k) {
          var matchingValue = k.match(valueRegex);
          if (matchingValue) {
            var match = matchingValue[0];
            if (match.split(".").length === valueNumberOfLevels) {
              valueMatches.push(keyPathMap[match]);
            }
          }
        });
        if (key !== void 0) {
          var collection = {};
          this.items.forEach(function(item, index) {
            collection[keyMatches[index] || ""] = valueMatches;
          });
          return new this.constructor(collection);
        }
        return new this.constructor([valueMatches]);
      }
      if (key !== void 0) {
        var _collection = {};
        this.items.forEach(function(item) {
          if (nestedValue(item, value) !== void 0) {
            _collection[item[key] || ""] = nestedValue(item, value);
          } else {
            _collection[item[key] || ""] = null;
          }
        });
        return new this.constructor(_collection);
      }
      return this.map(function(item) {
        if (nestedValue(item, value) !== void 0) {
          return nestedValue(item, value);
        }
        return null;
      });
    };
  }
});

// node_modules/collect.js/dist/helpers/deleteKeys.js
var require_deleteKeys = __commonJS({
  "node_modules/collect.js/dist/helpers/deleteKeys.js"(exports, module) {
    "use strict";
    var variadic = require_variadic();
    module.exports = function deleteKeys(obj) {
      for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
      }
      variadic(keys).forEach(function(key) {
        delete obj[key];
      });
    };
  }
});

// node_modules/collect.js/dist/methods/pop.js
var require_pop = __commonJS({
  "node_modules/collect.js/dist/methods/pop.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var deleteKeys = require_deleteKeys();
    module.exports = function pop() {
      var _this = this;
      var count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      if (this.isEmpty()) {
        return null;
      }
      if (isArray(this.items)) {
        if (count === 1) {
          return this.items.pop();
        }
        return new this.constructor(this.items.splice(-count));
      }
      if (isObject(this.items)) {
        var keys = Object.keys(this.items);
        if (count === 1) {
          var key = keys[keys.length - 1];
          var last = this.items[key];
          deleteKeys(this.items, key);
          return last;
        }
        var poppedKeys = keys.slice(-count);
        var newObject = poppedKeys.reduce(function(acc, current) {
          acc[current] = _this.items[current];
          return acc;
        }, {});
        deleteKeys(this.items, poppedKeys);
        return new this.constructor(newObject);
      }
      return null;
    };
  }
});

// node_modules/collect.js/dist/methods/prepend.js
var require_prepend = __commonJS({
  "node_modules/collect.js/dist/methods/prepend.js"(exports, module) {
    "use strict";
    module.exports = function prepend(value, key) {
      if (key !== void 0) {
        return this.put(key, value);
      }
      this.items.unshift(value);
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/pull.js
var require_pull = __commonJS({
  "node_modules/collect.js/dist/methods/pull.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function pull(key, defaultValue) {
      var returnValue = this.items[key] || null;
      if (!returnValue && defaultValue !== void 0) {
        if (isFunction(defaultValue)) {
          returnValue = defaultValue();
        } else {
          returnValue = defaultValue;
        }
      }
      delete this.items[key];
      return returnValue;
    };
  }
});

// node_modules/collect.js/dist/methods/push.js
var require_push = __commonJS({
  "node_modules/collect.js/dist/methods/push.js"(exports, module) {
    "use strict";
    module.exports = function push() {
      var _this$items;
      (_this$items = this.items).push.apply(_this$items, arguments);
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/put.js
var require_put = __commonJS({
  "node_modules/collect.js/dist/methods/put.js"(exports, module) {
    "use strict";
    module.exports = function put(key, value) {
      this.items[key] = value;
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/random.js
var require_random = __commonJS({
  "node_modules/collect.js/dist/methods/random.js"(exports, module) {
    "use strict";
    var values = require_values();
    module.exports = function random() {
      var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      var items = values(this.items);
      var collection = new this.constructor(items).shuffle();
      if (length !== parseInt(length, 10)) {
        return collection.first();
      }
      return collection.take(length);
    };
  }
});

// node_modules/collect.js/dist/methods/reduce.js
var require_reduce = __commonJS({
  "node_modules/collect.js/dist/methods/reduce.js"(exports, module) {
    "use strict";
    module.exports = function reduce(fn, carry) {
      var _this = this;
      var reduceCarry = null;
      if (carry !== void 0) {
        reduceCarry = carry;
      }
      if (Array.isArray(this.items)) {
        this.items.forEach(function(item) {
          reduceCarry = fn(reduceCarry, item);
        });
      } else {
        Object.keys(this.items).forEach(function(key) {
          reduceCarry = fn(reduceCarry, _this.items[key], key);
        });
      }
      return reduceCarry;
    };
  }
});

// node_modules/collect.js/dist/methods/reject.js
var require_reject = __commonJS({
  "node_modules/collect.js/dist/methods/reject.js"(exports, module) {
    "use strict";
    module.exports = function reject(fn) {
      return new this.constructor(this.items).filter(function(item) {
        return !fn(item);
      });
    };
  }
});

// node_modules/collect.js/dist/methods/replace.js
var require_replace = __commonJS({
  "node_modules/collect.js/dist/methods/replace.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = function replace(items) {
      if (!items) {
        return this;
      }
      if (Array.isArray(items)) {
        var _replaced = this.items.map(function(value, index) {
          return items[index] || value;
        });
        return new this.constructor(_replaced);
      }
      if (items.constructor.name === "Collection") {
        var _replaced2 = _objectSpread(_objectSpread({}, this.items), items.all());
        return new this.constructor(_replaced2);
      }
      var replaced = _objectSpread(_objectSpread({}, this.items), items);
      return new this.constructor(replaced);
    };
  }
});

// node_modules/collect.js/dist/methods/replaceRecursive.js
var require_replaceRecursive = __commonJS({
  "node_modules/collect.js/dist/methods/replaceRecursive.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = function replaceRecursive(items) {
      var replace = function replace2(target, source) {
        var replaced = _objectSpread({}, target);
        var mergedKeys = Object.keys(_objectSpread(_objectSpread({}, target), source));
        mergedKeys.forEach(function(key) {
          if (!Array.isArray(source[key]) && _typeof(source[key]) === "object") {
            replaced[key] = replace2(target[key], source[key]);
          } else if (target[key] === void 0 && source[key] !== void 0) {
            if (_typeof(target[key]) === "object") {
              replaced[key] = _objectSpread({}, source[key]);
            } else {
              replaced[key] = source[key];
            }
          } else if (target[key] !== void 0 && source[key] === void 0) {
            if (_typeof(target[key]) === "object") {
              replaced[key] = _objectSpread({}, target[key]);
            } else {
              replaced[key] = target[key];
            }
          } else if (target[key] !== void 0 && source[key] !== void 0) {
            if (_typeof(source[key]) === "object") {
              replaced[key] = _objectSpread({}, source[key]);
            } else {
              replaced[key] = source[key];
            }
          }
        });
        return replaced;
      };
      if (!items) {
        return this;
      }
      if (!Array.isArray(items) && _typeof(items) !== "object") {
        return new this.constructor(replace(this.items, [items]));
      }
      if (items.constructor.name === "Collection") {
        return new this.constructor(replace(this.items, items.all()));
      }
      return new this.constructor(replace(this.items, items));
    };
  }
});

// node_modules/collect.js/dist/methods/reverse.js
var require_reverse = __commonJS({
  "node_modules/collect.js/dist/methods/reverse.js"(exports, module) {
    "use strict";
    module.exports = function reverse() {
      var collection = [].concat(this.items).reverse();
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/search.js
var require_search = __commonJS({
  "node_modules/collect.js/dist/methods/search.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var isFunction = _require.isFunction;
    module.exports = function search(valueOrFunction, strict) {
      var _this = this;
      var result;
      var find = function find2(item, key) {
        if (isFunction(valueOrFunction)) {
          return valueOrFunction(_this.items[key], key);
        }
        if (strict) {
          return _this.items[key] === valueOrFunction;
        }
        return _this.items[key] == valueOrFunction;
      };
      if (isArray(this.items)) {
        result = this.items.findIndex(find);
      } else if (isObject(this.items)) {
        result = Object.keys(this.items).find(function(key) {
          return find(_this.items[key], key);
        });
      }
      if (result === void 0 || result < 0) {
        return false;
      }
      return result;
    };
  }
});

// node_modules/collect.js/dist/methods/shift.js
var require_shift = __commonJS({
  "node_modules/collect.js/dist/methods/shift.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var deleteKeys = require_deleteKeys();
    module.exports = function shift() {
      var _this = this;
      var count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      if (this.isEmpty()) {
        return null;
      }
      if (isArray(this.items)) {
        if (count === 1) {
          return this.items.shift();
        }
        return new this.constructor(this.items.splice(0, count));
      }
      if (isObject(this.items)) {
        if (count === 1) {
          var key = Object.keys(this.items)[0];
          var value = this.items[key];
          delete this.items[key];
          return value;
        }
        var keys = Object.keys(this.items);
        var poppedKeys = keys.slice(0, count);
        var newObject = poppedKeys.reduce(function(acc, current) {
          acc[current] = _this.items[current];
          return acc;
        }, {});
        deleteKeys(this.items, poppedKeys);
        return new this.constructor(newObject);
      }
      return null;
    };
  }
});

// node_modules/collect.js/dist/methods/shuffle.js
var require_shuffle = __commonJS({
  "node_modules/collect.js/dist/methods/shuffle.js"(exports, module) {
    "use strict";
    var values = require_values();
    module.exports = function shuffle() {
      var items = values(this.items);
      var j;
      var x;
      var i;
      for (i = items.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = items[i - 1];
        items[i - 1] = items[j];
        items[j] = x;
      }
      this.items = items;
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/skip.js
var require_skip = __commonJS({
  "node_modules/collect.js/dist/methods/skip.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isObject = _require.isObject;
    module.exports = function skip(number) {
      var _this = this;
      if (isObject(this.items)) {
        return new this.constructor(Object.keys(this.items).reduce(function(accumulator, key, index) {
          if (index + 1 > number) {
            accumulator[key] = _this.items[key];
          }
          return accumulator;
        }, {}));
      }
      return new this.constructor(this.items.slice(number));
    };
  }
});

// node_modules/collect.js/dist/methods/skipUntil.js
var require_skipUntil = __commonJS({
  "node_modules/collect.js/dist/methods/skipUntil.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var isFunction = _require.isFunction;
    module.exports = function skipUntil(valueOrFunction) {
      var _this = this;
      var previous = null;
      var items;
      var callback = function callback2(value) {
        return value === valueOrFunction;
      };
      if (isFunction(valueOrFunction)) {
        callback = valueOrFunction;
      }
      if (isArray(this.items)) {
        items = this.items.filter(function(item) {
          if (previous !== true) {
            previous = callback(item);
          }
          return previous;
        });
      }
      if (isObject(this.items)) {
        items = Object.keys(this.items).reduce(function(acc, key) {
          if (previous !== true) {
            previous = callback(_this.items[key]);
          }
          if (previous !== false) {
            acc[key] = _this.items[key];
          }
          return acc;
        }, {});
      }
      return new this.constructor(items);
    };
  }
});

// node_modules/collect.js/dist/methods/skipWhile.js
var require_skipWhile = __commonJS({
  "node_modules/collect.js/dist/methods/skipWhile.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var isFunction = _require.isFunction;
    module.exports = function skipWhile(valueOrFunction) {
      var _this = this;
      var previous = null;
      var items;
      var callback = function callback2(value) {
        return value === valueOrFunction;
      };
      if (isFunction(valueOrFunction)) {
        callback = valueOrFunction;
      }
      if (isArray(this.items)) {
        items = this.items.filter(function(item) {
          if (previous !== true) {
            previous = !callback(item);
          }
          return previous;
        });
      }
      if (isObject(this.items)) {
        items = Object.keys(this.items).reduce(function(acc, key) {
          if (previous !== true) {
            previous = !callback(_this.items[key]);
          }
          if (previous !== false) {
            acc[key] = _this.items[key];
          }
          return acc;
        }, {});
      }
      return new this.constructor(items);
    };
  }
});

// node_modules/collect.js/dist/methods/slice.js
var require_slice = __commonJS({
  "node_modules/collect.js/dist/methods/slice.js"(exports, module) {
    "use strict";
    module.exports = function slice(remove, limit) {
      var collection = this.items.slice(remove);
      if (limit !== void 0) {
        collection = collection.slice(0, limit);
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/sole.js
var require_sole = __commonJS({
  "node_modules/collect.js/dist/methods/sole.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function sole(key, operator, value) {
      var collection;
      if (isFunction(key)) {
        collection = this.filter(key);
      } else {
        collection = this.where(key, operator, value);
      }
      if (collection.isEmpty()) {
        throw new Error("Item not found.");
      }
      if (collection.count() > 1) {
        throw new Error("Multiple items found.");
      }
      return collection.first();
    };
  }
});

// node_modules/collect.js/dist/methods/some.js
var require_some = __commonJS({
  "node_modules/collect.js/dist/methods/some.js"(exports, module) {
    "use strict";
    var contains = require_contains();
    module.exports = contains;
  }
});

// node_modules/collect.js/dist/methods/sort.js
var require_sort = __commonJS({
  "node_modules/collect.js/dist/methods/sort.js"(exports, module) {
    "use strict";
    module.exports = function sort(fn) {
      var collection = [].concat(this.items);
      if (fn === void 0) {
        if (this.every(function(item) {
          return typeof item === "number";
        })) {
          collection.sort(function(a, b) {
            return a - b;
          });
        } else {
          collection.sort();
        }
      } else {
        collection.sort(fn);
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/sortDesc.js
var require_sortDesc = __commonJS({
  "node_modules/collect.js/dist/methods/sortDesc.js"(exports, module) {
    "use strict";
    module.exports = function sortDesc() {
      return this.sort().reverse();
    };
  }
});

// node_modules/collect.js/dist/methods/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/collect.js/dist/methods/sortBy.js"(exports, module) {
    "use strict";
    var nestedValue = require_nestedValue();
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function sortBy(valueOrFunction) {
      var collection = [].concat(this.items);
      var getValue = function getValue2(item) {
        if (isFunction(valueOrFunction)) {
          return valueOrFunction(item);
        }
        return nestedValue(item, valueOrFunction);
      };
      collection.sort(function(a, b) {
        var valueA = getValue(a);
        var valueB = getValue(b);
        if (valueA === null || valueA === void 0) {
          return 1;
        }
        if (valueB === null || valueB === void 0) {
          return -1;
        }
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/sortByDesc.js
var require_sortByDesc = __commonJS({
  "node_modules/collect.js/dist/methods/sortByDesc.js"(exports, module) {
    "use strict";
    module.exports = function sortByDesc(valueOrFunction) {
      return this.sortBy(valueOrFunction).reverse();
    };
  }
});

// node_modules/collect.js/dist/methods/sortKeys.js
var require_sortKeys = __commonJS({
  "node_modules/collect.js/dist/methods/sortKeys.js"(exports, module) {
    "use strict";
    module.exports = function sortKeys() {
      var _this = this;
      var ordered = {};
      Object.keys(this.items).sort().forEach(function(key) {
        ordered[key] = _this.items[key];
      });
      return new this.constructor(ordered);
    };
  }
});

// node_modules/collect.js/dist/methods/sortKeysDesc.js
var require_sortKeysDesc = __commonJS({
  "node_modules/collect.js/dist/methods/sortKeysDesc.js"(exports, module) {
    "use strict";
    module.exports = function sortKeysDesc() {
      var _this = this;
      var ordered = {};
      Object.keys(this.items).sort().reverse().forEach(function(key) {
        ordered[key] = _this.items[key];
      });
      return new this.constructor(ordered);
    };
  }
});

// node_modules/collect.js/dist/methods/splice.js
var require_splice = __commonJS({
  "node_modules/collect.js/dist/methods/splice.js"(exports, module) {
    "use strict";
    module.exports = function splice(index, limit, replace) {
      var slicedCollection = this.slice(index, limit);
      this.items = this.diff(slicedCollection.all()).all();
      if (Array.isArray(replace)) {
        for (var iterator = 0, length = replace.length; iterator < length; iterator += 1) {
          this.items.splice(index + iterator, 0, replace[iterator]);
        }
      }
      return slicedCollection;
    };
  }
});

// node_modules/collect.js/dist/methods/split.js
var require_split = __commonJS({
  "node_modules/collect.js/dist/methods/split.js"(exports, module) {
    "use strict";
    module.exports = function split(numberOfGroups) {
      var itemsPerGroup = Math.round(this.items.length / numberOfGroups);
      var items = JSON.parse(JSON.stringify(this.items));
      var collection = [];
      for (var iterator = 0; iterator < numberOfGroups; iterator += 1) {
        collection.push(new this.constructor(items.splice(0, itemsPerGroup)));
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/sum.js
var require_sum = __commonJS({
  "node_modules/collect.js/dist/methods/sum.js"(exports, module) {
    "use strict";
    var values = require_values();
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function sum(key) {
      var items = values(this.items);
      var total = 0;
      if (key === void 0) {
        for (var i = 0, length = items.length; i < length; i += 1) {
          total += parseFloat(items[i]);
        }
      } else if (isFunction(key)) {
        for (var _i = 0, _length = items.length; _i < _length; _i += 1) {
          total += parseFloat(key(items[_i]));
        }
      } else {
        for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {
          total += parseFloat(items[_i2][key]);
        }
      }
      return parseFloat(total.toPrecision(12));
    };
  }
});

// node_modules/collect.js/dist/methods/take.js
var require_take = __commonJS({
  "node_modules/collect.js/dist/methods/take.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = function take(length) {
      var _this = this;
      if (!Array.isArray(this.items) && _typeof(this.items) === "object") {
        var keys = Object.keys(this.items);
        var slicedKeys;
        if (length < 0) {
          slicedKeys = keys.slice(length);
        } else {
          slicedKeys = keys.slice(0, length);
        }
        var collection = {};
        keys.forEach(function(prop) {
          if (slicedKeys.indexOf(prop) !== -1) {
            collection[prop] = _this.items[prop];
          }
        });
        return new this.constructor(collection);
      }
      if (length < 0) {
        return new this.constructor(this.items.slice(length));
      }
      return new this.constructor(this.items.slice(0, length));
    };
  }
});

// node_modules/collect.js/dist/methods/takeUntil.js
var require_takeUntil = __commonJS({
  "node_modules/collect.js/dist/methods/takeUntil.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var isFunction = _require.isFunction;
    module.exports = function takeUntil(valueOrFunction) {
      var _this = this;
      var previous = null;
      var items;
      var callback = function callback2(value) {
        return value === valueOrFunction;
      };
      if (isFunction(valueOrFunction)) {
        callback = valueOrFunction;
      }
      if (isArray(this.items)) {
        items = this.items.filter(function(item) {
          if (previous !== false) {
            previous = !callback(item);
          }
          return previous;
        });
      }
      if (isObject(this.items)) {
        items = Object.keys(this.items).reduce(function(acc, key) {
          if (previous !== false) {
            previous = !callback(_this.items[key]);
          }
          if (previous !== false) {
            acc[key] = _this.items[key];
          }
          return acc;
        }, {});
      }
      return new this.constructor(items);
    };
  }
});

// node_modules/collect.js/dist/methods/takeWhile.js
var require_takeWhile = __commonJS({
  "node_modules/collect.js/dist/methods/takeWhile.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isArray = _require.isArray;
    var isObject = _require.isObject;
    var isFunction = _require.isFunction;
    module.exports = function takeWhile(valueOrFunction) {
      var _this = this;
      var previous = null;
      var items;
      var callback = function callback2(value) {
        return value === valueOrFunction;
      };
      if (isFunction(valueOrFunction)) {
        callback = valueOrFunction;
      }
      if (isArray(this.items)) {
        items = this.items.filter(function(item) {
          if (previous !== false) {
            previous = callback(item);
          }
          return previous;
        });
      }
      if (isObject(this.items)) {
        items = Object.keys(this.items).reduce(function(acc, key) {
          if (previous !== false) {
            previous = callback(_this.items[key]);
          }
          if (previous !== false) {
            acc[key] = _this.items[key];
          }
          return acc;
        }, {});
      }
      return new this.constructor(items);
    };
  }
});

// node_modules/collect.js/dist/methods/tap.js
var require_tap = __commonJS({
  "node_modules/collect.js/dist/methods/tap.js"(exports, module) {
    "use strict";
    module.exports = function tap(fn) {
      fn(this);
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/times.js
var require_times = __commonJS({
  "node_modules/collect.js/dist/methods/times.js"(exports, module) {
    "use strict";
    module.exports = function times(n, fn) {
      for (var iterator = 1; iterator <= n; iterator += 1) {
        this.items.push(fn(iterator));
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/toArray.js
var require_toArray = __commonJS({
  "node_modules/collect.js/dist/methods/toArray.js"(exports, module) {
    "use strict";
    module.exports = function toArray() {
      var collectionInstance = this.constructor;
      function iterate(list, collection2) {
        var childCollection = [];
        if (list instanceof collectionInstance) {
          list.items.forEach(function(i) {
            return iterate(i, childCollection);
          });
          collection2.push(childCollection);
        } else if (Array.isArray(list)) {
          list.forEach(function(i) {
            return iterate(i, childCollection);
          });
          collection2.push(childCollection);
        } else {
          collection2.push(list);
        }
      }
      if (Array.isArray(this.items)) {
        var collection = [];
        this.items.forEach(function(items) {
          iterate(items, collection);
        });
        return collection;
      }
      return this.values().all();
    };
  }
});

// node_modules/collect.js/dist/methods/toJson.js
var require_toJson = __commonJS({
  "node_modules/collect.js/dist/methods/toJson.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = function toJson() {
      if (_typeof(this.items) === "object" && !Array.isArray(this.items)) {
        return JSON.stringify(this.all());
      }
      return JSON.stringify(this.toArray());
    };
  }
});

// node_modules/collect.js/dist/methods/transform.js
var require_transform = __commonJS({
  "node_modules/collect.js/dist/methods/transform.js"(exports, module) {
    "use strict";
    module.exports = function transform(fn) {
      var _this = this;
      if (Array.isArray(this.items)) {
        this.items = this.items.map(fn);
      } else {
        var collection = {};
        Object.keys(this.items).forEach(function(key) {
          collection[key] = fn(_this.items[key], key);
        });
        this.items = collection;
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/undot.js
var require_undot = __commonJS({
  "node_modules/collect.js/dist/methods/undot.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = function undot() {
      var _this = this;
      if (Array.isArray(this.items)) {
        return this;
      }
      var collection = {};
      Object.keys(this.items).forEach(function(key) {
        if (key.indexOf(".") !== -1) {
          var obj = collection;
          key.split(".").reduce(function(acc, current, index, array) {
            if (!acc[current]) {
              acc[current] = {};
            }
            if (index === array.length - 1) {
              acc[current] = _this.items[key];
            }
            return acc[current];
          }, obj);
          collection = _objectSpread(_objectSpread({}, collection), obj);
        } else {
          collection[key] = _this.items[key];
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/unless.js
var require_unless = __commonJS({
  "node_modules/collect.js/dist/methods/unless.js"(exports, module) {
    "use strict";
    module.exports = function when(value, fn, defaultFn) {
      if (!value) {
        fn(this);
      } else {
        defaultFn(this);
      }
    };
  }
});

// node_modules/collect.js/dist/methods/whenNotEmpty.js
var require_whenNotEmpty = __commonJS({
  "node_modules/collect.js/dist/methods/whenNotEmpty.js"(exports, module) {
    "use strict";
    module.exports = function whenNotEmpty(fn, defaultFn) {
      if (Array.isArray(this.items) && this.items.length) {
        return fn(this);
      }
      if (Object.keys(this.items).length) {
        return fn(this);
      }
      if (defaultFn !== void 0) {
        if (Array.isArray(this.items) && !this.items.length) {
          return defaultFn(this);
        }
        if (!Object.keys(this.items).length) {
          return defaultFn(this);
        }
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/whenEmpty.js
var require_whenEmpty = __commonJS({
  "node_modules/collect.js/dist/methods/whenEmpty.js"(exports, module) {
    "use strict";
    module.exports = function whenEmpty(fn, defaultFn) {
      if (Array.isArray(this.items) && !this.items.length) {
        return fn(this);
      }
      if (!Object.keys(this.items).length) {
        return fn(this);
      }
      if (defaultFn !== void 0) {
        if (Array.isArray(this.items) && this.items.length) {
          return defaultFn(this);
        }
        if (Object.keys(this.items).length) {
          return defaultFn(this);
        }
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/union.js
var require_union = __commonJS({
  "node_modules/collect.js/dist/methods/union.js"(exports, module) {
    "use strict";
    module.exports = function union(object) {
      var _this = this;
      var collection = JSON.parse(JSON.stringify(this.items));
      Object.keys(object).forEach(function(prop) {
        if (_this.items[prop] === void 0) {
          collection[prop] = object[prop];
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/unique.js
var require_unique = __commonJS({
  "node_modules/collect.js/dist/methods/unique.js"(exports, module) {
    "use strict";
    var _require = require_is();
    var isFunction = _require.isFunction;
    module.exports = function unique(key) {
      var collection;
      if (key === void 0) {
        collection = this.items.filter(function(element, index, self) {
          return self.indexOf(element) === index;
        });
      } else {
        collection = [];
        var usedKeys = [];
        for (var iterator = 0, length = this.items.length; iterator < length; iterator += 1) {
          var uniqueKey = void 0;
          if (isFunction(key)) {
            uniqueKey = key(this.items[iterator]);
          } else {
            uniqueKey = this.items[iterator][key];
          }
          if (usedKeys.indexOf(uniqueKey) === -1) {
            collection.push(this.items[iterator]);
            usedKeys.push(uniqueKey);
          }
        }
      }
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/unwrap.js
var require_unwrap = __commonJS({
  "node_modules/collect.js/dist/methods/unwrap.js"(exports, module) {
    "use strict";
    module.exports = function unwrap(value) {
      if (value instanceof this.constructor) {
        return value.all();
      }
      return value;
    };
  }
});

// node_modules/collect.js/dist/methods/values.js
var require_values2 = __commonJS({
  "node_modules/collect.js/dist/methods/values.js"(exports, module) {
    "use strict";
    var getValues = require_values();
    module.exports = function values() {
      return new this.constructor(getValues(this.items));
    };
  }
});

// node_modules/collect.js/dist/methods/when.js
var require_when = __commonJS({
  "node_modules/collect.js/dist/methods/when.js"(exports, module) {
    "use strict";
    module.exports = function when(value, fn, defaultFn) {
      if (value) {
        return fn(this, value);
      }
      if (defaultFn) {
        return defaultFn(this, value);
      }
      return this;
    };
  }
});

// node_modules/collect.js/dist/methods/where.js
var require_where = __commonJS({
  "node_modules/collect.js/dist/methods/where.js"(exports, module) {
    "use strict";
    var values = require_values();
    var nestedValue = require_nestedValue();
    module.exports = function where(key, operator, value) {
      var comparisonOperator = operator;
      var comparisonValue = value;
      var items = values(this.items);
      if (operator === void 0 || operator === true) {
        return new this.constructor(items.filter(function(item) {
          return nestedValue(item, key);
        }));
      }
      if (operator === false) {
        return new this.constructor(items.filter(function(item) {
          return !nestedValue(item, key);
        }));
      }
      if (value === void 0) {
        comparisonValue = operator;
        comparisonOperator = "===";
      }
      var collection = items.filter(function(item) {
        switch (comparisonOperator) {
          case "==":
            return nestedValue(item, key) === Number(comparisonValue) || nestedValue(item, key) === comparisonValue.toString();
          default:
          case "===":
            return nestedValue(item, key) === comparisonValue;
          case "!=":
          case "<>":
            return nestedValue(item, key) !== Number(comparisonValue) && nestedValue(item, key) !== comparisonValue.toString();
          case "!==":
            return nestedValue(item, key) !== comparisonValue;
          case "<":
            return nestedValue(item, key) < comparisonValue;
          case "<=":
            return nestedValue(item, key) <= comparisonValue;
          case ">":
            return nestedValue(item, key) > comparisonValue;
          case ">=":
            return nestedValue(item, key) >= comparisonValue;
        }
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/whereBetween.js
var require_whereBetween = __commonJS({
  "node_modules/collect.js/dist/methods/whereBetween.js"(exports, module) {
    "use strict";
    module.exports = function whereBetween(key, values) {
      return this.where(key, ">=", values[0]).where(key, "<=", values[values.length - 1]);
    };
  }
});

// node_modules/collect.js/dist/methods/whereIn.js
var require_whereIn = __commonJS({
  "node_modules/collect.js/dist/methods/whereIn.js"(exports, module) {
    "use strict";
    var extractValues = require_values();
    var nestedValue = require_nestedValue();
    module.exports = function whereIn(key, values) {
      var items = extractValues(values);
      var collection = this.items.filter(function(item) {
        return items.indexOf(nestedValue(item, key)) !== -1;
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/whereInstanceOf.js
var require_whereInstanceOf = __commonJS({
  "node_modules/collect.js/dist/methods/whereInstanceOf.js"(exports, module) {
    "use strict";
    module.exports = function whereInstanceOf(type) {
      return this.filter(function(item) {
        return item instanceof type;
      });
    };
  }
});

// node_modules/collect.js/dist/methods/whereNotBetween.js
var require_whereNotBetween = __commonJS({
  "node_modules/collect.js/dist/methods/whereNotBetween.js"(exports, module) {
    "use strict";
    var nestedValue = require_nestedValue();
    module.exports = function whereNotBetween(key, values) {
      return this.filter(function(item) {
        return nestedValue(item, key) < values[0] || nestedValue(item, key) > values[values.length - 1];
      });
    };
  }
});

// node_modules/collect.js/dist/methods/whereNotIn.js
var require_whereNotIn = __commonJS({
  "node_modules/collect.js/dist/methods/whereNotIn.js"(exports, module) {
    "use strict";
    var extractValues = require_values();
    var nestedValue = require_nestedValue();
    module.exports = function whereNotIn(key, values) {
      var items = extractValues(values);
      var collection = this.items.filter(function(item) {
        return items.indexOf(nestedValue(item, key)) === -1;
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/methods/whereNull.js
var require_whereNull = __commonJS({
  "node_modules/collect.js/dist/methods/whereNull.js"(exports, module) {
    "use strict";
    module.exports = function whereNull() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return this.where(key, "===", null);
    };
  }
});

// node_modules/collect.js/dist/methods/whereNotNull.js
var require_whereNotNull = __commonJS({
  "node_modules/collect.js/dist/methods/whereNotNull.js"(exports, module) {
    "use strict";
    module.exports = function whereNotNull() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return this.where(key, "!==", null);
    };
  }
});

// node_modules/collect.js/dist/methods/wrap.js
var require_wrap = __commonJS({
  "node_modules/collect.js/dist/methods/wrap.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    module.exports = function wrap(value) {
      if (value instanceof this.constructor) {
        return value;
      }
      if (_typeof(value) === "object") {
        return new this.constructor(value);
      }
      return new this.constructor([value]);
    };
  }
});

// node_modules/collect.js/dist/methods/zip.js
var require_zip = __commonJS({
  "node_modules/collect.js/dist/methods/zip.js"(exports, module) {
    "use strict";
    module.exports = function zip(array) {
      var _this = this;
      var values = array;
      if (values instanceof this.constructor) {
        values = values.all();
      }
      var collection = this.items.map(function(item, index) {
        return new _this.constructor([item, values[index]]);
      });
      return new this.constructor(collection);
    };
  }
});

// node_modules/collect.js/dist/index.js
var require_dist = __commonJS({
  "node_modules/collect.js/dist/index.js"(exports, module) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function Collection(collection) {
      if (collection !== void 0 && !Array.isArray(collection) && _typeof(collection) !== "object") {
        this.items = [collection];
      } else if (collection instanceof this.constructor) {
        this.items = collection.all();
      } else {
        this.items = collection || [];
      }
    }
    var SymbolIterator = require_symbol_iterator();
    if (typeof Symbol !== "undefined") {
      Collection.prototype[Symbol.iterator] = SymbolIterator;
    }
    Collection.prototype.toJSON = function toJSON() {
      return this.items;
    };
    Collection.prototype.all = require_all();
    Collection.prototype.average = require_average();
    Collection.prototype.avg = require_avg();
    Collection.prototype.chunk = require_chunk();
    Collection.prototype.collapse = require_collapse();
    Collection.prototype.combine = require_combine();
    Collection.prototype.concat = require_concat();
    Collection.prototype.contains = require_contains();
    Collection.prototype.containsOneItem = require_containsOneItem();
    Collection.prototype.count = require_count();
    Collection.prototype.countBy = require_countBy();
    Collection.prototype.crossJoin = require_crossJoin();
    Collection.prototype.dd = require_dd();
    Collection.prototype.diff = require_diff();
    Collection.prototype.diffAssoc = require_diffAssoc();
    Collection.prototype.diffKeys = require_diffKeys();
    Collection.prototype.diffUsing = require_diffUsing();
    Collection.prototype.doesntContain = require_doesntContain();
    Collection.prototype.dump = require_dump();
    Collection.prototype.duplicates = require_duplicates();
    Collection.prototype.each = require_each();
    Collection.prototype.eachSpread = require_eachSpread();
    Collection.prototype.every = require_every();
    Collection.prototype.except = require_except();
    Collection.prototype.filter = require_filter();
    Collection.prototype.first = require_first();
    Collection.prototype.firstOrFail = require_firstOrFail();
    Collection.prototype.firstWhere = require_firstWhere();
    Collection.prototype.flatMap = require_flatMap();
    Collection.prototype.flatten = require_flatten();
    Collection.prototype.flip = require_flip();
    Collection.prototype.forPage = require_forPage();
    Collection.prototype.forget = require_forget();
    Collection.prototype.get = require_get();
    Collection.prototype.groupBy = require_groupBy();
    Collection.prototype.has = require_has();
    Collection.prototype.implode = require_implode();
    Collection.prototype.intersect = require_intersect();
    Collection.prototype.intersectByKeys = require_intersectByKeys();
    Collection.prototype.isEmpty = require_isEmpty();
    Collection.prototype.isNotEmpty = require_isNotEmpty();
    Collection.prototype.join = require_join();
    Collection.prototype.keyBy = require_keyBy();
    Collection.prototype.keys = require_keys();
    Collection.prototype.last = require_last();
    Collection.prototype.macro = require_macro();
    Collection.prototype.make = require_make();
    Collection.prototype.map = require_map();
    Collection.prototype.mapSpread = require_mapSpread();
    Collection.prototype.mapToDictionary = require_mapToDictionary();
    Collection.prototype.mapInto = require_mapInto();
    Collection.prototype.mapToGroups = require_mapToGroups();
    Collection.prototype.mapWithKeys = require_mapWithKeys();
    Collection.prototype.max = require_max();
    Collection.prototype.median = require_median();
    Collection.prototype.merge = require_merge();
    Collection.prototype.mergeRecursive = require_mergeRecursive();
    Collection.prototype.min = require_min();
    Collection.prototype.mode = require_mode();
    Collection.prototype.nth = require_nth();
    Collection.prototype.only = require_only();
    Collection.prototype.pad = require_pad();
    Collection.prototype.partition = require_partition();
    Collection.prototype.pipe = require_pipe();
    Collection.prototype.pluck = require_pluck();
    Collection.prototype.pop = require_pop();
    Collection.prototype.prepend = require_prepend();
    Collection.prototype.pull = require_pull();
    Collection.prototype.push = require_push();
    Collection.prototype.put = require_put();
    Collection.prototype.random = require_random();
    Collection.prototype.reduce = require_reduce();
    Collection.prototype.reject = require_reject();
    Collection.prototype.replace = require_replace();
    Collection.prototype.replaceRecursive = require_replaceRecursive();
    Collection.prototype.reverse = require_reverse();
    Collection.prototype.search = require_search();
    Collection.prototype.shift = require_shift();
    Collection.prototype.shuffle = require_shuffle();
    Collection.prototype.skip = require_skip();
    Collection.prototype.skipUntil = require_skipUntil();
    Collection.prototype.skipWhile = require_skipWhile();
    Collection.prototype.slice = require_slice();
    Collection.prototype.sole = require_sole();
    Collection.prototype.some = require_some();
    Collection.prototype.sort = require_sort();
    Collection.prototype.sortDesc = require_sortDesc();
    Collection.prototype.sortBy = require_sortBy();
    Collection.prototype.sortByDesc = require_sortByDesc();
    Collection.prototype.sortKeys = require_sortKeys();
    Collection.prototype.sortKeysDesc = require_sortKeysDesc();
    Collection.prototype.splice = require_splice();
    Collection.prototype.split = require_split();
    Collection.prototype.sum = require_sum();
    Collection.prototype.take = require_take();
    Collection.prototype.takeUntil = require_takeUntil();
    Collection.prototype.takeWhile = require_takeWhile();
    Collection.prototype.tap = require_tap();
    Collection.prototype.times = require_times();
    Collection.prototype.toArray = require_toArray();
    Collection.prototype.toJson = require_toJson();
    Collection.prototype.transform = require_transform();
    Collection.prototype.undot = require_undot();
    Collection.prototype.unless = require_unless();
    Collection.prototype.unlessEmpty = require_whenNotEmpty();
    Collection.prototype.unlessNotEmpty = require_whenEmpty();
    Collection.prototype.union = require_union();
    Collection.prototype.unique = require_unique();
    Collection.prototype.unwrap = require_unwrap();
    Collection.prototype.values = require_values2();
    Collection.prototype.when = require_when();
    Collection.prototype.whenEmpty = require_whenEmpty();
    Collection.prototype.whenNotEmpty = require_whenNotEmpty();
    Collection.prototype.where = require_where();
    Collection.prototype.whereBetween = require_whereBetween();
    Collection.prototype.whereIn = require_whereIn();
    Collection.prototype.whereInstanceOf = require_whereInstanceOf();
    Collection.prototype.whereNotBetween = require_whereNotBetween();
    Collection.prototype.whereNotIn = require_whereNotIn();
    Collection.prototype.whereNull = require_whereNull();
    Collection.prototype.whereNotNull = require_whereNotNull();
    Collection.prototype.wrap = require_wrap();
    Collection.prototype.zip = require_zip();
    var collect = function collect2(collection) {
      return new Collection(collection);
    };
    module.exports = collect;
    module.exports.collect = collect;
    module.exports["default"] = collect;
    module.exports.Collection = Collection;
  }
});
export default require_dist();
//# sourceMappingURL=collect__js.js.map
