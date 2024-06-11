# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory in the container
WORKDIR /ttdsvt

# Copy the current directory contents into the container at /ttdsvt
COPY . /ttdsvt

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Create a virtual environment
RUN python -m venv server-env

# Ensure pip is up-to-date
RUN /ttdsvt/server-env/bin/pip install --upgrade pip

# Copy requirements.txt separately to leverage Docker cache
COPY requirements.txt /ttdsvt/requirements.txt

# Install Python dependencies with verbose output
RUN /ttdsvt/server-env/bin/pip install --no-cache-dir -r /ttdsvt/requirements.txt --verbose

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Use the virtual environment to run the server
CMD ["/ttdsvt/server-env/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]
