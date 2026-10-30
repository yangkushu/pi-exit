# pi-exit

给 Pi 增加 `/exit` 命令。它调用 `ctx.shutdown()`，和内置 `/quit` 走同一条交互退出路径。`/quit` 仍然可用。

## 用法

在 Pi 里输入：

```text
/exit
```

只注册斜杠命令 `/exit`。单独输入 `exit` 仍会当作普通提示发给模型。

## 安装

从 GitHub 安装：

```bash
pi install git:github.com/yangkushu/pi-exit
```

从 npm 安装（发布之后）：

```bash
pi install npm:@yangkushu/pi-exit
```

只在一次会话里试用，不写入配置：

```bash
pi -e ./extensions/exit.ts
```

已经打开的 Pi 需要新开一个会话，或在扩展位于自动发现目录时执行 `/reload`。

## 要求

- Node.js 22.19 或更新版本
- `@earendil-works/pi-coding-agent` 由 Pi 本身提供，声明为 `peerDependencies`
