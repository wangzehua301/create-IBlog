const program = require('commander')

const helpOptions = () => {
    //设置一些参数可选项
    program.option('-d --dest <dest>', 'a destinaton folder such as /src')
    program.option('-f --framework <frame>','a frondend framework such as vue/react')
    //监听help指令
    program.on('--help', function(){
        console.log('调用了--help命令')
    })
}

module.exports = helpOptions