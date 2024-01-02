.PHONY: help
help: makefile
	@tail -n +4 makefile | grep ".PHONY"


node_modules: package.json package-lock.json
	npm install --force
	touch node_modules


docs/images: source/images
	mkdir -p docs
	rm -rf $@
	cp -r $< $@


docs/CNAME: source/CNAME
	cp $< $@


docs/styles/screen.css: source/styles/screen.css | node_modules
	npx cleancss -o $@ $<


docs/index.html: source/index.html | node_modules
	npx html-minifier \
		--collapse-whitespace \
		--remove-attribute-quotes \
		--minify-js \
		--output $@ \
		$<


.PHONY: build
build: docs/images docs/styles/screen.css docs/index.html docs/CNAME
	npx rollup -c


.PHONY: clean
clean:
	rm -rf docs
	rm -rf node_modules
