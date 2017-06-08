/**
 * Created by ALISURE on 2017/6/8.
 */
/*
* 常见的使用场景有以下几种：
*       允许用户从NPM服务器下载别人编写的第三方包到本地使用。
*       允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
*       允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
* */

/* 0.更新npm */
    /* npm install npm@latest -g */


/* 1.安装模块 */
    /* npm install <module name> */
    /* npm install express */
    /* 安装后使用 */
        var express = require("express");
        console.log(express);
    /* 全局安装 和 本地安装 */
        /*
            npm 的包安装分为本地安装（local）、全局安装（global）两种，
                从敲的命令行来看，差别只是有没有-g而已。

            本地安装
                1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），
                        如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
                2. 可以通过 require() 来引入本地安装的包。
            全局安装
                1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
                2. 可以直接在命令行里使用。
        */
        /* npm install express      # 本地安装 */
        /* npm install express -g   # 全局安装 */


/* 2.查看安装信息 */
    /* 查看所有全局安装的模块 */
        /* npm list -g */
    /* 查看某个模块的版本号 */
        /* npm list express */


/* 3.package.json */
    /* package.json 位于模块的目录下，用于定义包的属性 */
    /*
        Package.json 属性说明
            name - 包名。
            version - 包的版本号。
            description - 包的描述。
            homepage - 包的官网 url 。
            author - 包的作者姓名。
            contributors - 包的其他贡献者姓名。
            dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
            repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
            main - main 字段是一个模块ID，它是一个指向你程序的主要项目。
                    就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
            keywords - 关键字
    */



/* 4.卸载模块 */
    /* npm uninstall express */


/* 5.更新模块 */
    /* npm update express */


/* 6.搜索模块 */
    /* npm search express */


/* 7.创建模块 */
    /* package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件 */
        /* npm init */
        /* 根据提示输入信息即可 */


/* 8.发布模块 */
    /* 在 npm 资源库中注册用户 */
        /* npm adduser */
            /* alisure a17 562282219@qq.com */
    /* 发布 */
        /* npm publish */
    /* 撤销发布 */
        /* npm unpublish <package>@<version> */

/* 9.版本号 */
/*
    语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。
    当代码变更时，版本号按以下原则更新。
        如果只是修复bug，需要更新Z位。
        如果是新增了功能，但是向下兼容，需要更新Y位。
        如果有大变动，向下不兼容，需要更新X位。
*/


/* 10.其他命令 */
/*
    在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
    使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
*/


/* 11.淘宝npm镜像 */
    /* 安装cnpm */
        /* $ npm install -g cnpm --registry=https://registry.npm.taobao.org */
    /* 使用cnpm */
        /* cnpm install <module name> */
