# aws-vpc-overhead
This is a quick proof of concept to see any performance optimisations made in cold start for lambdas assigned to a VPC. It is based on updates announced in the following [blog post](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/)

## Setup
The demo uses the Serverless Framework and can be run using the following command:

`sls deploy`

## Testing
The simplest way to test is by using [Artillery](https://artillery.io/)

This can be installed using the following command:

`npm install -g artillery`

Once installed and the demo deployed, you can test using the following command:

`artillery quick --count 1 -n 20 {URL}`

The `count` creates the specified number of "virtual users", each of which send the `-n` number of HTTP GET requests to the URL.
