import { expect as cdkExpect, haveResource, MatchStyle, matchTemplate } from '@aws-cdk/assert'
import { SynthUtils } from '@aws-cdk/assert'

import * as cdk from '@aws-cdk/core'
import {{cookiecutter.stack_name}} from '../src/{{cookiecutter.stack_name}}'

describe('Build pipeline stack', () => {
  let stack: {{cookiecutter.stack_name}}

  beforeAll(() => {
    const app = new cdk.App()

    stack = new {{cookiecutter.stack_name}}(app, 'test-stack')
  })
  xtest('Matches snapshot', () => {
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
  })
  xtest('Has resources', () => {
    cdkExpect(stack).to(
      haveResource('AWS::CodePipeline::Pipeline', {
        Name: '',
      })
    )
  })
  test('Match resources', () => {
    cdkExpect(stack).to(
      matchTemplate(
        {
          Resources: {},
        },
        MatchStyle.EXACT
      )
    )
  })
})
