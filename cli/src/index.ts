import { Command } from 'commander'
import { onCreate } from '../command/create'
const command = new Command()

command
    .command('create')
    .description('创建一个组件的模板或配置文件')
    .option('-t --type <type>', '创建类型,可选:component,lib-entry')
    .action(onCreate)

// 执行命令行参数解析
command.parse()
