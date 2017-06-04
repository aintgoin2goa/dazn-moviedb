# Setup environment variables
sinclude .env
export $(shell [ -f .env ] && sed 's/=.*//' .env)

# ./node_modules/.bin on the PATH
SHELL := /bin/bash
export PATH := ./node_modules/.bin:$(PATH)


.PHONY: test

install:
	npm install

lint:
	eslint server/
	eslint client/

build:
	webpack

test: lint build test-server test-client

test-server:
	mocha test/server/ --recursive

int-test:
	mocha test/**/*.int-test.js

test-client:
	karma start

run:
	node server/app.js
