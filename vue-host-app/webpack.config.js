import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8080,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom/client": "react-dom/client",
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "vueHostApp",
      remotes: {
        vueRemoteApp: "vueRemoteApp@http://localhost:8081/remoteEntry.js",
        reactRemoteApp: "reactRemoteApp@http://localhost:8082/remoteEntry.js",
      },
      shared: {
        vue: { singleton: true, eager: true, requiredVersion: "^3.0.0" },
        react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.0.0",
        },
      },
    }),
  ],
};
