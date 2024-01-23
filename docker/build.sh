#!/usr/bin/bash

# the CLI arguments

docker_file=${1:-"Dockerfile"}
docker_name=${2:-"toolbox"}
repo=${3:-"repo.nicely.gg"}

docker_context=$(dirname "$docker_file")

# get the short hash of the current git commit
git_commit=$(git rev-parse --short HEAD)

docker_full="$docker_name:$git_commit"

# build the docker image tagged with the git commit
docker build -t $docker_full -f "$docker_file" "$docker_context"

# then tag the git commit version as latest
docker tag $docker_full $docker_name:latest

# tag the git commit version on the repo (as latest and the git commit)
docker tag $docker_full $repo/$docker_full
docker tag $docker_full $repo/$docker_name:latest

# push the git commit and latest version to the repo
docker push $repo/$docker_full
docker push $repo/$docker_name:latest
