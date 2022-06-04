const program = require('commander')

//引入指令的action
const { createProjectAction } = require('./actions')


//封装一个创建命令的函数
const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('clone a repo to project')
        .action(createProjectAction)
}

module.exports = createCommands