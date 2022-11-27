.PHONY: default
default:
	deno run --allow-read src/cat.ts Readme.md

check:
	deno lint src
	find src/ -type f -exec deno check {} \;
