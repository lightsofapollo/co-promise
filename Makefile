build/build.js:
	component build

build/build.dev.js:
	component build -d -n build.dev

.PHONY: test
test: build/build.dev.js
	./node_modules/.bin/mocha --ui tdd --harmony index_test.js
	./node_modules/.bin/browser-test index_test.js
