import React, { PureComponent } from "react";
import Svg, {
  Defs,
  Rect,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from "react-native-svg";

const LeftHint = () => (
  <>
    <Circle
      strokeOpacity={0.6}
      stroke="#4B84FF"
      strokeWidth={0.531}
      fillOpacity={0.2}
      fill="#4B84FF"
      cx={5}
      cy={66}
      r={5.265}
    />
    <Circle
      stroke="#4B84FF"
      strokeWidth={0.8}
      fill="#4B84FF"
      cx={5}
      cy={66}
      r={2}
    />
    <Path fill="url(#b)" fillRule="nonzero" d="M5.5 64h-1V0h1z" />
  </>
);

const RightHint = () => (
  <G transform="translate(116)">
    <LeftHint />
  </G>
);

// eslint-disable-next-line no-unused-vars
const RightExclamation = () => (
  <Path
    d="M16,10 C16.5522847,10 17,10.4477153 17,11 L17,17 C17,17.5522847 16.5522847,18 16,18 C15.4477153,18 15,17.5522847 15,17 L15,11 C15,10.4477153 15.4477153,10 16,10 Z M16,22 C15.3372583,22 14.8,21.4627417 14.8,20.8 C14.8,20.1372583 15.3372583,19.6 16,19.6 C16.6627417,19.6 17.2,20.1372583 17.2,20.8 C17.2,21.4627417 16.6627417,22 16,22 Z"
    fill="#FFFFFF"
  />
);

const RightX = () => (
  <Path
    d="M17.0287199,16 L20.4084283,12.6202915 C20.5305239,12.498196 20.5305239,12.3007649 20.4084283,12.1786694 L19.8213306,11.5915717 C19.6992351,11.4694761 19.501804,11.4694761 19.3797085,11.5915717 L16,14.9712801 L12.6202915,11.5915717 C12.498196,11.4694761 12.3007649,11.4694761 12.1786694,11.5915717 L11.5915717,12.1786694 C11.4694761,12.3007649 11.4694761,12.498196 11.5915717,12.6202915 L14.9712801,16 L11.5915717,19.3797085 C11.4694761,19.501804 11.4694761,19.6992351 11.5915717,19.8213306 L12.1786694,20.4084283 C12.3007649,20.5305239 12.498196,20.5305239 12.6202915,20.4084283 L16,17.0287199 L19.3797085,20.4084283 C19.501804,20.5305239 19.6992351,20.5305239 19.8213306,20.4084283 L20.4084283,19.8213306 C20.5305239,19.6992351 20.5305239,19.501804 20.4084283,19.3797085 L17.0287199,16 Z"
    fill="#FFFFFF"
    fill-rule="nonzero"
  />
);

class DeviceNanoAction extends PureComponent<{
  powerAction?: boolean,
  action?: boolean,
  screen?: "validation" | "home" | "pin",
  width: number,
  error?: Error,
}> {
  static defaultProps = {
    width: 272,
  };

  render() {
    const { powerAction, error, action, screen, width } = this.props;

    const color = error ? "#EA2E49" : "#6490F1";
    const isRefusal = error && error.name.startsWith("UserRefused");
    return (
      <Svg width={width} height={(width * 88) / 272} viewBox="0 0 272 88">
        <Defs>
          <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
            <Stop stopColor="#4F87FF" stopOpacity={0} offset="0%" />
            <Stop stopColor="#4B84FF" offset="100%" />
          </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
          <Rect
            stroke="#142533"
            strokeWidth={2.306}
            fill={color}
            fillOpacity={0.12}
            x={1.153}
            y={45.153}
            width={261.694}
            height={41.694}
            rx={6}
          />
          <Path
            d="M138 45.153c-11.513 0-20.847 9.334-20.847 20.847 0 11.513 9.334 20.847 20.847 20.847h120A4.847 4.847 0 0 0 262.847 82V50A4.847 4.847 0 0 0 258 45.153H138z"
            stroke="#142533"
            strokeWidth={2.306}
            fill="#FFF"
          />
          <Circle stroke="#142533" cx={138} cy={66} r={11.5} />
          <Circle stroke="#142533" cx={22} cy={66} r={11.5} />
          <G transform="translate(17)">
            <Rect
              strokeOpacity={0.12}
              stroke={color}
              fillOpacity={0.8}
              fill="#FFF"
              x={23.5}
              y={50.5}
              width={69}
              height={31}
              rx={2}
            />
            {error && isRefusal ? (
              <G transform="translate(-17 44)">
                <Path
                  d="M76.029 22l3.38-3.38a.312.312 0 0 0 0-.441l-.588-.587a.312.312 0 0 0-.441 0L75 20.972l-3.38-3.38a.312.312 0 0 0-.441 0l-.587.587a.312.312 0 0 0 0 .441l3.38 3.38-3.38 3.38a.312.312 0 0 0 0 .441l.587.587c.122.123.32.123.441 0l3.38-3.38 3.38 3.38c.122.123.32.123.441 0l.587-.587a.312.312 0 0 0 0-.441L76.028 22z"
                  fill="#EA2E49"
                  fillRule="nonzero"
                />
              </G>
            ) : null}
            {screen === "validation" ? (
              <G transform="translate(52 60)">
                <Path
                  d="M10.215 1.956L4.05 8.121 1.785 5.856a.281.281 0 0 0-.398 0l-.663.663a.281.281 0 0 0 0 .398l3.127 3.127c.11.11.288.11.398 0l7.027-7.027a.281.281 0 0 0 0-.398l-.663-.663a.281.281 0 0 0-.398 0z"
                  fill="#66BE54"
                />
              </G>
            ) : screen === "home" ? (
              <G transform="translate(52 60)">
                <Path
                  d="M2.063 4.775V10c0 .242.195.438.437.438h7A.437.437 0 0 0 9.938 10V4.775L6 1.713 2.062 4.775zm-.908-.719l4.5-3.5a.563.563 0 0 1 .69 0l4.5 3.5c.137.107.217.27.217.444V10c0 .863-.7 1.563-1.562 1.563h-7c-.863 0-1.563-.7-1.563-1.563V4.5c0-.174.08-.337.218-.444zm3.908 2.506V11a.562.562 0 1 1-1.125 0V6c0-.31.251-.563.562-.563h3c.31 0 .563.252.563.563v5a.562.562 0 1 1-1.126 0V6.562H5.063z"
                  fill="#6490F1"
                  fillRule="nonzero"
                />
              </G>
            ) : screen === "pin" ? (
              <G transform="translate(37 62)">
                <Rect
                  width={40}
                  height={8}
                  fill="#6490F1"
                  fillRule="nonzero"
                  rx={0.8}
                />
                <Path
                  fill="#FFF"
                  d="M5.7 4.408c0 .03-.027.054-.059.054H5.05a.06.06 0 0 0-.056.035.053.053 0 0 0 .013.061l.417.386c.012.01.019.025.019.04s-.007.029-.019.04l-.239.222a.067.067 0 0 1-.085 0l-.417-.386a.064.064 0 0 0-.066-.012.056.056 0 0 0-.037.051v.546c0 .031-.027.056-.061.056h-.338c-.034 0-.061-.025-.061-.056v-.546a.056.056 0 0 0-.038-.05.064.064 0 0 0-.065.011l-.418.386a.067.067 0 0 1-.085 0l-.239-.223a.053.053 0 0 1-.018-.04c0-.014.007-.028.018-.039l.418-.386a.053.053 0 0 0 .012-.06.06.06 0 0 0-.055-.035h-.59a.061.061 0 0 1-.042-.016A.052.052 0 0 1 3 4.408v-.315c0-.015.006-.029.018-.039a.061.061 0 0 1 .043-.015h.59a.06.06 0 0 0 .054-.035.053.053 0 0 0-.012-.06l-.418-.387a.053.053 0 0 1-.018-.04c0-.014.007-.029.018-.039l.237-.223a.067.067 0 0 1 .085 0l.418.386c.017.016.043.02.065.012a.056.056 0 0 0 .038-.051v-.546c0-.03.027-.056.06-.056h.347c.034 0 .06.025.06.056v.546c.001.022.016.043.038.051a.064.064 0 0 0 .066-.012l.417-.386a.067.067 0 0 1 .085 0l.24.223c.011.01.018.025.018.04 0 .014-.007.029-.019.039l-.417.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .056.036h.591c.033 0 .059.024.059.054l-.006.315zm4.456 0c0 .03-.028.055-.06.054h-.59a.06.06 0 0 0-.055.035.053.053 0 0 0 .013.061l.417.386a.055.055 0 0 1 0 .08l-.241.222a.067.067 0 0 1-.085 0l-.417-.386a.064.064 0 0 0-.066-.012.056.056 0 0 0-.038.051v.546c0 .03-.026.055-.058.056h-.34c-.034 0-.06-.026-.06-.056v-.546a.056.056 0 0 0-.037-.05.064.064 0 0 0-.066.011l-.417.386a.067.067 0 0 1-.085 0l-.241-.223a.055.055 0 0 1 0-.079l.417-.386a.053.053 0 0 0 .013-.06.06.06 0 0 0-.055-.035h-.59c-.033 0-.06-.025-.06-.055v-.315c0-.03.027-.054.06-.054h.59a.06.06 0 0 0 .055-.035.053.053 0 0 0-.013-.06l-.417-.387a.055.055 0 0 1 0-.079l.241-.223a.067.067 0 0 1 .085 0l.417.386c.018.016.043.02.066.012a.056.056 0 0 0 .038-.051v-.546c0-.03.025-.055.058-.056h.34c.033.001.06.026.06.056v.546c0 .022.014.043.037.051a.064.064 0 0 0 .066-.012l.417-.386a.067.067 0 0 1 .085 0l.24.223a.055.055 0 0 1 0 .079l-.416.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .055.036h.59c.032 0 .06.024.06.054v.315zm4.449 0a.052.052 0 0 1-.018.04.061.061 0 0 1-.043.014h-.59a.06.06 0 0 0-.055.035.053.053 0 0 0 .013.061l.417.386a.053.053 0 0 1 0 .079l-.237.223a.067.067 0 0 1-.085 0l-.417-.386a.064.064 0 0 0-.066-.012.056.056 0 0 0-.037.051v.546c0 .031-.027.056-.061.056h-.346c-.034 0-.061-.025-.061-.056v-.546a.056.056 0 0 0-.038-.05.064.064 0 0 0-.065.011l-.418.386a.067.067 0 0 1-.085 0l-.239-.223a.053.053 0 0 1-.018-.04c0-.014.007-.028.018-.039l.418-.386a.053.053 0 0 0 .012-.06.06.06 0 0 0-.055-.035h-.585c-.033 0-.059-.025-.059-.055v-.315c0-.03.026-.054.059-.054h.591a.06.06 0 0 0 .055-.035.053.053 0 0 0-.012-.06l-.418-.387a.053.053 0 0 1-.018-.04c0-.014.007-.029.018-.039l.24-.223a.067.067 0 0 1 .084 0l.418.386c.017.016.043.02.065.012a.056.056 0 0 0 .038-.051v-.546c0-.03.027-.056.06-.056h.339c.033 0 .06.025.06.056v.546c.001.022.016.043.038.051a.064.064 0 0 0 .066-.012l.417-.386a.067.067 0 0 1 .085 0l.24.223c.01.01.017.025.017.04 0 .014-.006.029-.018.039l-.417.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .056.036h.589c.016 0 .031.005.043.015.011.01.018.024.018.04v.314zm4.448 0c0 .03-.026.054-.059.054h-.591a.06.06 0 0 0-.055.035.053.053 0 0 0 .012.061l.418.386c.011.01.018.025.018.04s-.007.029-.018.04l-.24.222a.067.067 0 0 1-.084 0l-.418-.386a.064.064 0 0 0-.065-.012.056.056 0 0 0-.038.051v.546c0 .031-.027.056-.06.056h-.339c-.033 0-.06-.025-.06-.056v-.546a.056.056 0 0 0-.038-.05.064.064 0 0 0-.066.011l-.417.386a.067.067 0 0 1-.085 0l-.24-.223a.053.053 0 0 1-.017-.04c0-.014.006-.028.018-.039l.417-.386a.053.053 0 0 0 .013-.06.06.06 0 0 0-.055-.035h-.59a.061.061 0 0 1-.043-.016.052.052 0 0 1-.018-.039v-.315c0-.015.007-.029.018-.039a.061.061 0 0 1 .043-.015h.59a.06.06 0 0 0 .055-.035.053.053 0 0 0-.013-.06l-.417-.387a.053.053 0 0 1-.018-.04c0-.014.006-.029.018-.039l.237-.223a.067.067 0 0 1 .085 0l.417.386c.017.016.043.02.066.012a.056.056 0 0 0 .037-.051v-.546c0-.03.028-.056.061-.056h.346c.034 0 .061.025.061.056v.546c0 .022.015.043.038.051a.064.064 0 0 0 .065-.012l.418-.386a.067.067 0 0 1 .085 0l.239.223c.011.01.018.025.018.04 0 .014-.007.029-.018.039l-.417.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .055.036H19c.033 0 .06.024.06.054l-.007.315zm4.457 0c-.001.03-.028.055-.061.054h-.59a.06.06 0 0 0-.055.035.053.053 0 0 0 .013.061l.417.386a.055.055 0 0 1 0 .08l-.24.222a.067.067 0 0 1-.086 0l-.417-.386a.064.064 0 0 0-.066-.012.056.056 0 0 0-.037.051v.546c0 .03-.026.055-.06.056h-.34c-.032 0-.058-.026-.058-.056v-.546a.056.056 0 0 0-.038-.05.064.064 0 0 0-.065.011l-.418.386a.067.067 0 0 1-.085 0l-.24-.223a.055.055 0 0 1 0-.079l.417-.386a.053.053 0 0 0 .012-.06.06.06 0 0 0-.055-.035h-.59c-.032 0-.059-.025-.06-.055v-.315c.001-.03.028-.054.06-.054h.59a.06.06 0 0 0 .055-.035.053.053 0 0 0-.012-.06l-.418-.387a.055.055 0 0 1 0-.079l.241-.223a.067.067 0 0 1 .085 0l.418.386c.017.016.043.02.065.012a.056.056 0 0 0 .038-.051v-.546c0-.03.026-.055.059-.056h.34c.033.001.059.026.059.056v.546c0 .022.015.043.037.051a.064.064 0 0 0 .066-.012l.417-.386a.067.067 0 0 1 .085 0l.241.223a.055.055 0 0 1 0 .079l-.417.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .056.036h.589c.033 0 .06.024.06.054v.315zm4.448 0a.052.052 0 0 1-.018.04.061.061 0 0 1-.043.014h-.589a.06.06 0 0 0-.055.035.053.053 0 0 0 .012.061l.418.386c.011.01.018.025.018.04s-.007.029-.018.04l-.237.222a.067.067 0 0 1-.085 0l-.418-.386a.064.064 0 0 0-.065-.012.056.056 0 0 0-.038.051v.546c0 .031-.027.056-.06.056h-.347c-.034 0-.06-.025-.06-.056v-.546a.056.056 0 0 0-.038-.05.064.064 0 0 0-.066.011l-.417.386a.067.067 0 0 1-.085 0l-.24-.223a.053.053 0 0 1-.018-.04c0-.014.007-.028.019-.039l.417-.386a.053.053 0 0 0 .013-.06.06.06 0 0 0-.056-.035h-.585c-.032 0-.059-.025-.059-.055v-.315c0-.03.027-.054.06-.054h.59a.06.06 0 0 0 .056-.035.053.053 0 0 0-.013-.06l-.417-.387a.053.053 0 0 1-.018-.04c0-.014.006-.029.018-.039l.239-.223a.067.067 0 0 1 .085 0l.417.386c.017.016.043.02.066.012a.056.056 0 0 0 .037-.051v-.546c0-.03.028-.056.061-.056h.338c.034 0 .061.025.061.056v.546c0 .022.015.043.038.051a.064.064 0 0 0 .065-.012l.418-.386a.067.067 0 0 1 .085 0l.239.223c.011.01.018.025.018.04 0 .014-.007.029-.018.039l-.418.386a.053.053 0 0 0-.012.06.06.06 0 0 0 .055.036h.59c.015 0 .03.005.042.015.012.01.018.024.018.04v.314zm4.449 0a.052.052 0 0 1-.018.04.061.061 0 0 1-.043.014h-.59a.06.06 0 0 0-.055.035.053.053 0 0 0 .013.061l.417.386a.053.053 0 0 1 0 .079l-.237.223a.067.067 0 0 1-.085 0l-.417-.386a.064.064 0 0 0-.066-.012.056.056 0 0 0-.037.051v.546c0 .031-.028.056-.061.056h-.347c-.033 0-.06-.025-.06-.056v-.546a.056.056 0 0 0-.038-.05.064.064 0 0 0-.066.011l-.417.386a.067.067 0 0 1-.085 0l-.239-.223a.053.053 0 0 1-.018-.04c0-.014.006-.028.018-.039l.417-.386a.053.053 0 0 0 .013-.06.06.06 0 0 0-.055-.035h-.586c-.032 0-.058-.025-.058-.055v-.315c0-.03.026-.054.058-.054h.592a.06.06 0 0 0 .055-.035.053.053 0 0 0-.013-.06l-.417-.387a.053.053 0 0 1-.018-.04c0-.014.007-.029.018-.039l.24-.223a.067.067 0 0 1 .084 0l.417.386c.018.016.044.02.066.012a.056.056 0 0 0 .038-.051v-.546c0-.03.027-.056.06-.056h.339c.033 0 .06.025.06.056v.546c0 .022.016.043.038.051a.064.064 0 0 0 .066-.012l.417-.386a.067.067 0 0 1 .085 0l.24.223c.01.01.017.025.017.04 0 .014-.006.029-.018.039l-.417.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .055.036h.59c.016 0 .031.005.043.015.011.01.018.024.018.04v.314zm4.448 0a.052.052 0 0 1-.018.04.061.061 0 0 1-.043.014h-.59a.06.06 0 0 0-.055.035.053.053 0 0 0 .013.061l.417.386c.012.01.019.025.019.04s-.007.029-.019.04l-.236.222a.067.067 0 0 1-.086 0l-.417-.386a.064.064 0 0 0-.065-.012.056.056 0 0 0-.038.051v.546c0 .031-.027.056-.06.056h-.347c-.034 0-.06-.025-.06-.056v-.546a.056.056 0 0 0-.039-.05.064.064 0 0 0-.065.011l-.417.386a.067.067 0 0 1-.085 0l-.24-.223a.053.053 0 0 1-.018-.04c0-.014.007-.028.019-.039l.417-.386a.053.053 0 0 0 .013-.06.06.06 0 0 0-.056-.035h-.585c-.033 0-.059-.025-.059-.055v-.315c0-.03.026-.054.059-.054h.591a.06.06 0 0 0 .056-.035.053.053 0 0 0-.013-.06l-.417-.387a.053.053 0 0 1-.019-.04c0-.014.007-.029.019-.039l.239-.223a.067.067 0 0 1 .085 0l.417.386c.017.016.043.02.066.012a.056.056 0 0 0 .037-.051v-.546c0-.03.027-.056.06-.056h.34c.033 0 .06.025.06.056v.546c0 .022.015.043.038.051a.064.064 0 0 0 .065-.012l.417-.386a.067.067 0 0 1 .086 0l.238.223c.012.01.019.025.019.04 0 .014-.007.029-.019.039l-.417.386a.053.053 0 0 0-.013.06.06.06 0 0 0 .056.036h.59c.015 0 .03.005.042.015.011.01.018.024.018.04v.314z"
                />
              </G>
            ) : null}
            {!action ? null : (
              <>
                <LeftHint />
                <RightHint />
              </>
            )}
            {!powerAction ? null : <LeftHint />}
            {!error ? null : (
              <G transform="translate(223 30)">
                <Path
                  d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
                <Path
                  d="M16 28C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"
                  fill="#EA2E49"
                />
                <RightX />
              </G>
            )}
          </G>
        </G>
      </Svg>
    );
  }
}

export default DeviceNanoAction;
