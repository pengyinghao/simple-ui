import { upperFirst } from './utils'

/** 创建组件类型模板 */
export function generateCoreTypes(name: string) {
    const propName = name + 'Props'
    const propTypeName = upperFirst(name) + 'Props'
    return `import { ExtractPropTypes, PropType } from 'vue'
export const ${propName} = {} as const
export type ${propTypeName} = ExtractPropTypes<typeof ${propName}>
`
}
