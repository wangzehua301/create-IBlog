//将所有的指令的action函数抽离到该文件夹
const {promisify} = require('util')

const shell = require('shelljs')
const open = require('open')

const { reactRepo } = require('../config/repo-config')


const createProjectAction = async (project,others) =>{
    console.log('wzh helps you clone a great pro')

    //1.从git仓库下载代码
    
    await shell.exec(`git clone ${reactRepo} ${project}`)
    shell.cd(`./${project}`)

    console.log('下载成功')

    //2.运行npm install
    await shell.exec('npm install')

    //3.运行npm start命令，启动项目
    shell.exec('npm start')

    //4.打开浏览器
    open('http://localhost:3000')

}

module.exports ={
    createProjectAction
}