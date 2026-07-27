# Enterprise Docker Container for telehealth-ehr-portal-nextjs-ts-v2026-11
FROM alpine:3.19
RUN apk add --no-cache bash curl ca-certificates
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["echo", "Container active for telehealth-ehr-portal-nextjs-ts-v2026-11 (TypeScript / Next.js React App)"]
