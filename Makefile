# Detect if we're running Windows
ifdef SystemRoot
    # If so, set the file & folder deletion commands:
    FixPath = $(subst /,\,$1)
else
    # Otherwise, assume we're running *N*X:
    FixPath = $1
endif


test:
	$(call FixPath,@./node_modules/.bin/)mocha \
		--require should \
		--reporter spec

.PHONY: test