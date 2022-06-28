<!doctype html>
<html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title><%= htmlWebpackPlugin.options.title %></title>
      <link rel="icon" type="image/x-icon" href="<%= webpackConfig.output.publicPath %>images/favicon.ico">
      <%= htmlWebpackPlugin.options.appCoreBrowserConfig %>
    </head>
    <body>
      <div id="root"></div>
    </body>
</html>
