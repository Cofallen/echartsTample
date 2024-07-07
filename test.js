// index.js $ node test.js

// 引入puppeteer
// const puppeteer = require('puppeteer');

// // 需要生成的图的文件名
// const fileName = 'example.png';

// // html网络地址
// const url = 'https://www.jianshu.com';

// (async () => {
//     const browser = await puppeteer.launch({
//         defaultViewport: {
//             width: 1600,
//             height: 937
//         },
//     });

//     const page = await browser.newPage();
//     await page.goto(url);
//     await page.screenshot({ path: fileName, fullPage: true });
//     await browser.close();

// })();

const puppeteer = require('puppeteer');
const path = require('path');

const fileName = 'screenshot.png';

// 使用path模块获取当前脚本所在目录的绝对路径，并构建index.html的绝对路径
const localFilePath = `file://${path.join(__dirname, 'index.html')}`;

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1600,
            height: 937,
            deviceScaleFactor: 2, // 设置设备的缩放因子为2，提高图片DPI
        },
    });

    const page = await browser.newPage();
    // 使用绝对路径加载本地HTML文件
    await page.goto(localFilePath, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: fileName, fullPage: true });
    await browser.close();
})();