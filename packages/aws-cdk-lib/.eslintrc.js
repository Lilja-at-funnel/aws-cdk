const baseConfig = require('@aws-cdk/cdk-build-tools/config/eslintrc');
baseConfig.parserOptions.project = __dirname + '/tsconfig.dev.json';
baseConfig.rules['import/no-extraneous-dependencies'] = [
  'error',
  {
    devDependencies: [
      '**/build-tools/**',
      '**/scripts/**',
      '**/test/**',
    ],
    optionalDependencies: false,
    peerDependencies: true,
  }
];


// no-throw-default-error
const enableNoThrowDefaultErrorIn = [
  'assertions',
  'assets',
  'aws-amplify',
  'aws-amplifyuibuilder',
  'aws-apigateway',
  'aws-apigatewayv2',
  'aws-apigatewayv2-authorizers',
  'aws-apigatewayv2-integrations',
  'aws-appconfig',
  'aws-applicationautoscaling',
  'aws-appsync',
  'aws-appmesh',
  'aws-apprunner',
  'aws-autoscaling',
  'aws-autoscaling-common',
  'aws-backup',
  'aws-batch',
  'aws-chatbot',
  'aws-certificatemanager',
  'aws-cloudfront',
  'aws-cloudfront-origins',
  'aws-cloudtrail',
  'aws-cloudwatch',
  'aws-cloudwatch-actions',
  'aws-codeartifact',
  'aws-codebuild',
  'aws-codecommit',
  'aws-codedeploy',
  'aws-codepipeline',
  'aws-codepipeline-actions',
  'aws-cognito',
  'aws-config',
  'aws-docdb',
  'aws-dynamodb',
  'aws-ecr',
  'aws-ecr-assets',
  'aws-efs',
  'aws-elasticloadbalancing',
  'aws-elasticloadbalancingv2',
  'aws-elasticloadbalancingv2-actions',
  'aws-elasticloadbalancingv2-targets',
  'aws-lambda',
  'aws-logs',
  'aws-rds',
  'aws-s3',
  'aws-sns',
  'aws-sqs',
  'aws-ssm',
  'aws-ssmcontacts',
  'aws-ssmincidents',
  'aws-ssmquicksetup',
  'aws-synthetics',
  'aws-route53',
  'aws-route53-patterns',
  'aws-route53-targets',
  'aws-route53profiles',
  'aws-route53recoverycontrol',
  'aws-route53recoveryreadiness',
  'aws-route53resolver',
  'aws-sns',
  'aws-sqs',
  'aws-ssm',
  'aws-ssmcontacts',
  'aws-ssmincidents',
  'aws-ssmquicksetup',
  'aws-synthetics',
  'aws-s3',
  'aws-s3-assets',
  'aws-s3-deployment',
  'aws-s3-notifications',
  'aws-s3express',
  'aws-s3objectlambda',
  'aws-s3outposts',
  'aws-s3tables',
  'cloudformation-include',
  'cx-api',
  'pipelines',
];
baseConfig.overrides.push({
  files: enableNoThrowDefaultErrorIn.map(m => `./${m}/lib/**`),
  rules: { "@cdklabs/no-throw-default-error": ['error'] },
});


module.exports = baseConfig;
