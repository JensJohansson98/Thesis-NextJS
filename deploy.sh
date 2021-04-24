#! /bin/sh
#Script to build and deploy a NextJS to AWS
git add .
git commit
git push
npm run build
npm run export
aws s3 sync out/ s3://thesis-bucket-react/NextJS
