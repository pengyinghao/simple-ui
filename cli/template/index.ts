import { upperFirst } from './utils'

/** 创建组件入口模板 */
export function generateIndexTemplate(name: string) {
    const cmpName = upperFirst(name)
    return `import type { App } from 'vue'
import ${cmpName} from './src/${name}'
export { ${cmpName} }
export default {
    install: function (app: App) {
      app.component(${cmpName}.name, ${cmpName})
    }
}
`
}
