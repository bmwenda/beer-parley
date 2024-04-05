# syntax=docker/dockerfile:1
FROM ruby:3.0.5-alpine3.16
ENV BUNDLER_VERSION=2.4.4
RUN apk update \
    && apk add --no-cache build-base postgresql12-client libc-dev libpq-dev nodejs npm \
    && npm install -g yarn

WORKDIR /app
RUN gem install bundler -v 2.4.4
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle check || bundle install

# Add a script to be executed every time the container starts.
COPY docker/.docker-entrypoint.sh /usr/bin/.docker-entrypoint.sh
RUN chmod +x /usr/bin/.docker-entrypoint.sh
ENTRYPOINT [".docker-entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
