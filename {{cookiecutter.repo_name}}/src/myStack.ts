import * as cdk from '@aws-cdk/core'

export default class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    //   new logs.LogGroup(this, 'logroup', {
    //     logGroupName: '/nod15c/services',
    //   })

    //   const repos = ['demoservice']

    //   for (const repo of repos) {
    //     this.addRepo(repo)
    //   }
    // }

    // addRepo(repositoryName: string) {
    //   const repository = new ecr.Repository(this, repositoryName, {
    //     repositoryName,
    //   })

    //   const expireRule: ecr.LifecycleRule = {
    //     description: 'Expire untagged images after 10 days',
    //     tagStatus: ecr.TagStatus.UNTAGGED,
    //     maxImageAge: Duration.days(10),
    //   }
    //   const maxCountRule: ecr.LifecycleRule = {
    //     description: 'Max 10 tagged images',
    //     tagStatus: ecr.TagStatus.ANY,
    //     maxImageCount: 10,
    //   }
    //   repository.addLifecycleRule(expireRule)
    //   repository.addLifecycleRule(maxCountRule)
    // }
  }
}
