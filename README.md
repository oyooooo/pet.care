# 毛茸茸 FURRY · Next.js

保留原创插画与温暖配色的宠物洗护店概念网站。Next.js App Router + React + TypeScript；普通 CSS 与 CSS Modules，无外部字体或图片依赖。

## 运行

本机快捷预览：双击 `启动预览.cmd`，等待服务就绪后访问 http://127.0.0.1:3000 。预览期间保持启动窗口开启；关闭窗口或按 Ctrl+C 后，本地网址将无法访问。

安装 Node.js 22.18 或更高的受支持 LTS 版本（项目测试脚本使用原生 TypeScript 类型剥离），使用 npm：

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:3000 。Next.js 版本必须通过本地服务访问，不能双击 `.tsx` 文件打开。原始 `index.html`、`preview.png` 保留作参考。

```sh
npm run typecheck
npm test
npm run build
npm start
```

`npm start` 启动已构建的生产版本；开发服务和生产服务不要同时占用同一端口，可通过 `-- --port 3001` 指定另一端口。

## 页面与内容

- `/`：首页、套餐摘要、理念及预约入口。
- `/services`：猫狗套餐切换，键盘左右方向键、Home、End 均可切换。
- `/about`：门店介绍、流程和常见问题。
- `/booking`：预约意向表单、保存结果与修改。

共用内容组件位于 `src/components`；套餐数据集中在 `src/lib/services.ts`，预约数据处理在 `src/lib/booking.ts`。页面标题和描述使用 Next.js Metadata。

## 预约草稿

`/booking?pet=cat&service=style` 可预选猫咪精细梳理套餐。`pet` 支持 `dog`、`cat`；`service` 支持 `clean`、`style`、`care`。有效参数覆盖相应草稿字段，其余字段读取草稿或默认值。

沿用 localStorage 的 `furry-booking-v1` 键及旧字段（`petName`、`petType`、中文 `service`、`date`、`time`），旧版本草稿在同一来源下可读。浏览器按协议、主机与端口隔离存储：旧 `file://` 页面、本地开发地址以及不同端口之间不自动共享草稿。

只在客户端读取存储与本地日期。草稿异常时回退默认值，存储不可用时明确显示未保存提示。记录不会发送给门店，也不构成正式预约。

此项目不包含账号、支付、后台、真实门店地址或联系方式。价格为示例，未做线上部署。
