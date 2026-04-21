# -------- BUILD STAGE --------
FROM python:3.10-slim AS build

WORKDIR /docs

# Layer 1: apt — cache lâu dài, ít thay đổi
RUN apt-get update && apt-get install -y git webp && rm -rf /var/lib/apt/lists/*

# Layer 2: pip — cache, chỉ chạy lại khi đổi deps
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install zensical

# Layer 3: source code — thay đổi thường xuyên nhưng không ảnh hưởng layer trên
COPY . .

# Layer 4: build
RUN zensical build

# Layer 5: convert ảnh song song
RUN find /docs/site -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) \
    | xargs -P4 -I{} sh -c \
      'cwebp -q 80 "$1" -o "${1%.*}.webp" 2>/dev/null && rm "$1"' _ {}

RUN find /docs/site -name "*.html" \
    -exec sed -i 's/\.png"/\.webp"/g; s/\.jpg"/\.webp"/g; s/\.jpeg"/\.webp"/g' {} \;

# -------- RUNTIME STAGE --------
FROM nginx:alpine
COPY --from=build /docs/site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]