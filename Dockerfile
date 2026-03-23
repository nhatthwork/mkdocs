FROM python:3.11-slim

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /docs

# Cài Zensical — lệnh khác MkDocs ở đây
RUN pip install --no-cache-dir zensical

COPY . .

EXPOSE 8000

# Entrypoint khác MkDocs: dùng "zensical" thay vì "mkdocs"
ENTRYPOINT ["zensical"]
CMD ["serve", "-a", "0.0.0.0:8000"]