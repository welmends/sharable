.PHONY: run
run:
	docker-compose up -d --build

docker-prune:
	-@docker stop $(shell docker ps -aq)
	-@docker rm $(shell docker ps -aq)
	-@docker rmi $(shell docker images -q)
	-@docker volume rm $(shell docker volume ls -q)
	-@docker network prune -f
	-@docker system prune -a --volumes -f

build:
	docker-compose build --no-cache

up:
	docker-compose up

bash-ui:
	docker exec -it $(shell docker ps -aq --filter ancestor=share-note-ui) bash

bash-api:
	docker exec -it $(shell docker ps -aq --filter ancestor=share-note-ui) bash