#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE socialize;
    CREATE USER socialize;
    GRANT ALL PRIVILEGES ON DATABASE socialize TO socialize;
    GRANT ALL PRIVILEGES ON DATABASE socialize TO postgres;
EOSQL