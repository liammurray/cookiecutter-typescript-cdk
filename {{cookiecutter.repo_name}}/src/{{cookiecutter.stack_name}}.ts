import * as cdk from '@aws-cdk/core'

// export interface {{cookiecutter.stack_name}}Props extends cdk.StackProps {
// }

export default class {{cookiecutter.stack_name}} extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
  }
}
