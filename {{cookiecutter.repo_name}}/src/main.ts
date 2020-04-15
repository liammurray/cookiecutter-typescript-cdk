#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import {{cookiecutter.stack_name}} from './{{cookiecutter.stack_name}}'

const app = new cdk.App()

try {
  new {{cookiecutter.stack_name}}(app, '{{cookiecutter.repo_name}}', {})
} catch (e) {
  console.log(e)
}
