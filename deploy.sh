#/bin/bash#upload files
aws s3 cp ./dist  s3://legendarystudycompanion  --recursive --acl public-read
