import { upperFirst } from './utils'

/** 创建组件单元测试模板 */
export function generateTestTemplate(name: string) {
    return `\
import { render } from '@testing-library/vue'
import { describe, test, expect } from 'vitest'
import ${upperFirst(name)} from '../src/${name}'

describe('${name} test', () => {
    test('${name} init render', async () => {
        const { getByRole } = render(${upperFirst(name)})
        getByRole('${name}')
    })
})
`
}
