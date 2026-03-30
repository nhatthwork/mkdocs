# -------- BUILD STAGE --------
FROM python:3.10-slim AS build

WORKDIR /docs

RUN apt-get update && apt-get install -y git webp && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir zensical

COPY . .

# build static site
RUN zensical build

# Convert ảnh sang WebP và cập nhật đường dẫn trong HTML
RUN find /docs/site -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) \
    -exec sh -c 'cwebp -q 80 "$1" -o "${1%.*}.webp" 2>/dev/null && rm "$1"' _ {} \;

RUN find /docs/site -name "*.html" \
    -exec sed -i 's/\.png"/\.webp"/g; s/\.jpg"/\.webp"/g; s/\.jpeg"/\.webp"/g' {} \;


# -------- RUNTIME STAGE --------
FROM nginx:alpine

# copy HTML đã build
COPY --from=build /docs/site /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]