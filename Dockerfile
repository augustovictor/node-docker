FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
	npm install --global npm@3.7.5

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/books/

RUN chown -R app:app $HOME/*

USER app

# Exec commands always in this folder
WORKDIR $HOME/books

# Remove tar.gz
RUN npm cache clean && npm install --silent --progress=false

USER root
COPY . $HOME/books

# Permission to user 'app' in group 'app'
RUN chown -R app:app $HOME/*

USER app

# Binary followed by command
CMD ["npm", "start"]
