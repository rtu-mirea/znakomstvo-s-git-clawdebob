build:
	docker build -t react/app .
run:
	docker run --rm -it -p 8080:8080 react/app
