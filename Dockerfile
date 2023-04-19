FROM openjdk:8
WORKDIR /dir
COPY  . /dir
RUN javac Ma.java
CMD ["java", "Ma"]