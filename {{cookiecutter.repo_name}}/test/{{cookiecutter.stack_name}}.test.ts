import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import {{cookiecutter.stack_name}} from '../src/{{cookiecutter.stack_name}}'

test('Empty Stack', () => {
  const app = new cdk.App()
  const stack = new {{cookiecutter.stack_name}}(app, 'test-stack', {})
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  )
})
