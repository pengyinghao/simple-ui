import { upperFirst } from './utils'

/** 创建组件模板 */
export function generateCoreTemplate(name: string) {
    const compName = `H${upperFirst(name)}`
    const propsName = `${name}Props`
    const propsTypeName = `${upperFirst(name)}Props`
    const propsFileName = `./${name}-type`

    return `import { defineComponent } from 'vue'
import { ${propsTypeName}, ${propsName} } from '${propsFileName}'
export default defineComponent({
    name: '${compName}',
    props: ${propsName},
    setup(props: ${propsTypeName}) {
        return () => {
            return <div></div>
        }
    }
})
`
}
