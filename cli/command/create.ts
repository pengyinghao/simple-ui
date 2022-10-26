import { prompt } from 'inquirer'
import { red } from 'kolorist'
import { createComponent } from './../shared/create-component'

const CREATE_TYPE = ['component', 'lib-entry']
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据显示']

export async function onCreate(args = { type: '' }) {
    let { type } = args
    if (!type) {
        const result = await prompt([
            {
                name: 'type',
                type: 'list',
                message: '（必填）请选择创建类型：',
                choices: CREATE_TYPE,
                default: 0
            }
        ])
        type = result.type
    }

    // 类型输入错误
    if (!CREATE_TYPE.includes(type)) {
        console.log(red(`当前类型仅支持:"${CREATE_TYPE.join(', ')}",请重新选择！`))
        return onCreate()
    }

    try {
        switch (type) {
            case 'component':
                const info = await prompt([
                    {
                        name: 'name',
                        type: 'input',
                        message: '请输入组件名称，将用作文件名和文件夹名称',
                        validate(value: string) {
                            if (value.trim() === '') {
                                return '组件名称不能为空！'
                            }
                            return true
                        }
                    },
                    {
                        name: 'title',
                        type: 'input',
                        message: '请输入中文名称，将用作文档列表显示',
                        validate(value: string) {
                            if (value.trim() === '') {
                                return '中文名称不能为空！'
                            }
                            return true
                        }
                    },
                    {
                        name: 'category',
                        type: 'list',
                        message: '请选择组件分类',
                        choices: DOCS_CATEGORIES,
                        default: 0
                    }
                ])
                createComponent(info)
                break
        }
    } catch (ex) {}
}
