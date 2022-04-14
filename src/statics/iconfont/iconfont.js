
import { createGlobalStyle } from "styled-components";

export const IconFontGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont"; /* Project id 3324283 */
    src: url('./iconfont.eot?t=1649943981502'); /* IE9 */
    src: url('./iconfont.eot?t=1649943981502#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('./iconfont.woff?t=1649943981502') format('woff'),
        url('./iconfont.ttf?t=1649943981502') format('truetype'),
        url('./iconfont.svg?t=1649943981502#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
