const fs = require("fs");
const replace = `

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NextEsmPlugin = /*#__PURE__*/function () {
  function NextEsmPlugin() {
    _classCallCheck(this, NextEsmPlugin);
  }

  _createClass(NextEsmPlugin, [{
    key: "apply",
    value: function apply(compiler) {
      compiler.hooks.done.tap('Hello World Plugin', function (stats
                                                              /* stats is passed as an argument when done hook is tapped.  */
      ) {
        console.log('Hello World!');
      });
    }
  }]);

  return NextEsmPlugin;
}();

exports.default = NextEsmPlugin;`;
fs.writeFile(
  "node_modules/next/dist/build/webpack/plugins/next-esm-plugin.js",
  replace,
  () => {
    console.log("patched next");
  }
);
