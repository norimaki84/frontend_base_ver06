# frontend_base_ver06

## Overview
gulp + webpackによる静的ファイル生成のための開発環境テンプレートです。

## Requirements
- node.js v10.15.1
- gulp v3.9.1 
- webpack v4.29.3 

## Description
(1) HTML 
- テンプレートエンジンは[EJS](https://github.com/mde/ejs)を使用
- ページごとのmeta情報は[development/src/assets/ejs/inc/metaData.json](https://github.com/Teraguchi0804/frontend_base_ver06/blob/master/development/src/assets/ejs/inc/metaData.json)で一括管理

(2) CSS 
- ベースはSCSS記法

(3) JavaScript
- モジュールバンドルはwebpackで行う 

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost
$ gulp default

# build for production
$ gulp publish
```

## License
Public domain

## Authors
[Norikazu Teraguchi](https://nrmk.jp/)