FROM python:3.9-slim

WORKDIR /ttdserver

COPY . /ttdserver

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Create a virtual environment and install dependencies
RUN python -m venv server-env
RUN /ttdserver/server-env/bin/pip install --upgrade pip
RUN /ttdserver/server-env/bin/pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

# Use the virtual environment to run the server
CMD ["/ttdserver/server-env/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]

