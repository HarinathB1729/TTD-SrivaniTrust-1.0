# 
FROM python:3.9

# 
WORKDIR /TTDSVTServer

# 
COPY ./requirements.txt /TTDSVTServer/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /TTDSVTServer/requirements.txt

# 
COPY . .

#
EXPOSE 8000

# 
CMD ["python", "manage.py","runserver"]
