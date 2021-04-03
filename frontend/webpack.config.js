const path = require("path");

const webpackbar = require("webpackbar");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const tsconfig = require("./tsconfig.json");

const resolveAlias = () => {
  const { paths } = tsconfig.compilerOptions;
  let ts_alias = {};
  for (const [_alias, _path] of Object.entries(paths)) {
    ts_alias[_alias.replace("/*", "")] = [
      ..._path.map((__path) =>
        path.resolve(__dirname, __path.replace("/*", "").replace("*", ""))
      ),
    ];
  }
  return ts_alias;
};

const ROOT = path.resolve(__dirname);

const isDev = process.env.NODE_ENV !== "production";
console.log(`Mode ${isDev ? "DEVELOPMENT" : "PRODUCTION"}`);

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval" : false,
  devServer: {
    contentBase: "./dist",
    port: 3000,
  },
  context: `${ROOT}`,
  entry: {
    index: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          projectReferences: true,
          compilerOptions: {
            ...tsconfig.compilerOptions,
            ...{
              jsx: isDev ? "react-jsxdev" : "react-jsx",
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: isDev
            ? `assets/images/[name].[ext]`
            : `assets/images/[contenthash].[ext]`,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: isDev
            ? `assets/fonts/[name].[ext]`
            : `assets/fonts/[contenthash].[ext]`,
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json", ".css"],
    alias: resolveAlias(),
  },
  plugins: [
    new webpackbar({
      name: "react-ts",
      color: "green",
    }),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: `./public/index.html`,
      favicon: `./public/favicon.ico`,
    }),
    ...(isDev
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: `assets/css/[name].[fullhash].css`,
            chunkFilename: `assets/css/[id].[fullhash].css`,
          }),
        ]),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      ...(isDev
        ? []
        : [
            new CssMinimizerPlugin({
              minimizerOptions: {
                preset: ["default", { discardComments: { removeAll: true } }],
              },
            }),
          ]),
    ],
  },
  output: {
    path: `${ROOT}/dist`,
    filename: isDev ? "assets/js/[name].js" : "assets/js/[name].[fullhash].js",
    chunkFilename: isDev ? "assets/js/[id].js" : "assets/js/[id].[fullhash].js",
    publicPath: "",
  },
};
