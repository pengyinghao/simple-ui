import { ensureDirSync, writeFileSync } from 'fs-extra'
import { WriteFileOptions } from 'fs'
import { resolve } from 'path'
import { lightGreen, lightBlue } from 'kolorist'
import { generateCoreTemplate } from '../template/core'
import { generateCoreTypes } from '../template/types'
import { generateStyleTemplate } from '../template/style'
import { generateTestTemplate } from '../template/test'
import { generateIndexTemplate } from '../template'

const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }
interface ComponentMeta {
    name: string
    title: string
    category: string
}

export function createComponent(meta: ComponentMeta) {
    const { name } = meta

    const baseDir = resolve('../packages/components', name)

    const compDir = resolve(baseDir, 'src')
    const styleDir = resolve(baseDir, 'style')
    const testDir = resolve(baseDir, 'test')

    ensureDirSync(compDir)
    ensureDirSync(styleDir)
    ensureDirSync(testDir)

    // 创建组件模板
    const cmpPath = resolve(compDir, name) + '.tsx'
    writeFileSync(cmpPath, generateCoreTemplate(name), WRITE_FILE_OPTIONS)

    // 创建组件类型模板
    const cmpTypePath = resolve(compDir, name) + '-type.ts'
    writeFileSync(cmpTypePath, generateCoreTypes(name), WRITE_FILE_OPTIONS)

    // 创建组件样式模板
    const stylePath = resolve(styleDir, name) + '.scss'
    writeFileSync(stylePath, generateStyleTemplate(name), WRITE_FILE_OPTIONS)

    // 创建单元测试模板
    const testPath = resolve(testDir, name) + '.test.ts'
    writeFileSync(testPath, generateTestTemplate(name), WRITE_FILE_OPTIONS)

    // 创建入口文件
    const indexPath = resolve(baseDir, 'index') + '.ts'
    writeFileSync(indexPath, generateIndexTemplate(name), WRITE_FILE_OPTIONS)

    console.log(lightGreen(` ✔️ 组件${name}目录创建成功`))
    console.log(lightBlue(`✔️组件目录${baseDir}创建成功`))
}
