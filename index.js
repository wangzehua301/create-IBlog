#!/usr/bin/env node
const program = require('commander')

const helpOption = require('./lib/core/help.js')
const createCommands = require('./lib/core/create.js')

//根据package.json动态查看版本号
program.version(require('./package.json').version)

//初始化help和options信息
helpOption()

//初始化创建所有的命令
createCommands()

program.parse(process.argv)