#! /bin/sh
#Script to build and deploy a NextJS to AWS
npm run build
git add .
git commit
git push
aws s3 sync ./out s3://thesis-bucket-react/jsnext