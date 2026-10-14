# Deployment

Docker deployment and monitoring commands are kept in [README_DOCKER.md](README_DOCKER.md).

## Production

```bash
docker compose up --build -d
```

Open: http://localhost:0001

The container exposes `/health` and restarts automatically unless stopped.

## Development

```bash
docker compose -f compose.dev.yaml up --build
```

Open: http://localhost:5173

## Homepage videos

Set `VITE_HERO_VIDEO_ONE_FILE_ID` and `VITE_HERO_VIDEO_TWO_FILE_ID` to the file IDs of two MP4 videos in Google Drive. Both files must be shared as **Anyone with the link** and allow downloads. Set these variables in the local `.env`, the Vercel project environment, or the Docker build environment before building. Docker Compose forwards them as build arguments.

The site requests each public Drive file through its download endpoint. The hero keeps its local image visible if a file cannot load or play; for large files subject to Drive download limits, use a video host that provides direct streaming URLs.

## Helper script

```bash
sh ./scripts/deploy.sh
```

This command builds the app, starts the container, and waits for a healthy response.
