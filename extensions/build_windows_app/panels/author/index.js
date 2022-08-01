'use strict';

const fs = require("fs");
const exec = require('child_process').exec;


// HTML 文本
exports.template = fs.readFileSync(__dirname + "/index.html", "utf8");

exports.style = fs.readFileSync(__dirname + "/index.css", "utf8");

// 渲染后 HTML 选择器
exports.$ = {
    open_BV1: ".open_BV1",
    open_BV2: ".open_BV2",
    reward: ".reward",
    dashang: ".dashang",
};

// 面板上的方法
exports.methods = {};

// 面板上触发的事件
exports.listeners = {};

// 当面板渲染成功后触发
exports.ready = async function() {
    this.$.open_BV1.addEventListener('confirm', ()=>{
        console.log("打开了BV");
        window.open(""); //在另外新建窗口中打开窗口
    });

    this.$.open_BV2.addEventListener('confirm', ()=>{
        console.log("打开了BV");
        // window.open("https://afdian.net/@property"); //在另外新建窗口中打开窗口
        exec('start https://afdian.net/@property');
    });

    this.$.reward.addEventListener('confirm', ()=>{
        console.log("打开了BV");
        exec('start https://afdian.net/@property');
    });
};

// 尝试关闭面板的时候触发
exports.beforeClose = async function() {};

// 当面板实际关闭后触发
exports.close = async function() {};
