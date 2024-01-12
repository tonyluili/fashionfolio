const puppeteer = require('puppeteer');

async function run() { 
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/results?search_query=k+suave');



    // await page.screenshot({ path: 'example.png'});
    const videos = await page.evaluate(() => Array.from(document.querySelectorAll('#contents #dismissible'), (e) => ({
        title: e.querySelector('#video-title').innerText, 
        viewcount: e.querySelector('#metadata-line span').innerText,
    })));

    





    console.log(videos);

    const li = document.get
    document.getElementById("content").appendChild(document.createTextNode())


    const html = await page.content();
    



    await browser.close();

}

run();