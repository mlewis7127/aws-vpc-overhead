# aws-vpc-overhead
This is a quick proof of concept to see any performance optimisations made in cold start for lambdas assigned to a VPC. It is based on updates announced in the following [blog post] (https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/)

## Setup
The demo uses the Serverless Framework and can be run using the following command:

`sls deploy`


npm install -g artillery

artillery quick --count 10 -n 20 https://artillery.io/

This command will create 10 "virtual users" each of which will send 20 HTTP GET requests to https://artillery.io/.

