# syntax=docker/dockerfile:1
FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g pnpm@10
COPY package.json pnpm-lock.yaml .npmrc ./
# @arianeguay/design-system lives on GitHub Packages, which wants a token even to read.
# pnpm no longer expands env vars in a project .npmrc's credentials, so the token goes
# in the user one, removed in the same layer.
RUN --mount=type=secret,id=github_token,env=GITHUB_TOKEN \
    echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > ~/.npmrc \
    && pnpm install --frozen-lockfile \
    && rm ~/.npmrc
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
USER node
EXPOSE 3000
CMD ["node", "server.js"]
