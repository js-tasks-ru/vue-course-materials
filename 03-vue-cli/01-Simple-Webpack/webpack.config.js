// Webpack работает на NodeJS. Используем в его конфигурации не ES модули, а стандартные для ноды CommonJS модули

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Экспортируем конфигурацию
module.exports = {
  // Режим работы - development
  mode: 'development',

  // Точка входа (старта) собираемого JavaScript приложения - src/main.js
  entry: path.resolve(__dirname, 'src', 'main.js'),

  // Приложение будет собрано в директории dist, а главный файл будет bundle.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Добавляем SourceMap. Теперь в браузере в инструментах отладки видно весь исходный код, и можно отлаживать по нему
  devtool: 'inline-source-map',

  // Настраиваем Webpack Dev Server
  devServer: {
    // Будет хостить файлы из директории dist, куда мы собираем приложение
    contentBase: path.resolve(__dirname, 'dist'),
    // Включен Hot Module Replacement (Горячая Замена Модулей) для обновления частей приложения без перезагрузки
    hot: true,
  },

  module: {
    // Список правил сборки
    rules: [
      {
        // Все .vue файлы (однофайловые компоненты Vue) будут собираться через vue-loader
        // Создаёт Vue компоненты, компилируя шаблон Template в рендер-функцию, и добавляя инкапсулированные стили
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        // Все js файлы будут проходить через babel, приложение будет поддерживатьяс даже старыми браузерами
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // css-loader позволит импортировать CSS модули в приложении
        // style-loader внедрит их в страницу после старта приложения
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    // Чистим директорию dist при сборке, чтобы не оставалось случайно мусора от старой сборки
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    // Плагин возьмёт html файл, и перенесёт его в dist, внедрив туда все необходимые подключения: стили, JS файлы и т.д.
    // Можно также встраивать разные переменные, например, TITLE
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // Плагин, который разделит vue файлы на JS скрипт и CSS стили, которые затем отправятся в загрузчики для JS и CSS файлов соответственно
    new VueLoaderPlugin(),
  ],
};
