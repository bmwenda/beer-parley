#!/usr/bin/env
aws cloudformation create-stack --profile admin \
  --stack-name beer-parley-stack \
  --template-body file://./.deployment/ecs-deploy.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameters file://./.deployment/parameters.json
