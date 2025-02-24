#HCCcsCzWAXeoxy5B6mJFDL3AMAeHacKR

start:
	docker-compose up -d

stop:
	docker-compose stop

build:
	rm -f script.jar
	jar --create --file script.jar --no-manifest -C script .