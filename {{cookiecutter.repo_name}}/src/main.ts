#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import MyStack from './myStack'

const app = new cdk.App()

new MyStack(app, 'my-stack', {
  env: {
    region: 'us-west-2',
    account: '<ACCOUNT>',
  },
})
