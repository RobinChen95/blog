
#!/bin/bash

echo "git add ."
git add .

echo "acquiring time now"
time = date --date='0 days ago' +%Y-%m-%d
echo "now is $time"

echo "git commit $time updated"
git commit -m "$time updated"

echo "git push origin master"
git push origin master
