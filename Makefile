# Setup environment variables
sinclude .env
export $(shell [ -f .env ] && sed 's/=.*//' .env)

# ./node_modules/.bin on the PATH
SHELL := /bin/bash
export PATH := ./node_modules/.bin:$(PATH)


.PHONY: test

install:
	npm install

build:
	webpack

test:
	mocha

run:
	node app.js
